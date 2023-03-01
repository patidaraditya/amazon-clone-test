const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51L981ASCzgpQfL3t19CofsxlQIDQjZf1Qv1v76hWmsh5mqO0CfpOyhS1SmKTiaqs08dPiF7Ldux7PpL8Nwm6gV2p00VtvDE55z"
);

//API

// - API config
const app = express();

// - Middle_wares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (req, res) => {
  res.send("Hello from Rishav");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  // console.log("Payments Request Recieved of amount: ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// -Listen command
exports.api = functions.https.onRequest(app);
