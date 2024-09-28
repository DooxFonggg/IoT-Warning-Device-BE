// const app = require("./src/app");
// const config = require("./src/config");

// const server = app.listen(config.port, () => {
//     console.log(`WSV project start with port start with ${config.port}`);
// });

// //khai báo procress
// process.on('SIGINT', () => {
//     console.log('Received SIGINT. Closing server...');
//     server.close(() => console.log(`Exit server express`));
// });


const express = require("express");
const app = express();

const admin = require("firebase-admin");
const serviceAccount = require("./key.json");

//config db
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

//init app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//route

app.post('/create', async (req, res) => {
    try {
        console.log(req.body);
        const id = req.body.email;
        const userJson = {
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        };
        const responsve = db.collection("users").doc(id).set(userJson);
        res.send(responsve);
    }
    catch (error) {
        res.send(error);
    }
})


//Server 
const PORT = process.env.PORT || 8081;
console.log('>> test', process.env.PORT)
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})
