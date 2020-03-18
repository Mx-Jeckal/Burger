var express = require("express");
var router = express.Router();
const burger = require('../models/burger');

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    console.log(req.body.burger_name, req.body.devoured)
        // console.log(res.json())
    burger.insert(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured],
        function(err, result) {
            // Send back the ID of the new quote
            res.json({ id: req.body.id });
            console.log("Got to this part")
        }
    )
});

router.put("/api/burgers/:id", (request, response) => {
    var condition = `ID = ${request.params.id}`;
    var newDevouredState = request.body.devoured;
    if (newDevouredState === 'true') {
        newDevouredState = 0
    } else {
        newDevouredState = 1
    }

    burger.update({
            devoured: newDevouredState
        },
        condition,
        (result) => {
            if (result.changedRows === 0) {
                return response.status(404).end();
            };

            response.status(200).end();
        });
});

// Export routes for server.js to use.
module.exports = router;