
// async function example() {
//     try {
//         const result = await someAsyncOperation();
//         console.log(result);
//     }
//     catch (err) {
//         console.error(err);
//     }
// }

// example();

// async function someAsyncOperation() {

//     await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             throw new Error("Error")
//         }, 5000);
//     });
//     return "Result";


// }
// async function example() {
//     const result1 = await new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Result1");
//         },2000);
//     });
//     const result2 = await new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Result2");
//         });
//     },5000);
//     console.log(result1, result2);
// }
// example()
// console.log(example().then(()=>{
//     console.log("Example function has completed")
// }))
// example()



// app.js

// const divide = async (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (b == 0) {
//                 reject(new Error('Division by zero error'));
//             } else {
//                 resolve(a / b);
//             }
//         }, 1000);
//     });
// };

// Consuming the promise using then() method
// and handling the rejected promise using
// catch() method
// divide(5, 0)
//     .then((res) => {
//         console.log(`The result of division is ${res}`);
//     })
//     .catch((err) => {
//         console.log(err.message);
//     });

// This function is immedietly invoked after
// its execution. In this case we consume the
// promise returned by divide function() using
// async/await and handle the error using
// // try/catch block
// (async () => {
//     try {
//         const res = await divide(10, 5);
//         console.log(`The result of division is ${res}`);
//     } catch (err) {
//         console.log(err);
//     }
// })();


