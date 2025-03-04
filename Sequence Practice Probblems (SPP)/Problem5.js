// Use Script & Debug – Unit Conversion

// a. 1ft = 12 in then 42 in = ? ft
// b. Rectangular Plot of 60 feet x 40 feet in meters
// c. Calculate area of 25 such plots in acres

//a. Convert Inches to feet
let inches = 42;
let feet = inches / 12;
console.log("42 inches = " + feet + " feet");

//b. Convert feet to meters
let lengthInFeet = 60, breadthInFeet = 40;
let lengthInMeters = lengthInFeet * 0.3048;
let breadthInMeters = breadthInFeet * 0.3048;
let areaInMeters = lengthInMeters * breadthInMeters;
console.log("Area of rectangular plot in meters: " + areaInMeters.toFixed(2) + " sq meters");

//c. Calculate area of 25 such plots in acres
// 1 acre = 4046.86 sq meters and 1 meter = 0.000247105 acres
let areaInAcres = areaInMeters * 25 / 4046.86;
console.log("Area of 25 plots in acres: " + areaInAcres.toFixed(2) + " acres");
