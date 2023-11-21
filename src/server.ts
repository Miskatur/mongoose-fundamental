import express from "express";
import mongoose from "mongoose";
import app from "./app";

const port: number = 5000


// database connection 


async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log(`Database connected successfully`);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })
    } catch (error) {
        console.log('failed to connect', error)
    }
}


main()


