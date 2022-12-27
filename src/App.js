import './App.css';
import { Navbar } from "./components/Navbar";
import { ItemListContainer } from "./components/ItemListContainer";


const App = () => {
  return (
    <>
    <Navbar/>
    <ItemListContainer saludo = "Bienvenidos al Sitio"/>
    </>
  );
}

export default App;
