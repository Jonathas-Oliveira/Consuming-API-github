import React, {useState, useContext} from 'react'
import '../../styles/background.css'
import './style.css'
import logo from '../../img/iconmonstr-github-1.svg'
import {UserContext} from '../../components/store/context'
import {useHistory} from 'react-router-dom'

export default function Landing () {
    const [name, setName] = useState('')
    const hostName = document.getElementById('name') 

    const userUrl = 'https://api.github.com/users'
    const {user ,setUser} = useContext(UserContext)


    const history = useHistory()
    async function Authorization (e){
       e.preventDefault()

        const profileResponse = await fetch(`${userUrl}/${hostName.value}`)
            .then(resp => resp.json())
            .then(Data =>{ 
                if(Data.login !== undefined) {
                    //setar o value de inital state
                    
                   
                    setUser(Data)
                   return  history.push('/user')
                }
            })
        
        return profileResponse
    }
  
    return(
        <div className='Container'>
           <main>
               
            <form onSubmit={Authorization}>
            <img src={logo} alt='logo' className='logo'/>

            <input className='spacing' id='name' placeholder='Usuário' required
            value={name} onChange={(e) =>{setName(e.target.value)}}
            ></input>
            <button className='spacing buttonSpacing' type='submit' >ENTRAR </button>
            
            </form>

               
           </main>
        </div>
    )
}

