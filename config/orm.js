let connection = require("./connection.js");

let orm = {
    // get all burger data
    getAll() {
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM burgers;`;
            connection.query(sql, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    },

    // update devour column of row with id of given id
    updateDevourById(id) {
        return new Promise((resolve, reject) => {
            let sql = `UPDATE burgers SET devoured = 1 WHERE id = ${id}`
            connection.query(sql, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            })
        });
    },

    // add a burger to the table with given name
    add(name) {
        return new Promise((resolve, reject) => {
            let sql = `INSERT INTO burgers (burger_name, devoured)
            VALUES ('${name}', FALSE);`;
            connection.query(sql, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    }
}

module.exports = orm;