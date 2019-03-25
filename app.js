import express from 'express';
import bodyParser from 'body-parser';
import db from './db/db';
import router from './routes/index.js';

// setting up the app
const app = express();

// parsing incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

// local server
app.listen(8080, () => {
  console.log('server running on port 8080')
});
