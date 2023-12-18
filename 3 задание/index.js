let myNumber = 124578;
console.log(Number(myNumber), Boolean(myNumber), String(myNumber));

let myString = "Hello";
console.log(Number(myString), Boolean(myString), String(myString));

let myBoolean = true;
console.log(Number(myBoolean), Boolean(myBoolean), String(myBoolean));

let myNull = null;
console.log(Number(myNull), Boolean(myNull), String(myNull));

let myUndefined;
console.log(Number(myUndefined), Boolean(myUndefined), String(myUndefined));

let myObject = { name: "Ирина", age: 19};
console.log(Number(myObject), Boolean(myObject), String(myObject));

let myBigInt = 26536958525631n;
console.log("Не удается преобразовать в число");
console.log(Boolean(myBigInt), String(myBigInt));

let mySymbol = Symbol("sym");
console.log("Не удалось преобразовать в символ");
console.log(Boolean(mySymbol), String(mySymbol));
