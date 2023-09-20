const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const Form = require('./models/form');

const port = process.env.PORT || 3000;
const app = express();

mongoose.connect('mongodb+srv://dchiquete2019:97Ap4KcvLRfmz6Hs@cluster0.nr0zix5.mongodb.net/RegistrationApp')
    .then(() => {
        console.log('Connected to MongoDB.');
    })
    .catch(err => {
        console.log('Error connecting to MongoDB:', err );
    });

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./public'));
app.use(express.static('./views'));

app.use(express.urlencoded({extended: true}));

app.get('/', async (req, res) => {
    const form = await Form.find();
    res.render('index', {form});
});

app.get('/add', async (req, res) => {
    
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});