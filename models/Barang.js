// models/Barang.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const barangSchema = new Schema({
    nama: {
        type: String,
        required: true
    },
    harga: {
        type: Number,
        required: true
    },
    stok: {
        type: Number,
        required: true
    },
    kategori: {
        type: String,
        enum: ['buah', 'sayur'],
        required: true
    },
    deskripsi: String,
    gambar: String,
    penjual: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Barang', barangSchema);
