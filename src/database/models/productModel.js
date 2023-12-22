const { Schema, model } = require('mongoose')

const productSchema = new Schema({
    imageUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: [
        {
            type: String,
            required: true
        }
    ],
    price: {
        type: Number,
        required: true
    },
});

const productModel = model('product', productSchema);

module.exports = productModel