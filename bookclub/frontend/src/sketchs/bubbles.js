export default function(s) {
  let colors = [
    "#79B791",
    "#364652",
    "#51291E",
    "#301014",
    "#9E768F",
    "#F7A278",
    "#0",
    "#F7F8D2"
  ];

  let books = ["📙", "📗", "📘", "📖", "📕", "📚"];
  class Particle {
    constructor(x, y, r, opacity) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.growthRate = s.random(0, 1) / 50;
      this.opacity = 1.0;
      this.fadeIn = true;

      // pick color randomly from scheme
      this.color = this.pickColor();
    }

    pickColor() {
      let i = s.floor(s.random(0, 8));
      let newC = s.color(colors[i]);
      newC.levels[3] = 2;
      return newC;
    }

    render() {
      //console.log(this.opacity);
      //s.noStroke();

      s.fill(this.color);
      s.ellipse(this.x, this.y, this.r, this.r + this.opacity);
    }

    update() {}
  }

  let particles;

  s.f = function(x) {
    return s.sqrt(1 - (x - 1) ** 2);
    //return s.log(x + 1);
    //return -2 / (x + 1) + 2;
  };

  s.initParticles = function() {
    // init particles array
    particles = [];
    // define the density of particles
    let numParticles = (s.windowWidth * s.windowHeight) / 2000;
    // define size ratio
    let maxSize = (s.windowWidth * s.windowHeight) / 20000;
    // define stroke width in terms of max size
    s.strokeWeight(maxSize / 15);
    for (let i = 0; i < numParticles; i++) {
      // define x such that each y value is equally distrubted
      let x = s.random(0, 1) ** 2;
      let y = s.f(x);
      let length;
      // define how far the bubbles go down back on the width of the window
      if (s.windowWidth > 900) {
        length = s.windowHeight / 2;
      } else {
        length = s.windowHeight / 3;
      }

      let newP = new Particle(
        s.map(x, 0, 1, 0, s.windowWidth),
        s.map(y, 1, 0, 0, length) - s.random(0, s.map(y, 1, 0, 0, length)),
        s.ceil(s.random(maxSize / 2, maxSize)),
        s.random(0, 1)
      );
      particles.push(newP);
    }
  };

  s.windowResized = function() {
    s.resizeCanvas(s.windowWidth, s.windowHeight - 10);
    s.initParticles();
  };

  s.setup = function() {
    s.createCanvas(s.windowWidth, s.windowHeight - 10);
    s.initParticles();
  };

  s.draw = function() {
    //console.log(particles);
    s.clear();
    for (let i = 0; i < particles.length; i++) {
      particles[i].render();
      particles[i].update();
    }

    //particles.foreach(p => {p.render()});
  };
}
