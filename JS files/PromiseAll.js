//Promise.all → Resolves when all promises succeed, rejects immediately if any fail.//fail fast
//Promise.all → Fetching data from multiple APIs (e.g., user info, posts, comments) where all responses are required.

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1 success!");
    }, 3000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P2 success!");
    }, 3000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P3 success!");
    }, 3000);
})

Promise.any([p1, p2, p3]).then((res) => {
    console.log(res);
}).catch(err => console.error(err));

//Promise.allSettled → Waits for all promises to settle (either resolve or reject), always returns an array of results in object form.
//Promise.allSettled → Running multiple analytics events where failures should be logged but not break the process.

//Promise.race → Resolves or rejects as soon as the first promise settles, ignoring others.
//Promise.race → Implementing a timeout for API requests by racing the request against a fallback timeout promise.

//Promise.any → Resolves when any one promise succeeds, rejects only if all fail.
//Promise.any → Fetching data from multiple redundant servers and using the fastest successful response.