//React
import React, {useState} from 'react'


//Components
import Navbar from './components/Navbar';
import AllRoute from './components/AllRoute';
import LoginControl from './components/LoginControl';

//CSS
import './App.css';
import './css/my.css';

function App() {
  const [button, setButton] = useState(<LoginControl />)
  // const [angka, setAngka] = useState(0);



  return (

    <div>
      <Navbar button={button}/>
      
      <div className="container mt-3">
        <AllRoute setButton={setButton}/>
      </div>

    </div>
      
  );
}

export default App;
