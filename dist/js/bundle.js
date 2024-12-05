/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
function initFE() {
  mainSliderInit()
  detailsliderInit()
  imgSliderInit()

  recipeSliderInit()
  productSliderInit()
  contentSliderInit()
  mobileAccordeon()
  closeByOutsideSelect()
  closeByClickOutside('[data-menu="mainmenu"]', '[data-menutoggle="mainmenu"]')
  closeByClickOutside(
    '[data-menu="catalogmenu"]',
    '[data-menutoggle="catalogmenu"]'
  )
  closeByClickOutside(".catalogpage__aside", ".js-mobilefilter")
  /*   fixElement(false, 750, 'mobpriceFixed', 'fixed')
    fixElement(300, false, 'headermain', 'fixed')
    fixElement(300, false, 'headercontainer', 'fixed')
    fixElement(false, 0, 'mobilenav', 'fixed') */
}

$(document).ready(function () {
  $(".arrowmenu").click(function () {
    $(".headermenu__wrapper").animate({
      scrollLeft: "+=226px",
    })
  })

  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $("#toTop").fadeIn()
    } else {
      $("#toTop").fadeOut()
    }
  })

  $("#toTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 400)
  })

  $(".asidemenubutton .mainmenuLevelOne__link").on("click", function (e) {
    e.preventDefault()
    $(this)
      .closest(".asidemenubutton")
      .siblings(".asidemenu")
      .toggleClass("active")
    $(this).toggleClass("active")
  })

  document.querySelectorAll('[data-toggle="password"]').forEach((item) => {
    item.addEventListener("click", (event) => {
      let inp = item.previousElementSibling
      if (inp.type === "password") {
        inp.type = "text"
        console.log(item)
        item.classList.add("active")
      } else {
        inp.type = "password"
        item.classList.remove("active")
      }
    })
  })

  $(".js-mobilefilter").on("click", function (e) {
    e.preventDefault()
    $(this).toggleClass("active")
    $(".catalogpage__aside").toggleClass("active")
  })

  /*  $('.headermain__contacts').on('click', function(e) {
      e.preventDefault()
      $(this).toggleClass('active')
      $('.contacts__dropdown').slideToggle()
  }) */

  /*   $('button.mainmenubtn').on('click', function(e) {
      $(this).toggleClass('active')
      $('.jsbackdrop').toggleClass('active')
      $('.mainmenu').toggleClass('active')
  }) */

  $("[data-menutoggle]").on("click", function (e) {
    e.preventDefault()
    let menu = $(this).data("menutoggle")
    $(`[data-menu=${menu}]`).toggleClass("active")
    $(this).toggleClass("active")
    $(".jsbackdrop").toggleClass("menuactive")
  })
  $(".jsbackdrop").on("click", function (e) {
    $(this).removeClass("active")
    $(this).removeClass("menuactive")
    $("[data-menu]").removeClass("active")
    $("[data-menutoggle]").removeClass("active")
  })

  $(".jscatalog .js-toggler").on("click", function (e) {
    $(this).closest(".jscatalog").toggleClass("active")
    $(this)
      .closest(".jscatalog")
      .siblings(".mobilemenu__level2")
      .toggleClass("active")
  })
  $(".mobilemenu__level2 .js-toggler").on("click", function (e) {
    $(this).closest(".mobilemenu__content").toggleClass("active")
    $(this)
      .closest(".mobilemenu__item")
      .find(".mobilemenu__level3")
      .slideToggle()
  })

  /* $('.menubutton').on('click', function(e) {
      $(this).toggleClass('active')
      $('.mobilemenu').toggleClass('active')
      $('.jsbackdrop').toggleClass('active')
      $('.mobilemenu__level2').removeClass('active')
      $('.mobilemenu__content').removeClass('active')

  }) */
  /*   $('.jsbackdrop').on('click', function(e) {
      $(this).removeClass('active')
      $('.mobilemenu').removeClass('active')
      $('.menubutton').removeClass('active')
      $('.mobilemenu__level2').removeClass('active')
      $('.mobilemenu__content').removeClass('active')

  }) */
  $(".haederbanner__close").on("click", function (e) {
    e.preventDefault()
    $(this).closest(".haederbanner").hide()
  })

  $(".reviesblock__stars_off").each(function () {
    let wrapper = $(this)
    wrapper.find(".fa").each(function (index) {
      let fa = $(this)
      let rating = fa.closest("[data-rating]").data("rating")
      if (index < rating) {
        $(this).addClass("active")
      } else {
        return false
      }
    })
  })

  $(".productcard .cardrating").each(function () {
    $(this)
      .find("span.stars-active")
      .css("width", $(this).find(".cardrating__value").text() * 11.2)
  })
  $(".detailinfo__reviews .cardrating").each(function () {
    $(this)
      .find("span.stars-active")
      .css(
        "width",
        $(this).find(".cardrating__value").text() *
          ($(this).find(".fa-star").width() + 2.1)
      )
  })
  $(".reviews__rating .cardrating").each(function () {
    $(this)
      .find("span.stars-active")
      .css("width", $(this).find(".cardrating__value").text() * 18)
  })

  $("input[type=tel]").mask("+7 ___ ___ __ __")

  lightbox.option({
    resizeDuration: 0,
  })

  function incrementValue(e) {
    e.preventDefault()
    var fieldName = $(e.target).data("field")
    var parent = $(e.target).closest("div")
    var currentVal = parseInt(
      parent.find("input[name=" + fieldName + "]").val(),
      10
    )

    if (!isNaN(currentVal)) {
      parent.find("input[name=" + fieldName + "]").val(currentVal + 1)
    } else {
      parent.find("input[name=" + fieldName + "]").val(1)
    }
  }

  function decrementValue(e) {
    e.preventDefault()
    var fieldName = $(e.target).data("field")
    var parent = $(e.target).closest("div")
    var currentVal = parseInt(
      parent.find("input[name=" + fieldName + "]").val(),
      10
    )

    if (!isNaN(currentVal) && currentVal > 1) {
      parent.find("input[name=" + fieldName + "]").val(currentVal - 1)
    } else {
      parent.find("input[name=" + fieldName + "]").val(1)
    }
  }

  $(".quantity").on("click", ".quantity-plus", function (e) {
    incrementValue(e)
  })

  $(".quantity").on("click", ".quantity-minus", function (e) {
    decrementValue(e)
  })


  ;(function ($) {
    $(function () {
      $("[data-headertabs]").on("click", "a:not(.active)", function (e) {
        e.preventDefault()
        const li = $(this).closest('li')
        $(this)
          .addClass("active")
          li.siblings().find('a').removeClass("active")
          li.closest("[data-tabs]").find("[data-contenttabs]").removeClass("active").eq(li.index()).addClass("active")
      })
    })
  })(jQuery)

})

function mainSliderInit() {
  var swiper = new Swiper('[data-slider="mainslider"]', {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  })

  $(".mainslider .swiper-pagination-bullet").css(
    "height",
    100 / $(".mainslider .swiper-slide").length + "%"
  )
}

function contentSliderInit() {
  const swiper = new Swiper(".pagecontent__images.swiper", {
    pagination: {
      el: ".mainslider__dots",
    },
  })
}

function detailsliderInit() {
  const swiper = new Swiper(".detailswiperpreview", {
    spaceBetween: 9,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    slidesPerView: "auto",
    mousewheel: true,
    direction: "vertical",
    freeMode: true,
    watchSlidesProgress: true,
  })
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
      clickable: true,
    },
  })

  $(function () {
    if ($(window).width() >= 1024) {
      $(".zoom-box").each(function () {
        $(this).zoom()
      })
    }
  })
}

function productSliderInit() {
 /*  $('[data-slider="slider_sale"]').each(function () {
    const sl = $(this)
    var mySwiper = new Swiper(sl, {
      loop: true,
      slidesPerView: 5,
      spaceBetween: 15
    })
    $(this)
      .closest(".container")
      .find(".swiper-button-prev")
      .on("click", function (e) {
        e.preventDefault()
        mySwiper.swipePrev()
      })
    $(this)
      .find(".swiper-button-next")
      .on("click", function (e) {
        e.preventDefault()
        mySwiper.swipeNext()
      })
  }) */

  var swiper = new Swiper('[data-slider="slider_sale"]', {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 15,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })
}

function recipeSliderInit() {}

function imgSliderInit() {}

function fixElement(topDesktop, topMobile, elementId, className) {
  if (document.getElementById(elementId)) {
    if (window.innerWidth >= 1023) {
      if (topDesktop === 0) {
        document.getElementById(elementId).classList.add(className)
      } else {
        if (topDesktop) {
          window.addEventListener("scroll", (event) => {
            scroll = window.scrollY
            if (scroll >= topDesktop) {
              document.getElementById(elementId).classList.add(className)
            } else {
              document.getElementById(elementId).classList.remove(className)
            }
          })
        }
      }
    } else {
      if (topMobile === 0) {
        document.getElementById(elementId).classList.add(className)
      } else {
        if (topMobile) {
          window.addEventListener("scroll", (event) => {
            scroll = window.scrollY
            if (scroll >= topMobile) {
              document.getElementById(elementId).classList.add(className)
            } else {
              document.getElementById(elementId).classList.remove(className)
            }
          })
        }
      }
    }
  }
}

function mobileAccordeon() {
  if ($(window).width() < 1024) {
    $(".infobadge__main").on("click", function () {
      $(this).toggleClass("active")
      $(this).closest(".infobadge").find(".infobadge__accordeon").slideToggle()
    })
  }
}

/**/

function closeByClickOutside(element, button) {
  $(document).click(function (event) {
    if (!$(event.target).closest(`${element},${button}`).length) {
      $(button).removeClass("active")
      $(element).removeClass("active")
      $(".jsbackdrop").toggleClass("menuactive")
    }
  })

  $(document).keyup(function (e) {
    if (e.key === "Escape") {
      // escape key maps to keycode `27`
      $(button).removeClass("active")
      $(element).removeClass("active")
      $(".jsbackdrop").toggleClass("menuactive")
    }
  })
}
function closeByOutsideSelect() {
  $(document).click(function (event) {
    if (
      !$(event.target).closest(`.dropdown-select__list,.dropdown-select__title`)
        .length
    ) {
      $(".dropdown-select__list").hide()
    }
  })

  $(document).keyup(function (e) {
    if (e.key === "Escape") {
      // escape key maps to keycode `27`
      $(".dropdown-select__list").hide()
    }
  })
}

window.addEventListener("load", function () {
  initFE()
})

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map