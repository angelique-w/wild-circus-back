const axios = require("axios");

const spectacles = [
    {
        ville: "Paris",
        date: "2020-05-17",
        adresse: "salle X",
        placesTotales: 200,
        placesRestantes: 200
    },
    {
        ville: "Bayonne",
        date: "2020-03-15",
        adresse: "place Y",
        placesTotales: 100,
        placesRestantes: 100
    },
    {
        ville: "Toulouse",
        date: "2020-10-28",
        adresse: "salle Z",
        placesTotales: 400,
        placesRestantes: 400
    },
    {
        ville: "Bordeaux",
        date: "2020-02-20",
        adresse: "salle D",
        placesTotales: 300,
        placesRestantes: 300
    }
];

spectacles.forEach(spectacle => {
    axios
        .post("http://localhost:8000/spectacles", spectacle)
        .then(res => console.log(res.status));
});

// const users = [
//     {
//         firstName: "Pierre",
//         lastName: "Henry",
//         role: "CLIENT"
//     },
//     {
//         firstName: "Benoit",
//         lastName: "Pierre",
//         role: "CLIENT"
//     },
//     {
//         firstName: "Eldie",
//         lastName: "Henriette",
//         role: "CLIENT"
//     },
//     {
//         firstName: "Sandra",
//         lastName: "WildCircus",
//         role: "ADMIN"
//     }
// ];

// users.forEach(user => {
//     axios
//         .post("http://localhost:8000/users", user)
//         .then(res => console.log(res.status));
// });
