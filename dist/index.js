console.time('setTimeout');
setTimeout(() => {
    console.log('Timer went off');
    console.timeEnd('setTimeout');
}, 100);
setTimeout(() => {
    console.log('second Timeout');
    for (let i = 0; i < 10000000; ++i)
        ;
}, 95);
let i = 0;
const id = setInterval(() => {
    console.log(++i);
    if (i > 10)
        clearInterval(id);
}, 50);
setTimeout(() => {
    console.log('set timeout');
}, 0);
setImmediate(() => {
    console.log('set immediate');
});
process.nextTick(() => console.log('After'));
console.log('Before');
function builderUser(userId, userName) {
    return { id: userId, name: userName };
}
let newUser = builderUser(2, "Bill");
console.log(newUser);
console.log(newUser.id);
console.log(newUser);
//# sourceMappingURL=index.js.map