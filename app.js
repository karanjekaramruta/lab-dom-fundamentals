var express = require("express");
var hbs = require("hbs");
var studentData = require("./data.json");

const app = express();

app.set("view engine", "hbs");
app.use(express.static("public"));

hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (request, response) => {
  response.render("index");
});

app.get("/students", (request, response) => {
  let students = studentData.map((student) => ({
    ...student,
    Amruta: student.firstname === "Amruta",
  }));
  response.render("students", { students: students });
});

app.get("/fame", (request, response) => {
  var randomNumber = Math.floor(Math.random() * 8);
  var student = studentData[randomNumber];
  response.render("fame", {
    layout: "famelayout",
    student: student,
  });
});

app.listen(3000, () => {
  console.log("App started on port 3000");
});
