(function () {
    var mustache = require('mustache'),
        template = require('../html/feedbackForm.html');

    function GeoFeedBack(options) {
        var defaultOptions = {
                mapId: 'map',
                feedbackAreaId: 'feedback-area',
                closeButtonClass: 'close-button'
            },
            _this = this;

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

        this.renderForm = function(jsonInfo, pagePixels) {
            var form = mustache.render(template, jsonInfo),
                el = document.getElementById(options.feedbackAreaId),
             windowWidth = window.innerWidth
                || document.documentElement.clientWidth
                || document.body.clientWidth,
                windowHeight = window.innerHeight
                || document.documentElement.clientHeight
                || document.body.clientHeight;

            const elementheightLenght = 670;
            const elementwidthLenght = 450;

            if (((pagePixels[0]+elementwidthLenght) <  windowWidth) &&
                ((pagePixels[1]+elementheightLenght) <  windowHeight)) {
                el.style.left = pagePixels[0] + 'px';
                el.style.top = pagePixels[1] + 'px';
            } else {
                el.style.left = (windowWidth/2) - (elementwidthLenght/2) + 'px';
                el.style.top = (windowHeight/2) - (elementheightLenght/2) + 'px';
            }

            el.innerHTML = form;
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

        this.initEvents = function(map) {
            map.events.add('click', function(e) {
                var coords = e.get('coords');
                getAddress(coords, function(result) {
                   _this.renderForm({placeName: result.text }, e.get('pagePixels'));
                });
            });

            document.addEventListener('click', function(e) {
                if (e.target.classList && e.target.classList.contains(options.closeButtonClass)) {
                    e.target.parentNode.parentNode.classList.add('hide');
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
            this.initMap(function(map) {
                _this.initEvents(map);
            });
        }
    }


    module.exports = GeoFeedBack;
})();