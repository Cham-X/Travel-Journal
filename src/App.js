import "./App.css";
import { Route ,Routes, BrowserRouter } from 'react-router-dom'
import AllTravels from "./Pages/AllTravels";
import NewTravel from "./Pages/NewTravel";


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllTravels />} />
        <Route path="/new-journal" element={<NewTravel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
