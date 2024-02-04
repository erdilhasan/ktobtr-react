
import { Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/CustomNavBar';
import Contact from './pages/Contact';
import Staff from './pages/Staff';




function App() {
  return (
    <>
<CustomNavbar></CustomNavbar>   
      
      <Routes>
        <Route path='/' element={<h1>Anasayfa</h1>}/>
        <Route path='/yk' element={<Staff></Staff>}/>
        <Route path='/iletisim' element={<Contact></Contact>}/>
        
      </Routes>
   
    </>
    
  );
}

export default App;
