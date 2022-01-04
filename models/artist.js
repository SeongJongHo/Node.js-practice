var mongoose = require('mongoose');

var artistScheme = new mongoose.Schema({    
    artist_username: {type: String, required: true},
    artist_fullname: {type: String, required: true},
    artist_searchdata: {type: String, required: true}
});

var artist = new mongoose.model('artist', artistScheme);

module.exports = artist;