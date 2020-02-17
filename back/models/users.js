'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    role: {
      type: DataTypes.STRING,
      validate: {
        isIn: [
          ['admin', 'neoworker']
        ], // check the value is one of these
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 40],
        isEmail: true,
      }
    },
    password: {
      type: DataTypes.STRING,
    },
  }, {
    hooks:{
      beforeCreate:(user)=> {
        if (user.dataValues.role === 'admin' || user.dataValues.role==='neoworker'){///supp le admin à la fin du projet
          return user
        }else{
        return sequelize.Promise.reject()}
      },

    }
  });
  users.associate = function(models) {
    users.belongsToMany(models.freelancer,{
        through: 'tj_users_f'
    })
    users.belongsToMany(models.missions,{
        through: 'tj_users_missions'
    })
  };
  return users;
};