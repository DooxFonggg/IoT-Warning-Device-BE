//cài nodejs
//dựng base đầu tiên khởi động dự án cài: npm init -y
//npm i express --save 
//cài morgan: npm i morgan --save-dev
//cài helmer: npm i helmer --save-dev
//cài compression: npm i compression --save-dev

const express = require('express');
const app = express();
const morgan = require('morgan');
const { default: helmet } = require('helmet');


//init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(Compression());
//init db

//init router
app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: 'Welcome fantipjs!'
    })
});
//handle error


module.exports = app;