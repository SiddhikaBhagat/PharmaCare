const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
     name:{
        type: String,
         required: function () {
        return this.isVerified;
       },
     },
      email: {
      type: String,
      unique: true,
      sparse: true,
      lowercase: true,
      trim: true,
    },
     password: {
      type: String,
      default: null,
    },
    phone: {
      type: String,
      unique: true,
      sparse: true,
      trim: true,
    },
    userType: {
      type: String,
      required: true,
      enum: ['customer', 'pharmacist', 'admin'],
      default: 'customer',
    },
    pharmacyName: {
      type: String,
      required: function () {
        return this.userType === 'pharmacist' && this.isVerified;
      },
    },
    address: {
      type: String,
      default: "",
      required: true
    },
    pincode: {
      type: Number,
      required: true
    },
     licenseNumber: {
      type: String,
      default: ""
    },
    otp: String,
    otpExpires: Date,

    isVerified: {
      type: Boolean,
      default: false,
    },

    }, 
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);