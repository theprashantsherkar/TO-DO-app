import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true,
    },
    description: {
        type: String,

    },
    isCompleted: {
        type: Boolean, 
        default: false,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "members",
        // required:true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})


const Task = mongoose.model('tasks', taskSchema)

export default Task