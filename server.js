const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  // ...
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hello World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

//Uncommon error:  The server may fail silently if there's a problem with the port binding (like it's already in use).
//This could be because of an issue like a previous server instance still running, or another process occupying the port.
//In such cases, there are no error messages printed to the console and the server appears to have failed to start without any indication.