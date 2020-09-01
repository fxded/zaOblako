"use strict";

let performUpload = function(imgStatus: string): Promise<{imgStatus: string}> {
    return new Promise((resolve, reject) => {
        const randomFloat = Math.random();
        console.log(`Status: ${imgStatus}`, randomFloat);
        if (randomFloat < .6) {
            setTimeout(() => {
                resolve({ imgStatus: imgStatus });
            }, 500);
        } else {
            setTimeout(() => {
                reject({ imgStatus: imgStatus });
            }, 500);
        }
    });
}

var upload,
    compress,
    transfer;

performUpload('uploading...')
    .then((res) => {
        upload = res;
        console.log(JSON.stringify(upload));
        return performUpload('compressing...');
    })
    .then((res) => {
        compress = res;
        return performUpload('transferring...');
    })
    .then((res) => {
        transfer = res;
        return performUpload('Image upload completed.');
    })
    .catch((error) => {
        console.log(`At the stage: ${error.imgStatus} something went wrong`);
    });






























/* const fs = require('fs');

const newFile = fs.createWriteStream('testfile');
newFile.write('hello new file');

function delay(ms){
	return new Promise(function(resolve){
		setTimeout(resolve, ms);
    });
}

delay(5000).then(...);

*/


















/*
class Deferred<T> {

  promise: Promise<T>;
  resolve: (value?: T | PromiseLike<T>) => void;
  reject:  (reason?: any) => void;

  constructor() {
    this.promise = new Promise<T>((resolve, reject) => {
      this.resolve = resolve;
      this.reject  = reject;
    });
  }
}

export class MyComponent {

    private deferred = new Deferred<boolean>();

    someMethod(): Promise<boolean> {
        //$("#modal").modal("show");
        return this.deferred.promise;
    }

    handleRespone(res: boolean): void {
        if (res) {
            this.deferred.resolve(res);
        } else {
            this.deferred.reject(res);
        }
    }
} 
*/
