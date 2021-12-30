// import * as Sequelize from 'sequelize'
import { Dialect, Sequelize } from 'sequelize';

const db = 'u2964880_sample_project'
const username = 'u2964880_root'
const password = 'password'
const host = '153.92.8.40'

// export const sequelize = new Sequelize(db, username, password,host, {
//   dialect: "mysql",
//   // host: host
//   // port: 3306,
// });

export const sequelize = new Sequelize(db, username, password, {
  dialect: 'mysql',
  host: '153.92.8.40',
  // pool: {
  //   max: 25,
  //   min: 0,
  //   acquire: 30000,
  //   idle: 10000
  // }
});

sequelize.authenticate()
  .then( () =>{
    console.log("nyambung");
    }  
  )

