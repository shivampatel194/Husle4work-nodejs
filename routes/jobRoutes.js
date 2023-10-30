const express = require("express");
const auth = require("../middlewares/auth");
const jobRouter = express.Router();

jobRouter.get("/" , auth, getAllUserData);

jobRouter.post("/createJob", auth, createUserData);


