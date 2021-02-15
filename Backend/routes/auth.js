const express = require('express');
const {register,login} = require('../controllers/auth')
const {registerRules, validator, loginRules} = require('../middlewares/Validator');
const router = express.Router();

router.post('/register',registerRules(), validator, register);
router.post('/login',loginRules(), validator, login);

module.exports = router;