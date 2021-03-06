var orm = require("../config/orm.js");

var burger = {
    all: function (callback) {
        // orm.all => (table, callback)
        orm.all("burgers", callback);
    },
    create: function (cols, vals, callback) {
        // orm.create => (table, cols, vals, callback)
        orm.create("burgers", cols, vals, callback);
    },
    update: function (obj, condition, callback) {
        // orm.update => (table, obj, condition, callback)
        orm.update("burgers", obj, condition, callback);
    },
    delete: function (condition, callback) {
        // orm.delete => (table, condition, callback)
        orm.delete("burgers", condition, callback);
    }
}

module.exports = burger;