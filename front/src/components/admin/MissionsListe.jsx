import React, { useState, useEffect } from 'react';
import axios from 'axios'
import SearchBarMission from '../searchbar/SearchBarMissions'
import profilPic from '../../img/anais.jpg'
import './CommonDesign.css'
import MissionsListeCard from './MissionsListeCard'

const MissionsListe = () => {

    //hooks searchbar
    const [missionResult, setMissionResult] = useState([])
    const [searchTerm, setSearchTerm] = useState({
        nom: ''
    });

    // get  dans la bdd all misions 
    const getMissions = async () => {
        await axios.get('http://localhost:5000/missions')
            .then(res => setMissionResult(res.data))
            .catch((err) => console.log(err))
    }

    //permet de refresh le get mission si un truc change sur la page 
    useEffect(() => {
        getMissions()
    }, [])

    //fonction pour maj status et search bar
    const displayMissionByStatus = (status, missionStatus) => {
        return (
            <>
                <h2 className='liste-h2'>{missionStatus}<span className='textModif'>:</span></h2>
                <div className='liste-card-div'>
                    {missionResult
                        .filter(x => x.status === status
                            && (x.nom_mission.toLowerCase().includes(searchTerm.nom.toLowerCase())))
                        .map(x =>
                            <MissionsListeCard {...x} />
                        )}
                </div>
            </>
        )
    }


    return (

        <div className="admin-div">
            <div className='profil-card'>
                <SearchBarMission setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
                <p className='name-card'> Anais</p>
                <img className='pic-card' src={profilPic} alt='profil pic' />
            </div>
                {displayMissionByStatus(0, "A pourvoir")}
                {displayMissionByStatus(1, "Pourvues")}
                {displayMissionByStatus(2, "Terminées")}

        </div>
    )
}

export default MissionsListe