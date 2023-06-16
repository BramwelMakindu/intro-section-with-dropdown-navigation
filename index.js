const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.menu-close');
const menuEl = document.querySelector('.menu');

openMenu.addEventListener('click', () => {
    menuEl.style.right = '0';
    document.body.classList.add('active');
});
closeMenu.addEventListener('click', () => {
    menuEl.style.right = '-300px';
    document.body.classList.remove('active');
});


const navlinks = document.querySelectorAll('.features-js,.company-js');

navlinks.forEach((navlink)=>{
    navlink.addEventListener('click', ()=>{
        navlink.classList.toggle('active');
    })
})