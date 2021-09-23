import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
      <div className='container'>
        <Header header='Horned Beasts' />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
