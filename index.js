"use strict";

var video = document.getElementById("video");

navigator.webkitGetUserMedia({video: true, audio: false}, _handleSuccess, _handleError);

function _handleSuccess(localMediaStream) {
  video.src = window.URL.createObjectURL(localMediaStream);
  video.play();
}

function _handleError() {
  alert("ERROR: カメラを起動できませんでした。カメラの使用を許可してください。");
}

var changeBrightness = function (val) {
  video.style.webkitFilter="brightness(" + val + ")";
};

var changeScale = function (val) {
  video.style.transform = "scale(" + (-1 * val) + ',' + val + ")";
};


module.exports.changeScale = changeScale;
module.exports.changeBrightness = changeBrightness;

