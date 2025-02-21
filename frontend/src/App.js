import './App.css';
import Navbar from "./componets/Navbar";
import Create from './componets/Create';
import Read from './componets/Read';
import Update from './componets/Update';
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>

          <Route exact path='/create' element={<Create/>}/>
          <Route  path='/all' element={<Read/>}/>
          <Route  path='/update/:id' element={<Update/>}/>
        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
