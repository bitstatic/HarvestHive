import mongoose from "mongoose";

interface IUser {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    fullName: string;
    age: number;
    gender: string;
    address: {
        street: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    phone: string;
    role: string;
    avatar: string;
    isAdmin: boolean;
    isVerified: boolean;
    isBlocked: boolean;
    forgotPasswordToken: string;
    forgotPasswordTokenExpiry: Date;
    passwordChangedAt: Date;
    verifyEmailToken: string;
    verifyEmailTokenExpiry: Date;
    emailVerified: boolean;
    emailConfirmedAt: Date;
    emailConfirmTokenSentAt: Date;
    emailConfirmTokenSentCount: number;
}


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        minlength: 3,
        maxlength: 20
    },
    email: { 
        type: String, 
        required: [true, "Please provide an email"], 
        unique: true
    },
    password: { 
        type: String, 
        required: [true, "Please provide a password"],
    },
    firstName: { 
        type: String,
        default: '' 
    },
    lastName : { 
        type: String,
        default: '' 
    },
    dateOfBirth : {
        type: Date,
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"],
    },
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        postalCode: { type: String },
        country: { type: String },
    },
    phone:{
        type: String,
        match: [/^\d{10}$/, 'Please enter a valid phone number'],
    },
    role: {
        type: String,
        enum: ['customer', 'farmer', 'admin'],
        default: 'customer'
    },
    avatar: {
        type: String,
        default: 'defaultProfileAvatar.jpg'
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
    
    // Password reset
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    passwordChangedAt: Date,
    
    // Email verification
    verifyEmailToken: String,
    verifyEmailTokenExpiry: Date,
    emailVerified: { 
        type: Boolean, 
        default: false 
    },
    emailVerifiedAt: Date,
    emailVerificationTokenSentAt: Date,
    emailConfirmTokenSentCount: { 
        type: Number, 
        default: 0 
    },
}, {   
    virtuals: {
        // fullName: {
        //     get() {
        //         return `${this.firstName} ${this.lastName}`;
        //     },
        //     set(value: string) {
        //         const [first, last] = value.split(' ');
        //         this.firstName = first;
        //         this.lastName = last;
        //     }
        // }
    },
    timestamps: true,
    toJSON: { virtuals: true },
}
);
    
    // Associations
    // listedProducts: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Product'
    // }],
    // bids: [{
    //     productId: {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: 'Product'
    //     },
    //     quantity: {
    //       type: Number,
    //       required: true
    //     },
    //     amount: {
    //       type: Number,
    //       required: true
    //     },
    //     status: {
    //       type: String,
    //       enum: ['pending', 'accepted', 'rejected'],
    //       default: 'pending'
    //     },
    //     closeDate: {
    //       type: Date,
    //       required: true
    //     }
    // }],
    // orders: [{
    //     orderId: {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: 'Order'
    //     },
    //     products: [{
    //       productId: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Product'
    //       },
    //       quantity: {
    //         type: Number,
    //         required: true
    //       }
    //     }],
    //     totalPrice: {
    //       type: Number,
    //       required: true
    //     },
    //     orderDate: {
    //       type: Date,
    //       default: Date.now
    //     },
    //     deliveryDate: {
    //       type: Date,
    //       required: true
    //     }
    // }],
    

const User = mongoose.models.users || mongoose.model('users', userSchema);
  
export default User;