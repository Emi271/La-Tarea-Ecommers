import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Card from './components/Card/Card';
import Contact from './components/Contact/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
 
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/productos" element={<Card />}/>
      <Route path="/contacto" element={<Contact />}/>
      </Routes>
    </div>
  );
}
export default App;

