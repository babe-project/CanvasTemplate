var createCanvas = function(canvasElem) {
    var canvas = {};
    var context = canvasElem.getContext("2d");

    canvas.draw = function(shape, size, x, y, color) {
        context.beginPath();
        context.fillStyle = color;
        if (shape === 'circle') {
            context.arc(x, y, size / 2, 0, 2*Math.PI);
        } else if (shape === 'square') {
            context.rect(x, y, size, size);
        } else if (shape === 'triangle') {
            context.moveTo(x, y + 15);
            context.lineTo(x + (size / 2), y + 15); 
            context.lineTo(x + size, y - 15);
        }
        context.closePath();
        context.fill();
    };

    canvas.getCoords = function(number, size) {
        var coords = [];
        var margin = size / 2;

        var generateCoords = function() {
            var maxWidth = canvasElem.width - margin;
            var maxHeight = canvasElem.height - margin;
            var xPos = Math.floor(Math.random() * (maxWidth - margin)) + margin;
            var yPos = Math.floor(Math.random() * (maxHeight - margin)) + margin;
            
            return {x: xPos, y: yPos};
        };

        var checkCoords = function(xPos, yPos) {
            for (var i=0; i<coords.length; i++) {
                if (((xPos + size + margin) > coords[i]["x"])
                    && ((xPos - size - margin) < coords[i]["x"])
                    && ((yPos + size + margin) > coords[i]["y"])
                    && ((yPos - size - margin) < coords[i]["y"])) {
                    return false;
                }
            }
            return true;
        };

        var generatePositions = function() {
            var tempCoords = generateCoords();
            if (checkCoords(tempCoords.x, tempCoords.y)) {
                coords.push(tempCoords);
            } else {
                generatePositions();
            }      
        }

        for (i=0; i<number; i++) {
            generatePositions();
        }

        return coords;
    };

    return canvas;
};