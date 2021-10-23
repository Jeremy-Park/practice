// Short ver with delay 
const promise1 = () =>
  new Promise((resolve, reject) => setTimeout(resolve, 4000));
promise1().then(() => console.log("resolved"));
