import React from 'react'
import './HomePageAdmin.css'
import profilPic from '../../img/anais.jpg'
import homePic from '../../img/landpic.png'
import heart from '../../img/heart.png'

/* -------- Page d'accueil de la page Administrateur, après connexion ------------------ */
const HomePageAdmin = () => {

    return(
        <div className="main-div">
            <div className='profil-card'>
                <p className='name-card'> Anais</p>
                <img className='pic-card' src={profilPic} alt='profil pic' />
            </div>
            <p className="admin-homepage-title">Bienvenue dans l'espace <span className="admin-homepage-orange"> Admin</span> NeoWorker<span className="admin-homepage-orange">.</span></p>
            <img className='home-pic' src={homePic} alt='draw' />
            <p className='made'> Made with <img className='heart' src={heart} alt='heart' /></p>
        </div>
    )
}

export default HomePageAdmin