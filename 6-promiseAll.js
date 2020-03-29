const yt = new Promise(resolve => {
  setTimeout(() => {
    console.log("youtube");
    resolve({ videos: [1, 2, 3, 4, 5] });
  }, 2000);
});

const fb = new Promise(resolve => {
  setTimeout(() => {
    console.log("facebook");
    resolve({ user: "Name" });
  }, 5000);
});

Promise.all([yt, fb]).then(result => console.log(result));
