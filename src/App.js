import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CradsDetail from './components/CradsDetail';
import Crads from './components/Crads';
import { Routes , Route } from 'react-router-dom';


function App() {
  return (
    <>
     <Header/>
     <Routes>
     
     <Route path='/' element={<Crads/>}/>
     <Route path='/cart/:id' element={<CradsDetail/>}/>
     </Routes>
    </>
  );
}

export default App;
