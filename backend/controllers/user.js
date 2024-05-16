import { User } from "../models/user.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



export const getAllUsers = async(req, res, next) => {
    try {
        const users = await User.find({})

        res.status(200).json({
            sucess: true,
            message: "API working",
            users
        })
    } catch (error) {
        next(error)
    }
}


export const RegiterNew = async(req, res, next) => {
    try {
        const { name, email, password } = req.body
        let user = await User.findOne({ email })
        if (user) return res.json({
            success: false,
            message: 'user Already exists'
        })

        const hashedPass = await bcrypt.hash(password, 10)
        user = await User.create({
            name,
            email,
            password: hashedPass

        })
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)
        res.status(201).cookie('token', token, {
            httpOnly: true,
            maxAge: 60 * 15 * 1000,
            sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
            secure: process.env.NODE_ENV === "Development"? false: true,
            
        }).json({
            success: true,
            message: "user Registered successfully"
        })
    } catch (error) {
        next(error)
    }
}


export const login = async(req, res, next) => {
    try {
        const { email, password } = req.body
        let user = await User.findOne({ email }).select("+password")
        if (!user) return res.status(404).json({
            success: false,
            message: "invalid email or password"
        })
        const isMatched = await bcrypt.compare(password, user.password)

        if (!isMatched) return res.status(404).json({
            success: false,
            message: "incorrect password"
        })
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)
        res.status(200).cookie("token", token, {
            httpOnly: true,
            maxAge: 60 * 15 * 1000,
            sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
            secure: process.env.NODE_ENV === "Development" ? false : true,
        }).json({
            success: true,
            message: `welcome back ${user.name}`
        })

    } catch (error) {
        next(error)
    }
    
} 


export const logout = (req, res) => {
    res.status(200).cookie("token", "", {
        expires: new Date(Date.now()),
        sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
        secure: process.env.NODE_ENV === "Development" ? false : true,
        
    }).json({
        success: true,
        message: 'successfully logged out.'
        
    })
} 

export const getMyInfo = (req, res) => {
  
    res.status(200).json({
        success: true,
        message: "user found successfully",
        user: req.user
        
    })
} 