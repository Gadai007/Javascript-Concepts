function showText(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, time);
  });
}

function myPromiseAll(promises = []) {
  let result = [];
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((res) => {
          result.push(res);
          if (index === promises.length - 1) {
            resolve(result);
          }
        })
        .catch((err) => reject(err));
    });
  });
}

myPromiseAll([
  showText("hello", 1000),
  Promise.resolve("hi"),
  Promise.reject("bye"),
]).then((result) => console.log(result));
