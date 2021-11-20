const express = require('express');
const cors = require('cors');
// const db = require('./db');
const routes = require('./network/routes');

const app = express();
const port = process.env.PORT || 8080;
// const irb = 'mongodb://localhost:27017/challenge';

// db(irb);

app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_HOST || 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
}));

routes(app);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
