import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Input, Button, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
import profilPic from '../../img/anais.jpg'
import './CommonDesign.css'
import axios from 'axios'

const SeeNeoworker = (props) => {

    //recup les props du parent 
    const params = props.match.params

    const [modalNote, setModalNote] = useState(false);

    const toggleNote = () => setModalNote(!modalNote)

    const showPassword = () => {
        const x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    //hooks pour get mission comme son nom l'indique 
    const [neoworker, setNeoworker] = useState([])

    //hooks pour refresh le getDataMission si
    useEffect(() => { getNeoworker() }, [])

    const getNeoworker = () => {
        axios.get(`http://localhost:5000/freelancer/${params.id}`)
            .then(res => setNeoworker(res.data))
            .catch((err) => console.log(err))
    }

    console.log(neoworker.users)

    return (

        <div className="admin-div">
            <div className='profil-card'>
                <p className='name-card'> Anais</p>
                <img className='pic-card' src={profilPic} alt='profil picture' />
            </div>
            <h1 className='admin-h1'> Voir le profil Neoworker <span className='textModif'>:</span></h1>
            <div className='body'>
                <Form className="form-flex">
                    <div className='champs-mission'>
                        <div className="champs-mission-leftside">

                            <FormGroup className="form-group-flex">
                                <Label className="label-flex"> Intitulé du métier <span className='textModif'>:</span></Label>
                                <Input disabled
                                    className="admin-input-metier"
                                    type="text" id="title" name="Métier"
                                    value={neoworker.title}
                                />
                            </FormGroup>
                            <FormGroup className="form-group-flex">
                                <Label className="label-flex"> Prénom <span className='textModif'>:</span></Label>
                                <Input disabled
                                    className="admin-input-firstname"
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    value={neoworker.firstname}
                                />
                            </FormGroup>
                            <FormGroup className="form-group-flex">
                                <Label className="label-flex"> Nom <span className='textModif'>:</span></Label>
                                <Input disabled
                                    className="admin-input-lastname"
                                    type="text" id="lastname" name="lastname"
                                    value={neoworker.lastname}
                                />
                            </FormGroup>
                            <FormGroup className="form-group-flex">
                                <Label className="label-flex"> Email <span className='textModif'>:</span></Label>
                                <Input disabled
                                    className="admin-input-email"
                                    type="text" id="email" name="email"
                                    value={neoworker.email}
                                />
                            </FormGroup>
                            <FormGroup className="form-group-flex">
                                <Label className="label-flex"> Téléphone <span className='textModif'>:</span></Label>
                                <Input disabled
                                    className="admin-input-tel"
                                    type="text" id="tel" name="tel"
                                    value={neoworker.tel}
                                />
                            </FormGroup>
                            <FormGroup className="form-group-flex">
                                <Label className="label-flex"> Adresse <span className='textModif'>:</span></Label>
                                <Input disabled
                                    className="admin-input-address"

                                    type="text" id="address" name="address"
                                    value={neoworker.address}
                                />
                            </FormGroup>
                            <FormGroup className="form-group-flex">
                                <Label className="label-flex"> Code postal <span className='textModif'>:</span></Label>
                                <Input disabled
                                    className="admin-input-cp"

                                    type="text" id="cp" name="cp"
                                    value={neoworker.cp}
                                />
                            </FormGroup>

                        </div>

                        <div className="champs-mission-rightside">
                            <FormGroup className="form-group-flex">
                                <Label className="label-flex"> Taux journalier minimum <span className='textModif'>:</span></Label>
                                <Input disabled className="admin-input-tj_min"
                                    type="number" id="tjm_min" name="tjm_min"
                                    value={neoworker.tjm_min}
                                />
                            </FormGroup>
                            <FormGroup className="form-group-flex">
                                <Label className="label-flex"> Taux journalier maximum <span className='textModif'>:</span></Label>
                                <Input disabled className="admin-input-tj_max"
                                    type="number"
                                    id="tjm_max" name="tjm_max"
                                    value={neoworker.tjm_max}
                                />
                            </FormGroup>
                            <div className='selector-mission'>
                                <FormGroup className="form-group-flex">
                                    <Label className="label-flex">Disponibilité (nb jours/mois) <span className='textModif'>:</span></Label>
                                    <Input disabled className="admin-input-dispo"
                                        value={neoworker.disponibilite} />
                                </FormGroup>
                                <FormGroup className="form-group-flex">

                                    <Label className="label-flex">Préférence lieu de travail <span className='textModif'>:</span></Label>
                                    <Input disabled type="select"
                                        className="admin-input-pref_lieu_travail"
                                        id="pref_lieu_de_travail"
                                        name="pref_lieu_de_travail"
                                        value={neoworker.pref_lieu_de_travail}
                                    >
                                        <option hidden="true">-</option>
                                        <option>Présence en entreprise</option>
                                        <option>Travail à distance</option>
                                        <option>Peu importe</option>
                                    </Input>
                                </FormGroup>

                                <FormGroup className="form-group-flex">
                                    <Label className="label-flex">Mobilité <span className='textModif'>:</span></Label>
                                    <Input disabled type="select" name="mobilite" id='mobilite'
                                        className="admin-input-mobilite"
                                        value={neoworker.mobilite}>
                                        <option hidden="true">-</option>
                                        <option>Oui</option>
                                        <option>Non</option>
                                    </Input>
                                </FormGroup>

                                <FormGroup className="form-group-flex">
                                    <Label className="label-flex">Km maximum <span className='textModif'>:</span></Label>
                                    <Input disabled type="select" name="km_max" id='km_max'
                                        value={neoworker.km_max}
                                        className="admin-input-km_max"
                                    >
                                        <option hidden="true">-</option>
                                        <option>10 km</option>
                                        <option>20 km</option>
                                        <option>30 km</option>
                                        <option>40 km</option>
                                        <option>50 km</option>
                                        <option>plus de 50 km ...</option>
                                    </Input>
                                </FormGroup>
                            </div>
                        </div>
                    </div>

                    <h2 className='mission-title'>Outils</h2>
                    <div className='cards'>
                        <div className='mission-card'>
                            <p>Excel</p>
                            <StarRatingComponent
                                starCount={3}
                                value={neoworker.excel}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Powerpoint</p>
                            <StarRatingComponent
                                starCount={3}
                                value={neoworker.powerpoint}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Microsoft 365</p>
                            <StarRatingComponent
                                starCount={3}
                                value={neoworker.microsoft_365}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Word</p>
                            <StarRatingComponent
                                starCount={3}
                                value={neoworker.word}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>CRM Hubspot</p>
                            <StarRatingComponent
                                starCount={3}
                                value={neoworker.crm_hubspot}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>CRM Salesforce</p>
                            <StarRatingComponent
                                starCount={3}
                                value={neoworker.crm_salesforce}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>CRM Pipedrive</p>
                            <StarRatingComponent
                                starCount={3}
                                value={neoworker.crm_pipedrive}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>CRM </p>
                            <StarRatingComponent
                                starCount={3}
                                value={neoworker.crm}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Suite Adobe </p>
                            <StarRatingComponent
                                starCount={3}
                                value={neoworker.suite_adobe}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Illustrator </p>
                            <StarRatingComponent
                                starCount={3}
                                value={neoworker.illustrator}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>In Design </p>
                            <StarRatingComponent
                                starCount={3}
                                value={neoworker.in_design}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Photoshop </p>
                            <StarRatingComponent
                                starCount={3}
                                value={neoworker.photoshop}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Marketing FB </p>
                            <StarRatingComponent
                                starCount={3}
                                value={neoworker.marketing_fb}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Google adwards </p>
                            <StarRatingComponent
                                starCount={3}
                                value={neoworker.google_adwards}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Instagram </p>
                            <StarRatingComponent
                                starCount={3}
                                value={neoworker.insta}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Reseaux sociaux </p>
                            <StarRatingComponent
                                starCount={3}
                                value={neoworker.reseaux_sociaux}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Keynote </p>
                            <StarRatingComponent
                                starCount={3}
                                value={neoworker.keynote}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Pages </p>
                            <StarRatingComponent
                                starCount={3}
                                value={neoworker.pages}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>G Suite Google </p>
                            <StarRatingComponent
                                starCount={3}
                                value={neoworker.gsuite_google}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Numbers </p>
                            <StarRatingComponent
                                starCount={3}
                                value={neoworker.numbers}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Erp sap </p>
                            <StarRatingComponent
                                starCount={3}
                                value={neoworker.erp_sap}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Ciel Gestion </p>
                            <StarRatingComponent
                                starCount={3}
                                value={neoworker.ciel_gestion}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Cegid </p>
                            <StarRatingComponent
                                starCount={3}
                                value={neoworker.cegid}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Sage gestion commercial </p>
                            <StarRatingComponent
                                starCount={3}
                                value={neoworker.sage_gestion_commercial}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Sage comptabilité </p>
                            <StarRatingComponent
                                starCount={3}
                                value={neoworker.sage_comptabilite}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Quadra </p>
                            <StarRatingComponent
                                starCount={3}
                                value={neoworker.quadra}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                    </div>
                    
                    <h2 className='mission-title'>Soft Skills</h2>
                    <div className='cards'>
                        <div className='mission-card'>
                            <p>Résolution de problèmes</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={neoworker.reso_pb}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Confiance</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={neoworker.confiance}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Empathie</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={neoworker.empathie}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Intelligence émotionnelle</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={neoworker.intelligence_emo}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Communication </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={neoworker.communication}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Gestion du temps </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={neoworker.gestion_temps}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Gestion du stress </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={neoworker.gestion_stress}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Créativité</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={neoworker.creativite}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Esprit d'entreprise</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={neoworker.esprit_entre}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Audace</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={neoworker.audace}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Vision, visualisation </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={neoworker.vision_visu}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Motivation</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={neoworker.motivation}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Présence</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={neoworker.presence}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Sens collectif</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={neoworker.sens_collectif}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Curiosité</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={neoworker.curiosite}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Sens de l'effort </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={neoworker.sens_effort}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Autres skills</p>
                            <Input disabled type="textaera" name="text" id="autres_skills" value={neoworker.autres_softskill} />
                        </div>
                    </div>
                    <h2 className='mission-title'>Langues</h2>
                    <div className='cards'>
                        <div className='mission-card'>
                            <p>Français</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={neoworker.francais}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Anglais</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={neoworker.anglais}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Espagnol</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={neoworker.espagnol}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Allemand</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={neoworker.allemand}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Russe</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={neoworker.russe}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Italien</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={neoworker.italien}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Chinois</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={neoworker.chinois}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Arabe</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={neoworker.arabe}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p style={{ width: '15rem', padding: '5px 10px' }}>Autres langues</p>
                            <Input disabled style={{ marginRight: '5px' }}
                                type="textaera"
                                name="text"
                                value={neoworker.autres_langue} />
                        </div>
                    </div>


                    <h2 className='mission-title'>Famille de prestations</h2>
                    <div>
                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion administrative et comptable</p>
                            <div className="checkbox-and-content">
                                <input disabled type="checkbox" className="checkbox" id="Option 1" name="Option 1" value={neoworker.assistance_suivi_comptable} checked={neoworker.assistance_suivi_comptable === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 1">Assistance et suivi comptable (note de frais, suivi des règlements et de la trésorerie, ...)</label></div>
                            <div className="checkbox-and-content">
                                <input disabled type="checkbox" className="checkbox" id="Option 2" name="Option 2" value={neoworker.relation_accountant} checked={neoworker.relation_accountant === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 2">Relation avec le cabinet d'expertise comptable</label></div>
                            <div className="checkbox-and-content">
                                <input disabled type="checkbox" className="checkbox" id="Option 3" name="Option 3" value={neoworker.customer_recovery} checked={neoworker.customer_recovery === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 3">Relances clients</label></div>
                            <div className="checkbox-and-content">
                                <input disabled type="checkbox" className="checkbox" id="Option 4" name="Option 4" value={neoworker.payroll_preparation} checked={neoworker.payroll_preparation === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 4">Préparation des éléments de paie (Pointages, congés payés, arrêts maladie, primes, etc…)</label></div>
                            <div className="checkbox-and-content">
                                <input disabled type="checkbox" className="checkbox" id="Option 5" name="Option 5" value={neoworker.assembly_approval_file} checked={neoworker.assembly_approval_file === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 5">Montage de dossier d'agrément</label></div>
                            <div className="checkbox-and-content">
                                <input disabled type="checkbox" className="checkbox" id="Option 6" name="Option 6" value={neoworker.referencing_training_organization} checked={neoworker.referencing_training_organization === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 6">Référencement organismes de formations</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion opérationnelle</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 7" name="Option 7" value={neoworker.use_business_software} checked={neoworker.use_business_software === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 7">Mise en place, optimisation et formation à l'utilisation de logiciels métiers</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 8" name="Option 8" value={neoworker.internal_procedure} checked={neoworker.internal_procedure === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 8">Création et mise en place de procédures internes</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 9" name="Option 9" value={neoworker.database} checked={neoworker.database === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 9">Création et traitement de base de données</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 10" name="Option 10" value={neoworker.gestion_achat} checked={neoworker.gestion_achat === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 10">Intendance et gestion des achats</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 11" name="Option 11" value={neoworker.administrative_file_management} checked={neoworker.administrative_file_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 11">Suivi des dossiers administratifs</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 12" name="Option 12" value={neoworker.management_assistantship} checked={neoworker.management_assistantship === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 12">Assistanat de direction</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 13" name="Option 13" value={neoworker.filing_documents} checked={neoworker.filing_documents === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 13">Classement de documents</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 14" name="Option 14" value={neoworker.secretariat_and_maintenance_agenda} checked={neoworker.secretariat_and_maintenance_agenda === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 14">Secrétariat et tenue de l'agenda </label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion commerciale</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 15" name="Option 15" value={neoworker.commercial_strategy_and_sales_pitch} checked={neoworker.commercial_strategy_and_sales_pitch === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 15">Stratégie et argumentaire commercial</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 16" name="Option 16" value={neoworker.management_of_commercial_activity} checked={neoworker.management_of_commercial_activity === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 16">Création de tableaux de bord, de procédure et pilotage de l'activité commerciale</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 17" name="Option 17" value={neoworker.prospecting_outbound_sales} checked={neoworker.prospecting_outbound_sales === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 17">Prospection / Outbound sales</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 18" name="Option 18" value={neoworker.gestion_achat2} checked={neoworker.gestion_achat2 === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 18">Intendance et gestion des achats</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 19" name="Option 19" value={neoworker.response_to_pulic_and_private_tenders} checked={neoworker.response_to_pulic_and_private_tenders === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 19">Réponse aux appels d'offres publics et privés</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 20" name="Option 20" value={neoworker.sales_administration} checked={neoworker.sales_administration === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 20">Administration des ventes</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 21" name="Option 21" value={neoworker.stock_management} checked={neoworker.stock_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 21">Gestion des stocks</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 22" name="Option 22" value={neoworker.business_data_crm} checked={neoworker.business_data_crm === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 22">Saisie des données commerciales dans un CRM</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 23" name="Option 23" value={neoworker.order_data_entry} checked={neoworker.order_data_entry === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 23">Saisie des commandes</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 24" name="Option 24" value={neoworker.quote_management} checked={neoworker.quote_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 24">Gestion des devis</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 25" name="Option 25" value={neoworker.billing} checked={neoworker.billing === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 25">Facturation</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 26" name="Option 26" value={neoworker.claims_management} checked={neoworker.claims_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 26">Gestion des réclamations</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Marketing / Communication / Digital</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 27" name="Option 27" value={neoworker.marketing_strategy_and_operational_monitoring} checked={neoworker.marketing_strategy_and_operational_monitoring === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 27">Stratégie marketing et suivi opérationnel</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 28" name="Option 28" value={neoworker.marketing_study} checked={neoworker.marketing_study === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 28">Réalisation d'études de marché </label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 29" name="Option 29" value={neoworker.implementation_of_inbound_marketing_strategy} checked={neoworker.implementation_of_inbound_marketing_strategy === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 29">Mise en œuvre d'une stratégie d'inbound marketing</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 30" name="Option 30" value={neoworker.outbound_marketing} checked={neoworker.outbound_marketing === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 30">Outbound marketing</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 31" name="Option 31" value={neoworker.commercial_strategy_and_sales_pitch} checked={neoworker.communication_strategy === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 31">Stratégie de communication</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 32" name="Option 32" value={neoworker.outsourced_project_manager} checked={neoworker.outsourced_project_manager === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 32">Chef de projet externalisé</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 33" name="Option 33" value={neoworker.creation_and_graphics} checked={neoworker.creation_and_graphics === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 33">Création et graphisme</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 34" name="Option 34" value={neoworker.ux_design} checked={neoworker.ux_design === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 34">UX Design</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 35" name="Option 35" value={neoworker.ui_design_computer_graphics} checked={neoworker.ui_design_computer_graphics === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 35">UI Design - infographisme</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 36" name="Option 36" value={neoworker.redaction_design} checked={neoworker.redaction_design === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 36">Conception rédaction</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 37" name="Option 37" value={neoworker.community_management} checked={neoworker.community_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 37">Community management</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 38" name="Option 38" value={neoworker.seo_optimization} checked={neoworker.seo_optimization === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 38">Optimisation SEO</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 39" name="Option 39" value={neoworker.website_creation} checked={neoworker.website_creation === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 39">Création de site web</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 40" name="Option 40" value={neoworker.press_relation} checked={neoworker.press_relation === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 40">Relation presse</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 41" name="Option 41" value={neoworker.event} checked={neoworker.event === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 41">Evènementiel</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 42" name="Option 42" value={neoworker.partnership_distribution_network_and_business_contribution} checked={neoworker.partnership_distribution_network_and_business_contribution === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 42">Partenariats, montage de réseaux de distribution, apporteurs d'affaire</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 43" name="Option 43" value={neoworker.translation_work} checked={neoworker.translation_work === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 43">Travaux de traduction</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion Financière / Contrôle de Gestion</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 44" name="Option 44" value={neoworker.administrative_and_financial_management} checked={neoworker.administrative_and_financial_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 44">Direction administrative et financière externalisée</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 45" name="Option 45" value={neoworker.financing_grant_application} checked={neoworker.financing_grant_application === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 45">Montage de dossier de financement / subvention</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 46" name="Option 46" value={neoworker.management_control} checked={neoworker.management_control === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 46">Contrôle de gestion</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 47" name="Option 47" value={neoworker.dashboard_and_financial_management} checked={neoworker.dashboard_and_financial_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 47">Tableau de bord et pilotage financier</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 48" name="Option 48" value={neoworker.business_pland_and_provisional_budget} checked={neoworker.business_pland_and_provisional_budget === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 48">Création de business plan et budget prévisionnel</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 49" name="Option 49" value={neoworker.transfer_aid_and_buyout_of_business} checked={neoworker.transfer_aid_and_buyout_of_business === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 49">Aide à la cession / rachat d'activités</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">DSI</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 50" name="Option 50" value={neoworker.outsourced_information_system_management} checked={neoworker.outsourced_information_system_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 50">Direction des Systèmes d'informations externalisée</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 51" name="Option 51" value={neoworker.schema_directeur_si} checked={neoworker.schema_directeur_si === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 51">Schéma directeur SI</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 52" name="Option 52" value={neoworker.functional_architecture} checked={neoworker.functional_architecture === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 52">Architecture fonctionnelle / applicative</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 53" name="Option 53" value={neoworker.infra_reseau} checked={neoworker.infra_reseau === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 53">Infra / réseau</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion Ressources Humaines / Juridique</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 54" name="Option 54" value={neoworker.outsourced_hr_department} checked={neoworker.outsourced_hr_department === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 54">Direction des Ressources Humaines externalisée</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 55" name="Option 55" value={neoworker.plannings_management} checked={neoworker.plannings_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 55">Gestion des plannings</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 56" name="Option 56" value={neoworker.payroll_tracking} checked={neoworker.payroll_tracking === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 56">Suivi des éléments de paie (absences, CP, RTT..)</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 57" name="Option 57" value={neoworker.establishment_of_contracts_end_of_contracts} checked={neoworker.establishment_of_contracts_end_of_contracts === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 57">Etablissement des contrats / éléments de fin de contrats</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 58" name="Option 58" value={neoworker.suivi_mutuelle_medecine_du_travail} checked={neoworker.suivi_mutuelle_medecine_du_travail === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 58">Suivi mutuelle et medecine du travail</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 59" name="Option 59" value={neoworker.conflict_management} checked={neoworker.conflict_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 59">Gestion des conflits</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 60" name="Option 60" value={neoworker.assembly_and_monitoring_litigation_files} checked={neoworker.assembly_and_monitoring_litigation_files === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 60">Montage et suivi des dossiers de contentieux</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 61" name="Option 61" value={neoworker.harmonization_of_contracts} checked={neoworker.harmonization_of_contracts === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 61">Harmonisation des contrats</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 62" name="Option 62" value={neoworker.RGPD_compliation} checked={neoworker.RGPD_compliation === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 62">Mise en conformité RGPD</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 63" name="Option 63" value={neoworker.harmonization_salary_scales} checked={neoworker.harmonization_salary_scales === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 63">Harmonisation des grilles salaires</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 64" name="Option 64" value={neoworker.provisional_management_of_jobs_and_skill} checked={neoworker.provisional_management_of_jobs_and_skill === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 64">Gestion prévisionnelle des emplois et des compétences</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 65" name="Option 65" value={neoworker.recruitment_and_integration} checked={neoworker.recruitment_and_integration === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 65">Recrutement et intégration</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion de la relation clients</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 66" name="Option 66" value={neoworker.suivi_des_grands_comptes} checked={neoworker.suivi_des_grands_comptes === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 66">Suivi grands comptes</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 67" name="Option 67" value={neoworker.additional_sales} checked={neoworker.additional_sales === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 67">Ventes additionnelles</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 68" name="Option 68" value={neoworker.measure_of_customers_satisfaction} checked={neoworker.measure_of_customers_satisfaction === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 68">Mesure de la satisfaction clients</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 69" name="Option 69" value={neoworker.after_sales_service} checked={neoworker.after_sales_service === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 69">Service après ventes</label></div>
                        </div>
                    </div>

                    {/*<h2 className='mission-title'>Visualiser le mot de passe du Neoworker</h2>

                    <FormGroup className="form-group-flex-password-create">
                        <Label className="label-flex"> Mot de passe <span className='textModif'>:</span></Label>
                        <Input
                            disabled
                            className="admin-create-input-password"
                            type="password"
                            id="password" name="password"
                            value={neoworker.password}
                        />
                        <div><input className="checkbox" type="checkbox" onClick={showPassword} />Montrer mot de passe</div>
    ²               </FormGroup>*/}

                    <Modal isOpen={modalNote} toggle={toggleNote}>
                        <ModalHeader toggle={toggleNote}>Notes</ModalHeader>
                        <ModalBody>
                            <FormGroup>
                                <Input className="admin-input-note" type="textarea" name="note" id="note"
                                    value={neoworker.note}
                                />
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button className="cancel-modal-button" onClick={toggleNote}>Cancel</Button>
                        </ModalFooter>
                    </Modal>

                </Form>

                <Button className="note-button" onClick={toggleNote}> Voir les notes </Button>
            </div>
        </div>

    )
}

export default SeeNeoworker