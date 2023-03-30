class Player {
    constructor({
        collisionBlocks = []
    }) {
        this.position = {
            x: 100,
            y: 100,
        }

        this.velocity = {
            x:0,
            y:0,
        }

        this.width = 100
        this.height = 100
        this.sides = {
            bottom: this.position.y + this.height,
        }
        this.gravity = 1

        this.collisionBlocks = collisionBlocks 
        console.log(this.collisionBlocks)
    }
    draw(){
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
        this.update()
    }
    update(){
     this.position.x += this.velocity.x
    //  this.collisionBlocks.forEach()
     for (let i = 0; i < this.collisionBlocks.length; i++) {
        const collisionBlocks = this.collisionBlocks[i]

        if (this.position.x <= collisionBlocks.position.x + collisionBlocks.width &&
            this.position.x + this.width >= collisionBlocks.position.x &&
            this.position.y + this.height >= collisionBlocks.position.x &&
            this.position.y <= collisionBlocks.position.y + collisionBlocks.height
        ) {
          if (this.velocity.x < -1){
            this.position.x =
             collisionBlocks.position.x + collisionBlocks.width + 0.01
             break
          }

          if (this.velocity.x > 1){
             this.position.x = collisionBlock.position.x - this.width -0.01

          }
        }
     }
     this.position.y += this.velocity.y
     this.sides.bottom = this.position.y + this.height

     if(this.sides.bottom + this.velocity.y < canvas.height){
        this.velocity.y += this.gravity
        } else this.velocity.y = 0
    }
}