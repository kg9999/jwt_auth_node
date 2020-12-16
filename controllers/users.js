const {signToken} = require('../modules/auth');

const _signToken = async (req, res) => {
    try {
        const token = await signToken(req.body)
        res.json({code: 'ok', message: 'Done', data: token});
    } catch (err) {
        res.json({code: 'ok', message: 'Done', data: err.message});
    }
}

module.exports = {
    signToken: _signToken
}