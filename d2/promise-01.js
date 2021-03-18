/******************************************************************************
 1. Instantiate a Promise object
*******************************************************************************/
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 300);
});

myPromise.then(console.log);
myPromise.then((resolve) => console.log(resolve));
