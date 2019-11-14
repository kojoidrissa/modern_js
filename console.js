console.clear();
// console.time() and console.timeEnd() need to use the same identifier
console.time('Start');
    console.log('Kojo');
    console.log(123);
    console.log(false);
    var greets = 'Hey gurl!'
    console.log(greets);
    console.log([1, 2, 3]);
    console.log({ a: 1, b: 2, c: 3 });
    console.table({ a: 1, b: 2, c: 3 });
    console.error("oh NOOO!");
    console.warn("Watch out!");
console.timeEnd('Start');
