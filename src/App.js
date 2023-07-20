import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import FormOne from "./components/formOne/FormOne";
import FormTwo from "./components/formTwo/FormTwo";
import FormThree from './components/formThree/FormThree';
import FormFour from "./components/formFour/FormFour";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<FormOne/>} />
        <Route exact path="/two" element={<FormTwo/>} />
        <Route exact path="/three" element={<FormThree/>}/>
        <Route exact path="/four" element={<FormFour/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
