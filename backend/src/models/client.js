const { Schema, model } = require("mongoose");
const clientSchema = new Schema(
  {
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    question: {
      type: String,
    }

  },
  {
    timestamps: true
  }
);

module.exports = model("Client", clientSchema);

podemos 
