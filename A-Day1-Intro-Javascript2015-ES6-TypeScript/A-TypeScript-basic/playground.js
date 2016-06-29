var name;
function hello(name) {
    var a = name;
}
function helloNumber(name) {
    return name;
}
hello("string");
var result = helloNumber(10);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
