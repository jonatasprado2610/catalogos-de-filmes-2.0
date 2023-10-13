import Menu from '../../components/menu'
import Cabecalho from '../../components/cabecalho'
import { listarTodosFilmes, buscarFilmesNome, removerFilme } from '../../api/filmeapi'
import './index.scss'
import { useEffect, useState } from 'react'
import { confirmAlert } from 'react-confirm-alert'; // Import
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import FilmeCard  from '../../components/card'

export default function Index() {
    const [filtro, setFiltro] = useState('');
    const [filmes, setFilmes] = useState([]);
    const navigate = useNavigate();

    function abrirDetalhes(id) {
        navigate(`/admin/detalhe/${id}`)
    }

    function editarFilme(id) {
        navigate(`/admin/alterar/${id}`)

        console.log(navigate)
    }

    async function carregarTodosFilmes() {
        const resp = await listarTodosFilmes();
        setFilmes(resp)
    }

    async function filtrar() {
        const resp = await buscarFilmesNome(filtro)
        setFilmes(resp)
    }

    async function removerFilmeClick(id, nome) {
        confirmAlert({
            title: 'Remover Filme',
            message: `Deseja remover o filme ${nome}?`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        const resp = await removerFilme(id, nome);
                        if (filtro === '')
                            carregarTodosFilmes();
                        else
                            filtrar();
                        toast.dark('🚀Filme removido com sucesso!');
                    }
                },
                {
                    label: 'Nao',
                    onClick: () => alert('Click No')
                }
            ]
        });


    }

    useEffect(() => {
        carregarTodosFilmes();
    }, [])
    return (
        <main className='page page-consultar'>
            <Menu />
            <div className='container'>
                <Cabecalho />

                <div className='conteudo'>

                    <div className='caixa-busca'>
                        <input type="text" placeholder='Buscar filmes por nome' value={filtro} onChange={e => setFiltro(e.target.value)} />
                        <img src='/assets/images/icon-buscar.svg' alt='buscar' onClick={filtrar} />
                    </div>



                    <div className='card-container'>

                        {filmes.map(item =>
                            <FilmeCard item={item}
                            abrirDetalhes={abrirDetalhes}
                            editarFilme={editarFilme} 
                            removerFilmeClick={removerFilmeClick} />

                        )}




                    </div>


                </div>
            </div>
        </main>
    )
}

