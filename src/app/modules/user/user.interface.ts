import { HydratedDocument, Model } from "mongoose";

// creating interface 
export interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
        firstName: string;
        middleName?: string;
        lastName: string;
    };
    dateOfBirth?: string;
    gender: 'male' | 'female';
    email: string;
    contactNo: string;
    emergencyContactNo: string;
    permanentAddress: string
}


// instance method 
export interface IUserMethods {
    fullName(): string;
}

// static method 
export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}