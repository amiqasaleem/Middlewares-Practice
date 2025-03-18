import express from "express";
const app = express();
const port = 3000;

//req.body will give undefined because the application can't parse it right now.
//Loading middleware into the app.
//express.json() is an inbuilt middleware

app.use(express.json())

//Middleware _ logging, auth, validation

//Creation of a middleware
// const loggingMiddleware = function(req, res, next) {
//     console.log("Logging ho raha hai");
//     next()
// }
// //Loading middleware into the application
// app.use(loggingMiddleware)

// const authMiddleware = function(req, res, next) {
//     console.log("Auth ho raha hai");
//     //res.send("Chalo seedha request pe")
//     next()
// }
// app.use(authMiddleware)

// const validationMiddleware = function(req, res, next) {
//     console.log("Validation ho raha hai");
//     next()
// }
// app.use(validationMiddleware)

//Order bohat zaroori hai middlewares ka

import route from "./routes/route.js";

app.use('/api', route)

app.get('/',(req,res)=>{
    console.log("Main route handler hun");
    console.log(req.body);
    res.send('GET request is working')
})

app.listen(3000, ()=>{
    console.log(`Amiqa is listening on port ${port}`);
})
