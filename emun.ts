//emun 
//there are three types of enums in typescript.
//1. numeric enums

enum numericEnum{
    red=1,
    green=2,
    blue=5
}

console.log(numericEnum);

//2.string enums

enum stringEnum{
    red="red",
    green="green",
    blue="blue"
}

console.log(stringEnum);

//3.heterogeneous enums

enum heterogeneousEnum{
    red=1,
    green="green",
    blue=3
}

console.log(heterogeneousEnum);