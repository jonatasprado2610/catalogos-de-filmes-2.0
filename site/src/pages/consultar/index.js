import Menu from '../../components/menu'
import Cabecalho from '../../components/cabecalho'
import { listarTodosFilmes, buscarFilmesNome } from '../../api/filmeapi'
import './index.scss'
import { useEffect, useState } from 'react'



export default function Index() {
    const [filtro, setFiltro] = useState('');
    const  [filmes , setFilmes] = useState([]);
 



    async function carregarTodosFilmes() {
        const resp = await listarTodosFilmes();
     
        setFilmes(resp)


    }

    async function filtrar(){
         const resp = await buscarFilmesNome(filtro)
         setFilmes(resp)
    }


    useEffect(()=>{
         carregarTodosFilmes();
    }, [])



    return (
        <main className='page page-consultar'>
            <Menu />
            <div className='container'>
                <Cabecalho />

                <div className='conteudo'>

                    <div className='caixa-busca'>
                        <input type="text" placeholder='Buscar filmes por nome' value={filtro}  onChange={e => setFiltro(e.target.value)} />
                        <img src='/assets/images/icon-buscar.svg' alt='buscar' onClick={filtrar} />
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>IDENTIFICAÇÃO</th>
                                <th>FILME</th>
                                <th>AVALIAÇÃO</th>
                                <th>LANÇAMENTO</th>
                                <th>DISPONÍVEL</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {filmes.map(item => 
                                
                            <tr>
                                <td>#{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.avaliacao}</td>
                                <td>
                                    {item.lancamento}
                                </td>

                                <td>{item.disponivel?'Sim':'Não'}</td>
                                <td>
                                    <img src='/assets/images/icon-editar.svg' alt='editar' />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <img src='/assets/images/icon-remover.svg' alt='remover' />
                                </td>
                            </tr>
                                
                            )}
                           
                          
                          

                        </tbody>
                    </table>

                </div>
            </div>
        </main>
    )
}

