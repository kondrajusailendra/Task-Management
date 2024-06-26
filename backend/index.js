
const express = require("express");
const mongoose = require("mongoose");
const Task = require("./models/taskModel");
const app = express();
var cors = require('cors');
app.use(cors());
app.use(express.json())
//routes
app.get("/", (req, res) => {
    //res.send("welcome sailendra")
})
app.get("/gettasks", async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json(tasks);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})
app.get("/gettaskbyid/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
        res.status(200).json(task);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})
app.delete("/deletetask/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            res.status(404).json({ message: "cannot find the task ${id}" });
        }
        res.status(200).json(task);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})
app.put("/updatetask/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(id, req.body);
        if (!task) {
            res.status(404).json({ message: "cannot find the task ${id}" });
        }
        const updatedtask = await Task.findById(id);
        res.status(200).json(updatedtask);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})
app.post("/createtask", async (req, res) => {
    /*console.log(req.body);
    res.send(req.body);*/
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
})

//mongodb+srv://sailendra:Sailendra%401234@cluster0.uufjzwq.mongodb.net/collection1?retryWrites=true
mongoose.connect("mongodb://127.0.0.1:27017/taskmanagement").then(() => {
    console.log("connected to mongoose")
    app.listen(8000, () => { console.log("server is running on port 8000") });

}).catch((error) => {
    console.log(error)
})