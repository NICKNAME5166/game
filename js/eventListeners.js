let lastLevel
window.addEventListener("keydown", (event) => {
  if (player.preventInput) return
  // console.log(event.key)
  switch (event.key) {
    case "w":

    for (let i = 0; i < doors.length; i++) {
     const door = doors[i]

     if (player.hitbox.position.x + player.hitbox.width <=
        door.position.x + door.width &&
     player.hitbox.position.x >= door.position.x &&
     player.hitbox.position.y + player.hitbox.height >= door.position.y &&
     player.hitbox.position.y <= door.position.y + door.height &&
     player.velocity.y === 0
       ) {
         player.velocity.x = 0
         player.velocity.y = 0
         player.preventInput = true
         player.switchSprite("enterDoor")
         lastLevel = door.level
         console.log(door.level)
         console.log(lastLevel)
         door.play()
         return
       }
    }
    if (player.velocity.y === 0) player.velocity.y =  -25 
    break
    case "Enter":
    // hit
    player.switchSprite('hit')
    console.log('enter')
    for (let i = 0; i < enemies.length; i++) {
      const enemy = enemies[i]
 
      if (((player.position.x <= enemy.position.x + enemy.width ||
        player.position.x + player.width >= enemy.position.x) &&
        player.position.y <= enemy.position.y + enemy.height &&
        player.position.y + player.height >= enemy.position.y) ||
        (player.position.x <= enemy.position.x + enemy.width &&
          player.position.x + player.width >= enemy.position.x &&
          (player.position.y <= enemy.position.y + enemy.height ||
          player.position.y + player.height >= enemy.position.y))
        ) {
           player.switchSprite('hit')
          console.log('hit')
          // enemy.play()
          enemy.disappear()
          return
        }
     }
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
     for (let i = 0; i < doors.length; i++) {
      const door = doors [i]

      if (player.hitbox.position.x + player.hitbox.width <=
         door.position.x + door.width &&
      player.hitbox.position.x >= door.position.x &&
      player.hitbox.position.y + player.hitbox.height >= door.position.y &&
      player.hitbox.position.y <= door.position.y + door.height &&
      player.velocity.y === 0
        ) {
          player.velocity.x = 0
          player.velocity.y = 0
          player.preventInput = true
          player.switchSprite("enterDoor")
          door.play()
          return
        }
     }
     if (player.velocity.y === 0) player.velocity.y =  -25 
    break
    case "ф":
    // move player to the left
    keys.a.pressed = true
    break
    case "в":
    // move player to the right
    keys.d.pressed = true
    break
    case "W":

    for (let i = 0; i < doors.length; i++) {
     const door = doors [i]

     if (player.hitbox.position.x + player.hitbox.width <=
        door.position.x + door.width &&
     player.hitbox.position.x >= door.position.x &&
     player.hitbox.position.y + player.hitbox.height >= door.position.y &&
     player.hitbox.position.y <= door.position.y + door.height &&
     player.velocity.y === 0
       ) {
         player.velocity.x = 0
         player.velocity.y = 0
         player.preventInput = true
         player.switchSprite("enterDoor")
         door.play()
         return
       }
    }
    if (player.velocity.y === 0) player.velocity.y =  -25 
    break
    case "A":
    // move player to the left
    keys.a.pressed = true
    break
    case "D":
    // move player to the right
    keys.d.pressed = true
    break
    case "Ц":
     for (let i = 0; i < doors.length; i++) {
      const door = doors [i]

      if (player.hitbox.position.x + player.hitbox.width <=
         door.position.x + door.width &&
      player.hitbox.position.x >= door.position.x &&
      player.hitbox.position.y + player.hitbox.height >= door.position.y &&
      player.hitbox.position.y <= door.position.y + door.height &&
      player.velocity.y === 0
        ) {
          player.velocity.x = 0
          player.velocity.y = 0
          player.preventInput = true
          player.switchSprite("enterDoor")
          door.play()
          return
        }
     }
     if (player.velocity.y === 0) player.velocity.y =  -25 
    break
    case "Ф":
    // move player to the left
    keys.a.pressed = true
    break
    case "В":
    // move player to the right
    keys.d.pressed = true
    break
 }
 })
 
 window.addEventListener("keyup", (event) => {
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
       case "A":
         // move player to the left
         keys.a.pressed = false
         break
         case "D":
         // move player to the right
         keys.d.pressed = false 
         break
         case "Ф":
        // move player to the left
        keys.a.pressed = false
        break
        case "В":
        // move player to the right
        keys.d.pressed = false 
        break
     }
    })