
document.addEventListener('DOMContentLoaded', () => {
        const navigation = document.querySelector('.bloc-navigation');
        const menu = document.querySelector('.navbar-menu');

        burger.addEventListener('click', ()  => {
           navigation.classList.toggle('is-active');
           menu.classList.toggle('is-active')
        });
    });