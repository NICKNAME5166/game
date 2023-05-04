const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;

const parsedCollisions = collisionsLevel1.parse2D();
const collisionBlocks = parsedCollisions.createObjects2D();

const backgroundLevel1 = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: "./img/backgroundLevel1.png",
});

const player = new Player({
  collisionBlocks,
  imageSrc: "./img/king/idle.png",
  frameRate: 11,
  animations: {
    idleRight: {
      frameRate: 11,
      frameBuffer: 2,
      loop: true,
      imageSrc: "./img/king/idle.png",
    },
    idleLeft: {
      frameRate: 11,
      frameBuffer: 2,
      loop: true,
      imageSrc: "./img/king/idleLeft.png",
    },
    runRight: {
      frameRate: 8,
      frameBuffer: 4,
      loop: true,
      imageSrc: "./img/king/runRight.png",
    },
    runLeft: {
      frameRate: 8,
      frameBuffer: 4,
      loop: true,
      imageSrc: "./img/king/runLeft.png",
    },
  },
}); //Das ist Shadman sein Teil

const doors = [
  new Sprite ({
    position: {
      x: 0,
      y: 0,
    },
    imageSrc: "./img/doorOpen.png",
  }),
]

function animate() {
  window.requestAnimationFrame(animate)

  backgroundLevel1.draw()
  collisionBlocks.forEach((collisionBlock) => {
    collisionBlocks.draw()
  })
 
  player.velocity.x = 0;
  if (keys.d.pressed) {
    player.switchSprite("runRight");
    player.velocity.x = 5;
    player.lastDirection = "right";
  } else if (keys.a.pressed) {
    player.switchSprite("runLeft");
    player.velocity.x = -5;
    player.lastDirection = "left";
  } else {
    if (player.lastDirection === "left") player.switchSprite("idleLeft");
    else player.switchSprite("idleRight");
  }
  player.update();
  player.draw();
}

animate();
