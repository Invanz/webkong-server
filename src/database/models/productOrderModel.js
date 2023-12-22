const { Schema, model } = require('mongoose')

const productOrderSchema = new Schema({
    clientId: {
        type: String,
        required: true
    },
    purchaseDate: {
        type: Date,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    products: [
        {
            type: Object,
            required: true
        }
    ],
    totalPrice: {
        type: Number,
        required: true
    },
});

const producOrdertModel = model('productOrder', productOrderSchema);

module.exports = producOrdertModel