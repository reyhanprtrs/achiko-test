'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: 'Must be email format'
        },
        notEmpty: {
          args: true,
          msg: `Email can't be empty`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: `Password can't be empty`
        },
        len: {
          args: [6, 20],
          msg: 'Password at least must be 6-20 characters'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};