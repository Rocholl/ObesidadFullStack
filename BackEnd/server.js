const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

const { sequelize } = require('./app/models/index'); 

// explotation time.
sequelize.sync();

// development time only. Drop and re-sync db.
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });

require("./app/routes/Usuario.routes")(app);
require("./app/routes/Municipio.routes")(app);
require("./app/routes/Centro.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log(`La app ha arrancado en http://localhost:${PORT}`);

    sequelize.sync({ force: false }).then(() => {
        console.log("Se ha establecido la conexión");
    })
});