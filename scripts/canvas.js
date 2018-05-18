var createCanvas = function(canvasElem) {
    var canvas = {};
    var context = canvasElem.getContext("2d");

    canvas.draw = function(shape, size, x, y, color) {
        context.beginPath();
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
        if (color === 'blue') {
            context.fillStyle = '#2c89df';
        } else if (color === 'green') {
            context.fillStyle = '#22ce59';
        } else if (color === 'red') {
            context.fillStyle = '#ff6347';
        } else if (color === 'yellow') {
            context.fillStyle = '#ecd70b';
        } else {
            context.fillStyle = color;
        }
        context.closePath();
        context.fill();
    };

    canvas.getGridCoords = function(rows, number, size) {
        var coords = [];
        var margin = size / 2;
        var columns, xStart, yStart;

        if (rows === 0 || rows === undefined) {
            rows = 1;
        } else if (rows > number) {
            rows = number;
        }
        
        columns = Math.ceil(number / rows);
        xStart = (canvasElem.width - (columns * size + (columns - 2) * margin)) / 2 + margin / 2;
        yStart = (canvasElem.height - (rows * size + (rows - 2) * margin)) / 2 + margin;

        // handles small canvases
        if (xStart < margin) {
            canvasElem.width += -2*xStart;
            xStart = margin;
        }

        if (yStart < margin) {
            console.log('true');
            canvasElem.height += -2*yStart;
            yStart = margin;
        }

        for (var i=0; i<rows; i++) {
            for (var j=0; j<number; j++) {
                if (Math.floor(j/columns) === i) {
                    coords.push({x: xStart + (j%columns)*size + (j%columns)*margin, y: yStart + i*size + i*margin})
                } else {
                    continue;
                }
            }
        }

        return coords;
    };

    canvas.getRandomCoords = function(number, size) {
        var coords = [];
        var margin = size / 2;

        var generateCoords = function() {
            var maxWidth = canvasElem.width - size;
            var maxHeight = canvasElem.height - size;
            var xPos = Math.floor(Math.random() * (maxWidth - size)) + size;
            var yPos = Math.floor(Math.random() * (maxHeight - size)) + size;
            
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