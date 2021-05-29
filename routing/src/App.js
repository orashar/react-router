import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Nav/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
