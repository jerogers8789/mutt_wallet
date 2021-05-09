<<<<<<< HEAD
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const sequelize = require('sequelize');
const routes = require('./seeds');

// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({force: false}).then(() => {

app.listen(PORT, () =>
  console.log(`App listening on port ${PORT}!`));
});
=======
const path = require("path")
const express = require("express")
const express_handlebars = require("express-handlebars")
const sequelize = require("./config/connection.js")
const { dirname } = require("path")
const { Server } = require("http")
const app = express()
const PORT = process.env.PORT||3001
const hbs = express_handlebars.create()

app.engine("handlebars",hbs.engine)

app.set("view engine", "handlebars")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname,"public")))

app.get("/", (req, res)=>{
    res.render("homepage")
})
app.get("/", (req, res)=>{
    res.render("muttcoin")
})

app.listen(PORT, function(){console.log("portListening")})
>>>>>>> 74276a730d6669cdd1c5fc8e889e2da9a7c7afdc
