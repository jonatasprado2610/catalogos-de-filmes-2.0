import axios from 'axios'
const api = axios.create({
    baseURL:'http://localhost:5000'
})


export  async function cadastrarFilme( nome, avaliacao ,lancamento, disponivel, sinopse,usuario){
      const response = await api.post('/filme',{

        nome: nome,
        sinopse: sinopse,
        avaliacao: avaliacao,
        disponivel: disponivel,
        lancamento: lancamento,
        usuario: usuario
      }
      )
      return response.data
}

export async function enviarImagemFilme(id,imagem){
    const formData = new FormData();
    formData.append('capa',imagem);

    const response = await api.put(`/filme/${id}/capa`, formData, {
        headers:{
            "Content-type": "multipart/form-data"
        },
    }
    )
    return response.status;
}

export  async function alterarFilme( id,nome, avaliacao ,lancamento, disponivel, sinopse,usuario){
    const response = await api.put(`/filme/${id}`,{

      nome: nome,
      sinopse: sinopse,
      avaliacao: avaliacao,
      disponivel: disponivel,
      lancamento: lancamento,
      usuario: usuario
    }
    )
    return response.data
}


export async function listarTodosFilmes(){
    const resposta = await api.get('/filme');
    return resposta.data;
}


export async function buscarFilmesNome(nome){
    const resposta = await api.get(`/filme/busca?nome=${nome}`);
    return resposta.data;
}   

export async function  removerFilme(id){
    const resposta = await api.delete(`/filme/${id}`);
    return resposta.status;
}


export async function buscarFilmesId(id){
    const resposta = await api.get(`/filme/${id}`);
    return resposta.data
}

export function  buscarImage(imagem){
    console.log(api.getUri())
    return `${api.getUri()}/${imagem}`
}