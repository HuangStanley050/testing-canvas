let can = document.getElementById("canvas"),
  spanPercent = document.getElementById("percent"),
  c = can.getContext("2d");

let posX = can.width / 2,
  posY = can.height / 2,
  fps = 1000 / 200,
  percent = 0,
  onePercent = 360 / 100,
  progress = 90,
  result = onePercent * progress;

c.lineCap = "round";

function arcMove() {
  let degree = 0;
  let startAngle = (Math.PI / 180) * 90;
  let endAngle = (Math.PI / 180) * (90 + 360);
  let acrInterval = setInterval(() => {
    degree += 1;
    c.clearRect(0, 0, can.width, can.height);
    percent = parseInt(degree / onePercent, 10);

    spanPercent.innerHTML = percent.toFixed();

    // this is the base circle, aka the gray area, the unfulfilled
    c.beginPath();
    c.arc(posX, posY, 90, startAngle, endAngle);
    c.strokeStyle = "gray";
    c.lineWidth = "10";
    c.stroke();

    // this is the part where it fills up

    c.beginPath();
    c.strokeStyle = "red";
    c.lineWidth = "10";
    c.arc(posX, posY, 90, startAngle, (Math.PI / 180) * (90 + degree));
    c.stroke();

    //console.log(`this is degree ${degree}`);
    console.log(
      `this is percent ${parseInt(percent.toFixed())} degree -- ${degree}`
    );
    if (degree >= result) clearInterval(acrInterval);
  }, fps);
}

arcMove();
