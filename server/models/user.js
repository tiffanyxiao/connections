<<<<<<< HEAD
﻿// ./models/user.js

var mongoose = require('mongoose');
=======
var mongoose = require('mongoose');

>>>>>>> origin/master
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String,
    passwordHash: String,
    passwordSalt: String
});
<<<<<<< HEAD

module.exports = mongoose.model('User', UserSchema);
=======
module.exports = mongoose.model('User', UserSchema);
>>>>>>> origin/master
