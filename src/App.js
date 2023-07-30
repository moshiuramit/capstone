import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <>  {/* React fragment tag */}
    <Header />
    <Main />
    <Footer />
    <div className="App">

    </div>
    </>
  );
}

export default App;
