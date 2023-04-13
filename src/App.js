import logo from './logo.svg';
import './App.css';
import {Route,BrowserRouter,Routes} from "react-router-dom"
import Home from './Pages/Home';
import Dish from './Pages/Dish';

function App() {
  return (
    <BrowserRouter>
    <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/dish' exact element={<Dish/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
