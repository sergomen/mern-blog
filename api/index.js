import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => { 
        console.log('MongoDB is connected')
    }).catch(err => {
        console.log(err);
    });

const app = express();

app.listen(4444, () => {
    console.log('Server is running on port 4444');
});