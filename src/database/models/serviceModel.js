const { Schema, model } = require('mongoose');

const serviceSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: Array,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
});

const serviceModel = model('service', serviceSchema);

module.exports = serviceModel