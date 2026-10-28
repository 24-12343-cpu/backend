import express from 'express';
import bookRoute from './route/bookRoute.js';

//create express app
const app = express();

//to parse incoming data
app.use(express.json());


app.use('/book', bookRoute);

try {
    const port = 3000;
    app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    });
} catch (e) {
    console.log(e);
}
