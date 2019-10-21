/*
 * Products Model
 */

/* Mongoose import */
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: String,
    price: String,
    teacher: String,
    category: String,
    img: String,
    description: String,
    url: String
});

module.exports = mongoose.model('Products', ProductSchema);