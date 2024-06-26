import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true
  },

  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  status: {
    type: Boolean,
    default: true
  },

  idProvider: {
    type: String,
    required: true
  }
});

export default mongoose.model('Product', productSchema);