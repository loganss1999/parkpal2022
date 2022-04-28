#%matplotlib inline
from nuscenes.nuscenes import NuScenes
from numpy import ones,vstack,arctan
from numpy.linalg import lstsq
from math import sqrt,dist

def defineSpace(x1, y1, x2, y2, size1, size2):
    size = dist([x1,y1],[x2,y2]) - (size1+size2)/2
    x = (x1+x2)/2
    y = (y1+y2)/2
    return [round(size,3),round(x,3),round(y,3)]

def findSpace(sample, xL, yL, xR, yR, orientation):
    points = [(xL,yL),(xR,yR)]
    x_coords, y_coords = zip(*points)
    A = vstack([x_coords,ones(len(x_coords))]).T
    m, c = lstsq(A, y_coords, rcond=None)[0]
    print("Line Solution is y = {m}x + {c}".format(m=m,c=c))
    theta = arctan(m)
    

    
    cars = []
    for ann in sample['anns']:
        meta = nusc.get('sample_annotation', ann)
        if abs(meta['translation'][1] - m*meta['translation'][0] - c) < 5 and meta['translation'][0] > xL and meta['translation'][0] < xR:
                cars.append([meta['translation'][0], meta['translation'][1], meta['size'][orientation]])
                
    # print(cars)
    cars.sort()
    spaces = []
    spaces.append(defineSpace(xL,yL,cars[0][0],cars[0][1],0,cars[0][2]))
    i = 0
    l = len(cars)
    while i < l-1:
        spaces.append(defineSpace(cars[i][0],cars[i][1],cars[i+1][0],cars[i+1][1],cars[i][2],cars[i+1][2]))
        i = i + 1
    spaces.append(defineSpace(cars[i][0],cars[i][1],xR,yR,cars[0][2],0))
    
    return spaces