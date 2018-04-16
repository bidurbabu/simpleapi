var appRouter = function (app) {
  app.get("/", function(req, res) {
    res.status(200).send("Welcome to our restful API");
  });
  app.get("/success", function(req, res) {
    res.status(200).send("The message send was successful");
  });
  app.get("/failed", function(req, res) {
    res.status(200).send("The message send failed");
  });
}

module.exports = appRouter;
