// Implementa una función llamada sumToBinary que sume dos números y regrese la 
// suma en binario, la conversion a binario puede suceder antes o después de la 
// suma. El tipo del return debe ser un string.


// Tests
console.log('TESTS', new Date().toISOString())
console.log('---'.repeat(20));
console.log(
    typeof sumToBinary !== 'undefined',
    'La función sumToBynary existe.')

console.log(
    typeof sumToBinary(1, 2) === 'string',
    'El return de sumToBinary es string.')

console.log(
    sumToBinary(254, 1) === '11111111',
    'La suma de 254 y 1 uno en binario es 11111111.')