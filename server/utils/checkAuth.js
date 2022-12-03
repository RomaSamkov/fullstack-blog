import jwt from "jsonwebtoken";

export const checkAuth = (req, res, next) => {
  const token = (req.headers.Authorization || "").replace(/Bearer\s?/, "");
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decoded.id;
      next();
    } catch (error) {
      console.log(error);
      return res.json({ message: "No Access" });
    }
  } else {
    console.log(error);
    return res.json({ message: "No Access" });
  }
};

// try {
//   if (!token) {
//     return res.json({ message: "No Access token" });
//   }
//   const decoded = jwt.verify(token, process.env.JWT_SECRET);
//   req.userId = decoded.id;
//   next();
// } catch (error) {
//   console.log(error);
//   res.json({ message: "No Access" });
// }
