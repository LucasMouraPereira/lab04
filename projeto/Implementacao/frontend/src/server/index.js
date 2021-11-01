const { createServer } = require("http");
const next = require("next");
const routes = require("./routes");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handler).listen(process.env.PORT);
  console.info(`Frontend executando na porta ${process.env.PORT}`);
});
