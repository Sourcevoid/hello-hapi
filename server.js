'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
  host: '0.0.0.0',
  port: 8080
});

// Add the routes
server.route({
  method: 'GET',
  path:'/',
  handler: function (request, reply) {
    return reply('Hello World from Hapi!');
  }
});
server.route({
  method: 'GET',
  path:'/nodejs',
  handler: function (request, reply) {
    return reply('Hello World from Hapi at path /nodejs!');
  }
});

// Start the server
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});

