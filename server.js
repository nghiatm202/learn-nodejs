const http = require('http')

const server = http.createServer((req, res) => {
  console.log('run request...')
  res.setHeader('Content-Type', 'text/html')
  res.write('<h1>Hello world!</h1>')
  res.write('<h2>from Tran Minh Nghia</h2>')
  res.end()
})

server.listen(3000, 'localhost', () => {
  console.log('Node.js server is running on port: 3000')
})
