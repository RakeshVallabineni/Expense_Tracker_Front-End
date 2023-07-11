import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './components/HomeUI/HomePage/homePage';
import Signup from './UserAccess/signup';
import Login from './UserAccess/login';
import { useState } from 'react';
import UserHomePage from './components/ExpenseTracker/UserHomePage/userHomePage';
import CreateBudget from './components/ExpenseTracker/Expenses/Budget/createBudget';
import TrackExpenses from './components/ExpenseTracker/Expenses/Track Expenses/trackExpenses';

function App() {
  const loginStatus=localStorage.getItem('Token');
  const [login,setLogin]=useState(false);
  function checkLoginStatus(status){
    setLogin(status);
  }
  return (
    <div className="App">
     <BrowserRouter>
         <Routes>
          <Route path='/home'>
            <Route index  element={<HomePage />} /> 
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Login checkStatus={checkLoginStatus} />} />
          </Route>
          { (loginStatus!=null?loginStatus:login)  && <Route path='/user'>
              <Route path='home' element={<UserHomePage />}></Route> 
              <Route path='budget' element={<CreateBudget />}></Route> 
              <Route path='expenses' element={<TrackExpenses />}></Route> 

          </Route> }
          </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
