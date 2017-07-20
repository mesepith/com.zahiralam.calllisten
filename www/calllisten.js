/*global cordova, module*/

module.exports = {
    listen: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "Calllisten", "greet", [name]);
    }
};

