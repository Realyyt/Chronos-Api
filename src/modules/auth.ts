import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

export const comparePasswords = (password: any, hash: any) => {
  return bcrypt.compare(password, hash);
};

export const hashPassword = (password: any) => {
  return bcrypt.hash(password, 5);
};

export const createJWT = (user:any) => {
    const token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET || ""
    );
    return token;
};

export const protect = (req:any, res:any, next: () => void) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401);
    res.send("Not authorized");
    return;
  }

  const [, token] = bearer.split(" ");
  if (!token) {
    console.log("here");
    res.status(401);
    res.send("Not authorized");
    return;
  }

try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || "");
    req.user = payload;
    console.log(payload);
    next();
    return;
} catch (e) {
    console.error(e);
    res.status(401);
    res.send("Not authorized");
    return;
}
};