import jwt from 'jsonwebtoken';
export const verifyToken = (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({
                error: "Token not provided"
            });
        }
        token = token.split(" ")[1];
        const {email} = jwt.verify(token, "KEY");
        console.log(email);
        next();
    } catch (error) {
        return res.status(400).json({
            error: `Invalid Token not provided, ${error.message}`
        })
    }
}

