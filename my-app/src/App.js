import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/home";
import Header from "./Components/Header/header";
import Navbar from "./Components/Navbar/navbar";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Navbar/>
    <Routes>
      <Route path="/" exact={true} element={<Home />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}


export default App;
