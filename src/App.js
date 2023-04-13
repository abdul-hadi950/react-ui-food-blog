import Main from './components/main';
import AboutUs from './components/aboutUs';
import LatestArticle from './components/LatestArticle';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Main/>
      <AboutUs/>
      <LatestArticle/>
      <Footer/>
    </div>
  );
}

export default App;
