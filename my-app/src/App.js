// import logo from './logo.svg';
import './App.css';
import Form from "./code/Form.js"
import PreLoadedCards from "./code/PreLoadedCards.js"
import Navbar from './code/Navbar.js';
import Head from './code/Head.js';

function App() {
  return (
    <div className="App">
      <Head />
      <Navbar />
      <Form />
      <PreLoadedCards />
    </div>
  );
}

export default App;
