const schedule = require('node-schedule');
const models = require('./models')

//  Change status for finished missions at 1h02 every days(2 for minute:2, 1 for hour:1)
 schedule.scheduleJob('5 * * * * *', () => {
  models.missions.findAll().then( allMissions => {
    allMissions.map( mission =>{
        if (new Date(mission.date_fin) < new Date()) {
            models.missions.update({
                status:2
            }, {where : {id:mission.id}})
    }}
    )
  })
});

