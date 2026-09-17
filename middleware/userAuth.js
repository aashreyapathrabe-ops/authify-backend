// import jwt from "jsonwebtoken";
// const userAuth = async (req, res, next) => {
//     const { token } = req.cookies;
//     if (!token) {
//         return res.json({ 
//             success: false,
//             message: "Not Authorized Login again",
//         });
//     }
//     try {
//         const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
//         if (!tokenDecode) {
//             req.body.userId = tokenDecode.id;
//             console.log("User ID:", req.body.userId);
//         }else {
//             return res.json({success: true, message: "Not Authorized Login again"});
//         }
//         next();
//     } catch (error) {
//         res.json({ success: false, message:error.message });
//     }
// }
// export default userAuth;



import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.json({
            success: false,
            message: "Not Authorized Login again",
        });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if (!tokenDecode) {
            return res.json({
                success: false,
                message: "Not Authorized Login again",
            });
        }

        req.body.userID = tokenDecode.id;

        console.log("User ID:", req.body.userID);

        next();

    } catch (error) {
        return res.json({
            success: false,
            message: error.message,
        });
    }
};

export default userAuth;