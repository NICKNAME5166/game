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
    enterDoor: {
      frameRate: 8,
      frameBuffer: 4,
      loop: false,
      imageSrc: "./img/king/enterDoor.png",
    },
  },
}); //Das ist Shadman sein Teil

const doors = [
  new Sprite ({
    position: {
      x: 767,
      y: 270,
    },
    imageSrc: "./img/doorOpen.png",
    frameRate: 5,
    frameBuffer: 5,
    loop: false,
    autoplay: false,
  }),
]

function animate() {
  window.requestAnimationFrame(animate)

  backgroundLevel1.draw()
  collisionBlocks.forEach((collisionBlock) => {
    collisionBlock.draw()
  })

  doors.forEach((door) => {
    door.draw()
  })
 
  
  player.handleInput(keys)
  player.update();
  player.draw();
}

animate();
