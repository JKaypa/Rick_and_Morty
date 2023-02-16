const app = require("./app");
const saveApiData = require('./controllers/saveApiData.js')
const { sequelize } = require("./DB_connection");


sequelize.sync({ force: true }).then(async () => { 
  console.log('DataBase connected');
  await saveApiData();
  app.listen(3001, () => {
      console.log("Listening port 3001...");
    });
}).catch((error) => { console.log(error)})

