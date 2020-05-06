const orm = require("../config/orm");

const burger = {
    giveAllBurgers() {
        return orm.getAll();
    },
    devourBurger(id) {
        return orm.updateDevourById(id);
    },
    addBurger(name) {
        return orm.add(name);
    }
}

module.exports = burger;