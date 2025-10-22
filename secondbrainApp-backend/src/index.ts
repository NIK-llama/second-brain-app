import express from "express";
import jwt from "jsonwebtoken";
import z from "zod";
import bcrypt from "bcrypt";
import { UserModel, ContentModel, LinkModel  } from "./db.js";
import { userMiddleware } from "./middleware.js";
import dotenv from "dotenv";
import { random } from "./utils.js";
dotenv.config();

const app = express();

app.use(express.json());
app.post("/api/v1/signup", async (req,res) => {
    const requiredBody = z.object({
        username: z.string().min(5).max(30),
        password: z.string().min(4).max(40)
    })

    const parsedData = requiredBody.safeParse(req.body);

    if (!parsedData.success) {
        res.json({
            message: "Incorrect Format",
            error: parsedData.error
        })
        return
    }

    const {username, password} = req.body;

    const hashedPassword = await bcrypt.hash(password,5);
    
    let errorThrown: boolean = false;
    try {
        await UserModel.create({
            username,
            password: hashedPassword
        });
    } catch(e) {
        res.json({
            message: "User already exists"
        })
        errorThrown = true;
    }

    if(!errorThrown) {
        res.json({
            message: "You are signed up"
        })
    }
});

app.post("/api/v1/signin", async (req,res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({
        username
    })

     if (!user) {
      return res.status(401).json({
        message: "Invalid credentials", 
      });
    }

    //@ts-ignore
    const passwordMatch = await bcrypt.compare(password, user.password);
    
    if(passwordMatch) {
        const token = jwt.sign({ 
            id: user._id.toString()
        }, process.env.JWT_SECRET as string) 
        res.json({
            token: token
        })
    } else {
        res.json({
            message: "Incorrect credentials"
        })
    }

})

app.post("/api/v1/content", userMiddleware, async (req,res) => {
    const { title, link, type } = req.body;

    await ContentModel.create({
        title,
        link,
        type,
        //@ts-ignore
        userId: req.userId,
        tags: []
    });

   res.json({ message: "Content added" });

})

app.get("/api/v1/content", userMiddleware, async (req,res) => {
    //@ts-ignore
    const userId = req.userId;
    const content = await ContentModel.find({ userId: userId }).populate("userId","username");
    res.json(content);
})

app.delete("/api/v1/content", userMiddleware, async (req,res) => {
    const contentId = req.body.contentId;
    //@ts-ignore
    await ContentModel.deleteMany({ contentId, userId: req.userId });
    res.json({message: "Content Deleted"});
})

app.post("/api/v1/brain/share", userMiddleware, async (req,res) => {
    const share = req.body.share;
    if (share) {
        await LinkModel.create({
            //@ts-ignore
            userId: req.userId,
            hash: random(10)
        });
    } else {
        await LinkModel.deleteOne({
            //@ts-ignore
            userId: req.userId
        })
    }

    res.json({
        message: "Updated sharable link"
    })
})

app.get("/api/v1/brain/:shareLink", (req,res) => {

})

app.listen(3000);


