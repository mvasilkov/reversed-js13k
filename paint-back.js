var canvas = $c.getContext("2d");

var stars1 = [], stars2 = [], stars3 = [];

function rnd(min, max) {
  return ~~(Math.random() * (max - min + 1)) + min;
}

function drawStars(stars, offset) {
  var c = canvas;
  for (var i=0; i < 100; i++) {
    var x = stars[i].x,
        y = stars[i].y+stars[i].off,
        s = stars[i].size;
    c.fillStyle = "rgba(255, 255, 255, "+stars[i].o+")";
    stars[i].off -= offset;
    if (y < cellsize) {
      stars[i].off = cheight-cellsize;
      stars[i].x = rnd(0, cwidth);
    }
    c.fillRect(x, y, s, s);
  }
}

function prepareStars(opacity, size) {
  var stars = [];
  for (var i=0; i < 100; i++) {
    stars.push({x:rnd(0, cwidth), y:rnd(cellsize, cheight-cellsize), o: opacity, off: 0, size: size});
  }
  return stars;
}

stars1 = prepareStars(0.3, 1);
stars2 = prepareStars(0.6, 2);
stars3 = prepareStars(1, 3);

function paintBackdrop(direction) {
  drawStars(stars1, 4 * direction);
  drawStars(stars2, 16 * direction);
  drawStars(stars3, 30 * direction);
}

