import mongoose from 'mongoose'

interface IProduct {
  seller: mongoose.Schema.Types.ObjectId
  name: string
  description: string
  price: number
  quantity: number
  category: string
  images: string[]
  address: {
    city: string
    state: string
    pinCode: string
  }
  harvestDate: Date
  organic: boolean
  createdAt: Date
  updatedAt: Date
}

const ProductSchema = new mongoose.Schema({
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    // Price per unit
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  images: {
    type: [String], // Array of image URLs
  },
  address: {
    city: { type: String },
    state: { type: String },
    pinCode: { type: String },
  },
  harvestDate: {
    type: Date,
  },
  organic: {
    type: Boolean,
    default: false,
  },
  // Metadata
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },

})

const Product = mongoose.models.products || mongoose.model('products', ProductSchema) 

export default Product;
