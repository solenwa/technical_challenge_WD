const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const phoneSchema = new Schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    manufacturer: {
      type: String,
      required: [true, "Name is required."],
    },
    description: {
      type: String,
      required: [true, "Name is required."],
    },
    color: {
      type: String,
      required: [true, "Name is required."],
    },
    price: {
      type: Number,
      required: [true, "Name is required."],
    },
    imageFileName: {
      type: String,
      required: [true, "Name is required."],
    },
    screen: {
      type: String,
      required: [true, "Name is required."],
    },
    processor: {
      type: String,
      required: [true, "Name is required."],
    },
    ram: {
      type: Number,
      required: [true, "Name is required."],
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Phone = model("Phone", phoneSchema);

module.exports = Phone;
