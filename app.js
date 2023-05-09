const http = require("http");
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const loginroute = require("./Routes/login");
const messageroute = require("./Routes/message");

app.use(bodyparser.urlencoded({ extended: false }));

app.use(loginroute);
app.use(messageroute);


app.use((req,res,next)=>{
    res.status(404).send("<h1>Page not found ...</h1>")
})

app.listen(3000);