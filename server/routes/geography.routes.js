const router = require('express').Router();
const controllers = require('../controllers/geography.controllers');

router.get('/validatePostCode/:postCode', controllers.validatePostCode);
router.get('/cityArray/:state', controllers.cityArray);
router.get('/stateArray', controllers.stateArray);
router.get('/validateState/:state', controllers.validateState);
router.get('/validateCity/:state/:city', controllers.validateCity);
router.get('/zipCodeArray/:state/:city', controllers.zipCodeArray);

module.exports = router;
