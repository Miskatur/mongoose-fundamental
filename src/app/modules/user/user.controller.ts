import { Request, Response } from "express";
import { createUserToDB, getAllAdminUSers, getAllUsersFromDB, getUserByIdFromBD } from "./user.service";

export const createUser = async (req: Request, res: Response) => {
    const data = req.body
    try {
        const newUser = await createUserToDB(data)
        res.status(200).json({
            status: "success",
            message: 'User created successfully',
            data: newUser
        })
    } catch (error: any) {
        res.status(400).json({
            status: 'success',
            message: error.message
        })
    }
}

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await getAllUsersFromDB()
        res.status(200).json({
            status: 'success',
            data: users
        })
    } catch (error: any) {
        res.status(400).json({
            status: 'error',
            message: error.message
        })
    }
}

export const getUserById = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        const data = await getUserByIdFromBD(id)
        res.status(200).json({
            status: 'success',
            data: data
        })
    } catch (error: any) {
        res.status(400).json({
            status: 'error',
            message: error.message
        })
    }
}
export const getAdminUsers = async (req: Request, res: Response) => {
    try {
        const data = await getAllAdminUSers()
        res.status(200).json({
            status: 'success',
            data: data
        })
    } catch (error: any) {
        res.status(400).json({
            status: 'error',
            message: error.message
        })
    }
}

