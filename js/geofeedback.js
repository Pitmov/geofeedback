(function () {
    var mustache = require('mustache'),
        template = require('../html/feedbackForm.html'),
        templateMessage = require('../html/messageTemplate.html'),
        clusterTemplate = require('../html/clusterTemplate.html');

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