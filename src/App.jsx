import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/login"
import Counter from "./pages/counter";
import NewCounter from './pages/newcounter'
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {


  return (
    <>
     <Header />
     <BrowserRouter>
      <Routes>
        <Route path="/page" element={<NewCounter />} />
        <Route path="/page2" element={<counter />} />
      </Routes>
     </BrowserRouter>
     <Footer />
    </>
    
  );
};

export default App;

