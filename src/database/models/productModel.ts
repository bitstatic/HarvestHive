import mongoose from 'mongoose';

interface IProduct {
    seller: mongoose.Schema.Types.ObjectId;
    name: string;
    description: string;
    price: number;
    quantity: number;
    category: string;
    images: string[];
    cropType: string;
    address: {
        city: string;
        state: string;
        postalCode: string;
    };
    harvestDate: Date;
    organic: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const ProductSchema = new mongoose.Schema({
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {            // Price per unit
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    images: {
        type: [String], // Array of image URLs
    },
    cropType: {
        type: String,
        required: true
    },
    address: {
        city: { type: String },
        state: { type: String },
        postalCode: { type: String },
        required: [true, "Please provide an address"],
    },
    harvestDate: { 
        type: Date
    },
    organic: {
        type: Boolean,
        default: false
    },
    // Metadata
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }

    // Ratings

    // rating: {
    //     type: Number,
    //     default: 0
    // },
    // numReviews: {
    //     type: Number,
    //     default: 0
    // },
    // reviews: [
    //     {
    //         user: {
    //             type: mongoose.Schema.Types.ObjectId,
    //             ref: 'User'
    //         },
    //         rating: {
    //             type: Number,
    //             required: true,
    //             min: 1,
    //             max: 5,
    //         },
    //     }
    // ],
});

const Product = mongoose.model<IProduct>('Product', ProductSchema);

module.exports = Product;
