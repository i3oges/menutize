import { Request, Response, NextFunction } from 'express';
const express = require('express');
const uid = require('uid-safe');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  try {
    const strUid = uid.sync(18);
    res.json({guid: strUid});
  } catch (e) {
    console.log(e);
  }
});

export default router;
