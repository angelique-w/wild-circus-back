const User = require("./models/users");
const Spectacle = require("./models/spectacles");

Spectacle.hasMany(User, { foreignKey: { allowNull: false } });
User.belongsTo(Spectacle, {
    foreignKey: { allowNull: false },
    onDelete: "CASCADE"
});
