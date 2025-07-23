
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./assets/Pages/Home";
import Notfind from "./assets/Pages/Notfind";
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="*" element={<Notfind/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
