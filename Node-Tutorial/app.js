const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/'){
    res.write('<html>');
    res.write('<head><title>Enter message</title></head>');
    res.write('<body><form action="/message" method"POST"><input type="text name="message"><button type="submit">send</button></form></body>');
    res.write('</html');
    return res.end();
    }
    if (url === '/message' && method === 'POST'){
        
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page in node</title></head>');
    res.write('<body><h1>Hello from my node.js server!</h1></body>');
    res.write('</html');
    res.end();

});

server.listen(8000);