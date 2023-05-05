"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const _TKN_SECRET = process.env.TKN_SECRET || "";
const Jwt = {
    verifyToken: (req, res, next) => {
        let token = req.headers["authorization"];
        if (!token) {
            return res.status(403).send({ message: "No token provided!" });
        }
        jsonwebtoken_1.default.verify(token, _TKN_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).send({ message: "Unauthorized" });
            }
            req.userId = decoded.id;
            next(); // keep moving to next middleware
        });
    },
};
exports.default = Jwt;
