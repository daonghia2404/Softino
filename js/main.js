window.onload = () => {

    //Navigation
    const btnMenu = document.querySelector('.menu__button');
    const menu = document.querySelector('.nav__menu');
    btnMenu.addEventListener('click', () => {
        menu.classList.toggle('active');
    })

    const btnSubMenu = document.querySelectorAll('.nav__link');

    btnSubMenu.forEach(btn => btn.addEventListener('click', (e) => {
        const menu = document.querySelectorAll('.menu__submenu');
        menu.forEach(item => item.classList.remove('active'));


        const self = e.target.parentNode;
        const selfMenu = self.querySelector('.menu__submenu');
        selfMenu.classList.add('active');
    }))


    //Slider
    const slider = document.querySelector(".slider__items");
    const item = document.querySelectorAll(".slider__item");

    let count = 1;
    let size = item[0].offsetWidth + 20;

    slider.style.transform = `translateX(${-size * count}px)`;

    autoPlay = function () {
        slider.style.transition = '.5s ease-out';
        count++;
        slider.style.transform = `translateX(${-size * count}px)`;

    }
    setInterval(autoPlay, 4000);

    slider.addEventListener('transitionend', () => {
        if (item[count].id === 'lastItem') {
            slider.style.transition = 'none';
            count = item.length - 2;
            slider.style.transform = `translateX(${-size * count}px)`;
        }

        if (item[count].id === 'firstItem') {
            slider.style.transition = 'none';
            count = item.length - count;
            slider.style.transform = `translateX(${-size * count}px)`;
        }
    })

    //Clients
    const client = document.querySelector(".clients__items");
    const clientItem = document.querySelectorAll(".clients__item");
    const clientBtn = document.querySelectorAll('.clients__button');

    let c = 0;
    let clientSize = clientItem[0].offsetWidth + 25;

    client.style.transform = `translateX(${-clientSize * c}px)`;

    autoPlay = function () {
        clientBtn.forEach(btn => btn.classList.remove('active'));
        c++;
        client.style.transition = '.5s ease-out';
        c = c % clientItem.length;
        client.style.transform = `translateX(${-clientSize * c}px)`;
        clientBtn[c].classList.add('active');

    }
    setInterval(autoPlay, 5000);

    clientBtn.forEach(btn => btn.addEventListener('click', (e) => {
        clientBtn.forEach(btn => btn.classList.remove('active'));
        let count = e.target.dataset.count;
        client.style.transition = '.5s ease-out';
        client.style.transform = `translateX(${-clientSize * count}px)`;
        clientBtn[count].classList.add('active');
    }))
}