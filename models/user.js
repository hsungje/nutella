
var modelInit = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        username: { type: DataTypes.STRING, allowNull: false, unique: true },
        displayname: { type: DataTypes.STRING, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false }
    }, {
        classMethods: {
            associate: function (models) {
                User.hasMany(models['Task']);
            }
        },
        instanceMethods: {
            validPassword: function (password) {
                return this.password === password;
            }
        }
    });

    return User;
};
module.exports = modelInit;
