const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var paymentSchema = new Schema({
  umserName: { type: String, required: true },
  userEmail: { type: String, required: true },
  cardNumber: { type: String, required: true },
  cardCVC: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  price: { type: Number, required: true },
  userCountry: { type: String, required: true },
  paymentStatus: { type: Boolean, default: false },
  productName: { type: String, required: true },
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
