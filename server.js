const http = require("http")
const server = http.createServer()
const port = process.env.APP_PORT || 3000


server.on("request", (req, res) => {

    const randomDelay = () => Math.floor(Math.random() * 3000) + 1
    const errStatus = () => Math.random() < 0.1

    if(errStatus()) {
        res.writeHead(500, { 'Content-Type': 'text/plain' })
        res.end('Internal Server Error')
    } else {
        setTimeout(() => {
          res.writeHead(200, { 'Content-Type': 'text/plain' })
          res.end('Hello!')
        }, randomDelay());
    }
})

server.listen(port)

server.on('listening', () =>{
    console.log(`Server is running on port ${port}`)
})