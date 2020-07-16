import '../sass/main.scss';
import 'swiper/swiper.scss'
import Swiper from 'swiper';
import AOS from 'aos';

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    allowTouchMove: false,
    speed: 5000,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 480px
        760: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        960: {
            slidesPerView: 6,
            spaceBetween: 60,
        },
        // when window width is >= 640px
        1240: {
            slidesPerView: 7,
            spaceBetween: 60
        }
    }
});

AOS.init({
    duration: 800,
    once: true,
});