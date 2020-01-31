const User = require("./models/users");
const Spectacle = require("./models/spectacles");

Spectacle.hasMany(User);
User.belongsTo(Spectacle, {
    foreignKey: { allowNull: true },
    onDelete: "CASCADE"
});
