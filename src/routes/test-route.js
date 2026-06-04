const express = require("express");
const pool = require("../config/db");

const router = express.Router();

router.get("/test-db", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.json(result.rows);
});

module.exports = router;