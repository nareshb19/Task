const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/products',
    createProxyMiddleware({
      target: 'http://170.64.134.195',
      changeOrigin: true,
    })
  );
};
