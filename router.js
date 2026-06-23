const express = require('express');
const app = express();

const orderRoutes = require('./router/order');
const categoryRoutes = require('./router/categories');

// Logging Middleware
app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
});

// Connect Routers
app.use(orderRoutes);
app.use(categoryRoutes);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});