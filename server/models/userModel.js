const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a Name"],
    },
    email: {
      type: String,
      required: [true, "Please add a email"],
      unique: true,
    },
    passowrd: {
      type: String,
      required: [true, "Please add a password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
