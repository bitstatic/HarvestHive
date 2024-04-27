import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: { 
        type: String, 
        required: [true, "Please provide an email"], 
        unique: true
    },
    phone:{
        type: String,
        match: [/^\d{10}$/, 'Please enter a valid phone number'],
        required: [true, "Please provide a phone number"],
        unique: true,

    },
    password: { 
        type: String, 
        required: [true, "Please provide a password"],
        minlength: 8,
    },
    role: {
        type: String,
        enum: ['customer', 'farmer', 'admin'],
        default: 'customer'
    },
    firstName: { 
        type: String, 
        required: [true, "Please provide a name"], 
        maxlength: 20
    },
    lastName: { 
        type: String, 
        required: [true, "Please provide a name"],
        maxlength: 20 
    },
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
        trim: true,
        minlength: 6,
        maxlength: 20
    },
    age: {
        type: Number,
        required: [true, "Please provide an age"],
        min: 18,
    },
    avatar: {
        type: String,
        default: 'defaultProfileAvatar.jpg'
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"],
        required: [true, "Please provide a gender"],
    },
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        postalCode: { type: String },
        country: { type: String },
        required: [true, "Please provide an address"],
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },

    // Associations
    listedProducts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    bids: [{
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product'
        },
        quantity: {
          type: Number,
          required: true
        },
        amount: {
          type: Number,
          required: true
        },
        status: {
          type: String,
          enum: ['pending', 'accepted', 'rejected'],
          default: 'pending'
        },
        closeDate: {
          type: Date,
          required: true
        }
    }],
    orders: [{
        orderId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Order'
        },
        products: [{
          productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
          },
          quantity: {
            type: Number,
            required: true
          }
        }],
        totalPrice: {
          type: Number,
          required: true
        },
        orderDate: {
          type: Date,
          default: Date.now
        },
        deliveryDate: {
          type: Date,
          required: true
        }
    }],

    // Password reset
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    passwordChangedAt: Date,

    // Email verification
    emailVerifyToken: String,
    emailVerifyTokenExpiry: Date,
    emailVerified: { 
        type: Boolean, 
        default: false 
    },
    emailConfirmedAt: Date,
    emailConfirmTokenSentAt: Date,
    emailConfirmTokenSentCount: { 
        type: Number, 
        default: 0 
    },

    // Account status
    isAdmin: { 
        type: Boolean, 
        required: true, 
        default: false 
    },
    isVerified: { 
        type: Boolean, 
        required: true, 
        default: false 
    },
    isBlocked: { 
        type: Boolean, 
        required: true, 
        default: false 
    },
    // Metadata
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },

});

const User = mongoose.model('User', UserSchema);
  
module.exports = User;