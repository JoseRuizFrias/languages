const objectToClone = {
    id: '123-aas-2Dsdf',
    name: 'test',
    value: 123456,
};

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

// CLONE

function clone (source) {
    return {...source};
}

console.log(clone(objectToClone));

// MERGE

function merge (source, target) {
    
    return {...clone(target), ...clone(source)};
}

console.log(merge(a,b));

