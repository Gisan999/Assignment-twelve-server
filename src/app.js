const express = require('express');
const applyMiddleware = require('./middleware/applyMiddleware');
const connectDB = require('./db/connectDB');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const userRoute = require('./routes/userRoutes')
const paymentRoute = require('./routes/paymentRoutes');
const jwtRoute = require('./routes/jwtRoutes')

applyMiddleware(app);

app.use(userRoute);
app.use(paymentRoute);
app.use(jwtRoute);



app.get('/health', (req, res) => {
    res.send('final project is running')
})

app.all("*", (req, res, next) => {
    const error = new Error(`the requested url is invalid: [${req.url}]`);
    error.status = 404;
    next(error)
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    });
})
 
const main = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`final project server running on the port ${port}`);
    })
}

main()