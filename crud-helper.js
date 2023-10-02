// Connect to the database
require('dotenv').config();
require('./config/database');

// require the Mongoose models
//const User = require('./models/user');
//const movie = require('./models/movie');
//const actor = require('./models/actor');

// Local variables will come in handy for holding retrieved documents
let user, movie, actor
let users, movies, actors