const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const route = require('./route/index.route');



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = require('./config');

// connect database
db.connect();



// route
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});