// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
  let pTag = document.getElementById("text");
  pTag.innerText = "This is really cool!"
});
 
console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);