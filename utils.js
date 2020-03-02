const { Sequelize } = require('sequelize');

module.exports.createStore = () => {
    const db = new Sequelize({
      dialect: 'sqlite',
      storage: './store.sqlite'
    });
  
    const vesselLogs = db.define('vesselLog', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      arrivedOn: Sequelize.STRING,
      vesselName: Sequelize.STRING, // NOTE: We can have a Vessel Model defined an associate that here
      captainName: Sequelize.STRING, 
      portName: Sequelize.STRING
  
    });
  
    // vesselLogs.sync({ force: true});
    return { db, vesselLogs };
}
