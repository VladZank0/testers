function burger(){
    const burgerButton = document.querySelector('.burger-btn');
    const closeBurgerButton = document.querySelector('.close-burger-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    
    const burgerMenu = () => {
    
        setTimeout(() => {
            document.body.classList.toggle('overflowY-hidden');
        }, 300);
        
        if(mobileNav.classList.contains('mobile-nav_active')) {
            mobileNav.classList.remove('mobile-nav_active');
             
                burgerButton.style.display = '';
                closeBurgerButton.style.display = 'none';
            
        } else {
            mobileNav.classList.add('mobile-nav_active');
             
                closeBurgerButton.style.display = 'flex';
                burgerButton.style.display = 'none';
            
        }
    }
    
    burgerButton.addEventListener('click', burgerMenu);
    closeBurgerButton.addEventListener('click', burgerMenu);
}
burger();

function faq(){
    const faqQuestion = document.querySelectorAll('.faq-question');
    if(faqQuestion.length){
        faqQuestion.forEach(function(link, index) {
            link.addEventListener('click', function(event) {
        
                const svg = this.querySelector('svg');
                const faqAnswer = this.nextElementSibling;
        
                if(faqAnswer.classList.contains('open')) {
                    faqAnswer.classList.remove('open');
                    svg.classList.remove('rotate');
                } else {
                    faqAnswer.classList.add('open');
                    svg.classList.add('rotate');
                }
            });
        });
    }
}
faq();


//! Слайдеры

const advantage_slider = new Swiper('.advantage-slider', {
    watchOverflow: true,
    slidesPerView: 'auto',
    speed: 600,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".advantage-slider__btn.swiper-button-next",
        prevEl: ".advantage-slider__btn.swiper-button-prev",
    },
    on:{
        slideChange: () => {
            swiperIcon();
        }
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        769:{
            slidesPerView: 'auto',
        }
    }
})
const swiperIcon = () => {
    const icon = document.querySelector('.swipe-icon');
    const hideIcon = () => {
        icon.classList.add('swipe-icon_hidden');
    }
    if(icon){
        hideIcon();
    }
}

const clients_slider = new Swiper('.clients-slider', {
    watchOverflow: true,
    slidesPerView: 2,
    spaceBetween: 24,
    speed: 700,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".clients-slider__btn.swiper-button-next",
        prevEl: ".clients-slider__btn.swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        769:{
            slidesPerView: 2
        }
    }
})
const employee_slider = new Swiper('.employee-slider', {
    watchOverflow: true,
    slidesPerView: 3,
    spaceBetween: 24,
    speed: 700,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".employee-slider__btn.swiper-button-next",
        prevEl: ".employee-slider__btn.swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        769:{
            slidesPerView: 2
        },
        1000:{
            slidesPerView: 3
        }
    }
})
const reviews_slider = new Swiper('.reviews-slider', {
    watchOverflow: true,
    slidesPerView: 'auto',
    spaceBetween: 48,
    speed: 600,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".reviews-slider__btn.swiper-button-next",
        prevEl: ".reviews-slider__btn.swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        769:{
            slidesPerView: 3
        }
    }
})
function initSwipers() {
    const sliders = document.querySelectorAll('.grid-slider');
    let swiperInstances = [];

    function handleResize() {
        const screenWidth = window.innerWidth;

        sliders.forEach((slider, index) => {
            if (screenWidth <= 900 && !swiperInstances[index]) {
                const swiper = new Swiper(slider, {
                    slidesPerView: 1,
                    watchOverflow: true,
                    spaceBetween: 48,
                    speed: 600,
                    pagination: {
                        el: slider.querySelector('.swiper-pagination'),
                        clickable: true,
                    },
                    navigation: {
                        nextEl: slider.querySelector('.grid-slider__btn.swiper-button-next'),
                        prevEl: slider.querySelector('.grid-slider__btn.swiper-button-prev'),
                    },
                });
                swiperInstances[index] = swiper;
            } else if (screenWidth > 900 && swiperInstances[index]) {
                swiperInstances[index].destroy(true, true);
                swiperInstances[index] = null;
            }
        });
    }

    document.addEventListener('DOMContentLoaded', handleResize);
    window.addEventListener('resize', handleResize);
}

if (document.querySelectorAll('.grid-slider').length) {
    initSwipers();
}
