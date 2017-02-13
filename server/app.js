import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();

// create application/json parser
let jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
let urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(jsonParser);
app.use(urlencodedParser);

app.use(require('./router.js'));

app.use(express.static(path.join(__dirname, '../static')));

app.listen(3030, () => console.log('App creative person listening on port 3030!'));
