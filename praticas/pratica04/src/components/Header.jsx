import Header from './components/Header';
import './Header.css';

function App() {
    return (
     <div className="card">
       <Header/>
       <h1>Minha Aplicação React</h1>
       <p>Este é um parágrafo em JSX!</p>
     </div>
    );
  }
  function Header() {
    return (
     <header>
       <h1>Minha Aplicação React</h1>
     </header>
    );
  }
  

  export default Header;
