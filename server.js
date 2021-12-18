const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {

    // const body = req.url == '/style.css'
    //     ? fs.readFileSync('./style.css')
    //     : fs.readFileSync('./index.html')

    let body = null
    try {
        body = fs.readFileSync(`${req.url}`)
    } catch (e) {
        body = fs.readFileSync(`./index.html`)
    }
    res.end(body)
})
const port = process.env.PORT || 3000
server.listen(port)

console.log(`server started ${port}`)
