# Silent Server Failure in Node.js

This repository demonstrates a scenario where a Node.js HTTP server fails silently when attempting to bind to a port that is already in use.  The server doesn't provide any error messages, making debugging difficult.  The solution illustrates how to handle this situation gracefully.

## Bug

The `server.js` file contains a simple HTTP server. If you run this while another server is using port 3000, it'll fail without any output to the console.

## Solution

The `serverSolution.js` file shows how to use the `'error'` event listener to catch the error and handle it properly.
