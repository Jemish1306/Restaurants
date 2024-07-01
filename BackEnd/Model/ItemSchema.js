const mongoose = require('mongoose');

const customizationSchema = new mongoose.Schema({
    name: String,
    detail: String,
    rate: Number
});

const itemSchema = new mongoose.Schema({
    itemName: String,
    ingredients: String,
    itemPrice: Number,
    itemImage: String, // Store image URL or binary data as per your setup
    discount: Number,
    itemType: String,
    spicyLevel: String,
    isVeg: Boolean,
    customizations: [customizationSchema]
});

const AddItem = mongoose.model('Item', itemSchema);

module.exports=AddItem;