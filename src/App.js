import React from 'react';
import './App.css';
import Header from './header';
import Sidebar from './sidebar'
import Feed from './Feed'
import Widget from './widget'
import Login from './Login'
import { UseGlobalContext } from './context';



function App() {
  const { userinfo} = UseGlobalContext();
  console.log(userinfo);
  return (
  <div  className='app'>
    { !userinfo ? <Login/> : <>
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
