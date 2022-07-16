import express, { Request, Response } from "express";
const router = express.Router();

/*
 * GET - Home Page 
 */
router.get("/", (req: Request, res: Response) => {
  res.render("home");
});

export default router;
