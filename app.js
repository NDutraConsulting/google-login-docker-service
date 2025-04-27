const express = require('express');
const session = require('express-session');
const passport = require('passport');
require('./auth/google');

const authRoutes = require('./routes/authRoutes');
const config = require('./configLoader');

const app = express();
app.set('view engine', 'ejs');

app.use(session({
  secret: 'session_secret',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
app.get('/', (req, res) => {
  res.render('home', { user: req.user });
});

app.get('/login', (req, res) => {
  res.render('login', { user: req.user });
});

app.get("/debug", 
  function(req, res) {

    let msg = "Debug login - process.env.NODE_ENV: "+process.env.NODE_ENV+" - config.SESSION_SECRET: "+config.SESSION_SECRET;

    return res.send(msg);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
