var express = require("express");
var db = require("../models");

var router = express.Router();


router.get("/", function (req, res) {
    db.Burger.findAll({}).then(function(dbBurger){
        var hbsObject = {
            burgers: dbBurger
        };
        res.render("index", hbsObject);
    });

});

router.post("/api/burgers", function (req, res) {
    db.Burger.create({
        burger_name: req.body.name,
        devoured: req.body.devour
    }).then(function(dbBurger){
        
        res.render("index", dbBurger);
    });

});

router.put("/api/burgers/:id", function (req, res) {
    db.Burger.update({

        devoured: req.body.devour
    },{
        where: {
            id: req.params.id
        }
    }).then(function(dbBurger){

        res.render("index", dbBurger);
    });
});

module.exports = router;