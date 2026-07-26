import type { Request, Response } from 'express';

export const getHealth = (req: Request, res: Response): void => {
     res.status(200).json({
        name: "businessFlow AI",
        version: "1.0.0",
        status: "running",
    })
}



// export const getHealth = (req: Request, res: Response): void => {
//   res.status(200).json({ status: 'UP', timestamp: new Date() });
// };
