const express = require("express");
const router = express.Router();
//const { response } = require('express');
let fs = require('fs');

router.get('/', (req, res, next) => {
    let massage = fs.readFileSync('chat.txt', 'utf-8');
    res.send(`<html>
    <body>
    <h1>welcome</h1>
    <h6>${massage}<h6>
    <form action="/" method="POST">
    <input type="text" name='message'>
    <button>send</button>
    </form>
    <script>
    let user = localStorage.getItem('username');
    let name = document.querySelector('input');
    name.name = user;
    </script>
    </body></html>`)
  })

router.post("/", (req, res, next) => {
    msg = JSON.stringify(req.body);
    fs.appendFile('chat.txt', msg, err => {
      console.log(err)
    });
    res.redirect('/')
});

module.exports = router;
