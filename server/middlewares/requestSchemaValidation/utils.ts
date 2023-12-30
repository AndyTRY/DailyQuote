import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

const validateParams = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  next();
};

export { validateParams };

