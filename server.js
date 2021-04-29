express = require('express')
mongoose = require('mongoose')
cors = require('cors')

//express app
const app = express();

//globals
const PORT = 4000

//allow cross-origin requests
app.use(cors());

//connect to MongoDB
const dbURI = 'mongodb+srv://PlantManATX:plants@cluster0.yr4sm.mongodb.net/much-to-do?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT))
    .catch(err => console.log(err));

//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));