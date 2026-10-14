import express from 'express';
import * as bookControllers from '../Controllers/bookControllers.js';

const bookRoute = express.Router();

bookRoute.get('/', bookControllers.fetchAllBooks);

export default bookRoute;
