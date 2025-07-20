// models/DetailTransaksi.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const detailTransaksiSchema = new Schema({
    transaksi: {
        type: Schema.Types.ObjectId,
        ref: 'Transaksi',
        required: true
    },
    barang: {
        type: Schema.Types.ObjectId,
        ref: 'Barang',
        required: true
    },
    jumlah: {
        type: Number,
        required: true
    },
    subtotal: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('DetailTransaksi', detailTransaksiSchema);
