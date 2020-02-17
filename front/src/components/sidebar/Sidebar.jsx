import React, { useState, useEffect } from 'react'
import './Sidebar.css'
import NeoWorkerLogo from '../../img/LOGO CLASSIQUE_FOND TRANSPARENT_506X254.png'
import { Link, withRouter } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

const Sidebar = (props) => {

    const [profileHooks, setProfileHooks] = useState({
        id: '',
        email: '',
        password: '',
        role: '',
        errors: {}
    })
    
    //se déconnecter
    const logOut = (e) => {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        setProfileHooks({ role: '' })
        props.history.push('/')
        window.location.reload()

    }
    //décoder le token
    useEffect(() => {
        const token = localStorage.usertoken
        if (token) {
            const decoded = jwt_decode(token)
            setProfileHooks({
                id: decoded.id,
                email: decoded.email,
                password: decoded.password,
                role: decoded.role
            })
        }
    }, [])

    const neoworker = (
        <div className={profileHooks.role === 'neoworker' && localStorage.usertoken ? "sidebar" : "sidebar-hidden"}>
            <Link to='/neoworker/homepage' className="div-logo"><img className="sidebar-logo" src={NeoWorkerLogo} alt="neo worker logo"></img></Link>
            <div className="sidebar-field-group">

                <Link to='/neoworker/homepage' className="sidebar-little-field"><p >Mon Espace Perso</p></Link>
                <Link to={`/neoworker/competences/${profileHooks.id}`} className="sidebar-little-field"><p>Mes Compétences</p></Link>

            </div>

            <Link to='/neoworker'>
                <div className="sidebar-div-deconnection">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.4375 3.16992C27.1289 5.80664 29.5313 10.1191 29.5313 15C29.5313 23.0156 23.0391 29.5137 15.0293 29.5312C7.03126 29.5488 0.480479 23.0273 0.468761 15.0234C0.462901 10.1426 2.86525 5.81836 6.55079 3.17578C7.23634 2.68945 8.19142 2.89453 8.60157 3.62695L9.52735 5.27344C9.87306 5.88867 9.70899 6.66797 9.14064 7.08984C6.70899 8.89453 5.15626 11.7539 5.15626 14.9941C5.1504 20.4023 9.52149 24.8438 15 24.8438C20.3672 24.8438 24.8789 20.4961 24.8438 14.9355C24.8262 11.9004 23.3965 8.9707 20.8535 7.08398C20.2852 6.66211 20.127 5.88281 20.4727 5.27344L21.3984 3.62695C21.8086 2.90039 22.7578 2.68359 23.4375 3.16992ZM17.3438 15.4688V1.40625C17.3438 0.626953 16.7168 0 15.9375 0H14.0625C13.2832 0 12.6563 0.626953 12.6563 1.40625V15.4688C12.6563 16.248 13.2832 16.875 14.0625 16.875H15.9375C16.7168 16.875 17.3438 16.248 17.3438 15.4688Z" fill="black" /></svg>
                    <p className="sidebar-field-deconnection" onClick={logOut}>Se déconnecter</p>
                </div>
            </Link>

        </div>
    )

    const admin = (
        <div className={profileHooks.role === 'admin' && localStorage.usertoken ? "sidebar" : "sidebar-hidden"}>
            <Link to='/admin' className="div-logo"><img className="sidebar-logo" src={NeoWorkerLogo} alt="neo worker logo"></img></Link>
            <div className="sidebar-field-group">

                <p className="sidebar-field">~ Tes Neoworkers ~</p>

                <Link to='/admin/neoworker/creer' className="sidebar-little-field">
                    <p>Créer un nouveau Neoworker</p>
                </Link>
                <Link to='/admin/neoworker/liste' className="sidebar-little-field">
                    <p>Liste des Neoworkers</p>
                </Link>

                <p className="sidebar-field">~ Tes Missions ~</p>

                <Link to='/admin/mission/creer' className="sidebar-little-field">
                    <p>Créer une mission</p>
                </Link>
                <Link to='/admin/missions' className="sidebar-little-field">
                    <p>Liste des missions</p>
                </Link>
            </div>

            <Link to='/admin'>
                <div className="sidebar-div-deconnection">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.4375 3.16992C27.1289 5.80664 29.5313 10.1191 29.5313 15C29.5313 23.0156 23.0391 29.5137 15.0293 29.5312C7.03126 29.5488 0.480479 23.0273 0.468761 15.0234C0.462901 10.1426 2.86525 5.81836 6.55079 3.17578C7.23634 2.68945 8.19142 2.89453 8.60157 3.62695L9.52735 5.27344C9.87306 5.88867 9.70899 6.66797 9.14064 7.08984C6.70899 8.89453 5.15626 11.7539 5.15626 14.9941C5.1504 20.4023 9.52149 24.8438 15 24.8438C20.3672 24.8438 24.8789 20.4961 24.8438 14.9355C24.8262 11.9004 23.3965 8.9707 20.8535 7.08398C20.2852 6.66211 20.127 5.88281 20.4727 5.27344L21.3984 3.62695C21.8086 2.90039 22.7578 2.68359 23.4375 3.16992ZM17.3438 15.4688V1.40625C17.3438 0.626953 16.7168 0 15.9375 0H14.0625C13.2832 0 12.6563 0.626953 12.6563 1.40625V15.4688C12.6563 16.248 13.2832 16.875 14.0625 16.875H15.9375C16.7168 16.875 17.3438 16.248 17.3438 15.4688Z" fill="black" /></svg>
                    <p className="sidebar-field-deconnection" onClick={logOut}>Se déconnecter</p>
                </div>
            </Link>

        </div>

    )

    return (

        <>
            {localStorage.usertoken && profileHooks.role === 'neoworker' ? neoworker :
                localStorage.usertoken && profileHooks.role === 'admin' ? admin : ""}

        </>

    );

}


export default withRouter(Sidebar)
