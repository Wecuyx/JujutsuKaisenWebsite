function changeVideo(text) {
  console.log(text);
  var display = document.getElementById('video');
  display.style.opacity = 0;
  display.style.transform = "translateX(20px)";
  setTimeout(function(){
  display.src = text;
  display.style.opacity = 1;
  display.style.transform = "translateX(0px)";}, 1500);
 }
