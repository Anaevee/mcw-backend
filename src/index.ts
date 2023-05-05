import express from "express";
import userRouter from "./routes/user.routes";
import cors from "cors";

const app = express();
app.use(express.json());

const PORT = 8532;

const allowedOrigins = ["http://localhost:4200"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));
app.get("/ping", (_req, res) => {
  console.log("se ha hecho ping");
  const MESSAGE: string = "Pong";
  res.send(MESSAGE);
});

app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`servidor escuchado en el puerto ${PORT} `);
});
