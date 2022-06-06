import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import control from './controller/controll.js'

const server = express();
server.use(cors());
server.use(express.json());

server.use(control)

server.listen(process.env.PORT, () => console.log(`API ON`));
