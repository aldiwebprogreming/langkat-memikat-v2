

import NavigationCom from './components/NavigationCom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import WisataalamComponent from './components/WisataalamComponent';

function App() {
  return (
    <div className="App">
      <div className='row'>

        <div className='col-sm-4'>

        </div>

        <div className='col-sm-4'>

        <BrowserRouter>
           {/* <NavigationCom /> */}
            <Routes>
              <Route path='/' element={ <HomeComponent /> }></Route>
              <Route path='wisata-alam' element={ <WisataalamComponent /> }></Route>
            </Routes>
        </BrowserRouter>
          
        </div>


          <div className='col-sm-4'>
          
          </div>
        
      </div>
       
        
    </div>
  );
}

export default App;
