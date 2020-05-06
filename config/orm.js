let connection = require("./connection.js");

let orm = {
    getAll() {
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM burgers;`;
            connection.query(sql, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },

    updateDevourById(id) {
        return new Promise((resolve, reject) => {
            let sql = `UPDATE burgers SET devoured = "TRUE" WHERE id = ${id}`
            connection.query(sql, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            })
        });
    }
}

module.exports = orm;