import ErrorHandler from '../middleware/error.js'
import Task from '../models/task.js'

export const landing = (req, res) => {
    res.send('this is a ladding page')
}


export const newTask = async (req, res, next) => {
    try {
        const { title, description } = req.body
        await Task.create({
            title,
            description,
            user: req.user,

        })
        res.status(201).json({
            success: true,
            message: "task created successfully"
        })

    } catch (error) {
        next(error)
    }
}

export const getMyTask = async (req, res, next) => {
    try {
        const id = req.user._id
        const myTasks = await Task.find({ user: id })

        if (!myTasks) return next(new ErrorHandler('tasks not found', 404))

        res.status(200).json({
            success: true,
            message: "tasks found",
            myTasks
        })
    } catch (error) {
        next(error)
    }

}

export const updateTask = async (req, res, next) => {

    try {
        const task = await Task.findById(req.params.id);

        if (!task) return next(new ErrorHandler('Invalid Id', 500))

        task.isCompleted = !task.isCompleted

        task.save();
        res.status(200).json({
            success: true,
            message: 'task is updated'
        })
    } catch (error) {
        next(error)
    }

}

export const deleteTask = async (req, res, next) => {
    try {
        const task = Task.findById(req.params.id);

        if (!task) return next(new ErrorHandler("Invalid Id", 404))
        await task.deleteOne();

        res.status(200).json({
            success: true,
            message: 'task is deleted'
        })
    } catch (error) {
        next(error)
    }

}