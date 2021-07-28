const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
const btns = document.querySelector('.btns')

console.log(btns)
sounds.forEach(sound => {
  const btn = document.createElement('button')
  btn.classList.add('btn')
  btn.innerText = sound

  btn.addEventListener('click', () => {
    stopSounds()
    
    let soundAudio = document.getElementById(sound)
    soundAudio.volume = 0.2
    soundAudio.play()
  })

  btns.appendChild(btn)
})

function stopSounds() {
  sounds.forEach(sound => {
    let soundAudio = document.getElementById(sound)
    soundAudio.pause()
    soundAudio.currentTime = 0
  })
}