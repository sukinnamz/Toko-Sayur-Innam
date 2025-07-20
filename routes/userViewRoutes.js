// routes/usersViewRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Tampilkan semua user
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.render('users/index', { users });
    } catch (err) {
        res.status(500).send('Terjadi kesalahan: ' + err.message);
    }
});

// Form tambah user
router.get('/add', (req, res) => {
    res.render('users/forms', {
        user: null,
        formTitle: 'Tambah User'
    });
});

// Form edit user
router.get('/edit/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.render('users/forms', { user, formTitle: 'Edit User' });
    } catch (err) {
        res.status(500).send('Gagal mengambil data: ' + err.message);
    }
});

module.exports = router;
