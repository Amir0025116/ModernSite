const clearButton = document.querySelector('.clearButton'),
    textInput = document.querySelector('.textInput'),
    headerNav = document.querySelector('.header-nav__links li a'),
    menu = document.querySelector('.header-nav__links'),
    burger = document.querySelector('.burger'),
    sections = document.querySelectorAll('section'),
    headerActive = document.querySelector('.headerActive'),
    links = document.querySelectorAll('.nav-link')

    // services = document.getElementById('#services'),
    // login = document.getElementById('#login'),
    // work = document.getElementById('#services')
      
clearButton.addEventListener('click',  function (e) {
    textInput.value = ''
})
burger.addEventListener('click', function () {
    headerActive.classList.toggle('headerActive')
}) 
 links.forEach((item) => {
     item.addEventListener('click', () => {
         let el = document.getElementById(item.getAttribute('data-link'));
         el.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
       
    })
 });