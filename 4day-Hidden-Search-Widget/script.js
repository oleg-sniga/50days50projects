
const showSearch = () => {

  const search = document.querySelector('.search')
  const btn = document.querySelector('.btn')
  const input = document.querySelector('.input')

  if (search === null) return


  btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
  })
  
}

showSearch()
