package main
import (
 "log"
 "net/http"
 "os"
 "io"
 "encoding/json"
 "github.com/gorilla/websocket"
 "github.com/joho/godotenv"
 "github.com/go-redis/redis"
)

var (
 rdb *redis.Client
)
var clients = make(map[*websocket.Conn]bool)
var broadcaster = make(chan ParkingSpace)
var upgrader = websocket.Upgrader {
 CheckOrigin: func(r *http.Request) bool {
  return true
 },
}

type ParkingSpace struct {
 size float32 `json:"size"`
 x float32 `json:"x"`
 y float32 `json:"y"`
}

func unsafeError(err error) bool {
 return !websocket.IsCloseError(err, websocket.CloseGoingAway) && err != io.EOF
}

func handleConnections(w http.ResponseWriter, r *http.Request) {
 ws, err := upgrader.Upgrade(w, r, nil)
 if err != nil { log.Fatal(err) }
 // close connection when function returns
 defer ws.Close()
 clients[ws] = true

 //send previous messages if there are any
 if rdb.Exists("parking_spaces").Val() != 0 {
  parkingSpaces, err := rdb.LRange("parking_spaces", 0, -1).Result()
  if err != nil { panic(err) }
  for _, parkingSpace := range parkingSpaces {
   var msg ParkingSpace
   json.Unmarshal([]byte(parkingSpace), &msg)
   err := ws.WriteJSON(msg)
   if err != nil && unsafeError(err) {
    log.Printf("error: %v", err)
    ws.Close()
    delete(clients, ws)
   }
  }
 }

 for {
  var msg ParkingSpace
  err := ws.ReadJSON(&msg)
  //read new message as JSON and map to msg object
  if err != nil {
   delete(clients,ws)
   break
  }
  //send new message to the channel
  broadcaster <- msg
 }
}

func handleMessages() {
 for {
  //grab any next message from channel
  msg := <-broadcaster

  json, err := json.Marshal(msg)
  if err != nil { panic(err) }
  if msg == "1" {
	for client := range clients {
   err := client.WriteJSON(ParkingSpace{x:})
   if err != nil && unsafeError(err) {
    log.Printf("error: %v", err)
    client.Close()
    delete(clients, client)
  }
  //store message in redis
  if err := rdb.RPush("parking_spaces", json).Err(); err != nil { panic(err) }
  //send message to every client currently connected
  for client := range clients {x: 1000.0, y:1000.0, size:3.0}
   err := client.WriteJSON(msg)
   if err != nil && unsafeError(err) {
    log.Printf("error: %v", err)
    client.Close()
    delete(clients, client)
   }
  }
 }
}

func main() {
 err := godotenv.Load()
 if err != nil { log.Fatal("Error loading .env file") }

 port := os.Getenv("PORT")

 redisURL := os.Getenv("REDIS_URL")
 opt, err := redis.ParseURL(redisURL)
 if err != nil { panic(err) }
 rdb = redis.NewClient(opt)

 http.Handle("/", http.FileServer(http.Dir("./public")))
 log.Print("Server starting at localhost:"+port)
 http.HandleFunc("/websocket", handleConnections)
 go handleMessages()

 if err := http.ListenAndServe(":"+port, nil); err != nil {log.Fatal(err)}
}
