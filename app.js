import express from 'express';
import bookRoutes from '/routes/bookRoute.js';

//create express app
const app = express();

app.use('/book' , bookRoutes);

try{
    const port = 3000; // define port variable here of safety
    app.listen(port,() => {
        console.log('listening to ports $(port)...');
    });
} catch(e) {
    console.log(e);
}
