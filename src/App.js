import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/detail/:id" component={Detail}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
