import './App.css';
import { Navbar } from "./components/Navbar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>    
      <Route path="/" element={ <ItemListContainer />}/>
      <Route path="categories/:categoryId" element={<ItemListContainer />}/>
      <Route path="product/:productId" element={<ItemDetailContainer />}/>      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
