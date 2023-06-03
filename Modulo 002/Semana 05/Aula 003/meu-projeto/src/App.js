import googleLogo from './images/google.png';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Buttons from './components/Buttons';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Buttons texto='Pesquisa Google' texto2='Google Search' texto3={true}/>
      <Buttons texto='Estou com sorte' texto2="I'm lucky" texto3={false}/>
      <Footer/>
    </div>
  );
}

export default App;