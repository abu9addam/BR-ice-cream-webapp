import mongoose from "mongoose";
import { User } from "../../../models/User";
import 'dotenv/config';
import bcrypt from "bcrypt";

export async function GET(req) {
    const body = await req.json();
    mongoose.connect(process.env.MONGO_URL);
    const pass = body.password;
    const email = body.email;
    if(pass !== pass || email !== email) {
        new Error('password must be at least 5 characters');
    }

    const notHashedPassword = pass;
    const salt = bcrypt.genSaltSync(10);
    body.password = bcrypt.hashSync(notHashedPassword, salt) ;
     

    const createdUser = await User.get(body);
    return Response.json(createdUser);
}