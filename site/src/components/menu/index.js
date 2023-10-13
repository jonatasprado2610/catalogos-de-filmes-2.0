import storage from 'local-storage'
import './index.scss'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react';

export default function Index() {
    const { menuSelecionado, setMenuSelecionado } = useState('home');
    const navigate = useNavigate();

    function sairClick() {
        
        storage.remove('usuario-logado');
      
    }

    function selecionadoMenu(menu) {
        setMenuSelecionado(menu);
        
    }

    function verificarMenuSelecionado(menu) {
        
        if(menu == menuSelecionado)
         return 'selecionado'
        
    }

    return (
        <nav className="comp-menu">
            <div>
                <div className='logo'>
                    <img src="/assets/images/logo.svg" alt="logo" />
                    <div>Portifolio.me</div>
                </div>

                <div className='menu-items'>
                    <Link to='/admin' onClick={() => selecionadoMenu('home')} className={verificarMenuSelecionado('home')}>
                        <img src="/assets/images/icon-home.svg" alt="home" />
                        <div>Home</div>
                    </Link>
                    <Link to='/admin/cadastrar' onClick={() => selecionadoMenu('cadastrar')}  className={verificarMenuSelecionado('cadastrar')}>
                        <img src="/assets/images/icon-cadastrar.svg" alt="cadastrar" />
                        <div>Cadastrar</div>
                    </Link>
                    <Link to='/admin/consultar' onClick={() => selecionadoMenu('consultar')} className={verificarMenuSelecionado('consultar')}>
                        <img src="/assets/images/icon-consultar.svg" alt="consultar" />
                        <div>Consultar</div>
                    </Link>
                </div>
            </div>
            <div>
                
                <div className='menu-items'>
                    <Link to='/' onClick={sairClick}>
                        <img src="/assets/images/icon-sair.svg" alt="consultar" />
                        <div>Sair</div>
                    </Link>
                </div>
            </div>
            
        </nav>
    );
}