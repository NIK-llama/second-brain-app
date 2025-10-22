import mongoose,{model, Schema } from "mongoose";  
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.DB_URL as string);

const userSchema = new Schema({
    username: { type: String, unique: true },
    password: String
})

const contentSchema = new Schema({
    title: String,
    link: String,
    type: {
    type: String,
    enum: ["video", "article", "podcast", "other"], 
    required: true,
  },
    tags: [{type: mongoose.Types.ObjectId, ref: 'tag'}],
    userId: {type: mongoose.Types.ObjectId, ref: 'user', required: true}
})

const linkSchema = new Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'user', required: true, unique: true },
})

export const UserModel = model("user", userSchema);
export const ContentModel = model("content", contentSchema);
export const LinkModel = model("links", linkSchema);