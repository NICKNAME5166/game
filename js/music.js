const audio = new Audio('music.mp3');
      let isMuted = true;
      const muteButton = document.getElementById('muteButton');

      function toggleMute() {
        if (isMuted) {
          audio.loop = true;
          audio.play();
          muteButton.style.backgroundImage = 'url(img/unmute.png)';
        } else {
          audio.pause();
          audio.currentTime = 0;
          muteButton.style.backgroundImage = 'url(img/mute.png)';
        }
        isMuted = !isMuted;
      }

      muteButton.addEventListener('click', toggleMute);