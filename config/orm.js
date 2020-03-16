// Object Relational Mapper (ORM)
var connection = require("./connection.js");

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
    insertOne: function(table, colToSearch) {
        var queryString = "INSERT INTO " + table + "WHERE" + colToSearch;
        console.log(queryString);
        connection.query(queryString, [colToSearch, table], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }

}

//     create: function(table, cols, vals, cb) {
//         var queryString = "INSERT INTO " + table;

//         queryString += " (";
//         queryString += cols.toString();
//         queryString += ") ";
//         queryString += "VALUES (";
//         queryString += printQuestionMarks(vals.length);
//         queryString += ") ";

//         console.log(queryString);

//         connection.query(queryString, vals, function(err, result) {
//             if (err) {
//                 throw err;
//             }

//             cb(result);
//         });
//     }

// updateOne: function(table, objColVals, condition, cb) {
//     var queryString = "UPDATE " + table;

//     queryString += " SET ";
//     queryString += objToSql(objColVals);
//     queryString += " WHERE ";
//     queryString += condition;

//     console.log(queryString);
//     connection.query(queryString, function(err, result) {
//         if (err) {
//             throw err;
//         }

//         cb(result);
//     });
// }

module.exports = orm;