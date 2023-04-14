import logo from './logo.svg';
import './App.css';
import {Route,BrowserRouter,Routes} from "react-router-dom"
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
          <Route path='/' exact element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
