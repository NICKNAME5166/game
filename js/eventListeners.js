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