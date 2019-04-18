// import controllers
const setcookieController = require('./../controllers/setcookieController');
const getcookieController = require('./../controllers/getcookieController');
const sharedController = require('./../controllers/sharedController');

// set routes with middlewares and contollers. 
let setRouter = (app) => {
    app.get('/setcookie/:key/:val', setcookieController.setValue);
    app.get('/getcookie/:key', getcookieController.getValue);
    app.get('*', sharedController.generateMessage);
}

// export routes
module.exports = {
    setRouter: setRouter
}