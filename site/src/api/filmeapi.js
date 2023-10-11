import axios from 'axios'
const api = axios.create({
    baseURL:'http://localhost:5000'
})


export  async function cadastrarFilme( nome, avaliacao ,lancamento, disponivel, sinopse,usuario){
      const resp = await api.post('/filme',{

        nome: nome,
        sinopse: sinopse,
        avaliacao: avaliacao,
        disponivel: disponivel,
        lancamento: lancamento,
        usuario: usuario
      }
      )
      return resp.data
}

export async function enviarImagemFilme(id,imagem){
    const formData = new FormData();
    formData.append('capa',imagem);

    const resp = await api.put(`/filme/${id}/capa`, formData, {
        headers:{
            "Content-type": "multipart/form-data"
        },
    }
    )
    return resp.status;
}