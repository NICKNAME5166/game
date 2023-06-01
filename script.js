const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 64 * 16 // 1024
canvas.height = 64 * 9 // 576

let parsedCollisions
let collisionBlocks
let background
let doors
let enemies
const player = new Player({
  imageSrc: './img/king/idle.png',
  frameRate: 11,
  animations: {
    idleRight: {
      frameRate: 11,
      frameBuffer: 2,
      loop: true,
      imageSrc: './img/king/idle.png',
    },
    idleLeft: {
      frameRate: 11,
      frameBuffer: 2,
      loop: true,
      imageSrc: './img/king/idleLeft.png',
    },
    runRight: {
      frameRate: 8,
      frameBuffer: 4,
      loop: true,
      imageSrc: './img/king/runRight.png',
    },
    runLeft: {
      frameRate: 8,
      frameBuffer: 4,
      loop: true,
      imageSrc: './img/king/runLeft.png',
    },
    hit: {
      frameRate: 3,
      frameBuffer: 4,
      loop: false,
      imageSrc: './img/king/hit.png',
      onComplete: () => {
        console.log('attack!')
        // if (this.lastDirection === 'left') this.switchSprite('idleLeft')
        // else this.switchSprite('idleRight')
      },
    },
    enterDoor: {
      frameRate: 8,
      frameBuffer: 4,
      loop: false,
      imageSrc: './img/king/enterDoor.png',
      onComplete: () => {
        console.log('completed animation')
        gsap.to(overlay, {
          opacity: 1,
          onComplete: () => {
            level = lastLevel
            console.log(lastLevel)
            if (level === 6) level = 0
            levels[level].init()
            player.switchSprite('idleRight')
            player.preventInput = false
            gsap.to(overlay, {
              opacity: 0,
            })
          },
        })
      },
    },
  },
})

let level = 0
let levels = {
  0: {
    init: () => {
      parsedCollisions = collisionsLevel0.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks
      player.position.x = 420
      player.position.y = 258-64
      if (player.currentAnimation) player.currentAnimation.isActive = false

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './img/backgroundLevel0.png',
      })
      enemies = [
        
      ]
      doors = [
        new Sprite({
          position: {
            x: 194,
            y: 336,
          },
          imageSrc: './img/doorOpen.png',
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
          level: 1,
        }),
        new Sprite({
          position: {
            x: 321,
            y: 336,
          },
          imageSrc: './img/doorOpen.png',
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
          level: 2,
        }),
        new Sprite({
          position: {
            x: 448,
            y: 336,
          },
          imageSrc: './img/doorOpen.png',
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
          level: 3,
        }),
        new Sprite({
          position: {
            x: 575,
            y: 336,
          },
          imageSrc: './img/doorOpen.png',
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
          level: 4,
        }),
        new Sprite({
          position: {
            x: 704,
            y: 336,
          },
          imageSrc: './img/doorOpen.png',
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
          level: 5,
        }),
      ]
    },
  },
  1: {
    init: () => {
      parsedCollisions = collisionsLevel1.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks
      player.position.x = 227
      player.position.y = 323-64
      if (player.currentAnimation) player.currentAnimation.isActive = false

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './img/backgroundLevel1.png',
      })
      enemies = [
        new Sprite({
          position: {
            x: 490,
            y: 378-90,
          },
          imageSrc: './img/idle.png',
          frameRate: 11,
          frameBuffer: 2,
          loop: true,
          autoplay: true,
        }),
      ]
      doors = [
        new Sprite({
          position: {
            x: 767,
            y: 270,
          },
          imageSrc: './img/doorOpen.png',
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
      ]
    },
  },
  2: {
    init: () => {
      parsedCollisions = collisionsLevel2.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks
      player.position.x = 96
      player.position.y = 140

      if (player.currentAnimation) player.currentAnimation.isActive = false

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './img/backgroundLevel2.png',
      })
      enemies = [
        new Sprite({
          position: {
            x: 145,
            y: 506-90,
          },
          imageSrc: './img/idle.png',
          frameRate: 11,
          frameBuffer: 2,
          loop: true,
          autoplay: true,
        }),
      ]
      doors = [
        new Sprite({
          position: {
            x: 772.0,
            y: 336,
          },
          imageSrc: './img/doorOpen.png',
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
      ]
    },
  },
  3: {
    init: () => {
      parsedCollisions = collisionsLevel3.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks
      player.position.x = 750
      player.position.y = 230
      if (player.currentAnimation) player.currentAnimation.isActive = false

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './img/backgroundLevel3.png',
      })
      enemies = [
        new Sprite({
          position: {
            x: 634,
            y: 446-90,
          },
          imageSrc: './img/idle.png',
          frameRate: 11,
          frameBuffer: 2,
          loop: true,
          autoplay: true,
        }),
        new Sprite({
          position: {
            x: 332,
            y: 446-90,
          },
          imageSrc: './img/idle.png',
          frameRate: 11,
          frameBuffer: 2,
          loop: true,
          autoplay: true,
        }),
      ]
      doors = [
        new Sprite({
          position: {
            x: 176.0,
            y: 335,
          },
          imageSrc: './img/doorOpen.png',
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
      ]
    },
  },
  4: {
    init: () => {
      parsedCollisions = collisionsLevel4.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks
      player.position.x = 817-100 
      player.position.y = 212+64
      if (player.currentAnimation) player.currentAnimation.isActive = false

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './img/backgroundLevel4.png',
      })
      enemies = [
        new Sprite({
          position: {
            x: 332,
            y: 446-90,
          },
          imageSrc: './img/idle.png',
          frameRate: 11,
          frameBuffer: 2,
          loop: true,
          autoplay: true,
        }),
        new Sprite({
          position: {
            x: 634,
            y: 446-90,
          },
          imageSrc: './img/idle.png',
          frameRate: 11,
          frameBuffer: 2,
          loop: true,
          autoplay: true,
        }),
      ]
      doors = [
        new Sprite({
          position: {
            x: 640,
            y: 449-112,
          },
          imageSrc: './img/doorOpen.png',
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
      ]
    },
  },
  5: {
    init: () => {
      parsedCollisions = collisionsLevel5.parse2D()
      collisionBlocks = parsedCollisions.createObjectsFrom2D()
      player.collisionBlocks = collisionBlocks
      player.position.x = 79
      player.position.y = 150-64
      if (player.currentAnimation) player.currentAnimation.isActive = false

      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
        imageSrc: './img/backgroundLevel5.png',
      })
      enemies = [
        new Sprite({
          position: {
            x: 145,
            y: 506-90,
          },
          imageSrc: './img/idle.png',
          frameRate: 11,
          frameBuffer: 2,
          loop: true,
          autoplay: true,
        }),
        new Sprite({
          position: {
            x: 538,
            y: 506-90,
          },
          imageSrc: './img/idle.png',
          frameRate: 11,
          frameBuffer: 2,
          loop: true,
          autoplay: true,
        }),
        new Sprite({
          position: {
            x: 612,
            y: 252-90,
          },
          imageSrc: './img/idle.png',
          frameRate: 11,
          frameBuffer: 2,
          loop: true,
          autoplay: true,
        }),
        
      ]
      doors = [
        new Sprite({
          position: {
            x: 519,
            y: 254-112,
          },
          imageSrc: './img/doorOpen.png',
          frameRate: 5,
          frameBuffer: 5,
          loop: false,
          autoplay: false,
        }),
      ]
    },
  },
}

const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
}

const overlay = {
  opacity: 0,
}

function animate() {
  window.requestAnimationFrame(animate)

  background.draw()
  // collisionBlocks.forEach((collisionBlock) => {
  //   collisionBlock.draw()
  // })

  doors.forEach((door) => {
    door.draw()
  })
  enemies.forEach((enemy) => {
    enemy.draw()
  })

  player.handleInput(keys)
  player.draw()
  player.update()

  c.save()
  c.globalAlpha = overlay.opacity
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)
  c.restore()
}

levels[level].init()
animate()
