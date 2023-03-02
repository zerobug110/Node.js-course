const fs = require('fs');
const http = require('http');
const url = require('url');

//////////////////////////////
// HTTP Server
const server = http.createServer((req, res)=> {
    const pathName =req.url;

    if(pathName === '/' || pathName === '/overview') {
        res.end('overview page ')
    }else if(pathName === '/product') {
        res.end('Product page')
    }else {
        res.writeHead(404, {
            'Content-type': './text/html'
        })
        res.end(<h1>page not found!</h1>)
    }
    
})

server.listen(3000, '127.0.0.1', ()=> {
    console.log("listening to request on port 3000")
} )
//////////////////////////////
// File reading and writing

// blocking synchronous
// const textin = fs.readFileSync("./txt/input.txt", "utf-8")

// const textOut = `this is what we know about the avacado. ${textin} /n Created on ${Date.now()}`
// fs.writeFileSync("./txt/input.txt", textOut)

// console.log(textin);

// // Asyncronous Way

// fs.readFile("./txt/input.txt", "utf-8", (error, data)=> {
//     console.log(data);
// })

0