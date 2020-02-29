const routes = require('express').Router();
const MetricController = require('../controllers/metric');



//routes Todos
let prefix ='/metric';
routes.post(prefix+'/:key', MetricController.store);
routes.get(prefix+'/:key/sum', MetricController.show);
//!routes Todos

module.exports =  routes;
