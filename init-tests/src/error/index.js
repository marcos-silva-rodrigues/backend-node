import { Router } from "express";

const router = Router();

router.post('/', (req, res) => {
  return res
    .status(500)
    .json({
      msg: 'Internal server error',
      error: {}
    });
});

export default router;