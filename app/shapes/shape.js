"use strict";
var position_1 = require('./position');
exports.Position = position_1.Position;
var size_1 = require('./size');
exports.Size = size_1.Size;
var Shape = (function () {
    function Shape(position, size) {
        this.position = position;
        this.size = size;
    }
    Shape.prototype.draw = function () {
        throw ('not implemented method');
    };
    ;
    return Shape;
}());
exports.Shape = Shape;
;
//# sourceMappingURL=shape.js.map