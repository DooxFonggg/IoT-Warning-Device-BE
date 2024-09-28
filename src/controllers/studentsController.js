'use strict';

const db = require('../db');
// const Student = require('../models/students');

const addStudent = async (req, res, next) => {
    try {
        console.log(req.body);
        const id = req.body.id;
        const studentJson = {
            id: req.body.id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            fatherName: req.body.fatherName,
            classEnrolled: req.body.classEnrolled,
            age: req.body.age,
            phoneNumber: req.body.phoneNumber,
            subject: req.body.subject,
            year: req.body.year,
            semesters: req.body.semesters,
            status: req.body.status
        };
        const responsve = db.collection("students").doc(id).set(studentJson);
        res.send(`add student successfuly + ${responsve}`);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}

//route

// app.post('/create', async (req, res) => {
//     try {
//         console.log(req.body);
//         const id = req.body.email;
//         const userJson = {
//             email: req.body.email,
//             firstName: req.body.firstName,
//             lastName: req.body.lastName
//         };
//         const responsve = db.collection("users").doc(id).set(userJson);
//         res.send(responsve);
//     }
//     catch (error) {
//         res.send(error);
//     }
// })


module.exports = {
    addStudent
}