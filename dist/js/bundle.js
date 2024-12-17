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
  loadImages()

  mainSliderInit()
  projectSliderInit()
  detailsliderInit()
  /*   imgSliderInit() */

  /*   recipeSliderInit() */
  productSliderInit()
  filialSliderinit()
  maskInit()
  /*   contentSliderInit() */
  /*   mobileAccordeon() */
  closeByOutsideSelect()
  closeByClickOutside('[data-menu="mainmenu"]', '[data-menutoggle="mainmenu"]')
  closeByClickOutside(
    '[data-menu="catalogmenu"]',
    '[data-menutoggle="catalogmenu"]'
  )
  closeByClickOutside(".catalogpage__aside", ".js-mobilefilter")
  /*     fixElement(false, 750, 'mobpriceFixed', 'fixed') */
  fixElement(170, false, "headermain", "fixed")
  /* fixElement(300, false, 'headercontainer', 'fixed')
    fixElement(false, 0, 'mobilenav', 'fixed') */
}
function maskInit() {
  $("[type='tel']").inputmask({
    mask: "+7 999 999 9999",
    placeholder: "+7             ",
    clearIncomplete: false,
    definitions: {
      0: {
        validator: "+7 999 999 9999",
      },
    },
  })
}
function loadImages() {
  $("img[data-src]").each(function () {
    let imageDataSource = $(this).data("src").toString()
    let setImageSource = $(this).attr("src", imageDataSource)
  })
}

$(document).ready(function () {
  new WOW().init()

  $('[data-action="showcartpopup"]').on("click", function (e) {
    $("#popup_addproduct").modal("show")
  })

  $(".js-addmodal").on("click", function (e) {
    e.preventDefault()
    $(this).addClass("active")
    $("#popup_addproduct").modal("show")
  })
  $("#popup_addproduct").on("shown.bs.modal", function (e) {
    const swiper = new Swiper('[data-slider="modalslider"]', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: `.sliderarrows__right`,
        prevEl: `.sliderarrows__left`,
      },
      breakpoints: {
        // when window width is >= 1024
        1024: {
          slidesPerView: 2,
          spaceBetween: 60,
        },
      },
    })
    $(".wrap-modal-slider").addClass("open")
    /*        $(".wrap-modal-slider .productslider__modalslider").slick("setPosition");
    $(".wrap-modal-slider").addClass("open"); */
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

  $("[data-menutoggle]").on("click", function (e) {
    e.preventDefault()
    let menu = $(this).data("menutoggle")
    $(`[data-menu=${menu}]`).toggleClass("active")
    $(this).toggleClass("active")
    $(".jsbackdrop").addClass("menuactive")
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
  /* 
  $("input[type=tel]").mask("+7 ___ ___ __ __") */

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


  $("[data-accordionbutton]").on("click", function(e) {

		e.preventDefault();
		var $this = $(this);

		if (!$this.hasClass("active")) {
			$("[data-accordioncontent]").slideUp(400);
			$("[data-accordionbutton]").removeClass("active");
		}

		$this.toggleClass("active");
		$this.siblings('[data-accordioncontent]').slideToggle();
	});



  ;(function ($) {
    $(function () {
      $("[data-headertabs]").on("click", "a:not(.active)", function (e) {
        e.preventDefault()
        const li = $(this).closest("li")
        $(this).addClass("active")
        li.siblings().find("a").removeClass("active")
        li.closest("[data-tabs]")
          .find("[data-contenttabs]")
          .removeClass("active")
          .eq(li.index())
          .addClass("active")
      })
    })
  })(jQuery)
  ;(function ($) {
    $(function () {
      $("[data-headertabs]").on(
        "click",
        "[data-headertab]:not(.active)",
        function (e) {
          e.preventDefault()
          $(this).addClass("active")
          $(this).siblings().removeClass("active")
          $(this)
            .closest("[data-tabs]")
            .find("[data-contenttabs]")
            .removeClass("active")
            .eq($(this).index())
            .addClass("active")
        }
      )
    })
  })(jQuery)
})

function mainSliderInit() {
  var swiper = new Swiper('[data-slider="mainslider"]', {
    pagination: {
      el: ".mainslider-pagination_mob",
      clickable: true,
    },

    breakpoints: {
      // when window width is >= 1024
      1024: {
        direction: "vertical",
        pagination: {
          el: ".mainslider-pagination_desk",
          clickable: true,
        },
      },
    },
  })

  $(".mainslider .swiper-pagination-vertical .swiper-pagination-bullet").css(
    "height",
    100 / $(".mainslider .swiper-slide").length + "%"
  )

  $(".mainslider .swiper-pagination-horizontal .swiper-pagination-bullet").css(
    "width",
    100 / $(".mainslider .swiper-slide").length + "%"
  )
}

/* function contentSliderInit() {
  const swiper = new Swiper(".pagecontent__images.swiper", {
    pagination: {
      el: ".mainslider__dots",
    },
  })
} */

function detailsliderInit() {
  const swiper = new Swiper(".detailswiperpreview", {
    spaceBetween: 6,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    slidesPerView: "auto",
    mousewheel: true,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      // when window width is >= 1024
      1024: {
        spaceBetween: 9,
        direction: "vertical",
      },
    },
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

    if ($(window).width() <= 1023) {
      $(".modalcatalog__tab").addClass("swiper")
      $(".modalcatalog__items").addClass("swiper-wrapper")
      $(".modalcatalog__item").addClass("swiper-slide")

      $("#popup_catalog").on("shown.bs.modal", function (e) {
        var modalcatalog = new Swiper('[data-slider="modalcatalog"]', {
          slidesPerView: 2,
          grid: {
            rows: 2,
          },
          spaceBetween: 7,
          pagination: {
            el: ".modalcatalog-pagination_mob",
            clickable: true,
          },
          breakpoints: {
            // when window width is >= 1024
            500: {
              slidesPerView: 3,
              grid: {
                rows: 2,
              },
            },

            767: {
              slidesPerView: 4,
              grid: {
                rows: 2,
              },
            },
          },
        })
      })
    }
  })
}

function projectSliderInit() {
  const swiper = new Swiper('[data-slider="projectslider"]', {
    width: 277,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 11,
    pagination: {
      el: ".projectslider__dots",
      clickable: true,
    },
  })

  $(
    ".projectblock .swiper-pagination-horizontal .swiper-pagination-bullet"
  ).css("width", 100 / $(".projectblock .swiper-slide").length - 2 + "%")
}

function filialSliderinit() {
  const buildSwiperSlider = (sliderElm) => {
    const sliderIdentifier = sliderElm.id
    console.log(sliderIdentifier)
    return new Swiper(`#${sliderElm.id}`, {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 5,
      centeredSlides: true,
      breakpoints: {
        // when window width is >= 320
        1024: {
          spaceBetween: 16,

        },
      }
    })
  }

  const allSliders = document.querySelectorAll('[data-slider="pagefilial"]')
  allSliders.forEach((slider) => buildSwiperSlider(slider))
}

function productSliderInit() {
  const buildSwiperSlider = (sliderElm) => {
    const sliderIdentifier = sliderElm.id
    console.log(sliderIdentifier)
    return new Swiper(`#${sliderElm.id}`, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 15,
      width: null,
      navigation: {
        nextEl: `.swiper-next.arrows_${sliderIdentifier}`,
        prevEl: `.swiper-prev.arrows_${sliderIdentifier}`,
      },
      breakpoints: {
        // when window width is >= 320
        320: {
          width: 287,
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 767
        767: {
          width: null,
          slidesPerView: 3,
          spaceBetween: 10,
        },
        // when window width is >= 1024
        1024: {
          width: null,
          slidesPerView: 4,
          spaceBetween: 15,
        },
        // when window width is >= 1440
        1440: {
          width: null,
          slidesPerView: $(`#${sliderElm.id}`).data("slider-count"),
          spaceBetween: 15,
        },
      },
    })
  }

  const allSliders = document.querySelectorAll('[data-slider="slider_sale"]')
  allSliders.forEach((slider) => buildSwiperSlider(slider))
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
      $(".jsbackdrop").removeClass("menuactive")
    }
  })

  $(document).keyup(function (e) {
    if (e.key === "Escape") {
      // escape key maps to keycode `27`
      $(button).removeClass("active")
      $(element).removeClass("active")
      $(".jsbackdrop").removeClass("menuactive")
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