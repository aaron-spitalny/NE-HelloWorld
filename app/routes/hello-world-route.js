var express = require("express");
var router = express.Router();

//get route for the "/" route
router.get("/", function(req, res) {
    //send response
    res.send("Hello World");
});

module.exports = router;
