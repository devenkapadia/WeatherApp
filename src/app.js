const express = require("express")
const path = require("path")
const hbs = require("hbs")
const app = express()
const port = process.env.PORT || 3000;

const templates_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")

const static_path = path.join(__dirname,"../public")
app.set("view engine", "hbs")
app.set("views", templates_path)
hbs.registerPartials(partials_path)
app.use(express.static(static_path))

app.get("/", (req, res) => {
    res.render("index")
})
app.get("/about", (req, res) => {
    res.render("about")
})
app.get("/weather", (req, res) => {
    res.render("weather")
})
app.get("*", (req, res) => {
    res.status(404).render("404error",{
        errormsg:"Oops! Page not found )"
    })
})

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
})