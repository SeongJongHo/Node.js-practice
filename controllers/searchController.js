var db = require('../models');

module.exports = {
    addartist:(req, res) =>{
        if(!req.body){
            return res.json({
                success : 0,
                status  : 400,
                msg     : "body null"
            })
        }
        
        var searchdata = req.body.fullname 
        const product = new db.artist({
            artist_username: req.body.username,
            artist_fullname: req.body.fullname,
            artist_searchdata: searchdata.split(" ").join("")
        })
        product.save().then(result => {
            res.json({
                success : 1,
                status  : 201,
                data    : result
            })
        }).catch((err)=>{
            res.json({
                success : 0,
                status  : 400,
                msg     : "not save"
            })
        })
    },
    searchAll: async (req, res) => {
        if (!req.query.keyword) {
            return res.json({
                success: 0,
                status: 400,
                data: null,
                msg: 'Required parameters not set. key word is required'
            })
        }
        const keyword = req.query.keyword;
        
        // var arts = await db.art.find({art_title: {$regex: keyword, $options: 'i'}}).exec()
        var artist = await db.artist.find({$or:[{artist_searchdata: {$regex: keyword, $options: "i"}},{artist_fullname: {$regex: keyword, $options: "i"}}]}).exec()
        // var collection = await db.collection.find({collection_name: {$regex: keyword, $options: 'i'}}).exec();
        // console.log(arts);
        res.json({
            success: 1,
            data: {
                // arts: arts,
                artists: artist
                // collection: collection
            }
        });
    }
}