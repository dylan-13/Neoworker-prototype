const models = require('../models')

module.exports = function (app) {

    //Get all mission
    app.get('/missions', (req, res) => {
        if (req.query.status) {
            models
            .missions
            .findAll({
                where: {
                    status: req.query.status
                },
                include: [models.freelancer]
            })
            .then(x => res.json(x))
        }
        else {         
            models
            .missions
            .findAll({
                include: [models.freelancer]
            })
            .then(x => res.json(x))
        }
        });

    //Get missions by id
    app.get('/mission/:id', (req, res) => {
        models
            .missions
            .findByPk(req.params.id)
            .then(mission => res.json(mission))
    });

    // Create mission 
    app.post('/missions', (req, res) => {
        models
            .missions
            .create(req.body)
            .then(newMission => {
                newMission.addUser(req.body.userId)
                res.json(newMission)
            })

    });

    //UPDATE missions
    app.put('/mission/:id', (req, res) => {
        models
            .missions
            .update(req.body, {
                where: {
                    id: req.params.id
                }
            }).then(() => console.log("Updated") & res.end())
    });

    //Delete missions
    app.delete('/mission/:id', (req, res) => {
        models
            .missions
            .destroy({
                where: {
                    id: req.params.id
                }
            }).then(() => console.log("Deleted") & res.end())
    });
    
};