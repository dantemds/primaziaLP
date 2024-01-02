import Footer from './Components/Footer/Footer';
import Home from './Components/Sections/Home/Home';

import './styles/app.sass';
import Header from './Components/Header/Header';
import Sobre from './Components/Sections/Sobre/Sobre';
import Planos from './Components/Sections/Planos/Planos';
import ComoUsar from './Components/Sections/ComoUsar/ComoUsar';
import Usabilidades from './Components/Sections/Usabilidades/Usabilidades';
import SejaParceiro from './Components/Sections/SejaParceiro/SejaParceiro';
import Contato from './Components/Sections/Contato/Contato';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Sobre/>
      <Planos/>
      <ComoUsar/>
      <Usabilidades/>
      <SejaParceiro/>
      <Contato/>
      <Footer/>
    </div>
  );
}

export default App;