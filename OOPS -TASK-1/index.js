var Circle = /** @class */ (function () {
    function Circle(radiusValue, colorValue) {
        this.radius = radiusValue;
        this.color = colorValue;
    }
    //OPTIONAL PARAMETERS
    Circle.prototype.toString = function (rad, col) {
        console.log("I have a optional parameters!");
    };
    //DEFAULT PARAMETERS
    Circle.prototype.getArea = function (rar) {
        if (rar === void 0) { rar = 2; }
        ;
        var areaOfCircle = (Math.PI * (this.radius * this.radius));
        return areaOfCircle;
    };
    Circle.prototype.getCircumference = function (rad) {
        if (rad === void 0) { rad = 3; }
        var circumferenceOfCircle = (2 * Math.PI * this.radius);
        return circumferenceOfCircle;
    };
    return Circle;
}());
var mycircle = new Circle(1.0, "red");
console.log(mycircle.getArea());
console.log(mycircle.getCircumference());
mycircle.toString();
