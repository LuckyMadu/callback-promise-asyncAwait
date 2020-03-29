//Async code
const items = [1, 2, 3, 4, 5];

console.log("start");

setTimeout(() => {
  console.log("Inside Timeout");
}, 5000);

// items.forEach(item => {
//   console.log(item);
// });

console.log("end");
