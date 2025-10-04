import { link } from "fs";
import mongoose, { model, mongo, Mongoose, Schema } from "mongoose";
import { title } from "process";
import dotenv from "dotenv";
dotenv.config();
mongoose.connect(process.env.DB_URL);
const userSchema = new Schema({
    username: { type: String, unique: true },
    password: String
});
const contentSchema = new Schema({
    title: String,
    link: String,
    type: {
        type: String,
        enum: ["video", "article", "podcast", "other"],
        required: true,
    },
    tags: [{ type: mongoose.Types.ObjectId, ref: 'tag' }],
    userId: { type: mongoose.Types.ObjectId, ref: 'user', required: true }
});
const linkSchema = new Schema({
    link: String,
    userId: { type: mongoose.Types.ObjectId, ref: 'user', required: true }
});
export const UserModel = model("user", userSchema);
export const ContentModel = model("content", contentSchema);
export const LinkModel = model("links", linkSchema);
//# sourceMappingURL=db.js.map