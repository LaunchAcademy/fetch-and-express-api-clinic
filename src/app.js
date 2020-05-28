const express = require("express")
const path = require("path")
const logger = require("morgan")
const bodyParser = require("body-parser")
const hbsMiddleware = require("express-handlebars")
const fs = require("fs")
const _ = require("lodash")

const app = express()

// view engine setup
app.set("views", path.join(__dirname, "../views"))
app.engine(
  "hbs",
  hbsMiddleware({
    defaultLayout: "default",
    extname: ".hbs"
  })
)
app.set("view engine", "hbs")

app.use(logger("dev"))
app.use(express.json())

app.use(express.static(path.join(__dirname, "../public")))
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, "0.0.0.0", () => {
  console.log("Server is listening...")
})

// main app

// helper method to get the file path of our locations JSON
const locationsPath = path.join(__dirname, "../locations.json")

// retrieves our locations and returns them in an object
const locationsJson = () => {
  return JSON.parse(fs.readFileSync(locationsPath))
}

// gets the id of the next location for persisting
const getNextLocationId = () => {
  const locations = locationsJson()
  const maxLocation = _.maxBy(locations.locations, location => location.id)
  return maxLocation.id + 1
}

// takes in locations and persists them as an array in an object
const updateLocationsJsonData = locations => {
  const data = { locations: locations }
  fs.writeFileSync(locationsPath, JSON.stringify(data))
}

app.get("/", (req, res) => {
  res.render("index")
})

app.get("/locations.json", (req, res) => {
  // res.set({ "Content-Type": "application/json" })
  //
  // res.json(locationsJson())
})

app.post("/locations.json", (req, res) => {
  // const location = req.body.location
  //
  // if (location && location.name) {
  //
  //  // create a new location object that actually has an id
  //   const newLocation = {
  //     id: getNextLocationId(),
  //     name: location.name
  //   }
  //
  //    // grab the old locations
  //   const locations = locationsJson().locations

  //      // add the new location to the old locations (not yet persisted)
  //   locations.push(newLocation)
  //
  //   //replace old locations with new set of location
  //   updateLocationsJsonData(locations)
  //
  //  return the newly persisted location so that it can be appended to the page with its id
  //   res.send(201).json({ location: newlocation })
  // } else {
  //   res.send(422).json({ error: ["Can't be blank"] })
  // }
})

module.exports = app
