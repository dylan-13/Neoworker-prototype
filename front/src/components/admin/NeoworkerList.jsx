import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NeoworkerListCard from './NeoWorkerListCard'
import profilPic from '../../img/anais.jpg'
import './CommonDesign.css'
import SearchBarNeo from '../searchbar/SearchBarNeo'

const NeoworkerList = () => {

    // 4 hooks pour classer les neoworker : disponible, partiellement, non dispo, ignoré
    const [freelancerList, setfreelancerList] = useState([])


    //hooks searchbar
    const [searchTerm, setSearchTerm] = useState({
        nom: ''
    });

    // function to get all Neoworkers
    const getNeoworker = async () => {
        await axios.get('http://localhost:5000/freelancers')
            .then(res => setfreelancerList(res.data))
            .catch((err) => console.log(err))
    }

    //permet de refresh le get neoworker si un truc change sur la page 
    useEffect(() => {
        getNeoworker()
    }, [])


    ////////////////////////////////////////////////////////////////////////////

    const displayFreelancerByStatus = (status, stringStatus) => {
        return (
            <>
                <h2 className="liste-h2">{stringStatus}</h2>
                <div className="liste-card-div">
                    {freelancerList
                        .filter(freelancer => freelancer.status === status
                            && (freelancer.firstname && freelancer.lastname)
                            && (freelancer.firstname.toLowerCase().includes(searchTerm.nom.toLowerCase())
                                || freelancer.lastname.toLowerCase().includes(searchTerm.nom.toLowerCase()))
                        )
                        .map(freelancer =>
                            <NeoworkerListCard {...freelancer} />
                        )}
                </div>
            </>
        )
    }

    return (
        <div className="admin-div">
            <div className='profil-card'>
                <SearchBarNeo setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
                <p className='name-card'>Anais</p>
                <img className='pic-card' src={profilPic} alt='profil pic' />
            </div>
            {displayFreelancerByStatus(0, "Disponibles")}
            {displayFreelancerByStatus(1, "Partiellement disponibles")}
            {displayFreelancerByStatus(2, "Non Disponibles")}
            {displayFreelancerByStatus(3, "Ignoré(es)")}

        </div>
    
    )
}

export default NeoworkerList