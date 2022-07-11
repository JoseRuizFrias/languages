const array = [ 'test1', 'test2', 'test3', 'test4', 'test5'];

// HEAD

const head = ([a,b,c]) => { return a };

console.log(head(array));

//TAIL

const tail = ([a, ...rest]) => { return rest };

console.log(tail(array));

// INIT

const init = () => { return array.slice(0, array.length - 1) };

console.log(init(array));

// LAST

const last = () => { return array.findLast(element => element) };
const last2 = () => { return array[array.length-1] };

console.log(last(array));
console.log(last2(array));