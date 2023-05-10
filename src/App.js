import './App.css';
import Header from './Componentes/Header'
import Section from './Componentes/Section'
import Pioneiros from './Componentes/Pioneiros'
import Plataformas from './Componentes/Plataformas'
import Acessorias from './Componentes/Acessorias'
import Investimento from './Componentes/Investimento'
import Footer from './Componentes/Footer'
import Logo from './imagens/logo_branco.png'
import Seta from './imagens/seta.png'
import Celular from './imagens/celular.png'
import Logo_pequeno from './imagens/logo_pequeno.png'
import No_celular from './imagens/no_celular.png'
import Digital from './imagens/digital.png'
import Demand from './imagens/on_demand.png'
import Exclusiva from './imagens/exclusiva_in.png'
import Icones from './imagens/icones_footer.png'


function App() {
  return (
    <div className="App">
      
      <Header />
      <Section />
      <Pioneiros />
      <Plataformas />
      <Acessorias />
      <Investimento />
      <Footer />
      
    </div>
  );
}

export default App;
