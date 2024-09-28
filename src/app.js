// //cài nodejs
// //dựng base đầu tiên khởi động dự án cài: npm init -y
// //npm i express --save
// //cài morgan: npm i morgan --save-dev
// //cài helmer: npm i helmer --save-dev
// //cài compression: npm i compression --save-dev

const express = require('express');
const app = express();
const morgan = require('morgan');
const { default: helmet } = require('helmet');
const compression = require('compression');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const studentRoutes = require('./routes/students-route');

//init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(cors());
app.use(bodyParser.json);
app.use('/api', studentRoutes.routes);

//init db

//init router
app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: 'Welcome fantipjs!'
    })
});

//handle error


module.exports = app;

