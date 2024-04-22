const http = require('http');
const fs = require('fs')

http.createServer((req,res) =>{
    let date = Date.now(); 

    fs.appendFile('log.txt',`${date} : ${req.url} /n`,() =>{
        res.end('Server started')
    })
    
}).listen(8000 ,console.log('start') );