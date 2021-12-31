// // import { Sequelize, Model, DataTypes, Optional } from "sequelize";

// import  { sequelize }  from '../database/database'

// import {
//     Model, UUIDV4
//   } from 'sequelize';
  
//   interface UserAttributes {
//     id: string;
//     name: string;
//     email: string;
//     password: string;
//   }
  
//   module.exports = (sequelize: any, DataTypes: any) => {
//     class User extends Model<UserAttributes> 
//     implements UserAttributes {
//       /**
//        * Helper method for defining associations.
//        * This method is not a part of Sequelize lifecycle.
//        * The `models/index` file will call this method automatically.
//        */
//       id!: string;
//       name!: string;
//       email!: string;
//       password!: string;
//     //   static associate(models: any) {
//     //     // define association here
//     //     User.belongsToMany(models.Project, {
//     //       through: 'ProjectAssignments'
//     //     })
//     //   }
//     };
//     User.init({
//       id: {
//         type: DataTypes.UUID,
//         defaultValue: UUIDV4,
//         allowNull: false,
//         primaryKey: true
//       },
//       name: {
//         type: DataTypes.STRING,
//         allowNull: false
//       },
//       email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true
//       }, 
//       password: {
//         type: DataTypes.STRING,
//         allowNull: false
//       }
//     }, {
//       sequelize,
//       modelName: 'User',
//     });
//     return User;
//   };

// // // We recommend you declare an interface for the attributes, for stricter typechecking
// // interface UserAttributes {
// //     id: number;
// //     name: string;
// //   }
  
// //   // Some fields are optional when calling UserModel.create() or UserModel.build()
// //   interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}
  
// //   // We need to declare an interface for our model that is basically what our class would be
// //   interface UserInstance
// //     extends Model<UserAttributes, UserCreationAttributes>,
// //       UserAttributes {}
  
// //   const UserModel = sequelize.define<UserInstance>("User", {
// //     id: {
// //       primaryKey: true,
// //       type: DataTypes.INTEGER.UNSIGNED,
// //     },
// //     name: {
// //       type: DataTypes.STRING,
// //     },
// //   });
  
// //   async function doStuff() {
// //     const instance = await UserModel.findByPk(1, {
// //       rejectOnEmpty: true,
// //     });
// //     console.log(instance.id);
// //   }

// // export interface UserAddModel {
// //     email: string
// //     password: string
// // }

// // export interface UserModel extends Model<UserModel, UserAddModel> {
// //     id: number
// //     email: string
// //     password: string
// //     createdAt: string
// //     updatedAt: string
// // }

// // export interface UserViewModel {
// //     id: number
// //     email: string
// // }

// // export const User = define<UserModel, UserAddModel>('user', {
// //     id: {
// //         type: Sequelize.INTEGER,
// //         autoIncrement: true,
// //         primaryKey: true
// //     },
// //     email: Sequelize.STRING,
// //     password: Sequelize.STRING
// // })

// // import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

// // export interface UserAttributes {
// //     id: number;
// //     name: string;
// //     email: string;
// //     createdAt?: Date;
// //     updatedAt?: Date;
// // }
// // export interface UserModel extends Model<UserAttributes>, UserAttributes {}
// // export class User extends Model<UserModel, UserAttributes> {}

// // export type UserStatic = typeof Model & {
// //     new (values?: object, options?: BuildOptions): UserModel;
// // };

// // export function UserFactory (sequelize: Sequelize): UserStatic {
// //     return <UserStatic>sequelize.define("users", {
// //         id: {
// //             type: DataTypes.INTEGER,
// //             autoIncrement: true,
// //             primaryKey: true,
// //         },
// //         email: {
// //             type: DataTypes.STRING,
// //             allowNull: false,
// //             unique: true,
// //         },
// //         name: {
// //             type: DataTypes.STRING,
// //             allowNull: false,
// //         },
// //         createdAt: {
// //             type: DataTypes.DATE,
// //             allowNull: false,
// //             defaultValue: DataTypes.NOW,
// //         },
// //         updatedAt: {
// //             type: DataTypes.DATE,
// //             allowNull: false,
// //             defaultValue: DataTypes.NOW,
// //         },
// //     });
// // }
// // // import {  Sequelize, Model, DataTypes } from "sequelize";
// // // import  sequelize  from '../database/database'

// // class User extends Model {
// //     public id!: number; // Note that the `null assertion` `!` is required in strict mode.
// //     public name!: string;
// //     public preferredName!: string | null; // for nullable fields
// //   }
  
// //   User.init(
// //     {
// //       id: {
// //         type: DataTypes.INTEGER.UNSIGNED,
// //         autoIncrement: true,
// //         primaryKey: true,
// //       },
// //       name: {
// //         type: new DataTypes.STRING(128),
// //         allowNull: false,
// //       },
// //       preferredName: {
// //         type: new DataTypes.STRING(128),
// //         allowNull: true,
// //       },
// //     },
// //     {
// //       tableName: "users",
// //       sequelize, // passing the `sequelize` instance is required
// //     }
// //   );
  
// //   async function doStuffWithUserModel() {
// //     const newUser = await User.create({
// //       name: "Johnny",
// //       preferredName: "John",
// //     });
// //     console.log(newUser.id, newUser.name, newUser.preferredName);
  
// //     const foundUser = await User.findOne({ where: { name: "Johnny" } });
// //     if (foundUser === null) return;
// //     console.log(foundUser.name);
// //   }
// // const Users = sequelize.define('users', {
// //   id: {
// //     type: DataTypes.INTEGER,
// //     autoIncrement: true,
// //     allowNull: false,
// //     primaryKey: true,
// //   },
// //   standar: {
// //     type: DataTypes.STRING,
// //     allowNull: false
// //   }
// // });
// ;
