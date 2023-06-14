let g,
  pr,
  s = 0,
  en;
function setup() {
  createCanvas(1350, 625);
  textAlign(CENTER);
  textSize(20);
  noStroke();
  basla();
}

function basla() {
  g = false;
  pr = 20;
  en = [];
  addEnemy();
}
function mousePressed() {
  if (!g) {
    g = true;
    s = 0;
  }
}

function addEnemy() {
  en.push({
    x: random(width),
    y: random(height),
    vx: random(-2, 2),
    vy: random(-2, 2),
  });
}

function draw() {
  background(20);
  noCursor();
  if (g) {
    if (frameCount % 60 == 0) {
      pr += 0.4;
      s++;
    }
    if (frameCount % 10 == 0) addEnemy();
    en.forEach((e) => {
      e.x += e.vx;
      e.y += e.vy;

      if (e.x < 0 || e.x > width) e.vx *= -1;
      if (e.y < 0 || e.y > height) e.vy *= -1;

      if (dist(e.x, e.y, mouseX, mouseY) < (pr + 20) / 2) basla();
      fill(120);
      circle(e.x, e.y, 20);
    });

    fill(255);
    circle(mouseX, mouseY, pr);
    fill(80);
    text(s, mouseX, mouseY + 6);
  } else {
    cursor();
    fill(255);
    text("KAÇ BAKALIM !", width / 2, height / 2 - 50);
    fill(255);
    text("BAŞLAMAK İÇİN TIKLA !", width / 2, height / 2 - 20);
    fill(255);
    text("REKOR : " + s, width / 2, height - 30);
  }
}
