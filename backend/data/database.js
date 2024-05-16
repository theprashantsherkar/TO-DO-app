import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {dbName:"backend"})
        .then((c) => {
            console.log(`Database connected to ${c.connection.host}`)
        })
        .catch((err) => {
            console.log(err)
        })
}


