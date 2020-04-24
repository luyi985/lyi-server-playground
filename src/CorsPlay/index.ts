import express, { Request, Response } from 'express';

export const corsPlay = express.Router();

const cors = (req: Request, res: Response, next: Function) => {
	res.header('Access-Control-Allow-Origin', ['http://localhost:3000']);
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Set-Cookie', 'aa=aaa');
	next();
};

const check = (req: Request, res: Response, next: Function) => {
	console.log('----------');
	console.log(req.headers.cookie);

	next();
};

corsPlay.get('/', cors, check, (req, res) => {
	res.json({ msg: 'corsplay is running' });
});
