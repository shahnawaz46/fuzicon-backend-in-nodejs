import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
      unique: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Address',
      required: true,
    },

    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
        },
        size: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        qty: {
          type: Number,
          required: true,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['order confirmed', 'processing', 'shipped', 'delivered'],
      default: 'order confirmed',
    },
    orderDate: {
      type: Date,
      default: Date.now(),
    },
    deliveredDate: {
      type: Date,
      default: null,
    },
    paymentMethod: {
      type: String,
      required: true,
      enum: ['cod', 'card'],
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'success', 'failed'],
      default: 'pending',
    },
  },
  { timeStamps: true }
);

export const Order = mongoose.model('Order', orderSchema);
