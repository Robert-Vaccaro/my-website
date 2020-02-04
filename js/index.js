var work = document.getElementById("portfolioItemContainer");
var workRequest = new XMLHttpRequest();

workRequest.open("GET", "json/items.json", true);
workRequest.onreadystatechange = function () {
    if (workRequest.readyState === 4) {
        if (workRequest.status === 200 || workRequest.status == 0) {
            var html = "";
            JSON.parse(workRequest.responseText).forEach(function (work) {
                console.log(work.name);
                html += "<div class=\"col s12 m6 l6\"><div class=\"card hoverable\"><div class=\"card-image waves-effect waves-block waves-light\"><img class=\"activator\" src=" + work.image + "></div><div class=\"card-content\"><span class=\"card-title activator grey-text text-darken-4\">" + work.name + "<i class=\"material-icons right\">keyboard_arrow_up</i></span><p><a href=" + work.link + " target=\"_blank\">Visit</a></p></div><div class=\"card-reveal\"><span class=\"card-title grey-text text-darken-4\">" + work.name + "<i class=\"material-icons right\">close</i></span><p>" + work.description + "</p><p> Technologies: <br>"+ work.tech +"</p><p><a href=" + work.link + " target=\"_blank\">Visit</a></p></div></div></div>";
            });
            work.innerHTML = html;
        }
    }
};
workRequest.send(null);

$(".modal-trigger").click(function(e){
    e.preventDefault();
    dataModal = $(this).attr("data-modal");
    $("#" + dataModal).css({"display":"block"});
    // $("body").css({"overflow-y": "hidden"}); //Prevent double scrollbar.
  });
  
  $(".close-modal, .modal-sandbox").click(function(){
    $(".modal").css({"display":"none"});
    // $("body").css({"overflow-y": "auto"}); //Prevent double scrollbar.
  });

  $(".modal-trigger2").click(function(e){
    e.preventDefault();
    dataModal = $(this).attr("data-modal2");
    $("#" + dataModal).css({"display":"block"});
    // $("body").css({"overflow-y": "hidden"}); //Prevent double scrollbar.
  });
  
  $(".close-modal2, .modal-sandbox2").click(function(){
    $(".modal2").css({"display":"none"});
    // $("body").css({"overflow-y": "auto"}); //Prevent double scrollbar.
  });
  $(".modal-trigger3").click(function(e){
    e.preventDefault();
    dataModal = $(this).attr("data-modal3");
    $("#" + dataModal).css({"display":"block"});
    $(".modal3").removeClass('hidden');
    // $("body").css({"overflow-y": "hidden"}); //Prevent double scrollbar.
  });
  
  $(".close-modal3, .modal-sandbox3").click(function(){
    $(".modal3").css({"display":"none"});

    // $("body").css({"overflow-y": "auto"}); //Prevent double scrollbar.
  });
  $(".modal-trigger4").click(function(e){
    e.preventDefault();
    dataModal = $(this).attr("data-modal4");
    $("#" + dataModal).css({"display":"block"});
    $(".modal4").removeClass('hidden');
    // $("body").css({"overflow-y": "hidden"}); //Prevent double scrollbar.
  });
  
  $(".close-modal4, .modal-sandbox4").click(function(){
    $(".modal4").css({"display":"none"});

    // $("body").css({"overflow-y": "auto"}); //Prevent double scrollbar.
  });
// Create a new color picker instance
// https://iro.js.org/guide.html#getting-started
var colorPicker = new iro.ColorPicker(".colorPicker", {
  // color picker options
  // Option guide: https://iro.js.org/guide.html#color-picker-options
  width: 280,
  color: "rgb(255, 0, 0)",
  borderWidth: 1,
  borderColor: "#fff",
});

var values = document.getElementById("values");

// https://iro.js.org/guide.html#color-picker-events
colorPicker.on(["color:init", "color:change"], function(color){
  // Show the current color in different formats
  // Using the selected color: https://iro.js.org/guide.html#selected-color-api
  values.innerHTML = [
    "hex: " + color.hexString,
    "rgb: " + color.rgbString,
    "hsl: " + color.hslString,
  ].join("<br>");
  values2.innerHTML = [
    "hex: " + color.hexString,
    "rgb: " + color.rgbString,
    "hsl: " + color.hslString,
  ].join("<br>");
  $(".test-bu").css({"background": color.hexString})
  $(".go-bu").css({"background-color": color.hexString})
  $(".dot").css({"background-color": color.hexString})
});


window["tmripple"] =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Default Settings
var settings = {
    area: "",
    color: "rgba(255, 255, 255, 0.4)",
    offsetEl: null,
    eventListener: "click",
    mouseMove: false
};

/**
 * @description Where the magic happens
 * @param {object} e
 * @param {string} rippleColor
 * @param {string} eventListener
 */
function ripple(e, rippleColor, eventListener) {
    var clickedEl = e.currentTarget;
    var PageX = eventListener.match(/touch/) ? e.changedTouches[0].pageX : e.clientX;
    var PageY = eventListener.match(/touch/) ? e.changedTouches[0].pageY : e.clientY;
    var btnWidth = clickedEl.clientWidth;
    var el = clickedEl.getBoundingClientRect();
    var rippleOffset = settings.offsetEl ? settings.offsetEl.clientHeight : 0;
    var btnOffsetTop = el.top + rippleOffset;
    var btnOffsetLeft = el.left;
    var posMouseX = PageX;
    var posMouseY = PageY + rippleOffset;
    var rippleX = posMouseX - btnOffsetLeft;
    var rippleY = posMouseY - btnOffsetTop;

    var baseCSS = "\n          position: absolute;\n          width: " + btnWidth * 2 + "px;\n          height: " + btnWidth * 2 + "px;\n          border-radius: 50%;\n          transition: transform 700ms, opacity 700ms;\n          transition-timing-function: cubic-bezier(0.250, 0.460, 0.450, 0.940);\n          background: " + rippleColor + ";\n          background-position: center;\n          background-repeat: no-repeat;\n          background-size: 100%;\n          left: " + (rippleX - btnWidth) + "px;\n          top: " + (rippleY - btnWidth) + "px;\n          transform: scale(0);\n          pointer-events: none;\n      ";

    // Prepare the dom
    var rippleEffect = document.createElement("span");
    rippleEffect.style.cssText = baseCSS;

    // Add some css for prevent overflow errors
    clickedEl.style.overflow = "hidden";

    // Check if the element is not static because the ripple is in absolute
    if (window.getComputedStyle(clickedEl).position === "static") {
        clickedEl.style.position = "relative";
    }

    // Check for the mousemove event
    if (settings.mouseMove) {
        settings.mouseMove = false;
        return;
    }

    clickedEl.appendChild(rippleEffect);

    // start animation
    requestAnimationFrame(function () {
        rippleEffect.style.cssText = baseCSS + " transform: scale(1); opacity: 0;";
    });

    setTimeout(function () {
        rippleEffect.remove();
    }, 700);
}

/**
 * @description Prevent ripple when scrolling (Mobile Only)
 * @param {string} eventListener
 */
function onDrag(eventListener) {
    if (eventListener === "touchend") {
        document.getElementsByTagName("body")[0].addEventListener("touchmove", function () {
            settings.mouseMove = true;
        });
    }
}

function attachRipple(els, rippleColor, eventListener) {
    for (var i = 0; i < els.length; i += 1) {
        var currentBtn = els[i];
        currentBtn.addEventListener(eventListener, function (e) {
            return ripple(e, rippleColor, eventListener);
        });
    }
}

function attachRippleToAttribute(area, rippleColor, eventListener) {
    var attributeEl = document.querySelectorAll(area + " [data-animation='ripple']");

    if (attributeEl.length > 0) {
        attachRipple(attributeEl, rippleColor, eventListener);
    } else {
        throw new Error('not found any element with data-animation="ripple"');
    }
}

function attachRippleToSelectors(selectors, rippleColor, eventListener) {
    if (selectors) {
        var selectorsEl = document.querySelectorAll(selectors);
    } else {
        throw new Error("You have to enter at least 1 selector");
    }

    if (selectorsEl.length > 0) {
        attachRipple(selectorsEl, rippleColor, eventListener);
    } else {
        console.warn("No element found with this selector: ", selectors);
    }
}

module.exports = {
    init: function init() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        try {
            var area = settings.area,
                color = settings.color,
                offsetEl = settings.offsetEl,
                eventListener = settings.eventListener;


            area = data.area || area;
            color = data.color || color;
            offsetEl = data.offsetEl ? this.setOffsetEl(data.offsetEl) : offsetEl;
            eventListener = data.eventListener || eventListener;

            onDrag(eventListener);
            attachRippleToAttribute(area, color, eventListener);
        } catch (e) {
            console.warn(e.message);
        }
    },
    attachToSelectors: function attachToSelectors() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        try {
            var elSetting = {
                color: data.color || settings.color,
                eventListener: data.eventListener || settings.eventListener
            };
            var color = elSetting.color,
                eventListener = elSetting.eventListener;


            attachRippleToSelectors(data.selectors, color, eventListener);
        } catch (e) {
            console.warn(e.message);
        }
    },
    setOffsetEl: function setOffsetEl(el) {
        settings.offsetEl = document.querySelector(el);
    },

    ripple: ripple
};

/***/ })
/******/ ]);

tmripple.init()