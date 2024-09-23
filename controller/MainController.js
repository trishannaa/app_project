const user = require('../models/UserModels')
const vidal ={
    index: (req, res) =>{
        res.render('index');
    },
    create: (req, res) =>{
        const data = req.body;
        user.save(data, (err) =>{
            if(err) throw err;
            res.redirect('/');
        })
    }

}

module.exports = vidal;