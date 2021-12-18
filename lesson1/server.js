const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {

    const body = req.url == '/style.css'
        ? fs.readFileSync('./style.css')
        : fs.readFileSync('./index.html')
    res.end(body)
})

server.listen(3000)

console.log('server started')
