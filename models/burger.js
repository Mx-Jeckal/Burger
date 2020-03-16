// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    // // The variables cols and vals are arrays.
    // InsertOne: function(cols, vals, cb) {
    //     orm.InsertOne("burgers", function(res) {
    //         cb(res);
    //     });
    // },
    // updateOne: function(objColVals, condition, cb) {
    //     orm.updateOne("burgers", objColVals, condition, function(res) {
    //         cb(res);
    //     });
    // }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;