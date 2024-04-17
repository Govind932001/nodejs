const fs = require('fs');

// fs.writeFileSync('./govind.txt','Hello')
// fs.writeFile('./govind.txt','Hello Govind', (err) => {

// })

// fs.readFile('./govind.txt','utf-8',(err,result) => {
//     if(result){
//         console.log(result)
//     }
// });

fs.copyFileSync('./govind.txt','a.txt')

fs.mkdirSync('goinvd/a/b',{recursive:true})

