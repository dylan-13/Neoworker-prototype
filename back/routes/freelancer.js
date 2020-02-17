const models = require('../models')

module.exports = function(app) {

    //get freelancer by id
    app.get('/freelancer/:id', (req, res) => {
        models
        .freelancer
        .findByPk(req.params.id, {include: [models.users]})
        .then(x => res.json(x))
    })


    // get all freelancer
    app.get('/freelancers', (req,res)=>{
        if (req.query.status) {
            models
            .freelancer
            .findAll({
                where: {
                    status: req.query.status
                },
                include: [models.missions]
            })
            .then(x => res.json(x))
        }
        else {         
            models
            .freelancer
            .findAll({
                include: [models.missions]
            })
            .then(x => res.json(x))
        }
        });

     //création freelancer
    app.post('/freelancers', (req, res) => {
        models
        .freelancer
        .create(req.body)
        .then(newFree =>{
            newFree.addUsers(req.body.userId)
            .then(x=>res.json(newFree))
        })
    });
    

    //modif freelancer
    app.put('/freelancer/:id', (req, res) =>
        models
        .freelancer
        .update(req.body, {
            where: {
                id: req.params.id
            },
            include: [models.missions]
        })
        .then(() => res.end())
    );

    //Delete missions
    app.delete('/freelancer/:id', (req, res) => {
        models
            .freelancer
            .destroy({
                where: {
                    id: req.params.id
                }
            }).then(() => console.log("Deleted") & res.end())
    });
    
}