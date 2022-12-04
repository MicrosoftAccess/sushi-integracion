const mongoose = require('mongoose');

mongoose
    .connect(process.env.mongoDBURI)
    .then(() => console.log("CONECTADO A LA DB"))
    .catch((error) => console.error("ERROR DB"));