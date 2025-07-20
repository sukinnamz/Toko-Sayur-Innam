// models/Transaksi.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transaksiSchema = new Schema({
    pembeli: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tanggal: {
        type: Date,
        default: Date.now
    },
    total_harga: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'diproses', 'dikirim', 'selesai', 'dibatalkan'],
        default: 'pending'
    }
}, { timestamps: true });

module.exports = mongoose.model('Transaksi', transaksiSchema);
