"use strict";
var performUpload = function (imgStatus) {
    return new Promise(function (resolve, reject) {
        var randomFloat = Math.random();
        console.log("Status: " + imgStatus, randomFloat);
        if (randomFloat < .6) {
            setTimeout(function () {
                resolve({ imgStatus: imgStatus });
            }, 500);
        }
        else {
            setTimeout(function () {
                reject({ imgStatus: imgStatus });
            }, 500);
        }
    });
};
var upload, compress, transfer;
performUpload('uploading...')
    .then(function (res) {
    upload = res;
    console.log(JSON.stringify(upload));
    return performUpload('compressing...');
})
    .then(function (res) {
    compress = res;
    return performUpload('transferring...');
})
    .then(function (res) {
    transfer = res;
    return performUpload('Image upload completed.');
})["catch"](function (error) {
    console.log("At the stage: " + error.imgStatus + " something went wrong");
});
