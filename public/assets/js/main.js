/*----------------------------------------------
*
* [Main Scripts]
*
* Theme    : Netstorm
* Version  : 1.0
* Author   : Themeland
* Support  : hridoy1272@gmail.com
* 
----------------------------------------------*/

/*----------------------------------------------

[ALL CONTENTS]

1. Preloader
2. Responsive Menu
3. Navigation 
4. Slides
5. Load More
6. Shuffle
7. Contact Form

/*----------------------------------------------                                        
1. Preloader
----------------------------------------------*/

$(window).on('load',function () {
    'use strict';

    /*----------------------------------------------
    2. Preloader
    ----------------------------------------------*/
    (function ($) {
        'use strict';

        $(window).on('load', function () {
            $('#netstorm-preloader').addClass('loaded');
        })

    }(jQuery));

    /*----------------------------------------------
    2. Responsive Menu
    ----------------------------------------------*/
    // (function ($) {

    //     'use strict';

    //     function navResponsive() {

    //         let navbar = $('.navbar .items');
    //         let menu = $('#menu .items');

    //         menu.html('');
    //         navbar.clone(true).appendTo(menu);
    //         $('.menu .icon-arrow-right').removeClass('icon-arrow-right').addClass('icon-arrow-down');
    //     }

    //     navResponsive();

    //     $(window).on('resize', function () {
    //         navResponsive();
    //     })

    //     $('.menu .dropdown-menu').each(function () {

    //         var children = $(this).children('.dropdown').length;
    //         $(this).addClass('children-' + children);
    //     })


    //     $('.menu .nav-item.dropdown').each(function () {

    //         var children = $(this).children('.nav-link');
    //         children.addClass('prevent');
    //     })

    //     $(document).on('click', '#menu .nav-item .nav-link', function (event) {

    //         if ($(this).hasClass('prevent')) {
    //             event.preventDefault();
    //         }

    //         var nav_link = $(this);

    //         nav_link.next().toggleClass('show');

    //         if (nav_link.hasClass('smooth-anchor')) {
    //             $('#menu').modal('hide');
    //         }
    //     })
    // }(jQuery));

    /*----------------------------------------------
    3. Navigation
    ----------------------------------------------*/
    (function ($) {

        'use strict';

        var position = $(window).scrollTop();
        var toTop = $('#scroll-to-top');
        var navbar = $('.navbar');

        $(document).ready(function () {
            if (position > 0) {
                navbar.hide();
            }
        })

        toTop.hide();

        $(window).scroll(function () {

            let scroll = $(window).scrollTop();
            let navbar = $('.navbar');

            if (!navbar.hasClass('relative')) {

                if (scroll > position) {

                    if (window.screen.width >= 767) {

                        navbar.fadeOut('fast');

                    } else {

                        navbar.addClass('navbar-sticky');
                    }

                    toTop.fadeOut('fast');

                } else {

                    if (position < 76) {

                        navbar.slideDown('fast').removeClass('navbar-sticky');

                    } else {

                        navbar.slideDown('fast').addClass('navbar-sticky');
                    }


                    if (position > 1023) {

                        if (window.screen.width >= 767) {

                            toTop.fadeIn('fast');
                        }

                    } else {

                        toTop.fadeOut('fast');

                    }

                }

                position = scroll;

            }
        })

        $('.nav-link').each(function () {
            let href = $(this).attr('href');
            // console.log('href',href);
            if (href.length > 1 && href.indexOf('#') != -1) {
                $(this).addClass('smooth-anchor');
            }
        })

        $(document).on('click', '.smooth-anchor', function (event) {

            event.preventDefault();

            $('html, body').animate({

                scrollTop: $($.attr(this, 'href')).offset().top

            }, 500);
        })

        $('.dropdown-menu').each(function () {

            let dropdown = $(this);

            dropdown.hover(function () {

                dropdown.parent().find('.nav-link').first().addClass('active');

            }, function () {

                dropdown.parent().find('.nav-link').first().removeClass('active');

            })
        })
    }(jQuery));

    /*----------------------------------------------
    4. Slides
    ----------------------------------------------*/
    (function ($) {

        'use strict';

        setTimeout(function () {

            $('.no-slider .left').addClass('init');

        }, 1200)

        var animation = function (slider) {

            let image = $(slider + ' .swiper-slide img');
            let title = $(slider + ' .title');
            let description = $(slider + ' .description');
            let btn = $(slider + ' .btn');
            let nav = $(slider + ' nav');

            image.toggleClass('aos-animate');
            title.toggleClass('aos-animate');
            description.toggleClass('aos-animate');
            btn.toggleClass('aos-animate');
            nav.toggleClass('aos-animate');

            setTimeout(function () {

                image.toggleClass('aos-animate');
                title.toggleClass('aos-animate');
                description.toggleClass('aos-animate');
                btn.toggleClass('aos-animate');
                nav.toggleClass('aos-animate');

                AOS.refresh();

            }, 100)

            if ($('.full-slider').hasClass('animation')) {

                $('.full-slider .left').addClass('off');
                $('.full-slider .left').removeClass('init');

                setTimeout(function () {

                    $('.full-slider .left').removeClass('off');

                }, 200)

                setTimeout(function () {

                    $('.full-slider .left').addClass('init');

                }, 1000)

            } else {

                $('.full-slider .left').addClass('init');
            }
        }

        var fullSlider = new Swiper('.full-slider', {
            preventClicks: true,
            preventClicksPropagation: true,
            observer: true,
            observeParents: true,
            autoplay: {
                delay: 10000,
            },
            loop: false,
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: {
                el: '.swiper-pagination'
            },
            navigation: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            keyboard: {
                enabled: true,
                onlyInViewport: false
            },
            
            on: {
                init: function () {
                    animation('.full-slider')

                    let pagination = $('.full-slider .swiper-pagination');

                    pagination.hide();

                    setTimeout(function () {

                        pagination.show();

                    }, 2000)

                },
                slideChange: function () {

                    animation('.full-slider')
                }
            }
        })

        var midSlider = new Swiper('.slider-mid', {
            preventClicks: true,
            preventClicksPropagation: true,
            observer: true,
            observeParents: true,
            autoplay: true,
            loop: false,
            slidesPerView: 1,
            spaceBetween: 30,
            breakpoints: {
                767: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                1023: {
                    slidesPerView: 4,
                    spaceBetween: 30
                }
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        })

        var minSlider = new Swiper('.slider-min', {
            preventClicks: true,
            preventClicksPropagation: true,
            observer: true,
            observeParents: true,
            autoplay: {
                delay: 5000,
            },
            loop: true,
            slidesPerView: 2,
            spaceBetween: 15,
            breakpoints: {
                424: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 15
                },
                1023: {
                    slidesPerView: 4,
                    spaceBetween: 15
                },
                1199: {
                    slidesPerView: 5,
                    spaceBetween: 15
                }
            },
            pagination: false,
        })

        var sliderDisabled = new Swiper('.no-slider', {
            preventClicks: false,
            preventClicksPropagation: false,
            observer: false,
            observeParents: false,
            autoplay: false,
            loop: false,
            keyboard: false,
            grabCursor: false,
            allowTouchMove: false,
            on: {
                init: function () {
                    animation('.no-slider')
                }
            }
        })
    }(jQuery));

    /*----------------------------------------------
    5. Load More
    ----------------------------------------------*/
    (function ($) {

        'use strict';

        $(".load-more .item").slice(0, 4).show();
 
        $("#load-btn").on('click', function (e) {

            e.preventDefault();

            $(".load-more .item:hidden").slice(0, 4).slideDown();

            if ($(".load-more .item:hidden").length == 0) {
                $("#load-btn").fadeOut('slow');
            }

        });
    }(jQuery));

   
    /*----------------------------------------------
    7. Contact Form
    ----------------------------------------------*/
    (function ($) {

        'use strict';

        var form = $('#contact-form');

        var formMessages = $('.form-message');

        $(form).submit(function (e) {

            e.preventDefault();

            var formData = $(form).serialize();

            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
                .done(function (response) {

                    $(formMessages).removeClass('error');
                    $(formMessages).addClass('success');

                    $(formMessages).text(response);

                    $('#contact-form input,#contact-form textarea').val('');
                })
                .fail(function (data) {

                    $(formMessages).removeClass('success');
                    $(formMessages).addClass('error');

                    if (data.responseText !== '') {
                        $(formMessages).text(data.responseText);
                    } else {
                        $(formMessages).text('Oops! An error occured and your message could not be sent.');
                    }
                });
        });

    }(jQuery));
    /*----------------------------------------------
    7. Watch video
    ----------------------------------------------*/
    (function ($) {
        var $videoSrc;
        $('.video-btn').click(function () {
            $videoSrc = $(this).data("src");
        });


        // when the modal is opened autoplay it  
        $('#myModal').on('shown.bs.modal', function (e) {

            // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })



        // stop playing the youtube video when I close the modal
        $('#myModal').on('hide.bs.modal', function (e) {
            // a poor man's stop video
            $("#video").attr('src', $videoSrc);
        })

    }(jQuery));

    /*----------------------------------------------
   8. Timeline
   ----------------------------------------------*/
    (function ($) {
    //     $(document).ready(function () {
    //         var mySwiper = new Swiper(".swiper", {
    //           autoHeight: true,
    //           autoplay: {
    //             delay: 5000,
    //             disableOnInteraction: false
    //           },
    //           speed: 500,
    //           direction: "horizontal",
    //           navigation: {
    //             nextEl: ".swiper-button-next",
    //             prevEl: ".swiper-button-prev"
    //           },
    //           pagination: {
    //             el: ".swiper-pagination",
    //             type: "progressbar"
    //           },
    //           loop: false,
    //           effect: "slide",
    //           spaceBetween: 30,
    //           on: {
    //             init: function () {
    //               $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
    //               $(".swiper-pagination-custom .swiper-pagination-switch").eq(0).addClass("active");
    //             },
    //             slideChangeTransitionStart: function () {
    //               $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
    //               $(".swiper-pagination-custom .swiper-pagination-switch").eq(mySwiper.realIndex).addClass("active");
    //             }
    //           }
    //         });
    //         $(".swiper-pagination-custom .swiper-pagination-switch").click(function () {
    //           mySwiper.slideTo($(this).index());
    //           $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
    //           $(this).addClass("active");
    //         });
    //       });
    }(jQuery));

     /*----------------------------------------------
    9. PlayGame
    ----------------------------------------------*/
    (function ($) {
        // when the modal is opened autoplay it  
        // $('#myModalPlayGame').on('shown.bs.modal', function (e) {
        // })



        // stop playing the youtube video when I close the modal
        // $('#myModalPlayGame').on('hide.bs.modal', function (e) {
        // })

    }(jQuery));

});

// --------------

(function ($) {
    $().ready(function(){
        $(window).scroll(function() {
            if($('body').scrollTop()+$(window).height() >= $('body').height() - 20) {
                // Kéo đến chỗ hiện mới load gif
            }
        });
        //console.log($('.imgaeCanvas').length)
        $('.imgaeCanvas').each(function(){
            var totalImage = parseInt($(this).attr('quantity'));
            var currentIndex = 1;
            var canvas = $(this)[0];
            var ctx = canvas.getContext('2d');
            var speed = 30;
            var imgName = $(this).attr('imgName'); // Tên hình để cộng chuỗi vào image.src
            var ext = $(this).attr('ext'); // Tên hình để cộng chuỗi vào image.src
            var active = true;
            function loadGif(animation){
                if(!animation)
                    currentIndex = 140;
                const image = new Image(); 
                image.onload = drawImageActualSize; 
                image.src = imgName + String(currentIndex).padStart(3, '0')+ ext;
                currentIndex ++;
                if(currentIndex >= totalImage){
                    currentIndex = 1;
                    active = false;
                }
                else {
                    if(active && animation)
                        setTimeout(loadGif,speed,true);
                    else
                        active = false;
                }
            }
            loadGif(false);
            $(this).mouseenter(function(){
                if(!active){
                    active = true;
                    loadGif(true);
                }
            });
            
            function drawImageActualSize() {
                ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
            }
        });
    })
    
}(jQuery));
// --------------

(function ($) {
    $().ready(function(){
        $(window).scroll(function() {
            if($('body').scrollTop()+$(window).height() >= $('body').height() - 20) {
                // Kéo đến chỗ hiện mới load gif
            }
        });
        // console.log('aaa',$('.imageCanvas').length)
        $('.imageCanvas').each(function(){
            var totalImage = parseInt($(this).attr('quantity'));
            var currentIndex = 1;
            var canvas = $(this)[0];
            var ctx = canvas.getContext('2d');
            var speed = 30;
            var imgName = "/" + $(this).attr('imgname'); // Tên hình để cộng chuỗi vào image.src
            var ext = $(this).attr('ext'); // Tên hình để cộng chuỗi vào image.src
            var active = true;
            function loadGif(animation){
                if(!animation)
                    currentIndex = 140;
                const image = new Image(); 
                image.onload = drawImageActualSize; 
                image.src = imgName + String(currentIndex).padStart(3, '0')+ ext;
                currentIndex ++;
                if(currentIndex >= totalImage){
                    currentIndex = 1;
                    active = false;
                }
                else {
                    if(active && animation)
                        setTimeout(loadGif,speed,true);
                    else
                        active = false;
                }
            }
            loadGif(false);
            $(this).mouseenter(function(){
                if(!active){
                    active = true;
                    loadGif(true);
                }
            });
            
            function drawImageActualSize() {
                ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
            }
        });
    })
    
}(jQuery));
	 /*----------------------------------------------
    6. Shuffle
    ----------------------------------------------*/
    $().ready(function(){
        loadItemABC();  
    });
      function loadItemABC(){
        setTimeout(function(){
            // console.log($('.explore-item'));
            $('.explore-area').each(function (index) {
                if(document.querySelector('.explore-items')) {
                    document.querySelector('.explore-items')
                    var count = index + 1;
                    console.log('count',count);
                    $(this).find('.explore-items').removeClass('explore-items').addClass('explore-items-' + count);
                    // console.log('aaaa',$(this).find('.explore-items').removeClass('explore-items'));
                    $(this).find('.explore-item').removeClass('explore-item').addClass('explore-item-' + count);
                    $(this).find('.explore-btn').removeClass('explore-btn').addClass('explore-btn-' + count);
                    var Shuffle = window.Shuffle;
                    var Filter = new Shuffle(document.querySelector('.explore-items-' + count), {
                        itemSelector: '.explore-item-' + count,
                        buffer: 1,
                    })
        
                    $('.explore-btn-' + count).on('change', function (e) {
        
                        var input = e.currentTarget;
        
                        if (input.checked) {
                            Filter.filter(input.value);
                        }
                    })
                }
        
            });
            if($('.explore-area').length == 0){
                loadItemABC();
            }
        },1000);
      }


    //// ========================================////
// (function ($) {
//     $().ready(function(){
//         $('#basic').flagStrap();

//         $('.select-country').flagStrap({
//             countries: {
//                 "US": "USD",
//                 "AU": "AUD",
//                 "CA": "CAD",
//                 "SG": "SGD",
//                 "GB": "GBP",
//             },
//             buttonSize: "btn-sm",
//             buttonType: "btn-info",
//             labelMargin: "10px",
//             scrollable: false,
//             scrollableHeight: "350px"
//         });
        
//         $('#advanced').flagStrap({
//             buttonSize: "btn-lg",
//             buttonType: "btn-primary",
//             labelMargin: "20px",
//             scrollable: false,
//             scrollableHeight: "350px"
//         });
//     });
// }(jQuery));
