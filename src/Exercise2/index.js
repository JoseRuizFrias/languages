const array1 = [ 'test1', 'test2', 'test3', 'test4', 'test5'];
const array2 = [ 'test6', 'test7', 'test8', 'test9', 'test10'];

// Array para ejercicio opcional
const array = [ [ 'test1', 'test2', 'test3', 'test4', 'test5'], 
[ 'test6', 'test7', 'test8', 'test9', 'test10'], 
[ 'test11', 'test12', 'test13', 'test14', 'test15'], 
[ 'test16', 'test17', 'test18', 'test19', 'test20'] ]

// CONCAT

const concat = (a, b) => { return [...a, ...b] };

console.log(concat(array1, array2));

// OPTIONAL

const concatMany = (array) => { return array.reduce((a,b) => [...a, ...b]) };

console.log(concatMany(array));