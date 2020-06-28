// Hover Services add/remove //
$(document).ready(function() {
    $(".our_service_img").hover(function(event) {
        var data = $(this).attr('data-service');
        $('.our_service_content').removeClass('active');
        $('.our_service_content').each(function(i) {
            if ($(this).attr('data-service') == data) {
                $(this).addClass('active');
            }
        });
    });
});
// Click SlideToggle //
$(document).ready(function() {
    $('.search_main img').click(function(event) {
        $('.form_search').toggleClass('active');
    });
});
// Owl2 SlideShow //
$(document).ready(function() {
    $('.owl-slideshow-main').owlCarousel({
        items: 1,
        lazyLoad: true,
        loop: true,
        margin: 10,
        dots: true,
        responsiveClass: true,
        nav: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false
    });
    $('.owl-pr-cate').owlCarousel({
        items: 1,
        lazyLoad: true,
        loop: true,
        margin: 0,
        dots: false,
        responsiveClass: true,
        nav: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        navText: ['<img src="themes/1/statics/images/nav_owl_left.svg" alt="#" class="img-fluid" />', '<img src="themes/1/statics/images/nav_owl_left.svg" alt="#" class="img-fluid" />'],
    });
    $('.owl-info-img').owlCarousel({
        items: 1,
        lazyLoad: true,
        loop: true,
        margin: 0,
        dots: true,
        responsiveClass: true,
        nav: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        navText: ['<img src="themes/1/statics/images/nav_owl_left.svg" alt="#" class="img-fluid" />', '<img src="themes/1/statics/images/nav_owl_left.svg" alt="#" class="img-fluid" />'],
    });
});
// End Owl2 Slideshow //

// Scroll To Top //
$(document).ready(function() {
    $(".scroll_top_icon").click(function(event) {
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });
    // Hide,Show ScrollToTop
    var num = 500;
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > num) {
            $('.header_main,.scroll_top').addClass('fixed');
        } else {
            $('.header_main,.scroll_top').removeClass('fixed');
        }
    });
});
// End Scroll To Top //

// Owl Sync //
$(document).ready(function() {

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 3000,
        smartSpeed: 2000,
        nav: false,
        autoplay: true,
        dots: false,
        loop: true,
        responsiveRefreshRate: 500,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: true,
            smartSpeed: 2000,
            slideSpeed: 3000,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 500,
            navText: ['<img src="themes/1/statics/images/nav_owl_left.svg" alt="#" class="img-fluid" />', '<img src="themes/1/statics/images/nav_owl_left.svg" alt="#" class="img-fluid" />'],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                1024: {
                    items: 1,
                },
                1025: {
                    items: 1,
                }
            }
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 1000, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 1000, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 1000, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 1000, true);
    });
});

$(document).ready(function() {

    var sync1 = $("#sync1_info");
    var sync2 = $("#sync2_info");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 3000,
        smartSpeed: 2000,
        nav: false,
        autoplay: 5000,
        dots: true,
        loop: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsiveRefreshRate: 500,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: false,
            smartSpeed: 2000,
            slideSpeed: 3000,
            autoplay: 5000,
            animateOut: 'fadeOut',
            animateIn: 'zoomIn',
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 500,
            navText: ['<img src="themes/1/statics/images/nav_owl_left.svg" alt="#" class="img-fluid" />', '<img src="themes/1/statics/images/nav_owl_left.svg" alt="#" class="img-fluid" />'],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                1024: {
                    items: 1,
                },
                1025: {
                    items: 1,
                }
            }
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 1000, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 1000, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 1000, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 1000, true);
    });
});

$(document).ready(function() {

    var sync1 = $("#sync1_products");
    var sync2 = $("#sync2_products");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 5000,
        smartSpeed: 5000,
        // dragEndSpeed:5000,
        touchDrag: false,
        nav: false,
        autoplay: 5000,
        fluidSpeed: 3000,
        dots: false,
        loop: true,
        // animateOut: 'fadeOut',
        // animateIn: 'fadeIn',
        responsiveRefreshRate: 500,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: true,
            nav: false,
            //loop: true,
            smartSpeed: 5000,
            slideSpeed: 5000,
            // dragEndSpeed:5000,
            // autoplay: 5000,
            fluidSpeed: 3000,
            // animateOut: 'fadeOut',
            // animateIn: 'fadeIn',
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 500,
            navText: ['<img src="themes/1/statics/images/nav_owl_left.svg" alt="#" class="img-fluid" />', '<img src="themes/1/statics/images/nav_owl_left.svg" alt="#" class="img-fluid" />'],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                1024: {
                    items: 1,
                },
                1025: {
                    items: 1,
                }
            }
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 2000, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 1000, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 1000, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 1000, true);
    });


});
$(document).ready(function() {

    var sync1 = $("#sync1_info");
    var sync2 = $("#sync2_info");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 3000,
        smartSpeed: 2000,
        nav: false,
        autoplay: 5000,
        dots: true,
        loop: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsiveRefreshRate: 500,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: false,
            smartSpeed: 2000,
            slideSpeed: 3000,
            autoplay: 5000,
            animateOut: 'fadeOut',
            animateIn: 'zoomIn',
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 500,
            navText: ['<img src="themes/1/statics/images/nav_owl_left.svg" alt="#" class="img-fluid" />', '<img src="themes/1/statics/images/nav_owl_left.svg" alt="#" class="img-fluid" />'],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                1024: {
                    items: 1,
                },
                1025: {
                    items: 1,
                }
            }
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 1000, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 1000, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 1000, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 1000, true);
    });
});

$(document).ready(function() {

    var sync1 = $("#sync1_products_details");
    var sync2 = $("#sync2_products_details");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 3000,
        smartSpeed: 2000,
        nav: false,
        autoplay: 5000,
        dots: false,
        loop: true,
        responsiveRefreshRate: 500,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: true,
            smartSpeed: 2000,
            slideSpeed: 3000,
            autoplay: 5000,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 500,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 3,
                },
                600: {
                    items: 3,
                },
                768: {
                    items: 3,
                },
                1024: {
                    items: 3,
                },
                1025: {
                    items: 3,
                }
            }
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 1000, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 1000, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 1000, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 1000, true);
    });
});

$(document).ready(function() {

    var sync1 = $("#sync1_gallery_details");
    var sync2 = $("#sync2_gallery_details");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;

    // sync1.owlCarousel({
    //   items : 1,
    //   slideSpeed : 3000,
    //   smartSpeed: 2000,
    //   nav: true,
    //   autoplay: 5000,
    //   dots: true,
    //   loop: true,
    //   responsiveRefreshRate : 500,
    //   navText: ['<img src="themes/1/statics/images/nav_owl_left.svg" alt="#" class="img-fluid" />','<img src="themes/1/statics/images/nav_owl_left.svg" alt="#" class="img-fluid" />'],
    // }).on('changed.owl.carousel', syncPosition);

    sync1.on('initialized.owl.carousel changed.owl.carousel', function(e) {
            if (!e.namespace) {
                return;
            }
            var carousel = e.relatedTarget;
            $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
        })
        .owlCarousel({
            items: 1,
            slideSpeed: 3000,
            smartSpeed: 2000,
            nav: true,
            autoplay: 5000,
            dots: true,
            loop: true,
            responsiveRefreshRate: 500,
            navText: ['<img src="themes/1/statics/images/nav_owl_left.svg" alt="#" class="img-fluid" />', '<img src="themes/1/statics/images/nav_owl_left.svg" alt="#" class="img-fluid" />'],
        }).on('changed.owl.carousel', syncPosition);

    sync2.on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: true,
            smartSpeed: 2000,
            slideSpeed: 3000,
            autoplay: 5000,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 500,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 3,
                },
                600: {
                    items: 3,
                },
                768: {
                    items: 3,
                },
                1024: {
                    items: 3,
                },
                1025: {
                    items: 3,
                }
            }
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 1000, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 1000, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 1000, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 1000, true);
    });
});
// End OWL Sync //

// Scroll To ding fixed //
$(document).ready(function() {
    var target_z = document.getElementsByClassName('item_dinh_bottom')[0].getBoundingClientRect();
    var target_y = document.getElementsByClassName('what_make_us_df_main')[0].getBoundingClientRect();
    $('.icon_dinh_move').find('img').css('transition','none');
    $(window).scroll(function(event) {
        var scrolly = $(window).scrollTop();
        var px_start = target_y.top + 83;
        var px_stop = target_z.top;
        var icon_round = document.getElementsByClassName('icon_round')[0].getBoundingClientRect();
        if (scrolly >= px_start) {
            $('#sticker').hide();
            $('.icon_dinh_move').find('img').show();
            $('.icon_dinh_move').find('img').css('margin-left', icon_round.left - (16 + 16 / 2) + 17);
        }

        if (scrolly < px_start) {
            $('#sticker').show();
            $('.icon_dinh_move').find('img').hide();
        }

        if (scrolly >= px_stop) {
            $('.icon_dinh_move').find('img').hide();
            $('.icon_dinh_bottom').show();
        }

        if (scrolly < px_stop) {
            $('.icon_dinh_bottom').hide();
        }

    });

    $(window).resize(function(){
        var icon_round = document.getElementsByClassName('icon_round')[0].getBoundingClientRect();
        $('.icon_dinh_move').find('img').css('margin-left', icon_round.left - (16 + 16 / 2) + 17);
    });
});
// End Scroll To ding fixed //

// Products Categories Animation //
$(document).ready(function() {
    $('.products_category_item a[href^="#"]').click(function() {
        var target = $(this.hash);
        if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
        if (target.length == 0) target = $('html');
        $('html, body').animate({ scrollTop: target.offset().top - 50 }, 500);
        return false;
    });
    $('.products_category .products_category_item .category').hover(function() {
        var value = $(this).find('>figure>figcaption p').text();
        $('.products_category_title h1').empty();
        $('.products_category_title h1').append(value);
    });
    $('.products_category .products_category_item .category').mouseout(function() {
        $('.products_category_title h1').empty();
        $('.products_category_title h1').append('OUR PRODUTCS');
    });
});

// Swipe //
$(document).ready(function() {
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });
});