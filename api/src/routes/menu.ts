import { Request, Response, NextFunction } from 'express';
const express = require('express');
import db from '../db/db';
const router = express.Router();

/* GET users listing. */
router.get('/', async function (req: Request, res: Response, next: NextFunction) {
  try{
    const data = await db.findMenuItems();
    res.json(data);
  } catch (e) {
    console.log(e);
  }
});

router.post('/', async function (req: Request, res: Response) {
  try {
    const result = await db.insertMenuItem(req.body);
    res.json(result);
  } catch (e) {
    console.error('Error in menu post', e);
  }
});

export default router;
