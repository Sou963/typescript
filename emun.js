//emun 
//there are three types of enums in typescript.
//1. numeric enums
var numericEnum;
(function (numericEnum) {
    numericEnum[numericEnum["red"] = 1] = "red";
    numericEnum[numericEnum["green"] = 2] = "green";
    numericEnum[numericEnum["blue"] = 5] = "blue";
})(numericEnum || (numericEnum = {}));
console.log(numericEnum);
//2.string enums
var stringEnum;
(function (stringEnum) {
    stringEnum["red"] = "red";
    stringEnum["green"] = "green";
    stringEnum["blue"] = "blue";
})(stringEnum || (stringEnum = {}));
console.log(stringEnum);
//3.heterogeneous enums
var heterogeneousEnum;
(function (heterogeneousEnum) {
    heterogeneousEnum[heterogeneousEnum["red"] = 1] = "red";
    heterogeneousEnum["green"] = "green";
    heterogeneousEnum[heterogeneousEnum["blue"] = 3] = "blue";
})(heterogeneousEnum || (heterogeneousEnum = {}));
console.log(heterogeneousEnum);
