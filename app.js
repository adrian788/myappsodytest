module.exports = (/*options*/) => {
  // Use options.server to access http.Server. Example with socket.io:
  //     const io = require('socket.io')(options.server)
  const app = require('express')()

  app.get('/', (req, res) => {
    // Use req.log (a `pino` instance) to log JSON:
    req.log.info({message: 'Hello, Adrian, from Appsody!'});
    res.send('Hello again, Adrian, from Appsody! GitHub Edit. You do Rock! Appsody Project');
  });

  return app;
};
