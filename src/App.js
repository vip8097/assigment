

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Barchart from './pages/Barchart';
import Home from './pages/Home';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
           
          <Route path='/' element={<Home />} />
          <Route path='/barchart' element={ <Barchart />}/>
            </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
