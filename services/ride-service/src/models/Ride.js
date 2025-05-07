
const mongoose = require('mongoose');const rideSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Customer' },
  driverId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Driver' },
  pickup: { type: locationSchema, required: true },
  dropoff: { type: locationSchema, required: true },
  status: { type: String, enum: ['requested', 'in_progress', 'completed', 'cancelled'], default: 'requested' },
  fare: { type: Number, required: true },

  // ✅ NEW: Ratings and Reviews
  rating: {
    byCustomer: {
      stars: { type: Number, min: 1, max: 5 },
      review: { type: String }
    },
    byDriver: {
      stars: { type: Number, min: 1, max: 5 },
      review: { type: String }
    }
  },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, {
  timestamps: true
});
