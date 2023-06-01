class Sprite {
  constructor({
    position,
    imageSrc,
    frameRate = 1,
    animations,
    frameBuffer = 2,
    loop = true,
    autoplay = true,
    level = 0,
    onscreen = true,
  }) {
    this.position = position
    this.image = new Image()
    this.image.onload = () => {
      this.loaded = true
      this.width = this.image.width / this.frameRate
      this.height = this.image.height
    }
    this.image.src = imageSrc
    this.loaded = false
    this.frameRate = frameRate
    this.currentFrame = 0
    this.elapsedFrames = 0
    this.frameBuffer = frameBuffer
    this.animations = animations
    this.loop = loop
    this.autoplay = autoplay
    this.currentAnimation
    this.level = level
    this.onscreen = onscreen
    if (this.animations) {
      for (let key in this.animations) {
        const image = new Image()
        image.src = this.animations[key].imageSrc
        this.animations[key].image = image
      }
    }
  }
  draw() {
    if (!this.onscreen) return
    if (!this.loaded) return
    const cropbox = {
      position: {
        x: this.width * this.currentFrame,
        y: 0,
      },
      width: this.width,
      height: this.height,
    }
    // c.fillStyle = 'rgba(255, 0, 0, 0.5)'
    // c.fillRect(
    //    this.position.x,
    //    this.position.y,
    //    this.width,
    //    this.height
    //  )
    c.drawImage(
      this.image,
      cropbox.position.x,
      cropbox.position.y,
      cropbox.width,
      cropbox.height,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    )

    this.updateFrames()
  }

  play() {
    this.autoplay = true
  }
  disappear() {
    this.onscreen = false
    this.position.x = 0
      this.position.y = 0
      this.width= 0
      this.height=0
  }

  updateFrames() {
    if (!this.autoplay) return

    this.elapsedFrames++

    if (this.elapsedFrames % this.frameBuffer === 0) {
      if (this.currentFrame < this.frameRate - 1) this.currentFrame++
      else if (this.loop) this.currentFrame = 0
    }

    if (this.currentAnimation?.onComplete) {
      if (
        this.currentFrame === this.frameRate - 1 &&
        !this.currentAnimation.isActive
      ) {
        this.currentAnimation.onComplete()
        this.currentAnimation.isActive = true
      }
    }
  }
}
