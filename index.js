const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const profileRoute = require('./routes/profileroute');
const swagger = require('./swagger');


const app = express();
const cors = require('cors');
app.use(cors());
const PORT = process.env.PORT || 10000;
const MONGO_URI = 'mongodb+srv://dhruv135:dhruvagarwal123@cluster0.cotlcgn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.use(bodyParser.json());
app.use('/profiles', profileRoute);

app.use('/api-docs', swagger.swaggerUi.serve, swagger.swaggerUi.setup(swagger.specs));
app.get('/', (req, res) => {
    res.redirect('/api-docs');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
