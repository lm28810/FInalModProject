
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import { Outlet, useLoaderData, params  as useParams } from 'react-router-dom';

 

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div>
        <Outlet/>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
