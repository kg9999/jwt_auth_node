const express = require('express');
const bodyParser = require('body-parser');

const {signToken} = require('../controllers/users');
const {verifyToken} = require('../modules/auth');

const router = express.Router();
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({extended: false})

router.get('/', (req, res) => {
    res.send('jsop')
});

router.post('/signtoken', urlEncodedParser, jsonParser, (req, res) => {
    console.log(req.body);
    signToken(req, res).then();
});

router.get('/protected', verifyToken, urlEncodedParser, jsonParser, (req, res) => {
    res.send('jsop')
});

module.exports = router;