// import logo from './logo.svg';
import './App.css';
import Form from "./Components/Form.js"
import PreLoadedCards from "./Components/PreLoadedCards.js"
import Navbar from './Components/Navbar.js';
import Head from './Components/Head.js';
import CurrentRecipe from './Components/CurrentRecipe';

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
