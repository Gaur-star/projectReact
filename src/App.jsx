import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/login"
import Counter from "./pages/counter";
import { BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {


  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Counter />} />
      </Routes>
     </BrowserRouter>
    </>
    
  );
};

export default App;

