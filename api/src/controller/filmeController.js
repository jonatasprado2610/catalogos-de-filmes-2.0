import { inserirFilme } from '../repository/filmeRepository.js';
import { Router } from 'express';
const server = Router();

server.post('/filme' ,  async(req, resp) =>{
    try{
      const  filmeParaEnserir =  req.body;

    
      const filme = await inserirFilme(filmeParaEnserir);
       resp.send(filme)


    }catch(err){
         resp.status(400).send({
             erro:err.message
         });
    }
})

export default server;


