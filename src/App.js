import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {
  return (
    <>  {/* React fragment tag */}
    <Header />
    <Nav />
    <Main />
    <Footer />
    <div className="App">

    </div>
    </>
  );
}

export default App;
