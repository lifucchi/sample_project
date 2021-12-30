// const http = require('http');
import http from 'http';

// import userRoutes from '.routes/users.ts';

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/'){
        res.write('<html>')
        res.write('<body>hello world</body>')
        res.write('</html>')
        return res.end();
    }
    console.log(req);
})

server.listen(3000)