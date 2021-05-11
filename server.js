
const express = require('express');
const path = require("path");
const express_handlebars = require("express-handlebars");
const sequelize = require("./config/connection.js");
const { dirname } = require("path");
const { Server } = require("http");
const hbs = express_handlebars.create();
const session = require('express-session');
const exphbs = require('express-handlebars');;
const routes = require('./routes');

// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const sess = {
    secret: 'Super secret secret',
    cookie: {maxAge: 52000},
    resave: false,
    saveUnitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
app.use(session(sess))
// sync sequelize models to the database, then turn on the server
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,"public")));
app.engine("handlebars",hbs.engine);
app.set("view engine", "handlebars");
app.use(routes);

app.get("/", (req, res)=>{
    res.render("homepage")
});
app.get("/", (req, res)=>{
    res.render("muttcoin")
});

sequelize.sync({force: false}).then(() => {
app.listen(PORT, function(){console.log("portListening")})
})

