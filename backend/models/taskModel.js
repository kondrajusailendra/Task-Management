const mongoose = require("mongoose")
const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "please enter the name"]
    },
    description: {
        type: String ,
        required: true,
    },
    duedate: {
        type: Date,
        required: true
    }
    


},
    {
        timestamps: true

    }
)
const Task = mongoose.model("tasks", taskSchema)
module.exports = Task;