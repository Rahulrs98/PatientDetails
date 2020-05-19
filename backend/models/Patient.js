const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Patient = new Schema({
   name: {
      type: String
   },
   age: {
    type: Number
    },
 gender: {
    type: String
    },
   email: {
      type: String
   },
   symptoms: {
      type: String
   },
   phoneNumber: {
      type: Number
   }
}, {
   collection: 'patients'
})

module.exports = mongoose.model('Patient', Patient)