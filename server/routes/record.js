const express = require("express");
const nodemailer = require("nodemailer");

const recordRoutes = express.Router();

const dbo = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb();

  db_connect.collection("login").find({}).toArray(function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

recordRoutes.route("/recordLibraries").get(function (req, res) {
  let db_connect = dbo.getDb();

  db_connect.collection("library").find({}).toArray(function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});


recordRoutes.route("/recordFromName").post(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { username: req.body.name };
  db_connect.collection("login").find(myquery).toArray(function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

recordRoutes.route("/record/addLogin").post(function (req, response) {

  let date_time = new Date();

  let db_connect = dbo.getDb();
  let myobj = {
    username: req.body.username,
    password: req.body.password,
    role: req.body.role,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    subscribed: req.body.inNewsLetter,
    twitter: "",
    github: "",
    joinDate: date_time.toLocaleDateString(),
    city: "",
    country: "",
    phone: 0,
    bio: "",
    rating: -1
  };
  db_connect.collection("login").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

recordRoutes.route("/record/insertInto").post(function (req, response) {

  let date_time = new Date();

  let db_connect = dbo.getDb();
  let myobj = req.body.data;
  db_connect.collection(req.body.collection).insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

recordRoutes.route("/delete").post((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { username: req.body.username };
  db_connect.collection("login").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted" + req.username);
    response.json(obj);
  });
});

recordRoutes.route("/deleteClass").post((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { name: req.body.name };
  db_connect.collection("classes").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted" + req.username);
    response.json(obj);
  });
});

module.exports = recordRoutes;