"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 8532;
const allowedOrigins = ["http://localhost:4200"];
const options = {
    origin: allowedOrigins,
};
app.use((0, cors_1.default)(options));
app.get("/ping", (_req, res) => {
    console.log("se ha hecho ping");
    const MESSAGE = "Pong";
    res.send(MESSAGE);
});
app.use("/api/users", user_routes_1.default);
app.listen(PORT, () => {
    console.log(`servidor escuchado en el puerto ${PORT} `);
});
