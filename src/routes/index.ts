import { Router } from "express";
const router = Router();

// home route
router.get("/", (req, res) => {
  res.send("Okay");
});

export default router;
