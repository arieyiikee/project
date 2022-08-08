const burger = document.getElementById('bar')
const remove= document.getElementById('close')
const nav = document.getElementById('navbar')

if(burger) {
    burger.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if(remove) {
    remove.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}