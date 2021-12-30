"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
// import * as Sequelize from 'sequelize'
const sequelize_1 = require("sequelize");
const db = 'u2964880_sample_project';
const username = 'u2964880_root';
const password = 'password';
const host = '153.92.8.40';
// export const sequelize = new Sequelize(db, username, password,host, {
//   dialect: "mysql",
//   // host: host
//   // port: 3306,
// });
exports.sequelize = new sequelize_1.Sequelize(db, username, password, {
    dialect: 'mysql',
    host: '153.92.8.40',
    // pool: {
    //   max: 25,
    //   min: 0,
    //   acquire: 30000,
    //   idle: 10000
    // }
});
exports.sequelize.authenticate()
    .then(() => {
    console.log("nyambung");
});
//# sourceMappingURL=database.js.map