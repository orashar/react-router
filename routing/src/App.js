import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Item from './components/Item';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/about/:id" component={Item}/>
        </Switch>
      </div>
    </Router>
    
  );
}

const Home = () => {
  return <div>Home page</div>
}

export default App;
