//knex config

const knex = require('../helpers/knex');

module.exports = function (app) {

    app.get('/', (req, res) => {

        res.render('login');
    })

    app.post('/signin', async function(req,res) {

        console.log(JSON.stringify(req.body))
        const result = knex("library.signin").insert({
            email:req.body.email,
            password:req.body.password

        })
    } )
}
