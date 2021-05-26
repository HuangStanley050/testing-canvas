let can = document.getElementById("canvas"),
  spanPercent = document.getElementById("percent"),
  spanDegree = document.getElementById("degree"),
  c = can.getContext("2d");

let posX = can.width / 2,
  posY = can.height / 2,
  fps = 1000 / 200,
  percent = 0,
  onePercent = 360 / 100,
  percentageToStop = onePercent * 65;

c.lineCap = "round";

const radianConversion = Math.PI / 180;
let startAngle = radianConversion * 90;
let endAngle = radianConversion * (90 + 360);

function arcMove(percentageToStop, startAngle, endAngle) {
  c.clearRect(0, 0, can.width, can.height);
  percent = parseInt(degree / onePercent, 10);

  spanPercent.innerHTML = percent.toFixed();
  //spanDegree.innerHTML = degree.toFixed();

  // this is the base circle, aka the gray area, the unfulfilled
  c.beginPath();
  c.arc(posX, posY, 90, startAngle, endAngle);
  c.strokeStyle = "gray";
  c.lineWidth = "10";
  c.stroke();

  // this is the part where it fills up

  c.beginPath();
  c.arc(posX, posY, 90, startAngle, endAngle - 90);
  c.strokeStyle = "red";
  c.lineWidth = "10";
  c.stroke();

  //console.log(`this is degree ${degree}`);
  // console.log(
  //   `this is percent ${parseInt(percent.toFixed(), 10)} degree -- ${degree}`
  // );
}

arcMove(percentageToStop, startAngle, endAngle);
