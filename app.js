const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userRoutes = require('./routes/userRoutes');
const userViewRoutes = require('./routes/userViewRoutes');

// View engine setup
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Middleware
app.use(express.json());
app.use(express.static(__dirname + '/public')); // agar assets bisa diakses

// Routes
app.use('/api/users', userRoutes);
app.use('/users', userViewRoutes);

// Root route
app.get('/', (req, res) => {
    res.render('index'); // views/index.ejs
});

// DB connection & server
mongoose.connect('mongodb://localhost:27017/toko-buah', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('MongoDB connected');
        app.listen(3000, () => console.log('Server running on http://localhost:3000'));
    })
    .catch(err => console.error(err));
