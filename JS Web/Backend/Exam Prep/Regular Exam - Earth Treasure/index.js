// Imports
const express = require('express');
const handlebarsConfig = require('./src/config/handlebarsConfig.js');
const expressConfig = require('./src/config/expressConfig.js');
const router = require('./src/router.js');
const dbConnect = require('./src/config/mongooseConfig.js')

// Local variables
const app = express();
const PORT = 3000;

//Configurations
handlebarsConfig(app); 
expressConfig(app);   

//Connect to database
dbConnect()
  .then(() => {console.log('DB connected successfully!')})  
  .catch((err) => {console.console.log('DB error: ', err);}); 

// Routing
app.use(router); 

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))