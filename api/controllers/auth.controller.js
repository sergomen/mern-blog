import User from "../models/user.model.js";
import bcrypt from 'bcrypt';

export const signup = async (req, res, next) => {
    const { username, fullName, email, password } = req.body;

    if (!username || !fullName || !email || !password || username === '' || fullName === '' || email === '' || password === '') {
        // return res.status(400).json({ message: 'All fields are required' });
        next(errorHandler(400, 'All fields are required'));
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
        username,
        fullName,
        email,
        password: hashedPassword
    });

    try {
        await newUser.save();
        res.json('SignUp successful');
    } catch (error) {
        console.log(error);
        // res.status(500).json({ message: 'Failed to sign up' });
        next(error);
    }
}

