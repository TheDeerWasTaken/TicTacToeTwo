import { Socket, Server } from 'socket.io';
import express from 'express';
import http from 'http';

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('hello world');
});

io.on('connection', (socket: Socket) => {
  console.log('a user connected');
});

server.listen(3001, () => {
  console.log('Listening on ::3001');
});

// Keep this export for jest testing

export default server;