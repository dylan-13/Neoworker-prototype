import React, { useState, useEffect } from 'react';
import '../admin/CommonDesign.css'
import axios from 'axios'
import profilPic from '../../img/anais.jpg'
import { Link } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './MatchingPage.css'


const MatchingPage = (props) => {

    const [dataFree, setDataFree] = useState([])
    const [dataMission, setDataMission] = useState([])

    const params = props.match.params

    useEffect(() => {
        fetchDataFree()
        fetchDataMiss()
    }, [])

    // hook et fonction pour l'ouverture/fermeture de la modal
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    //toujours un async pour un GET
    const fetchDataFree = async () => {
        await axios.get('http://localhost:5000/freelancers/')
            .then(res => setDataFree(res.data))
            .catch(err => console.log(err))
    }

    const fetchDataMiss = async () => {
        await axios.get(`http://localhost:5000/mission/${params.id}`)
            .then(res => setDataMission(res.data))
            .catch(err => console.log(err))
    }

    const [dataOneFreelancer, setDataOneFreelancer] = useState([])


    const tabValues = []
    const tabKey = []
    const tabValueMission = []
    const tabKeyMission = []

    tabValueMission.push(Object.values(dataMission))
    tabKeyMission.push(Object.keys(dataMission))

    for (let i = 0; i <= dataFree.length - 1; i++) {
        tabValues.push(Object.values(dataFree[i]))
        tabKey.push(Object.keys(dataFree[i]))

    }

    const sumFreelancers = []
    const sumIdFree = []


    for (let w = 0; w <= dataFree.length - 1; w++) {


        if ((tabValues[w][8] === tabValueMission[0][13] && tabValues[w][12] === tabValueMission[0][18]) || (tabValues[w][8] === tabValueMission[0][13] && tabValues[w][12] === 'Peu importe') || (tabValues[w][8] === tabValueMission[0][13] && tabValueMission[0][18] === 'Peu importe')) {
            const tabContainer = [0]
            const idFreeContainer = []

            for (let v = tabKey[0].indexOf('excel'); v <= tabKey[0].indexOf('sens_effort'); v++) {
                //when mission ask 3 stars

                //excel : ok. Points : non ok.

                if (tabValues[w][v] === 3 & tabValueMission[0][v + 3] === 3 & tabValues[w][v] - tabValueMission[0][v + 3] === 0) {
                    tabContainer.push(100)
                    idFreeContainer.push(tabValues[w][0])
                }

                else if (tabValues[w][v] === 2 & tabValueMission[0][v + 3] === 3 & tabValues[w][v] - tabValueMission[0][v + 3] === -1) {
                    tabContainer.push(50)
                    idFreeContainer.push(tabValues[w][0])
                }

                else if (tabValues[w][v] === 1 & tabValueMission[0][v + 3] === 3 & tabValues[w][v] - tabValueMission[0][v + 3] === -2) {
                    tabContainer.push(25)
                    idFreeContainer.push(tabValues[w][0])


                }

                //when mission ask 2 stars

                if (tabValues[w][v] === 3 & tabValueMission[0][v + 3] === 2 & tabValues[w][v] - tabValueMission[0][v + 3] === 1) {
                    tabContainer.push(125)
                    idFreeContainer.push(tabValues[w][0])

                }
                else if (tabValues[w][v] === 2 & tabValueMission[0][v + 3] === 2 & tabValues[w][v] - tabValueMission[0][v + 3] === 0) {
                    tabContainer.push(100)
                    idFreeContainer.push(tabValues[w][0])

                }
                else if (tabValues[w][v] === 1 & tabValueMission[0][v + 3] === 2 & tabValues[w][v] - tabValueMission[0][v + 3] === -1) {
                    tabContainer.push(50)
                    idFreeContainer.push(tabValues[w][0])

                }


                //when mission ask 1 star

                if (tabValues[w][v] === 3 & tabValueMission[0][v + 3] === 1 & tabValues[w][v] - tabValueMission[0][v + 3] === 2) {
                    tabContainer.push(150)
                    idFreeContainer.push(tabValues[w][0])



                }
                else if (tabValues[w][v] === 2 & tabValueMission[0][v + 3] === 1 & tabValues[w][v] - tabValueMission[0][v + 3] === 1) {
                    tabContainer.push(125)
                    idFreeContainer.push(tabValues[w][0])

                }
                else if (tabValues[w][v] === 1 & tabValueMission[0][v + 3] === 1 & tabValues[w][v] - tabValueMission[0][v + 3] === 0) {
                    tabContainer.push(100)
                    idFreeContainer.push(tabValues[w][0])

                }

                for (let a = tabKey[0].indexOf('francais'); a <= tabKey[0].indexOf('allemand'); a++) {
                    //when mission ask 3 stars


                    if (tabValues[w][a] === 3 & tabValueMission[0][a + 2] === 3 & tabValues[w][a] - tabValueMission[0][a + 2] === 0) {
                        tabContainer.push(100)
                        idFreeContainer.push(tabValues[w][0])

                    }
                    else if (tabValues[w][a] === 2 & tabValueMission[0][a + 2] === 3 & tabValues[w][a] - tabValueMission[0][a + 2] === -1) {
                        tabContainer.push(50)
                        idFreeContainer.push(tabValues[w][0])

                    }
                    else if (tabValues[w][a] === 1 & tabValueMission[0][a + 2] === 3 & tabValues[w][a] - tabValueMission[0][a + 2] === -2) {
                        tabContainer.push(25)
                        idFreeContainer.push(tabValues[w][0])

                    }

                    //when mission ask 2 stars

                    if (tabValues[w][a] === 3 & tabValueMission[0][a + 2] === 2 & tabValues[w][a] - tabValueMission[0][a + 2] === 1) {
                        tabContainer.push(125)
                        idFreeContainer.push(tabValues[w][0])
                    }
                    else if (tabValues[w][a] === 2 & tabValueMission[0][a + 2] === 2 & tabValues[w][a] - tabValueMission[0][a + 2] === 0) {
                        tabContainer.push(100)
                        idFreeContainer.push(tabValues[w][0])
                    }
                    else if (tabValues[w][a] === 1 & tabValueMission[0][a + 2] === 2 & tabValues[w][a] - tabValueMission[0][a + 2] === -1) {
                        tabContainer.push(50)
                        idFreeContainer.push(tabValues[w][0])
                    }


                    //when mission ask 1 star

                    if (tabValues[w][a] === 3 & tabValueMission[0][a + 2] === 1 & tabValues[w][a] - tabValueMission[0][a + 2] === 2) {
                        tabContainer.push(150)
                        idFreeContainer.push(tabValues[w][0])


                    }
                    else if (tabValues[w][a] === 2 & tabValueMission[0][a + 2] === 1 & tabValues[w][a] - tabValueMission[0][a + 2] === 1) {
                        tabContainer.push(125)
                        idFreeContainer.push(tabValues[w][0])
                    }
                    else if (tabValues[w][a] === 1 & tabValueMission[0][a + 2] === 1 & tabValues[w][a] - tabValueMission[0][a + 2] === 0) {
                        tabContainer.push(100)
                        idFreeContainer.push(tabValues[w][0])
                    }


                }

            }


            for (let prest = tabKey[0].indexOf('assistance_suivi_comptable'); prest <= tabKey[0].indexOf('after_sales_service'); prest++) {
                if (sumIdFree.includes(idFreeContainer)) {
                    //console.log("already exist")
                } else if (tabValues[w][prest] === true && tabValueMission[0][prest + 2] === true) {
                    // if (sumIdFree.includes(sumIdFree[])){}
                    sumFreelancers.push(tabContainer.reduce((acc, current) => acc + current))
                    sumIdFree.push(idFreeContainer)

                } else {
                    console.log('pas de matching sur les prestations')
                }

            }

        }

    }
    const fusionIdSum = []
    for (let k = 0; k <= sumFreelancers.length - 1; k++) {
        fusionIdSum.push([sumFreelancers[k], sumIdFree[k][0]])
    }



    fusionIdSum.sort((a, b) => a[0] - b[0]).reverse()


    const tabFinal = []
    for (let hj = 0; hj <= fusionIdSum.length; hj++) {
        const tro = fusionIdSum.map(x => x[1])
        const filterdataFree = dataFree.filter(x => x.id === tro[hj])
        tabFinal.push(filterdataFree)

    }
    const allFree = tabFinal.map(x => x)


    return (

        <div className="matching-first-div">
            <div className='profil-card'>
                <p className='name-card'> Anais</p>
                <img className='pic-card' src={profilPic} alt='profil pic' />
            </div>
            <div className="matching-second-div">
                <div className="left-neoworker-div">
                    <p className="column-title">Neoworkers</p>
                    {allFree.map((arrayInObject, y) =>
                        typeof arrayInObject[0] === "undefined" ? console.log("array vide") :
                            <div className="neoworkerCard-matching" key={arrayInObject[0].id}>
                                <p>{y + 1}</p>
                                <div className="firstrow-card-neoworker">
                                    <p className='neoworkerCard-p'>{arrayInObject[0].firstname} {arrayInObject[0].lastname}</p>

                                </div>
                                <div className="secondrow-card-neoworker">
                                    <p>Métier : {arrayInObject[0].title}</p>

                                </div>
                                <div className="thirdrow-card-neoworker">
                                    <p>Téléphone : {arrayInObject[0].tel}</p>
                                    <Link to={`/admin/neoworker/${arrayInObject[0].id}`}><Button className='button-card'>Voir</Button></Link>

                                </div>
                                <div className="fourthrow-card-neoworker">
                                    <p>Email : {arrayInObject[0].email}</p>
                                    <Link to={`/admin/neoworker/editer/${arrayInObject[0].id}`}><Button className='button-card'>Modifier</Button></Link>
                                </div>
                                <div className='fifthrow-card-neoworker'>
                                    <p>Statut : {arrayInObject[0].status === 0 ? <span className="orange-status">Disponible</span> : arrayInObject[0].status === 1 ? <span className="orange-status"> Partiellement disponible</span> : arrayInObject[0].status === 2 ? <span className="orange-status">Non disponible</span> : <span className="orange-status">Ignoré</span>}</p>
                                    <Button onClick={toggle} className='button-card' >Valider matching !</Button>
                                </div>

                                <Modal isOpen={modal} toggle={toggle} key={arrayInObject[0].id} >
                                    <ModalHeader>
                                        <p>Matching !</p>
                                    </ModalHeader>
                                    <ModalBody>
                                        <div className="neoworkerCard-matching">
                                            <p>{y + 1}</p>
                                            <div className="firstrow-card-neoworker">
                                                <p className='neoworkerCard-p'>{arrayInObject[0].firstname} {arrayInObject[0].lastname}</p>

                                            </div>
                                            <div className="secondrow-card-neoworker">
                                                <p>Métier : {arrayInObject[0].title}</p>

                                            </div>
                                            <div className="thirdrow-card-neoworker">
                                                <p>Téléphone : {arrayInObject[0].tel}</p>
                                                <Link to={`/admin/neoworker/${arrayInObject[0].id}`}><Button className='button-card'>Voir</Button></Link>

                                            </div>
                                            <div className="fourthrow-card-neoworker">
                                                <p>Email : {arrayInObject[0].email}</p>
                                                <Link to={`/admin/neoworker/editer/${arrayInObject[0].id}`}><Button className='button-card'>Modifier</Button></Link>
                                            </div>
                                            <div className='fifthrow-card-neoworker'>
                                                <p>Statut : {arrayInObject[0].status === 0 ? <span className="orange-status">Disponible</span> : arrayInObject[0].status === 1 ? <span className="orange-status"> Partiellement disponible</span> : arrayInObject[0].status === 2 ? <span className="orange-status">Non disponible</span> : <span className="orange-status">Ignoré</span>}</p>
                                            </div>
                                        </div>
                                        <p>avec ...</p>
                                        <div className="modal-body-div">
                                            <div className='missions-cards-matching'>
                                                <div className='firstrow-card'>
                                                    <p className='titleofmission'>{dataMission.nom_mission}</p>
                                                    <p className='dateofmission'>du {dataMission.date_debut} au {dataMission.date_fin}</p>
                                                </div>
                                                <div className='secondrow-card'>
                                                    <p>Entreprise : {dataMission.nom_entreprise}</p>
                                                    <Link to={`/seeMission/${dataMission.id}`}><Button className='button-card'>Voir</Button></Link>
                                                </div>
                                                <div className='thirdrow-card'>
                                                    <p>Telephone : {dataMission.tel}</p>
                                                    <Link to={`/updateMission/${dataMission.id}`}><Button className='button-card'>Modifier</Button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={toggle}>Valider</Button>{' '}
                                        <Button color="secondary" onClick={toggle}>Annuler</Button>
                                    </ModalFooter>
                                </Modal>

                            </div>
                    )
                    }
                </div>
                <div className="right-mission-div">
                    <p className="column-title">Mission concerné</p>
                    <div className='missions-cards-matching'>
                        <div className='firstrow-card'>
                            <p className='titleofmission'>{dataMission.nom_mission}</p>
                            <p className='dateofmission'>du {dataMission.date_debut} au {dataMission.date_fin}</p>
                        </div>
                        <div className='secondrow-card'>
                            <p>Entreprise : {dataMission.nom_entreprise}</p>
                            <Link to={`/seeMission/${dataMission.id}`}><Button className='button-card'>Voir</Button></Link>
                        </div>
                        <div className='thirdrow-card'>
                            <p>Telephone : {dataMission.tel}</p>
                            <Link to={`/updateMission/${dataMission.id}`}><Button className='button-card'>Modifier</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MatchingPage;