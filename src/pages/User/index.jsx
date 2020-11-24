import React,{useContext} from 'react'
import {UserContext} from '../../components/store/context'
import {Link, Redirect} from 'react-router-dom'
import './styles.css'
import {useHistory} from 'react-router-dom'

import logout from '../../img/logout.svg'
//import '../../styles/background.css'
function PageUser (props){
    //JSON.stringify(user,null,2)
    const user = useContext(UserContext)
    const history = useHistory()

    function ChangeURL (){
        return history.push('/repositorio')
    }
    return(
        <div calssName='container'>
            <div className="header-black">
            <header>
            <div className="text-header">
                #<span>{user.user.login}</span>
            </div>
            <div className='container-logout'>
                
            <Link to='/' className=' logout'> <img className='logoutIMG' alt='' src={logout}/> </Link >
            
            </div>            
            </header>
        </div>

            <div className="div-profile">
                <div className="profile1">
                <img className='profile' src={user.user.avatar_url} alt='profile'/>
                </div>
               
            </div>

            <div className="description">
                <p className="name">{user.user.name}</p>
                <p className="email">{user.user.email}</p>
                <p className="location">{user.user.location}</p>
            </div>

            <section>
                <Link to='/followers' className="followers button">
                    <p className="number">{user.user.followers}</p>
                    <span className='below-description'>Seguidores</span>
                </Link>
                <Link className="following button">
                    <p className="number">{user.user.following}</p>
                    <span className='below-description'>Seguindo</span>
                </Link>
                <Link className="repos button" onClick={ChangeURL}>
                    <p className="number">{user.user.public_repos}</p>
                    <span className='below-description'>Repo</span>

                </Link>
            </section>

            <div className="bio">
                <p className="biography">BIO</p>
               <span className='below-description'> {user.user.bio} </span> 
            </div>
        </div>
    )
}

export default PageUser