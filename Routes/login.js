const express = require("express");
const router = express.Router();

router.get("/login", (req, res, next) => {
  console.log("in login page");
  res.send(
    '<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/" method = "POST"><input type = "text" id="username" name = "title"><button type = "submit" > submit </button></input></form>'
  );
});

module.exports = router;
