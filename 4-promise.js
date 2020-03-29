const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve({ user: "Lahiru" });
    reject(new Error("error"));
  }, 2000);
});

promise
  .then(user => {
    console.log(user);
  })
  .catch(err => {
    console.log(err.message);
  });
