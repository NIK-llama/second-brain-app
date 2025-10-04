import type {Request, Response, NextFunction} from "express";
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";


export const userMiddleware = async (req: Request, res: Response, next:NextFunction) => {
    const authHeader = req.headers['authorization'];
    const decoded = jwt.verify(authHeader as string, process.env.JWT_SECRET as string);

    if(decoded) {
        //@ts-ignore
        req.userId = decoded.id;
        next();
    } else {
        res.status(401).json({
            message: "Unauthorized User"
        })
    }
} 