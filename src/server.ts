import express from 'express';
import path from 'path';
import { corsPlay } from './CorsPlay';
const server1 = express();
const server2 = express();
const PORT_1 = 3000;
const PORT_2 = 3001;

server2.use('/cors', corsPlay);

server1.use(
	express.static(path.resolve(__dirname, '../public'), {
		index: ['index.html', 'index.htm'],
		lastModified: true,
	}),
);

export const init = () => {
	server1.listen(PORT_1, () => {
		console.log(`Static running at http://localhost:${PORT_1}`);
	});
	server2.listen(PORT_2, () => {
		console.log(`Api running at http://localhost:${PORT_2}`);
	});
};
