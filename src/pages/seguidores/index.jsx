import React,{useContext, useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import {UserContext} from '../../components/store/context'
import seta from '../../img/left-arrow.svg'
import './style.css'
function Followers (){
    const { user } = useContext(UserContext)
    const userUrl = `https://api.github.com/users/${user.login}/followers`

    const [state, setState] = useState([])
    
    useEffect(() => {
        Get().then(data => setState(data))
      }, []) 
    async function Get (){
        
        const getProject = await axios.get(userUrl, {})
       
         
        const AllData =  getProject.data.map(resp => resp);
        console.log(AllData)

        return AllData
    }
    let dataAll = state.slice(0,10)
    dataAll.map(res => res)
    return(
        <div className="containeR">
        <header className='header'>
        <Link to='/user' className='seta'><img alt='' className='seta'src={seta}/></Link>
        <p className='headerP'>10 repositórios</p>
        </header>
        {dataAll.map(res =>{
            return(
         <div className="containerrepo">
             <div className="star-container">
                 <img alt='' className='img-profile'src={res.avatar_url}/>
             </div>
             <p className='login'>{res.login}</p>

             
         </div>    )
        
        })}
       
    </div>
    )
}

export default Followers