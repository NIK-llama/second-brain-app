import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
export const userMiddleware = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const decoded = jwt.verify(authHeader, process.env.JWT_SECRET);
    if (decoded) {
        //@ts-ignore
        req.userId = decoded.id;
        next();
    }
    else {
        res.status(401).json({
            message: "Unauthorized User"
        });
    }
};
//# sourceMappingURL=middleware.js.map