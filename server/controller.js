const people  = require('./data');
module.exports = {
    read: (req, res)=>{
        res.status(200).send(people)
    }
}