for (var i = 0; i <= 4; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000)
}
//output: 5 5 5 5 5



for (let i = 0; i <= 4; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000)
}
//output:  0 1 2 3 4 



//Fixing this with 'var' keyword //works the same with 'const' & 'let' too

// Even though const prevents reassignment, in this case, you're not reassigning timer.
// You're only declaring a new timer function in each loop iteration, which is completely valid.
// const only ensures timer itself can't be reassigned, but since we're declaring it anew in each iteration,
// there's no issue.

for (var i = 0; i <= 4; i++) {
    var timer = (j = i) => {
        setTimeout(() => {
            console.log(j)
        }, 1000)
    }
    timer();
}
//output:  0 1 2 3 4 




