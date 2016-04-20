require("../css/style.css");
var GeoFeedBack = require('./geofeedback.js');
(function () {
    var geofeedback = new GeoFeedBack();
    document.addEventListener("DOMContentLoaded", function() {
        geofeedback.init();
    });
})();