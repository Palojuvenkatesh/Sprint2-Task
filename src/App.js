import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/dashboardcomponent/dashboard';
import Dashboardproductlist from './Components/dashboardcomponent/dashboardproductlist';
import { Approute } from './App.route';
import { BrowserRouter } from 'react-router-dom';
import Dashboardedit from './Components/dashboardcomponent/dashboardeditproduct';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Approute></Approute>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
