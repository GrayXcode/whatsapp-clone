import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from './Sidebar';
import Chat from './Chat'
import { Fragment } from 'react';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
 const [{ user }, dispatch] = useStateValue();

  return (
    //BEM(Bracket, Element and modifier) naming convention
    <div className="app">

      { !user ? (
        <Login />
      ) : (
       <div className="app__body">

         <Router>
              <Sidebar /> 

            <Routes>
              <Route path="/rooms/:roomId" element={
                <Fragment>
                    <Chat />
                </Fragment>
                 } />

              <Route path="/" element={<Chat />} />
            </Routes>

         </Router>

       </div>
      )
    }
       
    </div>
  );
}

export default App;
