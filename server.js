const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes');

//express app
const app = express();

//globals
const PORT = 4000;

//allow cross-origin requests
app.use(cors());

//connect to MongoDB
const MONGODB_URI = 'mongodb+srv://PlantManATX:plants@cluster0.yr4sm.mongodb.net/much-to-do?retryWrites=true&w=majority'
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT))
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