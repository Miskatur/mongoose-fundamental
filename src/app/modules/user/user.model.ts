import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// type UserModel = Model<IUser, {}, IUserMethods>;


// creating schema using interface 
const userSchema = new Schema<IUser, UserModel, IUserMethods>({
    id: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        firstName: {
            type: String,
            required: true
        },
        middleName: {
            type: String,
        },
        lastName: {
            type: String,
            required: true
        }
    },
    dateOfBirth: {
        type: String,
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female']
    },
    email: {
        type: String,
        required: true,
    },
    contactNo: {
        type: String,
        required: true,
    },
    emergencyContactNo: {
        type: String,
        required: true,
    },
    permanentAddress: {
        type: String,
        required: true,
    },

});

userSchema.static('getAdminUsers', async function getAdminUsers() {
    const admins = await this.find({ role: 'admin' })
    return admins
});

userSchema.method('fullName', function fullName() {
    return this.name.firstName + ' ' + this.name.lastName;
});

// creating model 
const User = model<IUser, UserModel>('User', userSchema)


export default User;