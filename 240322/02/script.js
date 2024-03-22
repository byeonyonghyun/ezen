const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");



//face

ctx.beginPath();
ctx.fillStyle = "skyblue";
ctx.arc(150, 150, 80, 0, (Math.PI / 180) * 360, false);
ctx.fill();

ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(150, 180, 80, 0, (Math.PI / 180) * 360, false);
ctx.fill()

ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(150, 120, 5, 0, (Math.PI / 180) * 360, false);
ctx.fill();

ctx.beginPath();
ctx.moveTo(150, 125);
ctx.lineTo(150, 160);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(160, 140);
ctx.lineTo(200, 130);
ctx.stroke();

//eye
ctx.scale(0.7, 1);

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(200, 100, 20, 0, (Math.PI / 180) * 360, false);
ctx.fill();

//eye right
ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(230, 100, 20, 0, (Math.PI / 180) * 360, false)
ctx.fill();

// eyecircle
ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(210, 100, 5, 0, (Math.PI / 180) * 360, false);
ctx.fill();

//eye circle right
ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(220, 100, 5, 0, (Math.PI / 180) * 360, false);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(212, 100, 2, 0, (Math.PI / 180) * 360, false);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(218, 100, 2, 0, (Math.PI / 180) * 360, false);
ctx.fill();

