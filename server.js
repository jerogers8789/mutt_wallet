
const path = require("path");
const express_handlebars = require("express-handlebars");
const sequelize = require("./config/connection.js");
const { dirname } = require("path");
const { Server } = require("http");
const hbs = express_handlebars.create();
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');;
const routes = require('./seeds');

// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({force: false}).then(() => {

app.engine("handlebars",hbs.engine);

app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,"public")));

app.get("/", (req, res)=>{
    res.render("muttcoin")
});

app.listen(PORT, function(){console.log("portListening")});
