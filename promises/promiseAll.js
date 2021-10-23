// Promise all

//If ver
const bool1 = true;

const promise1 = new Promise((resolve, reject) => {
  if (bool1) {
    resolve("promise 1 resolved");
  } else {
    reject("promise 1 rejected");
  }
});

const promise2 = new Promise((resolve, reject) => {
  resolve("promise 2 resolved");
});

const promise3 = new Promise((resolve, reject) => {
  resolve("promise 3 resolved");
});

Promise.all([promise1, promise2, promise3])
  .then((messages) => console.log(messages, "promises all resolved"))
  .catch((messages) => console.log(messages, "promises not resolved"));
