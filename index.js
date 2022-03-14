window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window_scroll',window.scrollY>40)
})







const menu=document.querySelector('.nav__menu')
const btn= document.querySelector('.button')
const links =document.querySelectorAll('.nav-links')


btn.addEventListener("click",()=>{
menu.classList.toggle("active")
btn.classList.toggle('active')

})

links.forEach((n)=>{
    n.addEventListener("click",()=>{
        menu.classList.remove("active");
        btn.classList.remove("active")
    })
})
