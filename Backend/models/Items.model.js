const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemsSchema = new Schema({
    Item: {
        name: String,
        inventory: Number,
        nextDelivery: Date,
        deliveryAmt: Number,
        price: Number,
}
})
const Items = mongoose.model('items', ItemsSchema)

module.exports = Items