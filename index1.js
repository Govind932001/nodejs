const data = require('fs');


console.log('1')
// Blocking ...
// console.log(data.readFileSync('govind.txt','utf-8'))

// non - blocking
data.readFile('govind.txt','utf-8',(err,result) => {
    console.log(result)
})
console.log('2')