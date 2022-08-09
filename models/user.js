const { Schema, model } = require("mongoose");
// const Joi = require("joi");
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      required: true,
    },

    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

// const signupSchema = Joi.object({
//   email: Joi.string().required(),
//   password: Joi.string().min(6).required(),
// });

// const loginSchema = Joi.object({
//   email: Joi.string().required(),
//   password: Joi.string().min(6).required(),
// });

// const schemas = {
//   signup: signupSchema,
//   login: loginSchema,
// };

const User = model("user", userSchema);

module.exports = { User };
