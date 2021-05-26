let can = document.getElementById("canvas");
let spanPercent = document.getElementById("percent");
let spanDegree = document.getElementById("degree");
let c = can.getContext("2d");

let posX = can.width / 2;
let posY = can.height / 2;
let fps = 1000 / 200;
let percent = 0;
let onePercent = 360 / 100;
let percentageToStop = onePercent * 50;

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
