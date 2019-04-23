import { Request, Response, NextFunction } from 'express';
const express = require('express');
import db from '../db/db';
const router = express.Router();

/* GET users listing. */
router.get('/', async function (req: Request, res: Response, next: NextFunction): Promise<void> {
  try{
    const data = await db.findLocation();
    res.json(data);
  } catch (e) {
    console.log(e);
  }
});

router.post('/', async function (req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const data = await db.updateLocation(req.body);
    res.json(data);
  } catch (e) {
    console.log(e);
  }
})
export default router;
