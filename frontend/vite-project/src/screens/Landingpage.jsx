import React from 'react'
import Firstimg from '../assets/firstpageimg.jpg'
import'./Landingpage.css'
import {useNavigate} from 'react-router-dom'

const App = () => {

    const navigate = useNavigate();

    function handlelogin(){
        navigate('/login')
    }

  return (
      <div>
      
      <div className="navbar">
        <p class='p1'>ThoughtCanvas</p>
        <button class='p2' onClick={handlelogin}>Login</button>
      </div>
      <div><img src={Firstimg} className='firstimg'/>
      </div>

      <div className='firsttext'>
              <h1 className="title">Welcome to ThoughtCanvas</h1>
              <p className="subtitle">Keep your note safe</p>
      </div>
      <div className='firsttext'>
            
       </div>
      </div>
        
      

    
  )
}

export default App