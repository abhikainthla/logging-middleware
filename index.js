const { log, error } = require("console");
const express = require("express");
const app = express();
const PORT = 6060;
const fs = require('fs');

const loggingMiddleware = (req, res, next)=>{
    fs.appendFileSync('log-details.txt', "A log request was made with URL: "+req.url+" using method as "+req.method+" at "+new Date()+"by Abhishek Kainthla\n", 'utf8');
    next();
}
app.use(loggingMiddleware);
app.get("/log-request", (req, res)=>{
    try{
        res.json({
            "success":"true",
            "message": "Request logged successfully",
        })
    }
    catch{
        res.json({
            "success":"false",
        })
        console.log(error);
    }
    
})
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})