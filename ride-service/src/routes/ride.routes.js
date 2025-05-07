const express = require('express');
const router = express.Router();
const rideController = require('../controllers/ride.controller');

// Create Ride
router.post('/', rideController.createRide);
// Get all Rides
router.get('/', rideController.getRides);
// Get Ride by ID
router.get('/:id', rideController.getRideById);
// Update Ride
router.put('/:id', rideController.updateRide);
// Delete Ride
router.delete('/:id', rideController.deleteRide);

// Customer rates driver
router.put('/rides/:id/rate/driver', rateDriver);


module.exports = router; 