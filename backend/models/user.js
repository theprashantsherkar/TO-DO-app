import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        unique: true,
        required: true,

    },
    password: {
        type: String,
        select: false,
        required:true,
    },
    createdAt: {
        type: Date,
        deafult: Date.now(),
    }
})


export const User = mongoose.model('members', schema)