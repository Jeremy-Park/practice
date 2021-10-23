// Short ver
const promise1 = () => new Promise((resolve, reject) => setTimeout(resolve, 4000))
promise1().then(()=>console.log("resolved"))


// Long ver

const work2 = true
const promise2 = new Promise((resolve, reject) => {
    if (work2) {
        resolve('work 2 done')
    } else {
        reject ('work 2 not done')
    }
})

Promise.all([
    promise2
])