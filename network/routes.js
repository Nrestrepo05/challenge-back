const reverse = require('../components/reverse/network');

const routes = (server) => {
  server.use('/reverse', reverse);
};

module.exports = routes;
