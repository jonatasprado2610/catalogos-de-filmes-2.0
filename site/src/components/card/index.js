
import './index.scss'
export default function Index(props){

    function formataData(lancamento){
        const ano = lancamento.substr(0,10);
        const mes = lancamento
        return `${ano}`

    }
 
    return(
       

      
        <div className='comp' key={props.item.id} onClick={() => props.abrirDetalhes(props.item.id)}>
            <div className='card'>
             <div className='acoes'>
                <img src='/assets/images/icon-editar.svg' alt='editar'
                    onClick={e => {
                    e.stopPropagation();
                    props.editarFilme(props.item.id)
                    }}
                />
                <img src='/assets/images/icon-remover.svg' alt='remover'
                onClick={
                e => {
                 e.stopPropagation();
                 props.removerFilmeClick(props.item.id, props.item.nome)
                }}
                />
            </div>
             <div>
                    <div className='sigla'>{props.item.nome.substr(0, 1)}</div>
                    <div className='filme'>{props.item.nome} </div>
                        <div className='lancamento'>{formataData(props.item.lancamento)}</div>
                    </div>
                    <div>
                    <div className='avaliacao'>Avaliação:{props.item.avaliacao}</div>
                    <div className='disponivel'> {props.item.disponivel ? 'Disponível' : 'Indisponível'}</div>
                    </div>
                        </div>
                </div>
    
    )
}