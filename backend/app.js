const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./api/auth/authRoutes');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(authRoutes);

app.listen(8080);
