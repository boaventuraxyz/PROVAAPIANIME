import { Router } from 'express'
import { Adicionar, Listar } from '../repository/repository.js';

const server = Router();

server.post('/anime', async (req, resp) => {
    try{
        const nome = req.body;
        const anime = await Adicionar(nome);
        resp.send(anime)
    } catch(err) {
        resp.send({
            erro:err.message
        }) 
    }
})

server.get('/anime' , async (req, resp) => {
    try{
        const resposta = await Listar();
        resp.send(resposta)
    }
    catch(err){
        resp.send({
            erro:err.message
        })  
    }
})


export default server;