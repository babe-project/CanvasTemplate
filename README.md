# Canvas Template

## API

**``createCanvas(canvasElem)``**

takes:
- ``canvasElem``: html canvas

returns:
- canvas object with two functions - getCoords and draw


**``canvas.getCoords(numberOfElems, elemSize)``**

Generates ``numberOfElems`` random coordinates for a canvas with elements of ``elemSize``

takes:
- ``numberOfElems`` (int): the number of elemets
- ``elemSize`` (int): the size of a single element


**``canvas.draw(shape, size, x, y, color)``**

Draws a single element on the canvas of ``shape`` shape, ``color`` color and ``size`` the center of which is on coordinates ``x`` and ``y``.

takes:
- ``shape`` (string): the shape of the element ('circle', 'sqaure', 'triangle')
- ``size`` (int): the size of the element
- ``x`` (int): x coordinate
- ``y`` (int): y coordinate
- ``color`` (string): the fill color of the element
