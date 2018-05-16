var createCanvas = function(canvasElem) {
    var canvas = {};
    var context = canvasElem.getContext("2d");

    canvas.draw = function(shape, size, x, y, color) {
        context.beginPath();
        context.fillStyle = color;
        if (shape === 'circle') {
            context.arc(x, y, size / 2, 0, 2*Math.PI);
        } else if (shape === 'square') {
            context.rect(x - (size / 2), y - (size / 2), size, size);
        } else if (shape === 'triangle') {
            var delta = size / (Math.sqrt(3)*2);
            context.moveTo(x - (size / 2), y + delta);
            context.lineTo(x + (size / 2), y + delta);
            context.lineTo(x, y - 2*delta);
        }
        context.closePath();
        context.fill();
    };

    canvas.getCoords = function(number, size) {
        var coords = [];
        var margin = size / 2;
        console.log(canvasElem.width);

        var generateCoords = function() {
            var maxWidth = canvasElem.width - size;
            var maxHeight = canvasElem.height - size;
            var xPos = Math.floor(Math.random() * (maxWidth - 2*size)) + margin;
            var yPos = Math.floor(Math.random() * (maxHeight - 2*size)) + margin;
            
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
        };

        for (i=0; i<number; i++) {
            generatePositions();
        }

        return coords;
    };

    return canvas;
};