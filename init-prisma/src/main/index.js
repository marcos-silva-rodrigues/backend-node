const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  return res.json({ msg: "Hello Prisma ORM" });
});

module.exports = router;
