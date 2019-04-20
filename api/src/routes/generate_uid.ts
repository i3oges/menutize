import { Request, Response, NextFunction } from 'express';
import express = require('express');
import uid = require('uid-safe');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  const strUid = uid.sync(18);
  res.json({guid: strUid});
});

export default router;
