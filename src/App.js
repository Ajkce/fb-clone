import React from 'react';
import './App.css';
import Header from './header';
import Sidebar from './sidebar'
import Feed from './Feed'
import Widget from './widget'
import Login from './Login'
import Fuck from './Fuck'


function App() {
   const user = '';
  return (
  <div  className='app'>
    { !user ? <Fuck/> : <>
    <Header />

    <div className="app_body">

    {/*Sidebar */}
    <Sidebar/>
    {/*Feed */}
    <Feed/>

    {/*Widget*/}
    <Widget/>

    </div>
    
    </>}

  </div>
    
  );
}

export default App;
