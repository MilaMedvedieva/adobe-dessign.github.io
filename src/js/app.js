(function($) {
    function ThemeScript() {

        let self = this;
        let body = $('body');

        function initMobileMenu(){
            let toggleIcon = $('.header__toggle');
            let mobileMenu = $('.mobileMenu');

            toggleIcon.on( "click", function() {
                toggleIcon.toggleClass('active');
                mobileMenu.toggleClass('show');
                body.toggleClass('hidden');
            } );

            $('ul li a[href^="#"]').on("click", function (event) {
                event.preventDefault();
            });

            $( ".mobileMenu li" ).each(function( index ) {
                $(this).on('click', function (e) {
                    let hasSubmenu =  $(this).has('has-children');
                    if(hasSubmenu){
                        $(this).toggleClass('show');
                    }
                });
            });
        }
        function initSliders(){
            let swiperOptions = {
                loop: true,
                slidesPerView: 4,
                centeredSlides: true,
                spaceBetween: 15,
                initialSlide: 4,
                speed: 5000,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false
                },
                breakpoints: {
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 15
                    },
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    }
                }
            };

            new Swiper(".mySliderOne", swiperOptions);
            new Swiper(".mySliderTwo", swiperOptions);
        }

        self.run = function() {
            initMobileMenu();
            initSliders();
        }

    }


    $(function() {
        let ts = new ThemeScript();
        ts.run();
    });

})(jQuery);
