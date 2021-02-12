const mongoose = require('mongoose');
const { Schema } = mongoose;

const TripSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
});

const TripsSchema = new Schema({
  trips: {
    type: [TripSchema],
  },
});

const Trip = mongoose.model('Trip', TripsSchema);
module.exports = {
  Trip,
};
