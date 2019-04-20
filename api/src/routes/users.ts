import express = require('express');
import { Request, Response, NextFunction } from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.json({users: [{name: 'Jimmy'}]});
});

export default router;
