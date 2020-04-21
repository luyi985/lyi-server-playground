import express from 'express';

export const corsPlay = express.Router();

corsPlay.get('/', (req, res) => {
	res.json({ msg: 'corsplay is running' });
});
