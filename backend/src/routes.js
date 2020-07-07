const express = require('express');

/*//Middlewares
const authMiddleware = require('./middlewares/auth');*/

const SessionController = require('./controllers/SessionController.js');
const UserController = require('./controllers/UserController.js');
const MenuItemController = require('./controllers/MenuItemController.js');
const SlotController = require('./controllers/SlotController.js');
const TableController = require('./controllers/TableController.js');
const BookingController = require('./controllers/BookingController.js');

const openRoutes = express.Router();
const protectedRoutes = express.Router();

//Session Controller Routes
openRoutes.post('/sessions', SessionController.create);

//User Controller Routes
openRoutes.get('/users', UserController.index)
openRoutes.get('/users/:id', UserController.view);
openRoutes.post('/users', UserController.create);
openRoutes.put('/users', UserController.update);
openRoutes.delete('/users', UserController.delete);

//Menu Item Controller Routes
openRoutes.get('/menu', MenuItemController.index);
openRoutes.get('/menu/:id', MenuItemController.view);
openRoutes.post('/menu', MenuItemController.create);
openRoutes.put('/menu', MenuItemController.update);
openRoutes.delete('/menu', MenuItemController.delete);

//Restaurant Available Slots Controller Routes
openRoutes.get('/slots', SlotController.index);
openRoutes.get('/slots/:id', SlotController.view);
openRoutes.post('/slots', SlotController.create);
openRoutes.put('/slots', SlotController.update);
openRoutes.delete('/slots', SlotController.delete);

//Tables Controller Routes
openRoutes.get('/tables', TableController.index);
openRoutes.get('/tables/:id', TableController.view);
openRoutes.post('/tables', TableController.create);
openRoutes.put('/tables', TableController.update);
openRoutes.delete('/tables', TableController.delete);

//Bookings Controller Routes
openRoutes.get('/bookings', BookingController.index);
openRoutes.get('/bookings/:id', BookingController.view);
openRoutes.post('/bookings', BookingController.create);
openRoutes.put('/bookings', BookingController.update);
openRoutes.delete('/bookings', BookingController.delete);
openRoutes.get('/availability', BookingController.checkSlotsAvailability);

/*
//Session Controller Routes
const SessionController = require('./controllers/SessionController');

//Protected Routes will use the Auth Middleware to verify JSON Web Token
protectedRoutes.use(authMiddleware)

openRoutes.get('/users/verify/:verificationToken', UserController.verifyUser);
openRoutes.post('/users/forgot_password', UserController.forgotPassword);
openRoutes.post('/users/reset_password', UserController.reset);

//Session Controller Routes
openRoutes.post('/sessions/login', SessionController.login);
*/

module.exports = {
    openRoutes: openRoutes,
    protectedRoutes: protectedRoutes
}