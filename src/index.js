const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb+srv://xuser:z4izKCqzFZz0i4XT@cluster0-mzftp.gcp.mongodb.net/test?retryWrites=true&w=majority', {
  useCreateIndex: true,
  useNewUrlParser: true
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));

//z4izKCqzFZz0i4XT

//settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
app.use(require("./routes/index"));

//static files
app.use(express.static(path.join(__dirname, "public")));

//starting the server
app.listen(app.get("port"), () => {
    console.log("Server on port " + app.get("port"));
});