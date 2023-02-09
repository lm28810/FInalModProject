const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemsSchema = new Schema({
    
        avatar: { type: String, required: true },
        productname: { type: String, required: true },
        inventory:{ type: Number, required: true },
        nextDelivery:{ type: Date, required: true },
        deliveryAmt: { type: Number, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },

})
const Items = mongoose.model('items', ItemsSchema)

module.exports = Items