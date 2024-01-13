const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema


const orderItemSchema = new mongoose.Schema({
    quantity: {
        type: Number,
        required: true
    },
    item: {
        type: ObjectId,
        required: true,
        red: 'ItemSchema'
    },

}, { timestamps: true })

module.exports = mongoose.model('OrderItem', orderItemSchema)