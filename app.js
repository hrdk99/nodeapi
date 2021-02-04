const express = require('express');
const app = express();

const productRoutes =require('./api/routes/employee/employee') ;

// app.use((req, res, next)=>{
//     res.status(200).json({
//         message:"it works"
//     });
// });

app.use('/products',productRoutes)

module.exports = app;