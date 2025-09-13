
import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'

import { SignIn } from './components/page/signIn';
import { SignUp } from './components/page/signup';


function App() {

  
  return (
    <>

  <Router>
<Routes>
  <Route path='/' element ={<SignIn />}></Route>
  <Route path='/SignUp' element ={<SignUp/>} ></Route>
  {/* <Route path='/instagram' element = ></Route> */}
</Routes>

  </Router>

    </>
  )
}

export default App
