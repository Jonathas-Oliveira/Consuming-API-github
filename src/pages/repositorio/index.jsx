import React,{useContext, useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import star from '../../img/star.svg'
import './styles.css'
import seta from '../../img/left-arrow.svg'
import {UserContext} from '../../components/store/context'

 function UserRepositorio(){
    const { user } = useContext(UserContext)
    const userUrl = `https://api.github.com/users/${user.login}/repos`

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
    dataAll.map(res => res.name)
    return(
        <div className="containeR">
            <header className='header'>
            <Link to='/user' className='seta'><img alt='' className='seta'src={seta}/></Link>
            <p className='headerP'>10 repositórios</p>
            </header>
            {dataAll.map(res =>{
                return(
             <div className="containerRepo">
                 <p className='title'>{res.name}</p>
                 <p className='description'>{res.description}</p>
                 <div className="star-container">
                     <img alt='' className='star'src={star}/>
                     <p className='stargazers_count'>{res.stargazers_count}</p>
                 </div>
                 
             </div>    )
            
            })}
           
        </div>
    )
}

export default UserRepositorio