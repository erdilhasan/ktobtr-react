
import { Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/CustomNavBar';
import Contact from './pages/Contact';




function App() {
  return (
    <>
<CustomNavbar></CustomNavbar>   
      <Routes>
        <Route path='/' element={<h1>Anasayfa</h1>}/>
        <Route path='/bizkimiz' element={<h1>Biz Kimiz</h1>}/>
        <Route path='/iletisim' element={<Contact></Contact>}/>
      </Routes>
   
    </>
  );
}

export default App;
