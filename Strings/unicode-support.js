function is32Bit(c) {
    return c.codePointAt(0) > 0xFFFF;
}

let char32Bit = String.fromCodePoint(134000);   //32bit unicode character
let char16Bit = String.fromCodePoint(1455);     //16bit unicode character

console.log(is32Bit(char32Bit));         // true
console.log(is32Bit(char16Bit));         // false