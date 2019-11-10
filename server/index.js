require("dotenv").config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 8081;

const db = require('./models');
const errorHandler = require('./handlers/error');
const authRoutes = require('./routes/auth');
const postsRoutes = require('./routes/posts');
const { logginRequired, ensureCurrentUser } = require('./middlewares/auth');


app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res) {
  res.send('hello landing page')
})

app.use('/api/auth', authRoutes);
app.use('/api/users/:id/posts', logginRequired, ensureCurrentUser, postsRoutes);
// app.use('/api/posts', postsRoutes);

app.get('/api/posts', async function(req, res, next) {
  try {
    let posts = await db.Post.find();
    return res.status(200).json(posts)
  } catch (err) {
    return next(err)
  }
})




app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);


app.listen(PORT, function(){
  console.log(`Server is running on port ${PORT}`)
})