const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const currentRouter = require('./routes/current.router');
const backlogRouter = require('./routes/backlog.router');
const completedRouter = require('./routes/completed.router');
const addgameRouter = require('./routes/addgame.router');
const detailRouter = require('./routes/detail.router');
const completedDetail = require('./routes/completeddetail');

//For testing status
const statusRouter = require('./routes/status.router');


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/current', currentRouter);
app.use('/api/backlog', backlogRouter);
app.use('/api/completed', completedRouter);
app.use('/api/addgame', addgameRouter);
app.use('/api/detail', detailRouter);
app.use('/api/completeddetail', completedDetail);

// test for status 
app.use('/api/status', statusRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
