
import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'

import { SignIn } from './components/page/signIn';
import { SignUp } from './components/page/signup';
import { InstaHome } from './components/page/instaHome';


function App() {

  
  return (
    <>

  <Router>
<Routes>
  <Route path='/' element ={<SignIn />}></Route>
  <Route path='/SignUp' element ={<SignUp/>} ></Route>
  <Route path='/instagram' element={<InstaHome />} ></Route>
</Routes>

  </Router>

    </>
  )
}

export default App
