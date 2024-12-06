const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var productSchema = new Schema({
  productName: { type: String, required: true },
  image: { type: Buffer, required: true },
  productDescription: { type: String },
  productOwner: { type: String, required: true },
  ownerAvatar: { type: Buffer, required: true },
  created_at: { type: Date, default: Date.now },
  price: { type: Number, required: true },

  reviews: [
    {
      rating: { type: Number, min: 1, max: 5, required: true },
      review: { type: String, required: true },
      reviewImage: { type: Buffer },
      created_at: { type: Date, default: Date.now },
    },
  ],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
