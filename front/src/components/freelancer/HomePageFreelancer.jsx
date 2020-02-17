import React, { useEffect, useState } from 'react'
import './MonEspacePerso.css'
import { Button } from 'reactstrap'
import axios from 'axios'
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode'


/* -------- Page d'accueil de la page x.freelancers[0], après connexion ------------------ */
const HomePageFreelancer = () => {

    const [profileHooks, setProfileHooks] = useState({
        id: '',
        errors: {}
    })

    //hooks de la data user pour le get de l'id
    const [idUsers, setIdUsers] = useState([])


    // cycle de vie du fetchData pour getter le profil du User
    useEffect(() => {
        fetchDataUserFree()
    }, []);

    const fetchDataUserFree = () => {
        axios.get(`http://localhost:5000/admin`)
            .then(res => setIdUsers(res.data))
            .catch((err) => console.log(err))
    }

    //décoder le token
    useEffect(() => {
        const token = localStorage.usertoken
        if (token) {
            const decoded = jwt_decode(token)
            setProfileHooks({
                id: decoded.id
            })
        }
    }, [])

    return (
        <>
            {idUsers.filter(x => x.id === profileHooks.id).map(x =>
                <div key={x.freelancers[0].id} className="main-div">
                    <div className='profil-card'>
                        <p className='name-card'>{x.freelancers[0].firstname} {x.freelancers[0].lastname}</p>
                        <img className='pic-card' src={x.freelancers[0].img === '' ? 'https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=' : x.freelancers[0].img} alt='profil pic' />
                    </div>
                    <div className="formulaire-creation-neoworker">
                        <p className="main-title">Bienvenue sur ton espace personnel</p>

                        <div className="first-div-creation-neoworker">
                            <div className="field-group-text">Intitulé du métier</div>
                            <input className="field-metier"
                                disabled type="text" id="title" name="Métier"
                                placeholder="Métier"
                                value={x.freelancers[0].title}
                            />
                            <div className="align-photoprofilwithfield-div">

                                <img className="profil-img-creation" src={x.freelancers[0].img === '' ? 'https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=' : x.freelancers[0].img} alt='profil pic' />
                                <div className="align-field-text-div">
                                    <div className="field-group-text">Prénom</div>
                                    <input
                                        className="field-firstname"
                                        placeholder="Prénom" disabled type="text"
                                        id="firstname"
                                        name="firstname"
                                        value={x.freelancers[0].firstname}
                                    />
                                    <div className="field-group-text">Nom</div>
                                    <input
                                        className="field-lastname"
                                        placeholder="Nom"
                                        disabled type="text" id="lastname" name="lastname"
                                        value={x.freelancers[0].lastname}
                                    />
                                    <div className="field-group-text">Adresse</div>
                                    <input
                                        className="field-address"
                                        placeholder="Adresse"
                                        disabled type="text" id="address" name="address"
                                        value={x.freelancers[0].address}
                                    />
                                    <div className="field-group-text">Code Postal</div>
                                    <input
                                        className="field-cp"
                                        placeholder="Code postal"
                                        disabled type="text" id="cp" name="cp"
                                        value={x.freelancers[0].cp}
                                    />


                                    <div className="field-group-text">Email</div>
                                    <input
                                        className="field-email" placeholder="Email"
                                        disabled type="text" id="email" name="email"
                                        value={x.freelancers[0].email}
                                    />
                                    <div className="field-group-text">N° de téléphone</div>
                                    <input
                                        className="field-tel" placeholder="Telephone"
                                        disabled type="text" id="tel" name="tel"
                                        value={x.freelancers[0].tel}
                                    />
                                    {/*<div className="field-group-text">Password</div>
                            <input
                                className="field-password"
                                placeholder="Mot de passe" disabled type="text"
                                id="password" name="password"
                                value={x.freelancers[0].password}
                            />*/}
                                </div> </div>


                            <div className="field-group-text">Taux journalier minimum</div>
                            <input className="field-tj_min"
                                disabled type="number" id="tjm_min" name="tjm_min"
                                value={x.freelancers[0].tjm_min}
                            />


                            <div className="field-group-text">Taux journalier maximum</div>
                            <input className="field-tj_max" disabled type="number"
                                id="tjm_max" name="tjm_max"
                                value={x.freelancers[0].tjm_max}
                            />

                            <div className="field-group-text">Disponibilité</div>
                            <input className="field-dispo" disabled type="number"
                                id="disponibilite" name="disponibilite"
                                value={x.freelancers[0].disponibilite}
                            />


                            <div className="field-group-text">Préférence lieu de travail</div>

                            <input className="field-pref_lieu_travail" disabled type="text"
                                id="pref_lieu_de_travail"
                                name="pref_lieu_de_travail"
                                value={x.freelancers[0].pref_lieu_de_travail}
                            />


                            <div className="field-group-text">Mobilité</div>

                            <input className="field-mobilite" disabled type="text" name="mobilite" id='mobilite'
                                value={x.freelancers[0].mobilite}
                            >

                            </input>

                            <div className="field-group-text">Kilomètres max</div>

                            <input className="field-Km_max" disabled type="text" name="km_max" id='km_max'
                                value={x.freelancers[0].km_max}
                            >

                            </input>
                        </div>
                        <div>
                            <Link to={`/neoworker/editer/${profileHooks.id}/${x.freelancers[0].id}`}>
                                <Button className='btn'>Editer</Button>
                            </Link>
                        </div>
                    </div>


                </div>)}

        </>
    )
}

export default HomePageFreelancer