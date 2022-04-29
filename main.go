package main
import (
 "log"
 "net/http"
 "os"
 "io"
 "fmt"
 "encoding/json"
 "github.com/gorilla/websocket"
 "github.com/joho/godotenv"
 "github.com/go-redis/redis"
)

var (
 rdb *redis.Client
)

var clients = make(map[*websocket.Conn]bool)
var incast = make(chan Car)
var outcast = make(chan ParkingSpace)
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

type Car struct {
 carid int `json:"carid"`
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
   }
  }
 }
}

func handleMessages() {
  //grab any next message from channel
  for client := range clients {
  var msg Car
  err := ws.ReadJSON(&msg)
		if err != nil {
			delete(clients, ws)
			break
		}
  
  if msg.carid == 1 {
	
   err := client.WriteJSON(ParkingSpace{x: 1000, y:1000, size:3})
   if err != nil && unsafeError(err) {
    log.Printf("error: %v", err)
    client.Close()
    delete(clients, client)
  }
  }
  //store message in redis
  
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
