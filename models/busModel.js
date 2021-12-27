const mongoose = require('mongoose')

const busSchema = new mongoose.Schema({
    Bus_Name: {
        type: String,
        trim: true
    },
    Bus_Number: {
        type: Number,
        trim: true,
        unique: true
    },
    Departure: {
        type: String

    },
    Destination: {
        type: String
    },
    Time: {
        type: Date
    }, 
    Fare : {
        type: Number
    },
    Available_seats :{
        type: Number
    },

})

module.exports = mongoose.model("Buses", busSchema)


