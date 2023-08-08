const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes');

require('dotenv').config()

//express app
const app = express();

//allow cross-origin requests
app.use(cors());

//connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(process.env.PORT || PORT))
    .catch(err => console.log(err));

//middleware and static files
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//redirect
app.get('/', (req, res) => {
    res.redirect('/todos')
})

//todo routes
app.use("/todos", todoRoutes)