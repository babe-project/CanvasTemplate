// insert any functions that are useful throughout the experiment here
var shuffleComb = function(comb) {
    // while this one is trivial, this just to show that we CAN define a function here
    return _.shuffle(comb);
};

// draws the shapes on the canvas
// gets the canvas element and the trial info as arguments
//
// canvas.draw expects the following arguments:
// shape (circle, sqaure or triangle)
// size of the shape
// x and y coords
// color
//
// canvas.getCoords expects the following arguments:
// the number of the elements to be drawn (int)
// the size of a sinlgle elemen (int)
// returns: a list of objects with x and y properties
var drawOnCanvas = function(canvasElem, trialInfo) {
    var canvas = createCanvas(document.getElementById('canvas'));
    var coords = canvas.getCoords(trialInfo.total, trialInfo.size);

    for (var i=0; i<trialInfo.total; i++) {
        if (i < trialInfo.focalNumber) {
            canvas.draw(trialInfo.focalShape, trialInfo.size, coords[i].x, coords[i].y, trialInfo.focalColor);
        } else {
            canvas.draw(trialInfo.otherShape, trialInfo.size, coords[i].x, coords[i].y, trialInfo.otherColor);
        }
    }
};