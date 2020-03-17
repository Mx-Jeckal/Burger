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
    console.log(req.body)
        // console.log(res.json())
    burger.insert(["burger_name"], [req.body.name],
        function(result) {
            // Send back the ID of the new quote
            res.json({ id: result.insertId });
        }
    )
});

// function(result) {
//     if (result.changedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//     } else {
//         res.status(200).end();
//     }
// }





// router.delete("/api/cats/:id", function(req, res) {
//     var condition = "id = " + req.params.id;

//     cat.delete(condition, function(result) {
//         if (result.affectedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });

// Export routes for server.js to use.
module.exports = router;