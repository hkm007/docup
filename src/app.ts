import express, { Request, Response, Application } from "express";
const app: Application = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response): void => {
  res.status(200).json({ message: "Hello from Docup!" });
});

app.listen(PORT, (): void => {
  console.log(`Server running at 👉 http://localhost:${PORT}`);
});
