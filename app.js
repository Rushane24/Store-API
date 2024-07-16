require('dotenv').config();
require('express-async-errors')
const PORT = process.env.PORT || 3000;

const express = require('express');
const connectDB = require('./db/connect');
const productsRouter = require('./routes/products');
const app = express();

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

//Middleware
app.use(express.json());

//Route
app.get('/', (req, res)=>{
    res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>')
});

app.use('/api/v1/products', productsRouter);
//Products Routes
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const start = async (req, res) => {
    try {
        //Connect DB
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, console.log(`Server is listening on Port: ${PORT}`));
    } catch (error) {
        console.log(error.message);
    }
};

start();