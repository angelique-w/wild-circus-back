const express = require("express");
const router = express.Router();
const uuidv4 = require("uuid/v4");

// Reach Sequelize models
const Spectacle = require("../sequelize/models/spectacles");
const User = require("../sequelize/models/users");

router.get("/", (req, res) => {
    User.findAll({ include: [{ model: Spectacle }] })
        .then(users => res.status(200).json(users))
        .catch(err => {
            console.log(err);
            res.status(400).json({
                status: "error",
                message: "Invalid request"
            });
        });
});

router.get("/:uuid", (req, res) => {
    const uuid = req.params.uuid;
    User.findOne({
        where: {
            uuid: uuid
        },
        include: [{ model: Spectacle }]
    })
        .then(user => res.status(200).json(user))
        .catch(err => {
            console.log(err);
            res.status(400).json({
                status: "error",
                message: "Invalid request"
            });
        });
});

router.post("/", (req, res) => {
    const payload = req.body;
    const uuid = uuidv4();
    const newUser = {
        uuid,
        ...payload
    };

    User.create(newUser)
        .then(result => res.status(201).json(result))
        .catch(err => {
            res.status(400).json({
                status: "error",
                message: `invalid request`
            });
        });
});

module.exports = router;
