const express = require("express");
const PORT = process.env.PORT || 3001;
const jwt = require("jsonwebtoken");
const cors = require("cors");
const serviceRouter = require("./routes/service-crud-router");
const productRouter = require("./routes/product-crud-router");
const userRouter = require("./routes/user-crud-router");
const serviceOrderRouter = require("./routes/service-order-crud-router");
const productOrderRouter = require("./routes/product-order-crud-router");

const authVerification = (req, res, next) => {
  acessToken = req.headers["authorization"];
  if (!acessToken) res.status(403).send("No te has autenticado");

  jwt.verify(acessToken, process.env.SECRET_KEY, (err, user) => {
    err ? res.status(403).send("Acceso denegado") : next();
  });
};

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(function (request, response, next) {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  response.header(
   'Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, X-Api-Key'
 );

 next();
})

app.use("/services", serviceRouter);
app.use("/products", productRouter);
app.use("/users", userRouter);
app.use("/service-orders", serviceOrderRouter);
app.use("/product-orders", productOrderRouter);

app.use(express.json());

app.listen(PORT, () => {
  console.log("Server listen in " + PORT);
});
