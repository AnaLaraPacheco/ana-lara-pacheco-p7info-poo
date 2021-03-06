function printDecimal(value:number) {
    return value.toString(10)
}

function printOctal(value:number) {
    return value.toString(8)
}

function printHexadecimal(value:number) {
    return value.toString(16)
}

function printBinario(value:number) {
    return value.toString(2)
}

console.log('Decimal Octal Hexadecimal Binario')
console.log('------- ----- ----------- -------')

for (let index = 0; index < 255; index++) {
    console.log(`${printDecimal(index)}\t\t${printOctal(index)}\t\t${printHexadecimal(index)}\t\t\t${printBinario(index)}`);
}
