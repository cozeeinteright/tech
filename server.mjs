import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';


dotenv.config();

const app = express()
const port = process.env.PORT | 3000

app.use(morgan('dev'));

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.post('/signin.html', (req, res) => {
  res.send('here is auth')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})