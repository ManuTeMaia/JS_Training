setTimeout(() => console.log(a, b, c),0); // 3

const promise = new Promise((resolve) => {
    a++;
    resolve();
});

const a = 1;

promise
    .then(() =>console.log(a))
    .catch(()=>console.log(b--)) // 2
    .catch(()=>console.log(0));

let b = 2

console.log(c); // 1

var c = 3
