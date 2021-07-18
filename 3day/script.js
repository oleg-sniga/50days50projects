const objOpen = document.querySelector('#open')
const objClose = document.querySelector('#close')
const objContainer = document.querySelector('.container')

objOpen.addEventListener('click', () => {
  objContainer.classList.add('show-nav')
})

objClose.addEventListener('click', () => {
  objContainer.classList.remove('show-nav')
})