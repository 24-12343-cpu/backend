import * as bookControllers from '../ Controllers/bookcontrollers.js';
import express from 'express';

const bookRoutes = express.Routes();

bookRoutes.get('/', bookControllers.fetchAllBooks);

export default bookRoutes;