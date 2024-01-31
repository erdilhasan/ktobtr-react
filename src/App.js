
import { Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/CustomNavBar';
import Placeholder from './components/placeholder';



function App() {
  return (
    <>
<CustomNavbar></CustomNavbar>   
      <Routes>
        <Route path='/' element={<h1>Anasayfa</h1>}/>
        <Route path='/bizkimiz' element={<h1>Biz Kimiz</h1>}/>
        <Route path='/iletisim' element={<h1>iletişim</h1>}/>
      </Routes>
   
    </>
  );
}

export default App;
