require("dotenv").config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 8081;
const errorHandler = require('./handlers/error');
const authRoutes = require('./routes/auth');


app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res) {
  res.send('hello landing page')
})
app.use("/api/auth", authRoutes);

app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);


app.listen(PORT, function(){
  console.log(`Server is running on port ${PORT}`)
})