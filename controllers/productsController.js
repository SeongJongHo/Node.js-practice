var db = require('../models');

module.exports = {
    addproduct:(req, res) =>{
        if(!req.body){
            return res.json({
                success : 0,
                status  : 400,
                msg     : "body null"
            })
        }
        const product = new db.products({
            product_name        : req.body.product_name,
            product_thumbnail   : req.body.product_thumbnail,
            product_description : req.body.product_description,
            product_price       : req.body.product_price
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
    getproduct:(req, res)=>{
        db.products.find({},(err,data)=>{
            if(err){
                res.json({
                    success : 0,
                    status  : 400
                })
            }
                res.json({
                    success : 1,
                    status  : 200,
                    data : data
            })
        })
    },
    updateproduct:(req, res)=>{
        if(!req.body.id){
            return res.json({
                success : 0,
                status  : 400
            })
        }
        console.log(req.body.price)
        db.products.updateOne(
            {_id:req.body.id},
            {$set:{price:req.body.price}},
            (err,result)=>{
                if(err){
                    return res.json({
                        msg:"err"
                    })
                }
                res.json({
                    data:result
                })
            })
    },
    deleteproduct:(req, res)=>{
        if(!req.body.id){
            return res.json({
                success : 0,
                status  : 400
            })
        }
        db.products.deleteOne({_id:req.body.id},(err, result)=>{
            if(err){
                res.json({
                success : 0,
                status  : 400,
                })
            }
            res.json({
                success : 1,
                status  : 200,
                data    : result
            })
        })
    }
}