import { initializeApp } from "firebase/app";
// const firebase = require('firebase');
const config = require('./config');


const db = initializeApp(config.firebaseConfig);

module.exports = db;