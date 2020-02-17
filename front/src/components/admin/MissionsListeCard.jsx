import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap'
import './CommonDesign.css'

const MissionsListeCard = (mission) => {

    //permet de delete une card dans la bdd 
    const deleteCard = (id) => {
        axios.delete(`http://localhost:5000/mission/${id}`)
            .catch((err) => console.log(err))
            window.location.reload(false);
    }

    return(
            <div className='missions-cards'>
                <div className='firstrow-card'>
                    <p className='titleofmission'>{mission.nom_mission}</p>
                    <p className='dateofmission'>du {mission.date_debut} au {mission.date_fin}</p>
                </div>
                <div className='secondrow-card'>
                    <p>Entreprise : {mission.nom_entreprise}</p>
                    <Link to={`/seeMission/${mission.id}`}><Button className='button-card'>Voir</Button></Link>
                </div>     
                <div className='thirdrow-card'>
                    <p>Telephone : {mission.tel}</p>
                    <Link to={`/updateMission/${mission.id}`}><Button className='button-card'>Modifier</Button></Link>   
                </div>
                <div className='fourthrow-card'>
                    <p>Email : {mission.email}</p>
                    <Button className='button-card' onClick={()=> { if (window.confirm('Voulez-vous vraiment supprimer cette mission ?')) deleteCard(mission.id)}} >Supprimer</Button>
                </div>
                
                <div className='fifthrow-card'>   
                    {mission.status === 2 || mission.status === 3 ?
                    <p>Neoworker associé : {/* Nom du neoworker depuis la TJ */}</p>: <p> </p>}
                    <Link to={`/admin/matching/${mission.id}`}><Button className='button-card'>Matcher !</Button></Link>
                </div> 
                </div>
    )
} 

export default MissionsListeCard;
