//console.log("Hello world!");

// Imports
const express = require('express');
const handlebarsConfig = require('./src/config/handlebarsConfig.js');
const expressConfig = require('./src/config/expressConfig.js');
const router = require('./src/router.js');

// Local variables
const app = express();
const PORT = 5000;

//Configurations
handlebarsConfig(app); 
expressConfig(app);   

// Routing
app.use(router); 

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))