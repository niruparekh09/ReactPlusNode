const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const path = req.url;
  console.log(path);
  if (path === '/' || path === '/overview') {
    res.end('This is Overview');
  } else if (path === '/product') {
    res.end('This is Product');
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world',
      "Authorization": "Bearer 1234"  // this is how we send the token to the server
    });
    console.log('in else');
    res.end('<h1>Page Not Found</h1>');
  }
});

server.listen('8000', '127.0.0.1', () => {
  console.log('Server Running on PORT 8000');
});
