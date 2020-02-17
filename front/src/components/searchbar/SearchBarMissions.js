import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './SearchBarMissions.css'
import Search from '../../img/search.png'


const SearchBarMission = ({setSearchTerm, searchTerm}) => {
    const [search, setSearch] = useState([]);
    const[result,setResult]= useState([]);

    const fetchData = async () => {
       await axios.get('http://localhost:5000/missions')
            .then(res => setSearch(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchData()
        const results = search.filter(person =>
            person.nom_mission.toLowerCase().includes(searchTerm.nom));
            setResult(results);
    }, [searchTerm.nom]);

    return (
        <div className="search">
            <input
                className="search-input"
                type="text"
                placeholder="Search"
                value={searchTerm.nom}
                onChange={(e) => { setSearchTerm({ ...searchTerm, nom : e.target.value }) }}/>
            <img className='loop' src={Search} alt='search loop'/>
            <ul>
                {searchTerm.nom.length===0? '':
                result.map(item => { 
                })}

            </ul>
        </div>
    );
}

export default SearchBarMission