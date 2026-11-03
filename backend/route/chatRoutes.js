import express from "express";
import handlechat from "../controllers/chatControllers.js";

const router = express.Router();

router.get("/items", (req, res) => {
  res.json({ message: "all get items will be here" });
});

router.post("/items", (req, res) => {
  const { name } = req.body;

  res.json({ message: "Item added successfully", name });
});

router.post("/chats", handlechat);

export default router;
