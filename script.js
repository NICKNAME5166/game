const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = 1024
canvas.height = 576

class Sprite {
    constructor({position}){
      this.position = position
      this.image = new Image
      this.image.src = './img/backgroundLevel1.png'
    }
    draw(){
      c.drawImage(this.image, this.position.x, this.position.y)
    }
}
const backgroundLevel1 = new Sprite({
  position: {
    x: 0,
    y: 0,
  }
})
const player = new Player()

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


window.addEventListener("keydown", (event) => {
 console.log(event.key)
 switch (event.key) {
  case "w":
    if (player.velocity.y === 0) player.velocity.y =  -20
    
  break
  case "a":
  // move player to the left
  keys.a.pressed = true
  break
  case "d":
  // move player to the right
  keys.d.pressed = true
  break
  case "ц":
    if (player.velocity.y === 0) player.velocity.y =  -20
    
  break
  case "ф":
  // move player to the left
  keys.a.pressed = true
  break
  case "в":
  // move player to the right
  keys.d.pressed = true
  break
}
})

window.addEventListener("keyup", (event) => {
    console.log(event.key)
    switch (event.key) {
      case "a":
        // move player to the left
        keys.a.pressed = false
        break
        case "d":
        // move player to the right
        keys.d.pressed = false 
        break
        case "ф":
       // move player to the left
       keys.a.pressed = false
       break
       case "в":
       // move player to the right
       keys.d.pressed = false 
       break
    }
   })