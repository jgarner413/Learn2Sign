const express = require('express');
const app = express();
const data = require("./data");
const userData = data.users;
const cors = require("cors");
//const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


//Create user object in database
//EX: localhost:9000/create/mgorman
app.post("/create/:userID", async (req, res) =>{
    try{
        if(!req.params.userID){console.log("No userID"); res.status(400).json({"e":"No User ID"});}
        await userData.create(req.params.userID);
        res.status(200).json({});
    }
    catch(e){
        console.log(e);
        res.status(500).json({"e":"Already in use"});
    }
});

//Get lesson completion
//EX: localhost:9000/mgorman/lessonOne
app.get("/:userID/:lesson", async (req, res) => {
    try{
        if(!req.params.userID){console.log("No userID"); res.status(400).json({"e":"No User ID"});}
        if(!req.params.lesson){console.log("No lesson"); res.status(400).json({"e":"No Lesson specified"});}

        let status = await userData.getLesson(req.params.userID, req.params.lesson);
        res.status(200).json({"status":status});
    }
    catch(e){
        console.log(e);
        res.status(500).json({"e":"Server Error"});
    }
});

//Set lesson completion to TRUE
//EX: localhost:9000/mgorman/lessonOne
app.post("/:userID/:lesson", async(req, res) => {
    try{
        if(!req.params.userID){console.log("No userID"); res.status(400).json({"e":"No User ID"});}
        if(!req.params.lesson){console.log("No lesson"); res.status(400).json({"e":"No Lesson specified"});}

        let status = await userData.setLesson(req.params.userID, req.params.lesson);
        res.status(200).json({"status":status});
    }
    catch(e){
        console.log(e);
        res.status(500).json({"e":"Server Error"});
    }
});

//Get test score for User
//EX: localhost:9000/mgorman/testOne
app.get("/:userID/:test", async (req, res) => {
    try{
        if(!req.params.userID){console.log("No userID"); res.status(400).json({"e":"No User ID"});}
        if(!req.params.test){console.log("No test"); res.status(400).json({"e":"No Test specified"});}

        let score = await userData.getTest(req.params.userID, req.params.test);
        res.status(200).json({"score":score});
    }
    catch(e){
        console.log(e);
        res.status(500).json({"e":"Server Error"});
    }
});

//Set test score for User
//EX localhost:9000/mgorman/testOne/83
app.post("/:userID/:test/:score", async (req, res) => {
    try{
        if(!req.params.userID){console.log("No userID"); res.status(400).json({"e":"No User ID"});}
        if(!req.params.test){console.log("No test"); res.status(400).json({"e":"No Test specified"});}
        if(!req.params.score){console.log("No score"); res.status(400).json({"e":"No score specified"});}

        let score = await userData.setTest(req.params.userID, req.params.test, req.params.score);
        res.status(200).json({"score":score});
    }
    catch(e){
        console.log(e);
        res.status(500).json({"e":"Server Error"});
    }
});

/// FOR DEV ONLY
app.get("/getusers", async (req,res) => {
    let users = await userData.getAllUsers();
    res.status(200).json(users);
});

app.listen(9000, () => {
    console.log("Server is running!");
    console.log("Your routes will be running on http://localhost:9000");
  });
  