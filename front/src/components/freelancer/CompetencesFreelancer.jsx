import React, {useEffect, useState } from 'react'
import axios from 'axios'
import Slider from "react-slick";
import Slide1 from './Slide1'
import Slide2 from './Slide2'
/*import Slide3 from './Slide3'*/
import Slide4 from './Slide4'
import Slide5 from './Slide5'
import './CompetencesFreelancer.css'

const CompetencesFreelancer = (props) => {
    //hooks de la data user pour le get de l'id
    const [idUsers, setIdUsers] = useState([])
    const params = props.match.params.id
    // cycle de vie du fetchData pour getter le profil du User
    useEffect(() => {
        fetchDataUserFree()
    }, []);
    const fetchDataUserFree = () => {
        axios.get(`http://localhost:5000/admin`)
            .then(res => setIdUsers(res.data))
            .catch((err) => console.log(err))
    }
    var settings = {
        infinite: true,
        slidesToShow: 1,
    };
    return (
        <div className="freelancer-competences">
            <div className='profil-card'>
                <p className='name-card'>{idUsers.filter(x => x.id == params).map(x => x.freelancers[0].firstname)} {idUsers.filter(x => x.id == params).map(x => x.freelancers[0].lastname)}</p>
                <img className='pic-card' src={idUsers.filter(x => x.id == params).map(x => x.freelancers[0].img) == '' ? 'https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=' : idUsers.filter(x => x.id == params).map(x => x.freelancers[0].img)} alt='profil picture' />
            </div>
            <div>
                <Slider {...settings}>
                    <Slide1 data={idUsers.filter(x => x.id == params).map(x => x.freelancers[0])} />
                    <Slide2 data={idUsers.filter(x => x.id == params).map(x => x.freelancers[0])} />
                    {/*<Slide3 data={idUsers.filter(x => x.id == params).map(x => x.freelancers[0])} />*/}
                    <Slide4 data={idUsers.filter(x => x.id == params).map(x => x.freelancers[0])} />
                    <Slide5 data={idUsers.filter(x => x.id == params).map(x => x.freelancers[0])} />
                </Slider>
                {/*<Link to={`/neoworker/editer/:id`}>
                    <Button className='btn'>Editer</Button>
                </Link>*/}
            </div>
        </div>
    )
}
export default CompetencesFreelancer