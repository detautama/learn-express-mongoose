const express = require('express')
const app = express();
const mongoose = require('mongoose');
const BodyParser = require('body-parser')
require('dotenv/config')

app.use(BodyParser.json())

// Import Routes
const postsRoute = require('./routes/posts')

// ROUTES
app.get('/', (_req, res) => {
    res.send('we are on home')
})
app.use('/posts', postsRoute)

// Connect to DB
mongoose.set('useNewUrlParser', true);
// mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DB_CONNECTION, () => console.log('connected to DB!'))

// how we start listening to the server
app.listen(3000)