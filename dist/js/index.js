function initFE() {
    mainSliderInit()
    detailsliderInit()
    imgSliderInit()

    recipeSliderInit()
    productSliderInit()
   contentSliderInit()
    mobileAccordeon()
    closeByOutsideSelect()
    closeByClickOutside('.mainmenu', '.mainmenubtn')
    closeByClickOutside('.catalogpage__aside', '.js-mobilefilter')
  /*   fixElement(false, 750, 'mobpriceFixed', 'fixed')
    fixElement(300, false, 'headermain', 'fixed')
    fixElement(300, false, 'headercontainer', 'fixed')
    fixElement(false, 0, 'mobilenav', 'fixed') */
  }

$(document).ready(function() {
    $(".arrowmenu").click(function () {
        $(".headermenu__wrapper").animate({
          scrollLeft: "+=226px",
        })
      })

     $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    
    $("#toTop").click(function() {
        $("html, body").animate({scrollTop: 0}, 400);
     });

    $(".asidemenubutton .mainmenuLevelOne__link").on('click', function(e) {
        e.preventDefault()
        $(this).closest('.asidemenubutton').siblings('.asidemenu').toggleClass('active')
        $(this).toggleClass('active')
     });


    document.querySelectorAll('[data-toggle="password"]').forEach(item => {
        item.addEventListener('click', event => {
            let inp = item.previousElementSibling
            if (inp.type === "password") {
                inp.type = "text";
                console.log(item)
                item.classList.add("active")
            } else {
                inp.type = "password";
                item.classList.remove("active")

            }
        })
      })

  $('.js-mobilefilter').on('click', function(e) {
      e.preventDefault()
      $(this).toggleClass('active')
      $('.catalogpage__aside').toggleClass('active')
  })
 
 /*  $('.headermain__contacts').on('click', function(e) {
      e.preventDefault()
      $(this).toggleClass('active')
      $('.contacts__dropdown').slideToggle()
  }) */

  

  $('button.mainmenubtn').on('click', function(e) {
      $(this).toggleClass('active')
      $('.jsbackdrop').toggleClass('active')
      $('.mainmenu').toggleClass('active')
  })
  $('.jscatalog .js-toggler').on('click', function(e) {
      $(this).closest('.jscatalog').toggleClass('active')
      $(this).closest('.jscatalog').siblings('.mobilemenu__level2').toggleClass('active')
  })
  $('.mobilemenu__level2 .js-toggler').on('click', function(e) {
      $(this).closest('.mobilemenu__content').toggleClass('active')
      $(this).closest('.mobilemenu__item').find('.mobilemenu__level3').slideToggle()
  })

  $('.menubutton').on('click', function(e) {
      $(this).toggleClass('active')
      $('.mobilemenu').toggleClass('active')
      $('.jsbackdrop').toggleClass('active')
      $('.mobilemenu__level2').removeClass('active')
      $('.mobilemenu__content').removeClass('active')

  })
  $('.jsbackdrop').on('click', function(e) {
      $(this).removeClass('active')
      $('.mobilemenu').removeClass('active')
      $('.menubutton').removeClass('active')
      $('.mobilemenu__level2').removeClass('active')
      $('.mobilemenu__content').removeClass('active')

  })
  $('.haederbanner__close').on('click', function(e) {
        e.preventDefault();
      $(this).closest('.haederbanner').hide()
  })


  
    $('.reviesblock__stars_off').each(function(){
        let wrapper = $(this)
        wrapper.find('.fa').each(function(index) {
            let fa = $(this)
            let rating =  fa.closest('[data-rating]').data('rating')
            if(index < rating){
                $(this).addClass('active')
            } else {
                return false;
            }
    })

});

  $('.productcard .cardrating').each(function() {
      $(this).find('span.stars-active').css('width', $(this).find('.cardrating__value').text() * 11.2);
  });
  $('.detailinfo__reviews .cardrating').each(function() {
      $(this).find('span.stars-active').css(
          'width',
          $(this).find('.cardrating__value').text() * ($(this).find('.fa-star').width() + 2.1)
      );
  });
  $('.reviews__rating .cardrating').each(function() {
      $(this).find('span.stars-active').css(
          'width',
          $(this).find('.cardrating__value').text() * 18);
  });

  $("input[type=tel]").mask("+7 ___ ___ __ __");

  lightbox.option({
    'resizeDuration': 0,
  })

  function incrementValue(e) {
      e.preventDefault();
      var fieldName = $(e.target).data('field');
      var parent = $(e.target).closest('div');
      var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

      if (!isNaN(currentVal)) {
          parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
      } else {
          parent.find('input[name=' + fieldName + ']').val(1);
      }
  }

  function decrementValue(e) {
      e.preventDefault();
      var fieldName = $(e.target).data('field');
      var parent = $(e.target).closest('div');
      var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

      if (!isNaN(currentVal) && currentVal > 1) {
          parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
      } else {
          parent.find('input[name=' + fieldName + ']').val(1);
      }
  }

  $('.quantity').on('click', '.quantity-plus', function(e) {
      incrementValue(e);
  });

  $('.quantity').on('click', '.quantity-minus', function(e) {
      decrementValue(e);
  });

  

(function($) {
  $(function() {

      $('.js-tabsheader').on('click', 'li:not(.active)', function() {
          $(this)
              .addClass('active').siblings().removeClass('active')
              .closest('div.js-tabs').find('div.js-tabscontent').removeClass('active').eq($(this).index()).addClass('active');
      });

  });
})(jQuery);

(function($) {
  $(function() {

      $('[data-headertabs]').on('click', 'li:not(.active)', function() {
          $(this)
              .addClass('active').siblings().removeClass('active')
              .closest('[data-tabs]').find('[data-contenttabs]').removeClass('active').eq($(this).index()).addClass('active');
      });

  });
})(jQuery);


(function($) {
  $(function() {

      $('.sitetabs__header ul').on('click', 'li:not(.active)', function() {
          $(this)
              .addClass('active').siblings().removeClass('active')
              .closest('div.sitetabs').find('div.sitetabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });

  });
})(jQuery);


});






  function mainSliderInit() {
    var swiper = new Swiper('[data-slider="mainslider"]', {
        loop: 1,
        /* effect: 'fade',
  fadeEffect: {
    crossFade: true
  }, */
        navigation: {
          nextEl: '.mainslider__right',
          prevEl: '.mainslider__left',
        },
        pagination: {
            el: ".mainslider__dots",
          },
      });
      
   
}

function contentSliderInit() {
    const swiper = new Swiper(".pagecontent__images.swiper", {
        pagination: {
            el: ".mainslider__dots",
          },

    });
}

function detailsliderInit() {
    const swiper = new Swiper(".detailswiperpreview", {
        spaceBetween: 9,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        slidesPerView: "auto",
        mousewheel: true,
        direction: 'vertical',
        freeMode: true,
        watchSlidesProgress: true,

    });
    const swiper2 = new Swiper(".detailswiper", {

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
        pagination: {
            el: ".detail__dots",
            clickable: true
        },

    });

    $(function() {
        if ($(window).width() >= 1024) {
            $(".zoom-box").each(function() {
                $(this).zoom();
            })
        }
     
    })
}


function productSliderInit() {

    



    $('.productslider__slider').each(function() {
        
        $(this).slick({
            dots: false,
            arrows: true,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
           /*  autoplay: true,
            autoplaySpeed: 3000, */
            swipe: false,
            nextArrow: $(this).closest('.productslider').find('.sliderarrows__right'),
            prevArrow: $(this).closest('.productslider').find('.sliderarrows__left'),
            responsive: [
                {
                    breakpoint: 1280,
                    slidesToShow: 3,     
                    slidesToScroll: 1,       
                },
                {
                    breakpoint: 1023,
                     settings: "unslick"                 
                },

            ]
        })
    })
    /* $('.productslider__modalslider').each(function() {
        $(this).slick({
            dots: false,
            arrows: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            
            autoplay: true,
            autoplaySpeed: 3000,
            swipe: false,
            nextArrow: $(this).closest('.productslider').find('.sliderarrows__right'),
            prevArrow: $(this).closest('.productslider').find('.sliderarrows__left'),
            responsive: [

                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                    }
                },

            ]
        })
    }) */


}

function recipeSliderInit() {
    $('.recipeslider__slider').each(function() {
        $(this).slick({
            dots: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            
        /*     autoplay: true,
            autoplaySpeed: 3000, */
            infinite: true,
            swipe: false,
            nextArrow: $(this).closest('.recipeslider').find('.sliderarrows__right'),
            prevArrow: $(this).closest('.recipeslider').find('.sliderarrows__left'),
            responsive: [
                {
                    breakpoint: 1280,
                    slidesToShow: 2,            
                },
                {
                    breakpoint: 1023,
                     settings: "unslick"                 
                },

         

        ]
        })
    })

}


function imgSliderInit() {
    $('.imgslider__slider').each(function() {
        $(this).slick({
            dots: false,
            arrows: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            nextArrow: $(this).closest('.imgslider').find('.beyond-button-next'),
            prevArrow: $(this).closest('.imgslider').find('.beyond-button-prev'),
            responsive: [{
                    breakpoint: 1530,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        dots: true,
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
            ]
        })
    })
}



function fixElement(topDesktop, topMobile, elementId, className) {
  if (document.getElementById(elementId)) {
  if (window.innerWidth >= 1023) {
    if (topDesktop === 0) {
        document.getElementById(elementId).classList.add(className)
    } else {
        if(topDesktop) {
            window.addEventListener('scroll', (event) => {
            scroll = window.scrollY
            if (scroll >= topDesktop) {
                document.getElementById(elementId).classList.add(className)
            } else {
                document.getElementById(elementId).classList.remove(className)
            }
        
            });
        }
    }
   
    } else {
        if (topMobile === 0) {
           document.getElementById(elementId).classList.add(className)
        } else {
            if (topMobile) {
                window.addEventListener('scroll', (event) => {
                    scroll = window.scrollY
                    if (scroll >= topMobile) {
                      document.getElementById(elementId).classList.add(className)
                    } else {
                      document.getElementById(elementId).classList.remove(className)
                    }
              
                  });
            }
        }
    
     
    }
  }
}






function mobileAccordeon() {
  if ($(window).width() < 1024) {
      $('.infobadge__main').on('click', function() {
          $(this).toggleClass('active')
          $(this).closest('.infobadge').find('.infobadge__accordeon').slideToggle()
      })
  }
}





/**/



function closeByClickOutside(element, button) {
  $(document).click(function(event) {
      if (!$(event.target).closest(`${element},${button}`).length) {
          $(button).removeClass('active')
          $(element).removeClass('active')
      }
  });
  
  $(document).keyup(function(e) {
      if (e.key === "Escape") { // escape key maps to keycode `27`
          $(button).removeClass('active')
          $(element).removeClass('active')
      }
  });
}
function closeByOutsideSelect() {
  $(document).click(function(event) {
      if (!$(event.target).closest(`.dropdown-select__list,.dropdown-select__title`).length) {
          $('.dropdown-select__list').hide()
         
      }
  });
  
  $(document).keyup(function(e) {
      if (e.key === "Escape") { // escape key maps to keycode `27`
          $('.dropdown-select__list').hide()
      }
  });
}


   
   
window.addEventListener('load', function () {
    initFE()
});


