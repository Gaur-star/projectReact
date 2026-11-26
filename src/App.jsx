import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/login"
import NewCounter from './pages/newcounter'
import { BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {


  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/page" element={<NewCounter />} />
      </Routes>
     </BrowserRouter>
    </>
    
  );
};

export default App;

