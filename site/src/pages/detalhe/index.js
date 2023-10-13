import Menu from '../../components/menu'
import Cabecalho from '../../components/cabecalho'
import Detalhe from '../../components/detalhe'
import { useParams } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import { buscarFilmesId} from '../../api/filmeapi'

export default function Index() {

    const [filme , setFilme] = useState({});
    const {idParam} = useParams();

    useEffect(()=>{
        CarregarFilme();
    },[])

    async function CarregarFilme(){
        const resp =  await buscarFilmesId(idParam);
        setFilme(resp)
    }

    return (
        <main className='page page-detalhe'>
            <Menu />
            <div className='container'>
                <Cabecalho />
                
                <div className='conteudo'>
                    <Detalhe  filme={filme}/>
                </div>
            </div>
        </main>
    )
}

