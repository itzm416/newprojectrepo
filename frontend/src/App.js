import React from 'react'
import Homepage from './compnent/Homepage'
import { Route, Routes, BrowserRouter, Navigate, } from 'react-router-dom'
import Login from './compnent/Login'
import Signup from './compnent/Signup'
import UploadEvent from './compnent/UploadEvent'
import { useDispatch, useSelector } from 'react-redux'
import Layout from './page/Layout'
import { getToken } from './services/LocalStorageService'
import { setUserToken } from './features/userSlice'
import UserLiked from './compnent/UserLiked'
import Usercreated from './compnent/Usercreated'

const App = () => {

  let x = getToken()
  const dispatch = useDispatch()
  dispatch( setUserToken({access_token : x.access_token}) )

  const { access_token } = useSelector(state => state.auth)

  return (
    <>

<BrowserRouter>
      <Routes>


        <Route path="/" element={<Layout />} >
          <Route index element={<Homepage />} />

          <Route path='login' element={ !access_token ? <Login /> : <Navigate to='/' />} />
          <Route path='signup' element={ !access_token ? <Signup /> : <Navigate to='/' /> } />
        
          <Route path='createevent' element={ access_token ? <UploadEvent /> : <Navigate to='/' /> } />
          <Route path='userlikedevent' element={ access_token ? <UserLiked /> : <Navigate to='/' /> } />
          <Route path='usercreated' element={ access_token ? <Usercreated /> : <Navigate to='/' /> } />
        
      
        </Route>


        <Route path='*' element={<h1>Error 404</h1>} />        
      </Routes>
</BrowserRouter>

    </>
  )
}

export default App