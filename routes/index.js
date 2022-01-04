var express = require('express');
var router = express.Router();
const productCtrl = require('../controllers/productsController');
const searchCtrl = require("../controllers/searchController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    success: 0,
    status: 404,
    msg: 'Invalid request!'
  })
});
/* product */
router.post('/products', productCtrl.addproduct)
router.get('/products', productCtrl.getproduct)
router.delete('/products', productCtrl.deleteproduct)
router.put('/products', productCtrl.updateproduct)

/* aritst */
router.post('/artist', searchCtrl.addartist)
router.get('/artist', searchCtrl.searchAll)

module.exports = router;
