const express = require('express');
const app = express();
const PORT = 8080;
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(express.json());
const cors = require("cors");
const main = require('./connect');
const Routes1 =require('./Router/pageBasic');
const Routes2 = require('./Router/register');
const Routes3 =require('./Router/login');
main();
app.use(cors());
app.use(Routes1);
app.use(Routes2);
app.use(Routes3);


app.listen(PORT,()=>{console.log(`Server is up and running at ${PORT}`)});
