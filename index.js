require('dotenv').config()
const express = require("express");
const app = express();
const secureApi = require("./middleware/secureApi.js");
const registrationController = require("./controller/registrationController.js");
const loginController = require("./controller/loginController.js")
const emailVerificationController = require("./controller/emailVerificationController.js")
//const profile = require("./controller/profile.js");
const dbConnection = require("./helper/dbConnection.js")
dbConnection()
app.use(express.json());

app.post("/registration", secureApi, registrationController);
//app.get("/profile", secureApi, profile);
app.post("/login", secureApi, loginController);

app.get("/:email", emailVerificationController);

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});