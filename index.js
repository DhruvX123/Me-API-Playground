const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const profileRoute = require('./routes/profileroute');
const swagger = require('./swagger');


const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = 'mongodb://localhost:27017/profiledb';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.use(bodyParser.json());
app.use('/profiles', profileRoute);
app.use('/api-docs', swagger.swaggerUi.serve, swagger.swaggerUi.setup(swagger.specs));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
