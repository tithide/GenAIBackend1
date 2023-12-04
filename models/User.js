const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
      name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      otp: {
        type: Number,
        default: 1111
      }
})

module.exports = mongoose.model('User', userSchema);