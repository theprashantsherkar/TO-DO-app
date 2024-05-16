import express from 'express'
import {
    RegiterNew,
    getAllUsers,
    getMyInfo,
    login,
    logout
} from '../controllers/user.js'
        
import { isAuthenticated } from '../middleware/auth.js'

const router = express.Router()

router.get('/all', getAllUsers) //tested

router.post('/register', RegiterNew) //tested

router.post('/login', login)   //tested

router.get('/me', isAuthenticated, getMyInfo)    //tested

router.get('/logout', logout)  //tested

export default router 
