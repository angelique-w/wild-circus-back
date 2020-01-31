const express = require("express");
const router = express.Router();
const uuidv4 = require("uuid/v4");

// Reach Sequelize models
const Spectacle = require("../sequelize/models/spectacles");
const User = require("../sequelize/models/users");

router.get("/", (req, res) => {
    Spectacle.findAll({ include: [{ model: User }] })
        .then(spectacles => res.status(200).json(spectacles))
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
    Spectacle.findOne({
        where: {
            uuid: uuid
        },
        include: [{ model: User }]
    })
        .then(result => res.status(200).json(result))
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
    const newSpectacle = {
        uuid,
        ...payload
    };

    Spectacle.create(newSpectacle)
        .then(result => res.status(201).json(result))
        .catch(err => {
            res.status(400).json({
                status: "error",
                message: `invalid request`
            });
        });
});

router.put("/:uuid", (req, res) => {
    const spectacleUuid = req.params.uuid;

    const payload = req.body;

    Spectacle.update(payload, { where: { uuid: spectacleUuid } })
        .then(result => res.status(200).json(result))
        .catch(err => {
            res.status(400).json({
                status: "error",
                message: `invalid request`
            });
        });
});

router.delete("/:uuid", (req, res) => {
    const spectacleUuid = req.params.uuid;
    Spectacle.destroy({
        where: {
            uuid: spectacleUuid
        }
    })
        .then(response => {
            res.status(204).json({});
        })
        .catch(err => {
            res.status(400).json({
                status: "error",
                message: `invalid request`
            });
        });
});

module.exports = router;
