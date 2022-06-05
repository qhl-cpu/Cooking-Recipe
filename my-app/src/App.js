// import logo from './logo.svg';
import './App.css';
import Form from "./code/Form.js"
import PreLoadedCards from "./code/PreLoadedCards.js"
import Navbar from './code/Navbar.js';
import Head from './code/Head.js';
import CurrentRecipe from './code/CurrentRecipe';

function App() {
  return (
    <div className="App">
      <Head />
      <Navbar />
      <Form />
      <CurrentRecipe />
    </div>
  );
}

export default App;
