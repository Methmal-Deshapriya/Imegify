import jwt from "jsonwebtoken";

export const userAuth = (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Not Authorized. Login Again!" });
  }
  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if (!tokenDecode.id) {
      return res
        .status(401)
        .json({ success: false, message: "Not Authorized. Login Again!" });
    }
    req.body.userId = tokenDecode.id;
    next();
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: error.message,
        message2: "this is bcz auth",
      });
  }
};
