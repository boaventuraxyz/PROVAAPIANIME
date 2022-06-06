import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import controll from './controller/controll.js'

const server = express();
server.use(cors());
server.use(express.json());

server.use(controll)

server.listen(process.env.PORT, () => console.log(`API ON`));
