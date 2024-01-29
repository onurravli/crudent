import express, { type Application, type Request, type Response } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  return res.json({
    message: "Hello world.",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
