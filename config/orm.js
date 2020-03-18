// Object Relational Mapper (ORM)
var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// `selectAll()` *
// `insertOne()` *
// `updateOne()`
var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        // var queryString = "INSERT INTO " + table;

        // queryString += " (";
        // queryString += cols.toString();
        // queryString += ") ";
        // queryString += "VALUES (";
        // queryString += printQuestionMarks(vals.length);
        // queryString += ") ";
        // console.log("'?'= " + vals)
        // console.log(queryString);
        var queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`;
        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: (table, objectColumnValues, condition, callback) => {
        // DECLARING QUERY FOR UPDATE SQL
        var queryString = `UPDATE ${table} SET ${objectToSQL(objectColumnValues)} WHERE ${condition};`;
        connection.query(queryString, (error, result) => {
            if (error) throw (error);
            callback(result);
        });
    }

}

module.exports = orm;