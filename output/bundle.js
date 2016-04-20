/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	var GeoFeedBack = __webpack_require__(5);
	(function () {
	    var geofeedback = new GeoFeedBack();
	    document.addEventListener("DOMContentLoaded", function() {
	        geofeedback.init();
	    });
	})();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "html, body {\n    height: 100%;\n}\n\n.feedback-form {\n    width: 350px;\n    background: #fff;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    padding-bottom: 10px;\n    height: 517px;\n}\n\n.header-form {\n    background: #FF8663;\n    padding: 10px;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    color: #fff;\n    height: 40px;\n}\n\n.all-messages {\n    height: 180px;\n    overflow-y: auto;\n    padding: 10px;\n    word-wrap: break-word;\n}\n\n.input-elements {\n    padding: 14px;\n}\n\n.footer-form {\n    text-align: right;\n    padding-right: 14px;\n}\n\n.add-btn {\n    background: #FF8663;\n    color: #fff;\n}\n\n.you-feedback {\n    color: #FF8663;\n    font-weight: bold;\n}\n\n.input-elements input {\n    margin-bottom: 10px;\n}\n\n.form-field[name=\"feedback\"] {\n    height: 100px;\n}\n\n.close-button {\n    float: right;\n    margin-top: 2px;\n    cursor: pointer;\n}\n\n.close-button:hover {\n    color: #eee;\n}\n\n.close-button:active {\n    top: 2px;\n}\n\n.place-info {\n    float: left;\n    width: 310px;\n    position: fixed;\n    overflow: hidden;\n}\n\n.place-info span.address-text {\n    display: block;\n    width: 1000px;\n}\n\n#feedback-area {\n    position: fixed;\n}\n\n@media only screen\nand (max-width: 360px) , screen and (max-height: 527px) {\n    #feedback-area {\n        position: absolute !important;\n        top: 0px !important;\n        left: 0px !important;\n    }\n}\n\n.feedback-message {\n    margin-bottom: 10px;\n}\n\n.ballon_footer {\n    float: right;\n    color: #ccc;\n}\n\n.ballon_body {\n    height: 141px;\n    font-size: 14px;\n}\n\n.addressLink {\n    display: block;\n}\n\n#loader {\n    position: fixed;\n    background: #FF8663;\n    width: 400px;\n    height: 200px;\n    margin: 0 auto;\n    top: 33%;\n    text-align: center;\n    left: 40%;\n    font-size: 69px;\n    padding-top: 45px;\n    opacity: 0.8;\n    color: #fff;\n}", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	(function () {
	    var mustache = __webpack_require__(6),
	        template = __webpack_require__(7),
	        templateMessage = __webpack_require__(8),
	        clusterTemplate = __webpack_require__(9);

	    function GeoFeedBack(options) {
	        var defaultOptions = {
	                mapId: 'map',
	                feedbackAreaId: 'feedback-area',
	                closeButtonClass: 'close-button',
	                addButtonId: 'addButton',
	                messageAreaClass: 'all-messages',
	                noFeedbackMessageId: "noFeedback",
	                addressLinkClass: "addressLink",
	                loaderId: "loader"
	            },
	            _this = this,
	            currentObject = {};

	        options = options || defaultOptions;

	        function getAddress(coords, callback) {
	            ymaps.geocode(coords).then(function (res) {
	                var firstGeoObject = res.geoObjects.get(0);
	                if (typeof callback === 'function') {
	                    callback({
	                        name: firstGeoObject.properties.get('name'),
	                        text: firstGeoObject.properties.get('text')
	                    });
	                }
	            });
	        };

	        this.renderForm = function (jsonInfo, pagePixels) {
	            var form = mustache.render(template, jsonInfo),
	                el = document.getElementById(options.feedbackAreaId),
	                windowWidth = window.innerWidth
	                    || document.documentElement.clientWidth
	                    || document.body.clientWidth,
	                windowHeight = window.innerHeight
	                    || document.documentElement.clientHeight
	                    || document.body.clientHeight;

	            const elementheightLenght = 517;
	            const elementwidthLenght = 350;

	            if (pagePixels && (((pagePixels[0] + elementwidthLenght) < windowWidth) &&
	                ((pagePixels[1] + elementheightLenght) < windowHeight))) {
	                el.style.left = pagePixels[0] + 'px';
	                el.style.top = pagePixels[1] + 'px';
	            } else {
	                el.style.left = (windowWidth / 2) - (elementwidthLenght / 2) + 'px';
	                el.style.top = (windowHeight / 2) - (elementheightLenght / 2) + 'px';
	            }

	            el.innerHTML = form;
	            currentObject.html = el.firstChild;
	            currentObject.info = jsonInfo;
	            document.getElementsByClassName(options.messageAreaClass)[0].scrollTop = 100000;
	        };

	        this.createCluster = function () {
	            var customContentLayout = ymaps.templateLayoutFactory.createClass(clusterTemplate);
	            return new ymaps.Clusterer({
	                preset: 'islands#invertedVioletClusterIcons',
	                groupByCoordinates: false,
	                clusterDisableClickZoom: true,
	                clusterHideIconOnBalloonOpen: false,
	                geoObjectHideIconOnBalloonOpen: false,
	                clusterBalloonContentLayout: 'cluster#balloonCarousel',
	                clusterBalloonItemContentLayout: customContentLayout,
	                clusterBalloonPanelMaxMapArea: 0,
	                clusterBalloonContentLayoutWidth: 400,
	                clusterBalloonContentLayoutHeight: 230,
	                clusterBalloonPagerSize: 5
	            });
	        };

	        this.sendJsonData = function (jsonData, callback) {
	            var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
	            xmlhttp.open("POST", "http://localhost:3000", true);
	            xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	            xmlhttp.send(JSON.stringify(jsonData));
	            xmlhttp.onreadystatechange = function () {
	                if (xmlhttp.readyState != 4) return;

	                if (xmlhttp.status != 200) {
	                    throw new Error('Ошибка при передачи данных серверу');
	                    return;
	                }

	                if (typeof callback === 'function') {
	                    callback(xmlhttp.responseText);
	                }

	            }
	        };

	        this.getJsonData = function (address, callback) {
	            var xmlhttp = new XMLHttpRequest(),
	                jsonData = {};   // new HttpRequest instance
	            xmlhttp.open("POST", "http://localhost:3000", true);
	            xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	            if (!address) {
	                jsonData.op = 'all';
	            } else {
	                jsonData.op = 'get';
	                jsonData.address = address;
	            }
	            xmlhttp.send(JSON.stringify(jsonData));
	            xmlhttp.onreadystatechange = function () {
	                if (xmlhttp.readyState != 4) return;

	                if (xmlhttp.status != 200) {
	                    throw new Error('Ошибка при передачи данных серверу');
	                    return;
	                }

	                if (typeof callback === 'function') {
	                    callback(xmlhttp.responseText);
	                }

	            }
	        };

	        this.convertDate = function (dateValue) {
	            var date = new Date(dateValue),
	                day = "0" + date.getDate(),
	                month = "0" + (date.getMonth() + 1),
	                year = date.getFullYear(),
	                hours = date.getHours(),
	                minutes = "0" + date.getMinutes(),
	                seconds = "0" + date.getSeconds()
	            return day.substr(-2) + '.' + month.substr(-2) + '.' + year + ' '
	                + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
	        };

	        this.renderMessage = function (jsonData) {
	            jsonData.date = this.convertDate(jsonData.date);
	            var messageHtml = mustache.render(templateMessage, jsonData);
	            document.getElementsByClassName(options.messageAreaClass)[0].
	                insertAdjacentHTML('beforeend', messageHtml);
	            document.getElementsByClassName(options.messageAreaClass)[0].scrollTop = 100000;
	            this.clearFields();
	        };

	        this.clearFields = function () {
	            document.getElementsByName('name')[0].value = '';
	            document.getElementsByName('place')[0].value = '';
	            document.getElementsByName('feedback')[0].value = '';
	        };

	        this.addFeedback = function (map, clusterer) {
	            var name = document.getElementsByName('name')[0].value,
	                place = document.getElementsByName('place')[0].value,
	                text = document.getElementsByName('feedback')[0].value;
	            if (name.trim().length > 0 && place.trim().length > 0 && text.trim().length > 0) {
	                new Promise(function (resolve, reject) {
	                    _this.sendJsonData({
	                        op: 'add',
	                        review: {
	                            coords: {
	                                x: currentObject.coords[0],
	                                y: currentObject.coords[1]
	                            },
	                            address: currentObject.info.address,
	                            name: name,
	                            place: place,
	                            text: text
	                        }
	                    }, resolve);
	                }).then(function (result) {
	                        var jsonData = JSON.parse(result)[JSON.parse(result).length - 1];
	                        var placeMark = new ymaps.Placemark([jsonData.coords.x, jsonData.coords.y], {
	                            balloonContentHeader: jsonData.place,
	                            balloonContentBody: {
	                                address: currentObject.info.address,
	                                text: jsonData.text,
	                                x: jsonData.coords.x,
	                                y: jsonData.coords.y
	                            },
	                            balloonContentFooter: _this.convertDate(jsonData.date)
	                        }, {
	                            preset: 'islands#icon',
	                            iconColor: '#CC65FF',
	                            openBalloonOnClick: false
	                        });
	                        if (document.getElementById(options.noFeedbackMessageId)) {
	                            document.getElementById(options.noFeedbackMessageId).classList.add('hide');
	                        }
	                        _this.renderMessage(jsonData);
	                        clusterer.add(placeMark);
	                        map.geoObjects.add(clusterer);
	                    }).catch(function (e) {
	                        alert(e.message);
	                    });
	            } else {
	                alert('Все поля необходимо заполнить');
	            }
	        };

	        this.initMap = function (callback) {
	            const centerOfSpb = {
	                latitude: 59.91815364,
	                longitude: 30.30557800
	            };

	            function init(coords) {
	                var map = new ymaps.Map(options.mapId, {
	                    center: [coords.latitude, coords.longitude],
	                    zoom: 17
	                });

	                return map;
	            }

	            new Promise(function (resolve, reject) {
	                navigator.geolocation.getCurrentPosition(resolve, reject);
	            }).then(function (position) {
	                    return new Promise(function (resolve, reject) {
	                        ymaps.ready(resolve.bind(null, position.coords));
	                    });
	                }, function (e) {
	                    switch (e.code) {
	                        case e.PERMISSION_DENIED:
	                            alert('Sorry, you denied your coordinates');
	                            break;
	                        case e.POSITION_UNAVAILABLE:
	                            alert('Sorry, location information is unavailable');
	                            break;
	                        case e.TIMEOUT:
	                            alert('Sorry, timeout while getting you coordinates');
	                            break;
	                        case e.UNKNOWN_ERROR:
	                            alert('Sorry, something wrong');
	                            break;
	                    }
	                    return new Promise(function (resolve, reject) {
	                        ymaps.ready(resolve.bind(null, centerOfSpb));
	                    });
	                }).then(function (position) {
	                    var map = init(position);
	                    if (typeof callback === 'function') {
	                        callback(map);
	                    }
	                }).catch(function (e) {
	                    console.log(e);
	                    alert('Something wrong!');
	                });

	        };

	        this.buildPlaceMarks = function (jsonData) {
	            var placemarks = [],
	                allAddresses = Object.keys(jsonData);

	            allAddresses.forEach(function (el) {
	                var curElement = jsonData[el];
	                curElement.forEach(function (curEl) {
	                    placemarks.push(new ymaps.Placemark([curEl.coords.x, curEl.coords.y], {
	                        balloonContentHeader: curEl.place,
	                        balloonContentBody: {
	                            address: el,
	                            text: curEl.text,
	                            x: curEl.coords.x,
	                            y: curEl.coords.y
	                        },
	                        balloonContentFooter: _this.convertDate(curEl.date)
	                    }, {
	                        iconColor: '#CC65FF',
	                        openBalloonOnClick: false
	                    }));
	                });

	            });

	            return placemarks;
	        };

	        this.showLoader = function() {
	            document.getElementById(options.loaderId).classList.remove('hide');
	        };

	        this.hideLoader = function() {
	            document.getElementById(options.loaderId).classList.add('hide');
	        };

	        this.openForm = function(address, x, y, map, callback) {
	            _this.getJsonData(address, function (result) {
	                var jsonData = JSON.parse(result).map(function(el) {
	                    el.date = _this.convertDate(el.date);
	                    return el;
	                });
	                jsonData = {
	                    messages: jsonData,
	                    address: address
	                };
	                currentObject.coords = [x, y];
	                _this.renderForm(jsonData);
	                map.balloon.close();
	                if (typeof callback === 'function') {
	                    callback();
	                }
	            });
	        };

	        this.initEvents = function (map, clusterer) {
	            map.events.add('click', function (e) {
	                map.balloon.close();
	                var coords = e.get('coords');
	                getAddress(coords, function (result) {
	                    var address = result.text;
	                    _this.showLoader();
	                    new Promise(function(resolve) {
	                        _this.getJsonData(address, resolve);
	                    }).then(function(result) {
	                            var jsonData = JSON.parse(result).map(function(el) {
	                                el.date = _this.convertDate(el.date);
	                                return el;
	                            });
	                            jsonData = {
	                                messages: jsonData,
	                                address: address
	                            };
	                            _this.renderForm(jsonData, e.get('pagePixels'));
	                            currentObject.coords = coords;
	                            _this.hideLoader();
	                        });
	                });
	            });

	            document.addEventListener('click', function (e) {
	                if (e.target.classList && e.target.classList.contains(options.closeButtonClass)) {
	                    currentObject.html.classList.add('hide');
	                }

	                if (e.target.getAttribute("id") === options.addButtonId) {
	                    _this.addFeedback(map, clusterer);
	                }

	                if (e.target.classList && e.target.classList.contains(options.addressLinkClass)) {
	                    _this.showLoader();
	                    _this.openForm(e.target.dataset.address, e.target.dataset.x, e.target.dataset.y, map, function() {
	                        _this.hideLoader();
	                    });
	                }
	            });

	            document.addEventListener('keyup', function (e) {
	                if (e.keyCode === 27 && currentObject.html) {
	                    currentObject.html.classList.add('hide');
	                }
	            });

	            map.geoObjects.events.add('click', function (e) {
	                var object = e.get('target'),
	                    element = object.properties.get('balloonContentBody');
	                if (element) {
	                    e.stopImmediatePropagation();
	                    _this.showLoader();
	                    _this.openForm(element.address, element.x, element.y, map, function() {
	                        _this.hideLoader();
	                    });
	                }
	            });

	            //on button add actions goes here
	            //placemark examples
	            //myPlacemark = new ymaps.Placemark([55.76, 37.64], {
	            //    hintContent: 'Москва!',
	            //    balloonContent: 'Столица России'
	            //});
	            //
	            //myMap.geoObjects.add(myPlacemark);
	        };

	        this.init = function () {
	            var map,
	                clusterer;
	            _this.showLoader();
	            new Promise(function (resolve, reject) {
	                _this.initMap(resolve);
	            }).then(function (result) {
	                    map = result;
	                    return new Promise(function (resolve) {
	                        _this.getJsonData(null, resolve);
	                    });
	                }).then(function (result) {
	                    clusterer = _this.createCluster();
	                    clusterer.add(_this.buildPlaceMarks(JSON.parse(result)));
	                    map.geoObjects.add(clusterer);
	                    _this.initEvents(map, clusterer);
	                    _this.hideLoader();
	                }).catch(function (e) {
	                    alert('Initialization failed');
	                    console.log(e);
	                });
	        }
	    }


	    module.exports = GeoFeedBack;
	})();

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * mustache.js - Logic-less {{mustache}} templates with JavaScript
	 * http://github.com/janl/mustache.js
	 */

	/*global define: false Mustache: true*/

	(function defineMustache (global, factory) {
	  if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {
	    factory(exports); // CommonJS
	  } else if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	  } else {
	    global.Mustache = {};
	    factory(global.Mustache); // script, wsh, asp
	  }
	}(this, function mustacheFactory (mustache) {

	  var objectToString = Object.prototype.toString;
	  var isArray = Array.isArray || function isArrayPolyfill (object) {
	    return objectToString.call(object) === '[object Array]';
	  };

	  function isFunction (object) {
	    return typeof object === 'function';
	  }

	  /**
	   * More correct typeof string handling array
	   * which normally returns typeof 'object'
	   */
	  function typeStr (obj) {
	    return isArray(obj) ? 'array' : typeof obj;
	  }

	  function escapeRegExp (string) {
	    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
	  }

	  /**
	   * Null safe way of checking whether or not an object,
	   * including its prototype, has a given property
	   */
	  function hasProperty (obj, propName) {
	    return obj != null && typeof obj === 'object' && (propName in obj);
	  }

	  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
	  // See https://github.com/janl/mustache.js/issues/189
	  var regExpTest = RegExp.prototype.test;
	  function testRegExp (re, string) {
	    return regExpTest.call(re, string);
	  }

	  var nonSpaceRe = /\S/;
	  function isWhitespace (string) {
	    return !testRegExp(nonSpaceRe, string);
	  }

	  var entityMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#39;',
	    '/': '&#x2F;',
	    '`': '&#x60;',
	    '=': '&#x3D;'
	  };

	  function escapeHtml (string) {
	    return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
	      return entityMap[s];
	    });
	  }

	  var whiteRe = /\s*/;
	  var spaceRe = /\s+/;
	  var equalsRe = /\s*=/;
	  var curlyRe = /\s*\}/;
	  var tagRe = /#|\^|\/|>|\{|&|=|!/;

	  /**
	   * Breaks up the given `template` string into a tree of tokens. If the `tags`
	   * argument is given here it must be an array with two string values: the
	   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
	   * course, the default is to use mustaches (i.e. mustache.tags).
	   *
	   * A token is an array with at least 4 elements. The first element is the
	   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
	   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
	   * all text that appears outside a symbol this element is "text".
	   *
	   * The second element of a token is its "value". For mustache tags this is
	   * whatever else was inside the tag besides the opening symbol. For text tokens
	   * this is the text itself.
	   *
	   * The third and fourth elements of the token are the start and end indices,
	   * respectively, of the token in the original template.
	   *
	   * Tokens that are the root node of a subtree contain two more elements: 1) an
	   * array of tokens in the subtree and 2) the index in the original template at
	   * which the closing tag for that section begins.
	   */
	  function parseTemplate (template, tags) {
	    if (!template)
	      return [];

	    var sections = [];     // Stack to hold section tokens
	    var tokens = [];       // Buffer to hold the tokens
	    var spaces = [];       // Indices of whitespace tokens on the current line
	    var hasTag = false;    // Is there a {{tag}} on the current line?
	    var nonSpace = false;  // Is there a non-space char on the current line?

	    // Strips all whitespace tokens array for the current line
	    // if there was a {{#tag}} on it and otherwise only space.
	    function stripSpace () {
	      if (hasTag && !nonSpace) {
	        while (spaces.length)
	          delete tokens[spaces.pop()];
	      } else {
	        spaces = [];
	      }

	      hasTag = false;
	      nonSpace = false;
	    }

	    var openingTagRe, closingTagRe, closingCurlyRe;
	    function compileTags (tagsToCompile) {
	      if (typeof tagsToCompile === 'string')
	        tagsToCompile = tagsToCompile.split(spaceRe, 2);

	      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
	        throw new Error('Invalid tags: ' + tagsToCompile);

	      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
	      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
	      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
	    }

	    compileTags(tags || mustache.tags);

	    var scanner = new Scanner(template);

	    var start, type, value, chr, token, openSection;
	    while (!scanner.eos()) {
	      start = scanner.pos;

	      // Match any text between tags.
	      value = scanner.scanUntil(openingTagRe);

	      if (value) {
	        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
	          chr = value.charAt(i);

	          if (isWhitespace(chr)) {
	            spaces.push(tokens.length);
	          } else {
	            nonSpace = true;
	          }

	          tokens.push([ 'text', chr, start, start + 1 ]);
	          start += 1;

	          // Check for whitespace on the current line.
	          if (chr === '\n')
	            stripSpace();
	        }
	      }

	      // Match the opening tag.
	      if (!scanner.scan(openingTagRe))
	        break;

	      hasTag = true;

	      // Get the tag type.
	      type = scanner.scan(tagRe) || 'name';
	      scanner.scan(whiteRe);

	      // Get the tag value.
	      if (type === '=') {
	        value = scanner.scanUntil(equalsRe);
	        scanner.scan(equalsRe);
	        scanner.scanUntil(closingTagRe);
	      } else if (type === '{') {
	        value = scanner.scanUntil(closingCurlyRe);
	        scanner.scan(curlyRe);
	        scanner.scanUntil(closingTagRe);
	        type = '&';
	      } else {
	        value = scanner.scanUntil(closingTagRe);
	      }

	      // Match the closing tag.
	      if (!scanner.scan(closingTagRe))
	        throw new Error('Unclosed tag at ' + scanner.pos);

	      token = [ type, value, start, scanner.pos ];
	      tokens.push(token);

	      if (type === '#' || type === '^') {
	        sections.push(token);
	      } else if (type === '/') {
	        // Check section nesting.
	        openSection = sections.pop();

	        if (!openSection)
	          throw new Error('Unopened section "' + value + '" at ' + start);

	        if (openSection[1] !== value)
	          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
	      } else if (type === 'name' || type === '{' || type === '&') {
	        nonSpace = true;
	      } else if (type === '=') {
	        // Set the tags for the next time around.
	        compileTags(value);
	      }
	    }

	    // Make sure there are no open sections when we're done.
	    openSection = sections.pop();

	    if (openSection)
	      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

	    return nestTokens(squashTokens(tokens));
	  }

	  /**
	   * Combines the values of consecutive text tokens in the given `tokens` array
	   * to a single token.
	   */
	  function squashTokens (tokens) {
	    var squashedTokens = [];

	    var token, lastToken;
	    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
	      token = tokens[i];

	      if (token) {
	        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
	          lastToken[1] += token[1];
	          lastToken[3] = token[3];
	        } else {
	          squashedTokens.push(token);
	          lastToken = token;
	        }
	      }
	    }

	    return squashedTokens;
	  }

	  /**
	   * Forms the given array of `tokens` into a nested tree structure where
	   * tokens that represent a section have two additional items: 1) an array of
	   * all tokens that appear in that section and 2) the index in the original
	   * template that represents the end of that section.
	   */
	  function nestTokens (tokens) {
	    var nestedTokens = [];
	    var collector = nestedTokens;
	    var sections = [];

	    var token, section;
	    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
	      token = tokens[i];

	      switch (token[0]) {
	        case '#':
	        case '^':
	          collector.push(token);
	          sections.push(token);
	          collector = token[4] = [];
	          break;
	        case '/':
	          section = sections.pop();
	          section[5] = token[2];
	          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
	          break;
	        default:
	          collector.push(token);
	      }
	    }

	    return nestedTokens;
	  }

	  /**
	   * A simple string scanner that is used by the template parser to find
	   * tokens in template strings.
	   */
	  function Scanner (string) {
	    this.string = string;
	    this.tail = string;
	    this.pos = 0;
	  }

	  /**
	   * Returns `true` if the tail is empty (end of string).
	   */
	  Scanner.prototype.eos = function eos () {
	    return this.tail === '';
	  };

	  /**
	   * Tries to match the given regular expression at the current position.
	   * Returns the matched text if it can match, the empty string otherwise.
	   */
	  Scanner.prototype.scan = function scan (re) {
	    var match = this.tail.match(re);

	    if (!match || match.index !== 0)
	      return '';

	    var string = match[0];

	    this.tail = this.tail.substring(string.length);
	    this.pos += string.length;

	    return string;
	  };

	  /**
	   * Skips all text until the given regular expression can be matched. Returns
	   * the skipped string, which is the entire tail if no match can be made.
	   */
	  Scanner.prototype.scanUntil = function scanUntil (re) {
	    var index = this.tail.search(re), match;

	    switch (index) {
	      case -1:
	        match = this.tail;
	        this.tail = '';
	        break;
	      case 0:
	        match = '';
	        break;
	      default:
	        match = this.tail.substring(0, index);
	        this.tail = this.tail.substring(index);
	    }

	    this.pos += match.length;

	    return match;
	  };

	  /**
	   * Represents a rendering context by wrapping a view object and
	   * maintaining a reference to the parent context.
	   */
	  function Context (view, parentContext) {
	    this.view = view;
	    this.cache = { '.': this.view };
	    this.parent = parentContext;
	  }

	  /**
	   * Creates a new context using the given view with this context
	   * as the parent.
	   */
	  Context.prototype.push = function push (view) {
	    return new Context(view, this);
	  };

	  /**
	   * Returns the value of the given name in this context, traversing
	   * up the context hierarchy if the value is absent in this context's view.
	   */
	  Context.prototype.lookup = function lookup (name) {
	    var cache = this.cache;

	    var value;
	    if (cache.hasOwnProperty(name)) {
	      value = cache[name];
	    } else {
	      var context = this, names, index, lookupHit = false;

	      while (context) {
	        if (name.indexOf('.') > 0) {
	          value = context.view;
	          names = name.split('.');
	          index = 0;

	          /**
	           * Using the dot notion path in `name`, we descend through the
	           * nested objects.
	           *
	           * To be certain that the lookup has been successful, we have to
	           * check if the last object in the path actually has the property
	           * we are looking for. We store the result in `lookupHit`.
	           *
	           * This is specially necessary for when the value has been set to
	           * `undefined` and we want to avoid looking up parent contexts.
	           **/
	          while (value != null && index < names.length) {
	            if (index === names.length - 1)
	              lookupHit = hasProperty(value, names[index]);

	            value = value[names[index++]];
	          }
	        } else {
	          value = context.view[name];
	          lookupHit = hasProperty(context.view, name);
	        }

	        if (lookupHit)
	          break;

	        context = context.parent;
	      }

	      cache[name] = value;
	    }

	    if (isFunction(value))
	      value = value.call(this.view);

	    return value;
	  };

	  /**
	   * A Writer knows how to take a stream of tokens and render them to a
	   * string, given a context. It also maintains a cache of templates to
	   * avoid the need to parse the same template twice.
	   */
	  function Writer () {
	    this.cache = {};
	  }

	  /**
	   * Clears all cached templates in this writer.
	   */
	  Writer.prototype.clearCache = function clearCache () {
	    this.cache = {};
	  };

	  /**
	   * Parses and caches the given `template` and returns the array of tokens
	   * that is generated from the parse.
	   */
	  Writer.prototype.parse = function parse (template, tags) {
	    var cache = this.cache;
	    var tokens = cache[template];

	    if (tokens == null)
	      tokens = cache[template] = parseTemplate(template, tags);

	    return tokens;
	  };

	  /**
	   * High-level method that is used to render the given `template` with
	   * the given `view`.
	   *
	   * The optional `partials` argument may be an object that contains the
	   * names and templates of partials that are used in the template. It may
	   * also be a function that is used to load partial templates on the fly
	   * that takes a single argument: the name of the partial.
	   */
	  Writer.prototype.render = function render (template, view, partials) {
	    var tokens = this.parse(template);
	    var context = (view instanceof Context) ? view : new Context(view);
	    return this.renderTokens(tokens, context, partials, template);
	  };

	  /**
	   * Low-level method that renders the given array of `tokens` using
	   * the given `context` and `partials`.
	   *
	   * Note: The `originalTemplate` is only ever used to extract the portion
	   * of the original template that was contained in a higher-order section.
	   * If the template doesn't use higher-order sections, this argument may
	   * be omitted.
	   */
	  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate) {
	    var buffer = '';

	    var token, symbol, value;
	    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
	      value = undefined;
	      token = tokens[i];
	      symbol = token[0];

	      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);
	      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);
	      else if (symbol === '>') value = this.renderPartial(token, context, partials, originalTemplate);
	      else if (symbol === '&') value = this.unescapedValue(token, context);
	      else if (symbol === 'name') value = this.escapedValue(token, context);
	      else if (symbol === 'text') value = this.rawValue(token);

	      if (value !== undefined)
	        buffer += value;
	    }

	    return buffer;
	  };

	  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate) {
	    var self = this;
	    var buffer = '';
	    var value = context.lookup(token[1]);

	    // This function is used to render an arbitrary template
	    // in the current context by higher-order sections.
	    function subRender (template) {
	      return self.render(template, context, partials);
	    }

	    if (!value) return;

	    if (isArray(value)) {
	      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
	        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
	      }
	    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
	      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
	    } else if (isFunction(value)) {
	      if (typeof originalTemplate !== 'string')
	        throw new Error('Cannot use higher-order sections without the original template');

	      // Extract the portion of the original template that the section contains.
	      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

	      if (value != null)
	        buffer += value;
	    } else {
	      buffer += this.renderTokens(token[4], context, partials, originalTemplate);
	    }
	    return buffer;
	  };

	  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate) {
	    var value = context.lookup(token[1]);

	    // Use JavaScript's definition of falsy. Include empty arrays.
	    // See https://github.com/janl/mustache.js/issues/186
	    if (!value || (isArray(value) && value.length === 0))
	      return this.renderTokens(token[4], context, partials, originalTemplate);
	  };

	  Writer.prototype.renderPartial = function renderPartial (token, context, partials) {
	    if (!partials) return;

	    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
	    if (value != null)
	      return this.renderTokens(this.parse(value), context, partials, value);
	  };

	  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
	    var value = context.lookup(token[1]);
	    if (value != null)
	      return value;
	  };

	  Writer.prototype.escapedValue = function escapedValue (token, context) {
	    var value = context.lookup(token[1]);
	    if (value != null)
	      return mustache.escape(value);
	  };

	  Writer.prototype.rawValue = function rawValue (token) {
	    return token[1];
	  };

	  mustache.name = 'mustache.js';
	  mustache.version = '2.2.1';
	  mustache.tags = [ '{{', '}}' ];

	  // All high-level mustache.* functions use this writer.
	  var defaultWriter = new Writer();

	  /**
	   * Clears all cached templates in the default writer.
	   */
	  mustache.clearCache = function clearCache () {
	    return defaultWriter.clearCache();
	  };

	  /**
	   * Parses and caches the given template in the default writer and returns the
	   * array of tokens it contains. Doing this ahead of time avoids the need to
	   * parse templates on the fly as they are rendered.
	   */
	  mustache.parse = function parse (template, tags) {
	    return defaultWriter.parse(template, tags);
	  };

	  /**
	   * Renders the `template` with the given `view` and `partials` using the
	   * default writer.
	   */
	  mustache.render = function render (template, view, partials) {
	    if (typeof template !== 'string') {
	      throw new TypeError('Invalid template! Template should be a "string" ' +
	                          'but "' + typeStr(template) + '" was given as the first ' +
	                          'argument for mustache#render(template, view, partials)');
	    }

	    return defaultWriter.render(template, view, partials);
	  };

	  // This is here for backwards compatibility with 0.4.x.,
	  /*eslint-disable */ // eslint wants camel cased function name
	  mustache.to_html = function to_html (template, view, partials, send) {
	    /*eslint-enable*/

	    var result = mustache.render(template, view, partials);

	    if (isFunction(send)) {
	      send(result);
	    } else {
	      return result;
	    }
	  };

	  // Export the escaping function so that the user may override it.
	  // See https://github.com/janl/mustache.js/issues/244
	  mustache.escape = escapeHtml;

	  // Export these mainly for testing, but also for advanced usage.
	  mustache.Scanner = Scanner;
	  mustache.Context = Context;
	  mustache.Writer = Writer;

	}));


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container feedback-form\">\n    <div class=\"header-form row\"><div class=\"place-info\"><span class=\"address-text\"><span class=\"glyphicon glyphicon-hand-right\"></span> {{address}}</span></div><span class=\"close-button glyphicon glyphicon-remove\"></span></div>\n    <div class=\"all-messages row\">\n        {{#messages}}\n            <div class=\"feedback-message\">\n                <b>{{name}}</b> {{place}} {{date}}\n                <br />\n                {{text}}\n            </div>\n        {{/messages}}\n        {{^messages}}\n            <span id=\"noFeedback\">Отзывов пока нет...</span>\n        {{/messages}}\n    </div>\n    <div class=\"input-elements row\">\n        <div class=\"you-feedback\">ВАШ ОТЗЫВ</div>\n        <input name=\"name\" type=\"text\" value=\"\" placeholder=\"Ваше имя\" class=\"form-field form-control\" />\n        <input name=\"place\" type=\"text\" value=\"\" placeholder=\"Укажите место\" class=\"form-field form-control\" />\n        <textarea name=\"feedback\" class=\"form-field form-control\" placeholder=\"Поделитесь впечатлениями\"></textarea>\n    </div>\n    <div class=\"footer-form row\"><button id=\"addButton\" type=\"button\" class=\"btn add-btn\">Добавить</button></div>\n</div>";

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div class=\"feedback-message\">\n    <b>{{name}}</b> {{place}} {{date}}\n    <br />\n    {{text}}\n</div>";

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<h3 class=ballon_header>{{ properties.balloonContentHeader }}</h3>\n<div class=ballon_body><a class=\"addressLink\" data-x=\"{{properties.balloonContentBody.x}}\" data-y=\"{{properties.balloonContentBody.y}}\" data-address=\"{{ properties.balloonContentBody.address}}\" href=\"javascript:void(0);\" title=\"Показать всю информацию по этому адресу\">{{ properties.balloonContentBody.address}}</a> <br /> {{ properties.balloonContentBody.text}}</div>\n<div class=ballon_footer>{{ properties.balloonContentFooter }}</div>";

/***/ }
/******/ ]);