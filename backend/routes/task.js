import express from 'express'

import {
    deleteTask,
    getMyTask,
    landing,
    newTask,
    updateTask
} from '../controllers/task.js'

import { isAuthenticated } from '../middleware/auth.js' 

const router = express.Router()
 
router.get('/', landing)  //tested
router.post('/new', isAuthenticated ,newTask)   //tested
router.get('/mytask', isAuthenticated, getMyTask) // tested

router
    .route('/:id')
    .put(isAuthenticated, updateTask)  //tested
    .delete(isAuthenticated, deleteTask)   //tested
    

export default router

