console.log(Number("18"), typeof Number("18")); //явное

console.log(+"18"); //неявное
console.log(Number("30"), typeof Number("30")); //явное

console.log(Number("100"), typeof Number("100")); //явное

console.log("" + 4); //неявное
console.log(String(2), typeof String(1)); //явное

console.log(String(6), typeof String(1)); //явное

console.log(Boolean(0), typeof Boolean(0)); //явное

console.log(+"009"); //неявное
console.log(Number("009"), typeof Number("009")); //явное

console.log(6 + ""); //неявное
console.log(String(7), typeof String(7)); //явное

console.log(Boolean(3), typeof Boolean(3)); //явное

console.log(String(002), typeof String(002)); //явное

console.log(Number("Hello World"), typeof Number("Hello World")); //явное
