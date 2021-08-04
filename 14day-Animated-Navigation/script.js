

const toggle = document.getElementById('toggle')
const navObj = document.getElementById('nav')


toggle.addEventListener('click', () => {
  navObj.classList.toggle('active')
})