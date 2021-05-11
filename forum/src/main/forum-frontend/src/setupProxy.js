const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function proxy(app) {
  app.use(
    "/signin/login",
    createProxyMiddleware({
      target: "http://localhost:8080",
      changeOrigin: true,
    })
  );
  app.use(
    "/signup/create",
    createProxyMiddleware({
      target: "http://localhost:8080",
      changeOrigin: true,
    })
  );
  app.use(
    "/socket",
    createProxyMiddleware({
      target: "http://localhost:8080",
      changeOrigin: true,
    })
  );
  app.use(
    "/topic",
    createProxyMiddleware({
      target: "http://localhost:8080",
      changeOrigin: true,
    })
  );
  app.use(
    "/post/get",
    createProxyMiddleware({
      target: "http://localhost:8080",
      changeOrigin: true,
    })
  );
  app.use(
    "/post/comments",
    createProxyMiddleware({
      target: "http://localhost:8080",
      changeOrigin: true,
    })
  );
  app.use(
    "/app",
    createProxyMiddleware({
      target: "http://localhost:8080",
      ws: true,
      // changeOrigin: true,
    })
  );
};
