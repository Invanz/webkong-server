const { Schema, model } = require('mongoose');

const serviceOrderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    clientId: {
        type: String,
        required: true
    },
    guiltId: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    deliveryDate: {
        type: Date,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    orderType: {
        type: String,
        required: true
    }
});

const serviceOrderModel = model('serviceOrder', serviceOrderSchema);

module.exports = serviceOrderModel