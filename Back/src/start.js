const app = require("./app");
const saveApiData = require('./controllers/saveApiData.js')
const { sequelize } = require("./DB_connection");
const port = process.env.PORT || 3001

sequelize.sync({ force: false }).then(async () => { 
  console.log('DataBase connected');
  await saveApiData();
  app.listen(port, () => {
      console.log(`Listening port ...${port}`);
    });
}).catch((error) => { console.log(error)})

