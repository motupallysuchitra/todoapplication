
import'./App.css';
import Login from './components/Login';
import  Chatapplicationlist from'./Chatapplicaton';
// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import InvalidAccess from './components/InvalidAccess';
import Home from './components/Home';
import FormItem from './components/FormItem'

function App(){
  // const[loginstate,setloginstate]=useState(false);

  return(
    <div className="main-container">
      <header className="app-title">
        <h2>chatapplication app</h2>
      </header>

      <Routes>

    <Route  path="/login" element={<Login/>}/>
    <Route  path="/chatapplication" element={<Chatapplicationlist/>}/>
     <Route path="/*" element={<NotFound/>}></Route>
     <Route path="InvalidAccess" element={<InvalidAccess/>}></Route>
     <Route path="/home" element={<Home/>}/>
     <Route path="/" element={<FormItem/>}/>
     <Route path='/' element={<FormItem/>}/>
      </Routes>




      {/* {!loginstate &&  <Login updateState={setloginstate} />}
    
      {loginstate && <Chatapplicationlist />} */}

    </div>
  );
}
export default App;
