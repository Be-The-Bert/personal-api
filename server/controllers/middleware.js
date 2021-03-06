var user = require('../../user.js');

module.exports = {
    addHeaders: (req, res, next) => {
        res.status(200).set({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'X-XSS-Protection': '1; mode=block',
            'X-Frame-Options': 'SAMEORIGIN',
            'Content-Security-Policy': "default-src 'self' devmountain.github.io"
        });
        next();
    },
    verifyUser: (req, res, next) => {
        console.log(req.params);
        if (req.params.username === 'test' && req.params.pin == 1234) {
            next();
        } else {
            res.json("Oops, you don't have access to that")
        }
    }
}

