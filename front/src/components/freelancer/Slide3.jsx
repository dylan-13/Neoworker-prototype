import React, { useState } from 'react'
import axios from 'axios'


const Slide3 = (props) => {
    let data = {
        sport:'',
        passion:'',
        engagement_asso:''
    }
    if (props.data[0])  {

        data = props.data[0]
    }
    const [updata,setUpdate]=useState({
        sport:'',
        passion:'',
        engagement_asso:''})

const dataChoice = (choice) => {
const allData = Object.entries(choice)
    let value = {}
allData.map( x => {
    if(x[1]){
        let u = x[0]
        let i = x[1]
        value={...value, [u]:i}
    }

}
    
)
return value
}    
    const updaterData=()=>{
        axios.put(`http://localhost:5000/freelancer/${data.id}`, dataChoice(updata))  
        .catch(err=>console.log(err))
    }
    return (

        <div>
            <h2 className='competences-title'>Centres d'intérêt</h2>
            <div className='competences'>
        
                    <form className='cards' onSubmit={updaterData}>
                        <div className='mission-card'>
                            <label>
                                Sport :
                            <input className="input-CI" type="text" name="text" id="sport" placeholder={data.sport} 
                            value={updata.sport} 
                            onChange={(e)=>{setUpdate({...updata, sport:e.target.value})}}/>
                            </label>
                        </div>
                        <div className='mission-card'>
                            <label>
                                Passion :
                            <input className="input-CI" type="text" name="text" id="passion" placeholder={data.passion} 
                            value={updata.passion}
                            onChange={(e)=>{setUpdate({...updata,passion:e.target.value})}}/>
                            </label>
                        </div>
                        <div className='mission-card'>
                            <label>
                                Engagement Associatif :
                            <input className="input-CI" type="text" name="text" id="engagement_asso" placeholder={data.engagement_asso} 
                            value={updata.engagement_asso}
                            onChange={(e)=>{setUpdate({...updata,engagement_asso:e.target.value})}} />
                            </label>
                        </div>
                        
                        
                    </form>
            </div>
        </div>
    )
}
export default Slide3