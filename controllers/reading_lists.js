const router = require("express").Router();
const jwt = require("jsonwebtoken");
const { SECRET } = require("../util/config");
const { Op } = require("sequelize");

const { ReadingList } = require("../models");

router.post("/", async (req, res) => {
  try {
    const readingList = ReadingList.create({ ...req.body });
    res.json(readingList);
  } catch (e) {
    console.error(e);
    res.status(400).json({ error: "invalid data" });
  }
});

module.exports = router;
