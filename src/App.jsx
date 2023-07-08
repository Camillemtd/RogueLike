import { BrowserRouter,Route,Routes } from 'react-router-dom'
import React from 'react';
import PublicRoute from './pages/Layout/PublicRoute';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<PublicRoute/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
