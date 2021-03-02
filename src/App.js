//React
import React, {useState, useEffect} from 'react'


//Components
import Navbar from './components/Navbar';
import AllRoute from './components/AllRoute';
import LoginControl from './components/LoginControl';

//CSS
import './App.css';
import './css/my.css';

function App() {
  const [active, setActive] = useState("Home");
  const [button, setButton] = useState("");
  // const [angka, setAngka] = useState(0);

  useEffect(() => {
    setButton(<LoginControl setButton={setButton} active={active} setActive={setActive}/>);
  }, [active])

  return (

    <div>
      <Navbar active={active} setActive={setActive} button={button} setButton={setButton}/>
      {/* {active} */}
      <div className="container mt-3">
        <AllRoute setActive={setActive} setButton={setButton}/>
      </div>

    </div>
      
  );
}

export default App;
