var getRandomNumber = function (size) {
   return Math.floor(Math.random() * size);
};
var getDistance = function (event, target) {
   var diffX = event.offsetX - target.x;
   var diffY = event.offsetY - target.y;
   return Math.sqrt((diffX * diffX) + (diffY * diffY));
};
var getDistanceHint = function (distance) {
   if (distance < 10) {
      return "Aaaaaa close!";
   } else if (distance < 20) {
      return "Very Hot";
   } else if (distance < 40) {
      return "Hot";
   } else if (distance < 80) {
      return "Warm";
   } else if (distance < 160) {
      return "Cold";
   } else if (distance < 320) {
      return "Very Cold";
   } else {
      return "Aaaaa Impossible Cold";
   };
};
var clicks = 0;
var width = 400;
var height = 400;

var target = {
   x: getRandomNumber(width),
   y: getRandomNumber(height)
};

$("#map").click(function (event) {
   clicks++;
   var distance = getDistance(event, target);

   var distanceHint = getDistanceHint(distance);

   $("#distance").text(distanceHint);

   if (distance < 8) {
      alert("Bomb activation. Good Work. You made it on: " + clicks + " clicks");
   };
});















