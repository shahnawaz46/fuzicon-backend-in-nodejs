import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    cartItems: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'products',
          required: true,
        },
        qty: {
          type: Number,
          default: 1,
        },
        size: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export const Cart = mongoose.model('Cart', cartSchema);
