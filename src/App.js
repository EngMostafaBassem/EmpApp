import React,{useEffect} from 'react';
import './App.css';

import Main from './Components/Main'
import {BrowserRouter} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {FetchEmp} from '../src/Redux/Actions/empActions'
function App() {
const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(FetchEmp())
  })

   

  return (
    <div>
      <BrowserRouter>
      <Main/>
      </BrowserRouter>
    </div>
  );
}

export default App;
