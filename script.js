const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = 1024
canvas.height = 576

const pasredCollisions = collisionsLevel1.parse2D()
const collisionBlocks = pasredCollisions.createObjects2D()

const backgroundLevel1 = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imgSrc: './img/backgroundLevel1.png',
})


const player = new Player({
  collisionBlocks, 
})

const keys = {
  w: {
    pressed: false
  },
  a: {
    pressed: false
  },
  d: {
    pressed: false,
  },
}
function animate (){
    window.requestAnimationFrame(animate)
    backgroundLevel1.draw()
    collisionBlocks.forEach((CollisionBlock) => {
      CollisionBlock.draw()
    })
    player.velocity.x = 0
    if (keys.d.pressed) {
      player.velocity.x = 1
    } else if (keys.a.pressed){
      player.velocity.x = -1
    }
    player.update()
    player.draw()
    
}

animate()
