'use strict';

if (process.env.NODE_ENV !== `production`) {
  require(`dotenv`).config();
}

const express = require(`express`);
const path = require(`path`);
const logger = require(`morgan`);
const cookieSession = require(`cookie-session`);
const cookieParser = require(`cookie-parser`);
const bodyParser = require(`body-parser`);
// const passport = require(`passport`);
// const GoogleStrategy = require(`passport-google-oauth20`);
const compression = require(`compression`);
const api = require(`./routes/api`);

// var index = require('./routes/index');
// var users = require('./routes/users');
// var categories = require('./routes/categories');
// var events = require('./routes/events');
// var subscription = require('./routes/subscription');
// var user_event = require('./routes/user_event');
// var user_category = require('./routes/user_category');

const app = express();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  res.setHeader('Access-Control-Allow-Credentials', true);

  next()
})

app.use(compression());

app.use(logger(`dev`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, `./public`)));

// app.use(cookieSession({
//   name: `session`,
//   secret: process.env.SECRET,
//   httpOnly: false,
// }));

// app.post('/api/users', function(req, res, next) {
//   console.log('I AM HERE');
// })


app.use(`/api`, api);



app.get(`*`, (req, res) => {
  res.sendFile(path.join(__dirname, `./public`, `index.html`));
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  console.log('404 ERRORED!!');
  const err = new Error(`Not Found`);
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get(`env`) === `development` ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render(`error`);
});

module.exports = app;
