// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header';
// import Welcome from './components/welcome';
// import CradsDetail from './components/CradsDetail';

// import { Routes , Route } from 'react-router-dom';
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Crads from './components/Crads';     // adjust path as needed



// function App() {
//   return (
    
    
//      <>
//       <Header />
//       <Routes>
//        <Route path="/" element={<Welcome />} />
//         <Route path="/welcome" element={<Welcome />} />
        
//         <Route path="/cart/:id" element={<CradsDetail />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Welcome from './components/welcome';
import CradsDetail from './components/CradsDetail';
import Crads from './components/Crads'; // You had this right

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/Crads" element={<Crads />} />
        <Route path="/cart/:id" element={<CradsDetail />} />
      </Routes>
    </>
   
  );
}

export default App;

