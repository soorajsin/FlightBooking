const {
          default: mongoose
} = require("mongoose");
const validator = require("validatorjs");





const userSchema = new mongoose.Schema({
          name: {
                    type: String,
                    required: true
          },
          email: {
                    type: String,
                    required: true,
                    unique: true,
                    validator(value) {
                              if (!validator.isEmail) {
                                        throw new Error("Email Invalid")
                              }
                    }
          },
          password: {
                    type: String,
                    required: true,
                    minlength: 6
          },
          cpassword: {
                    type: String,
                    required: true,
                    minlength: 6
          }
});



const userdb = mongoose.model("users", userSchema);

module.exports = userdb;