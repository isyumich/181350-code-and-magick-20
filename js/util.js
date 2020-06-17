'use strict';

(function () {
  var getRandomNumber = function (min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  };

  window.getRandomArrayElement = function (arr) {
    return arr[getRandomNumber(0, arr.length - 1)];
  };
  window.getRandomNumber = function (min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  };
  window.getMaxElement = function (arr) {
    var maxElement = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };
})();
