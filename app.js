const express = require('express');
const cookieParser = require('cookie-parser'); // import module for parsing cookies
const appConfig = require('./config/appConfig');
const app = express();
app.use(cookieParser());

//import routes
let route = require('./app/routes/app-routes');  
// set routes 
route.setRouter(app); 

app.listen(appConfig.port, () => { console.log('Server running at http://127.0.0.1:3000/') });