// import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/index";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Opensource from "./pages/open-source/opensource";

function App() {
  // return <Home />;
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={ < Home /> }></Route>
        <Route exact path='/opensource' element={ < Opensource /> }></Route>
      </Routes>
    </Router>
  )
}

export default App;
