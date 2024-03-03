/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);

/////////////* swiper */////////////
window.addEventListener('DOMContentLoaded', function () {
  var resizableSwiper = function resizableSwiper(breakpoint, swiperClass, swiperSettings) {
    var swiper;
    breakpoint = window.matchMedia(breakpoint);
    var enableSwiper = function enableSwiper(className, settings) {
      swiper = new Swiper(className, settings);
    };
    var checker = function checker() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        document.querySelector("".concat(swiperClass, " .swiper-pagination")).innerHTML = '';
        return;
      }
    };
    breakpoint.addEventListener('change', checker);
    checker();
  };
  resizableSwiper('(max-width: 767px)', ' .brand .swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    spaceBetween: 16,
    slidesPerView: 1.3
  });
  resizableSwiper('(max-width: 767px)', '.device .swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    spaceBetween: 16,
    slidesPerView: 1.3
  });
  resizableSwiper('(max-width: 767px)', '.price .swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    spaceBetween: 16,
    slidesPerView: 1.3
  });
});

/////////////* button */////////////

var buttonToggle = document.querySelectorAll('.button__toggle');
var brandList = document.querySelectorAll('.section__list');
var buttonHidden = document.querySelectorAll('.button__hidden');
buttonToggle.forEach(function (item, index) {
  item.addEventListener('click', function () {
    if (brandList[index].classList.contains('brand__list-height')) {
      brandList[index].classList.remove('brand__list-height');
      buttonToggle[index].textContent = 'Показать все';
      buttonHidden[index].classList.remove('button__rotate');
    } else {
      brandList[index].classList.add('brand__list-height');
      buttonToggle[index].textContent = 'Скрыть все';
      buttonHidden[index].classList.add('button__rotate');
    }
  });
});

/////////////* form */////////////

var body = document.querySelector('body');
var formFeedback = document.querySelector('.form__feedback');
var formCallback = document.querySelector('.form__callback');
var menu = document.querySelector('.menu');

/////////////* form__feedback */////////////
var handleForm = function handleForm() {
  formFeedback.classList.toggle('form__body__active');
};
body.addEventListener('click', function (e) {
  if (e.target.closest('.feedback__open__button') || e.target.closest('.form__close__button')) {
    e.preventDefault();
    handleForm();
  } else if (!e.target.closest('.form__body')) {
    formFeedback.classList.remove('form__body__active');
  }
});

/////////////* form__callback */////////////
var handleCallForm = function handleCallForm() {
  formCallback.classList.toggle('form__callback__active');
};
body.addEventListener('click', function (e) {
  if (e.target.closest('.callback__open__button') || e.target.closest('.callback__close')) {
    e.preventDefault();
    handleCallForm();
  } else if (!e.target.closest('.form__body')) {
    formCallback.classList.remove('form__callback__active');
  }
});

/////////////* menu */////////////

var handleMenu = function handleMenu() {
  menu.classList.toggle('menu__active');
};
body.addEventListener('click', function (e) {
  if (e.target.closest('.menu__open_button') || e.target.closest('.menu__btn__close')) {
    console.log(e.target);
    e.preventDefault();
    handleMenu();
  } else if (!e.target.closest('.menu__content') || e.target.closest('.menu__btn__message') || e.target.closest('.menu__btn__phone')) {
    menu.classList.remove('menu__active');
  }
});

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/script.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/script.js */"./src/js/script.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map