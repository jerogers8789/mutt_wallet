const path = require("path");
const express = require("express")
const express_handlebars = require("express-handlebars");
const sequelize = require("./config/connection.js");
const { dirname } = require("path");
const { Server } = require("http");
const app = express();
const PORT = process.env.PORT||3001;
const hbs = express_handlebars.create();

app.engine("handlebars",hbs.engine);

app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,"public")));

app.get("/", (req, res)=>{
    res.render("homepage")
});
app.get("/", (req, res)=>{
    res.render("muttcoin")
});

sequelize.sync({force: false}).then(() => {
app.listen(PORT, function(){console.log("portListening")})
})

