console.log("start");

function login(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ userEmail: email });
    }, 3000);
  });
}

function getVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video1", "video2"]);
    }, 2000);
  });
}

function getVideoDetail(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("video title");
    }, 2000);
  });
}

// const user = login("lahriu@gmail.com", "123456", user => {
//   console.log(user);
//   getVideos(user.email, videos => {
//     console.log(videos);
//     getVideoDetail(videos[0], title => {
//       console.log(title);
//     });
//   });
// });

login("lahiru@gmail.com", "123456")
  .then(user => getVideos(user.email))
  .then(videos => getVideoDetail(videos[0]))
  .then(detail => console.log(detail));

console.log("finish");
