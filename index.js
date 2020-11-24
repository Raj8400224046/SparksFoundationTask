const express = require("express");
const app = express();
const Insta = require("instamojo-nodejs");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
var path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post(
  "/pay",

  (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var amount = req.body.amount;

    var data = new Insta.PaymentData();

    const REDIRECT_URL = "http://localhost:3000/success";

    Insta.createPayment(data, function (error, response) {
      if (error) {
        return res.status(400).json({
          error: "payment failed",
        });
      } else {
      }
    });
  }
);

app.get("/success", (req, res) => {
  res.sendFile(__dirname + "/donation.html");
});
app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
