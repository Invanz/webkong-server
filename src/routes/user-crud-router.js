const express = require("express");
const UserCRUD = require("../CRUDs/UserCRUD.js");
const connectDb = require("../database/conn.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const router = express.Router();

const userExists = async (req, res, next) => {
  await connectDb();

  const { email } = req.body;
  const emailExists = await UserCRUD.findUserByEmail(email);

  emailExists
    ? res.status(400).send("El correo ya se encuentra registrado")
    : next();
};

const userNotExists = async () => {
  await connectDb();

  const { email } = req.body;
  const emailExists = await UserCRUD.findUserByEmail(email);

  !emailExists
    ? res.status(400).send("El correo no se encuentra registrado")
    : next();
};

router.use(express.json());

router.post("/login", async (req, res) => {
  await connectDb();

  const { email, password } = req.body;
  const user = await UserCRUD.findUserByEmail(email);
  const userExists = user.email == email && user.password == password;

  console.log(user, email, password, userExists);

  if (!userExists) {
    res.status(401).send("Usuario o contraseña inválido");
  } else {
    const token = jwt.sign(JSON.stringify(user), process.env.SECRET_KEY);
    res.header("authorization", token).json({ token });
  }
});

router.post("/register", userExists, async (req, res) => {
  await connectDb();

  const user = req.body;
  const newUser = await UserCRUD.createUser(user);

  res.status(201).json(newUser);
});

router.post("/:id", async (req, res) => {
  await connectDb();

  const id = req.params;
  const user = await UserCRUD.findUserById(id);

  res.status(200).json(user.name);
});

router.post("/reset-password", userNotExists, async (req, res) => {
  // send email
  res.status(200).json({ message: "Verifique su email" });
});

router.post("/change-password", async (req, res) => {
  const { id, password } = req.body;
  const user = await UserCRUD.findUserById(id);
  const userUpdated = await UserCRUD.updateUser(id, { ...user, password });
  res.status(200).json(userUpdated);
});

module.exports = router;
