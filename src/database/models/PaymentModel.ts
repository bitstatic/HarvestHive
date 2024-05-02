import mongoose from 'mongoose'
// import uniqueValidator from 'mongoose-unique-validator';

interface IPayment {
  user: mongoose.Schema.Types.ObjectId
  order: mongoose.Schema.Types.ObjectId
  amount: number
  paymentMethod: string
  status: string
  createdAt: Date
  updatedAt: Date
}

const PaymentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: ['credit_card', 'upi', 'cash_on_delivery'],
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'success', 'failed'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

// PaymentSchema.plugin(uniqueValidator);

const PaymentModel = mongoose.model('Payment', PaymentSchema)

module.exports = PaymentModel
