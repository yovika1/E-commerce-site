
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import { ProductRoutes } from './Routes/Routes';

function App() {
  // useEffect(()=>{
  //   document.title = 'Yovika';
  // },[])
  return (
    <div>
    <BrowserRouter>
   
    <ProductRoutes/>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
