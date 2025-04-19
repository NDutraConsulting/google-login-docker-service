const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('User', {
    googleId: {
      type: DataTypes.STRING,
      unique: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
  });
};
