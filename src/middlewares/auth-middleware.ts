import jwt from "jsonwebtoken";
const _TKN_SECRET: string = process.env.TKN_SECRET || "";

const Jwt = {
  verifyToken: (req: any, res: any, next: any) => {
    let token = req.headers["authorization"];
    if (!token) {
      return res.status(403).send({ message: "No token provided!" });
    }
    jwt.verify(token, _TKN_SECRET, (err: any, decoded: any) => {
      if (err) {
        return res.status(401).send({ message: "Unauthorized" });
      }
      req.userId = decoded.id;
      next(); // keep moving to next middleware
    });
  },
};

export default Jwt;
