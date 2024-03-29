import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const adminSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
    },
    email: {
      type: String,
    },
    phoneNo: {
      type: Number,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      default: 'admin',
    },
  },
  { timestamps: true }
);

adminSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

export const Admin = mongoose.model('Admin', adminSchema);
