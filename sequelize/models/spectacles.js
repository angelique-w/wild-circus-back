const Sequelize = require("sequelize");
const sequelize = require("../index");

const Spectacle = sequelize.define(
    "Spectacle",
    {
        uuid: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        ville: {
            type: Sequelize.STRING,
            allowNull: false
        },
        date: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        adresse: {
            type: Sequelize.STRING,
            allowNull: true
        },
        placesTotales: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        placesRestantes: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },
    {}
);

module.exports = Spectacle;
