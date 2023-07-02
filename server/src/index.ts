import express from 'express';
import dotenv from 'dotenv';

import routes from './routes';

dotenv.config();

const app = express();

app.use(routes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
