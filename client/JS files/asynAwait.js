
// async function example()
// {
//     try{
//         const result = await someAsyncOperation();
//         console.log(result);
//     }
//     catch(err)
//     {
//         console.error(err);
//     }
// }

// example();

// async function someAsyncOperation()
// {
//     await new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Result");
//         },5000);
//     });
//     return "Result";
// }

async function example() {
    const result1 = await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Result1");
        },2000);
    });
    const result2 = await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Result2");
        });
    },5000);
    console.log(result1, result2);
}
example()
console.log(example().then(()=>{
    console.log("Example function has completed")
}))
   
