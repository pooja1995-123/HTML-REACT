import logo from './logo.svg';
import './App.css';
import Header from './constant/Header';
import Footer from './constant/Footer';
import Home from './components/Home';
import Contact from "./components/Contact";
import Recipes from './components/Recipes';
import Blog from './components/Blog';
import About from "./components/About";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from "./components/Register";


function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/recipes" component={Recipes}  />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
      </Switch>
      </Router>  
     
    </div>
  );
}

export default App;
