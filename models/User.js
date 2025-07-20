// models/User.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nama: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['pembeli', 'penjual'],
        required: true
    },
    alamat: String,
    no_hp: String
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
