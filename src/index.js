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
  let degree = 0;

  let arcInterval = setInterval(() => {
    let end;
    degree += 1;
    end = radianConversion * (90 + degree);
    c.clearRect(0, 0, can.width, can.height);
    percent = parseInt(degree / onePercent, 10);

    spanPercent.innerHTML = percent.toFixed();
    spanDegree.innerHTML = degree.toFixed();

    // this is the base circle, aka the gray area, the unfulfilled
    c.beginPath();
    c.arc(posX, posY, 90, startAngle, endAngle);
    c.strokeStyle = "gray";
    c.lineWidth = "10";
    c.stroke();

    // this is the part where it fills up

    c.beginPath();
    c.arc(posX, posY, 90, startAngle, end);
    c.strokeStyle = "red";
    c.lineWidth = "10";
    c.stroke();

    //console.log(`this is degree ${degree}`);
    console.log(
      `this is percent ${parseInt(percent.toFixed(), 10)} degree -- ${degree}`
    );
    if (degree >= percentageToStop) clearInterval(arcInterval);
  }, fps);
}

arcMove(percentageToStop, startAngle, endAngle);
