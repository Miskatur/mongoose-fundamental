import { IUser } from "./user.interface";
import User from "./user.model";

// Data Query using model 
export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    const user = new User(payload)
    const result = await user.save();
    return result
}

export const getAllUsersFromDB = async (): Promise<IUser[]> => {
    const users = await User.find()
    return users;
}

export const getUserByIdFromBD = async (payload: string | null): Promise<IUser | null> => {
    // const userById = await User.findById(id)
    const userById = await User.findOne({ id: payload }, {
        name: 1, role: 1, contactNo: 1
    })
    return userById;
}

export const getAllAdminUSers = async () => {

    const admins = await User.getAdminUsers()

    return admins
}