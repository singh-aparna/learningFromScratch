//Promise.all → Resolves when all promises succeed, rejects immediately if any fail.
//Promise.all → Fetching data from multiple APIs (e.g., user info, posts, comments) where all responses are required.
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1 success");
    }, 3000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P2 success");
    }, 3000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("p3 fails!");
    });
})
Promise.all([p1, p2, p3]).then((res) => {
    console.log(res);
}).catch(err => console.error(err));    