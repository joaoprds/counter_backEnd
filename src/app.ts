import express, { Request, Response } from 'express';
import { incrementCounter } from './counter';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/pageview/:key', async (req: Request, res: Response) => {
  const { key } = req.params;

  console.log(`Received request for key: ${key}`);

  const startTime = Date.now();
  const counter = await incrementCounter(key);
  const endTime = Date.now();

  const runtime = endTime - startTime;

  console.log(`Counter for key ${key} is now: ${counter}`);
  console.log(`Request processed in ${runtime}ms`);

  res.setHeader('X-Runtime', runtime.toString());
  res.setHeader('Content-Type', 'text/plain');
  res.send(counter.toString());
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


export default app; 