var smallRad = 5;

function drawIt() {
  var degrees = parseFloat(document.getElementById("degrees").value);
  var numItems = parseFloat(document.getElementById("numItems").value);
  var canvas = document.getElementById("canvas");
  console.log("degrees " + degrees);
  canvas2 = new OffscreenCanvas(canvas.width, canvas.height);
  var ctx2 = canvas2.getContext("2d");
  ctx2.fillRect(0, 0, canvas.width, canvas.height);
  for(var i = 0; i < numItems; i++) {
   drawTick(ctx2, canvas.height, canvas.width, degrees, i); 
  }
  var ctx = canvas.getContext("2d");
  ctx.drawImage(canvas2, 0, 0);
}

function drawTick(ctx, height, width, angle, item) {
    if (height < width) {
        hw = height;
    } else {
        hw = width;
    }
    console.log("hw=" + hw);
    radius = hw*0.4;
    var a = item*angle*Math.PI/180.0;
    console.log("a=" + a + " angle=" + angle + " item=" + item + " Math.Pi=" + Math.PI);
    var x = Math.cos(a)*radius + canvas.width*0.5;
    var y = Math.sin(a)*radius + canvas.height*0.5;
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#40c080';
    console.log("x,y = " + x + " " + y);
    ctx.arc(x, y, smallRad, 0.0, 2.0*Math.PI);
    ctx.stroke();
}

function keydown() {
  if(event.key === 'Enter') {
    var numItems = parseFloat(document.getElementById("numItems").value);
    drawIt();
  }
}
