let connection = require("./connection.js");

let orm = {
    getAll: function (table, cb) {
        let query = `SELECT * FROM ${table};`;
        connection.query(query, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    }
}