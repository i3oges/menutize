import { Request, Response, NextFunction } from 'express';
import express = require('express');
import get from '../db/get';
const router = express.Router();

/* GET users listing. */
router.get('/', async function(req: Request, res: Response, next: NextFunction) {
  let data = {};
  try {
    data = await get('SELECT * FROM public.hours');
  } catch (e) {
    console.log(e)
  }
  res.json(data);
});

export default router;
