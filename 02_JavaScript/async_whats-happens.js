// 1. Что выведет консоль?
// setTimeout(() => console.log(a, b, c),0); // 3
//
// const promise = new Promise((resolve) => {
//     a++;
//     resolve();
// });
//
// const a = 1;
//
// promise
//     .then(() =>console.log(a))
//     .catch(()=>console.log(b--)) // 2
//     .catch(()=>console.log(0));
//
// let b = 2
//
// console.log(c); // 1
//
// var c = 3

// 2. Что выведет консоль?
console.log('start'); //1

const promise1 = Promise.resolve().then(() => {
    console.log('promise1'); //3
    const timer2 = setTimeout(() => {
        console.log('timer2') //6
    }, 0)
});

const timer1 = setTimeout(() => {
    console.log('timer1')  //4
    const promise2 = Promise.resolve().then(() => {
        console.log('promise2') //5
    })
}, 0)

console.log('end'); //2
