console.log("start");

function login(email, password, callback) {
  setTimeout(() => {
    callback({ userEmail: email });
  }, 3000);
}

function getVideos(email, callback) {
  setTimeout(() => {
    callback(["video1", "video2"]);
  }, 2000);
}

function getVideoDetail(video, callback) {
  setTimeout(() => {
    callback("video title");
  }, 2000);
}

const user = login("lahriu@gmail.com", "123456", user => {
  console.log(user);
  getVideos(user.email, videos => {
    console.log(videos);
    getVideoDetail(videos[0], title => {
      console.log(title);
    });
  });
});

console.log("finish");
