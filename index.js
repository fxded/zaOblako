/*Event loop*/
/* step one -> Timers  */
/* setTimeout */
console.time('setTimeout');
setTimeout(function () {
    console.log('Timer went off');
    console.timeEnd('setTimeout');
}, 100);
setTimeout(function () {
    console.log('second Timeout');
    for (var i_1 = 0; i_1 < 10000000; ++i_1)
        ;
}, 95);
/* setInterval */
var i = 0;
var id = setInterval(function () {
    console.log(++i);
    if (i > 10)
        clearInterval(id);
}, 50);
/* check */
setTimeout(function () {
    console.log('set timeout');
}, 0);
setImmediate(function () {
    console.log('set immediate');
});
/*********************************************/
process.nextTick(function () { return console.log('After'); });
console.log('Before');
