# Canvas Template

## API

### **`createCanvas(canvasElem)`**

takes:
- `canvasElem`: html canvas

returns:
- canvas object with the following methods:
`getRandomCoords`, `getGridCoords`, `getTwoSidedCoords` and `draw`.


### **`canvas.getRandomCoords(numberOfElems, elemSize)`**

Generates `numberOfElems` random coordinates for a canvas with elements of `elemSize`

takes:
- `numberOfElems` (int): the number of elemets
- `elemSize` (int): the size of a single element


### **`canvas.getGridCoords(numberOfRows, numberOfElems, elemSize)`**

takes:
- `numberOfRows` (int): the number of rows in the grid (might create one more if the numberOfElem / rows is not an int)
- `numberOfElems` (int): the number of elemets
- `elemSize` (int): the size of a single element


### **`canvas.getTwoSidedCoords(numberOfRows, gap, numberOfElems, elemSize, direction)`**

takes:
- `numberOfRows` (int): the number of rows in the grid (might create one more if the numberOfElem / rows is not an int)
- `gap` (int): the gap between the two sides
- `numberOfElems` (int): the number of elemets
- `elemSize` (int): the size of a single element
- `direction` (string): the direction specifies how the items are placed on the canvas (can be: 'row', 'column' or 'sideRow')

#### direction: 'row'

    ----------------
    |              |
    |   000  000   |
    |   0xx  xxx   |
    |   xxx  xxx   |
    |              |
    ----------------


#### direction: 'sideRow'

    ----------------
    |              |
    |   000  xxx   |
    |   000  xxx   |
    |   0xx  xxx   |
    |              |
    ----------------


#### direction: 'column'

    ----------------
    |              |
    |   000  xxx   |
    |   00x  xxx   |
    |   00x  xxx   |
    |              |
    ----------------



### **`canvas.draw(shape, size, x, y, color)`**

Draws a single element on the canvas of `shape` shape, `color` color and `size` the center of which is on coordinates `x` and `y`.

takes:
- `shape` (string): the shape of the element ('circle', 'sqaure', 'triangle')
- `size` (int): the size of the element
- `x` (int): x coordinate
- `y` (int): y coordinate
- `color` (string): the fill color of the element
