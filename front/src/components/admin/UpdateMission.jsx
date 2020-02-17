import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios'
import profilPic from '../../img/anais.jpg'
import './CommonDesign.css'

const UpdateMission = (props) => {

    const [modalNote, setModalNote] = useState(false);

    const toggleNote = () => setModalNote(!modalNote)

    const params = props.match.params
    const [updateMission, setUpdateMission] = useState({

        nom_mission: "",
        nom_entreprise: "",
        email: "",
        note: "",
        nb_j_par_mois: "",
        budget: 0,
        date_debut: '2019-01-01',
        date_fin: '2019-01-01',
        frequence: '',
        status: 0,
        address: "",
        mobilite: 0,
        km_max: 0,
        siret: 0,
        tel: '',
        cp: '',
        pref_lieu_de_travail: 0,
        disponibilite: 0,

        assistance_suivi_comptable: false,
        relation_accountant: false,
        customer_recovery: false,
        payroll_preparation: false,
        assembly_approval_file: false,
        referencing_training_organization: false,
        use_business_software: false,
        internal_procedure: false,
        database: false,
        gestion_achat: false,
        administrative_file_management: false,
        management_assistantship: false,
        secretariat_and_maintenance_agenda: false,
        filing_documents: false,
        commercial_strategy_and_sales_pitch: false,
        management_of_commercial_activity: false,
        prospecting_outbound_sales: false,
        gestion_achat2: false,
        response_to_pulic_and_private_tenders: false,
        sales_administration: false,
        stock_management: false,
        business_data_crm: false,
        order_data_entry: false,
        quote_management: false,
        billing: false,
        claims_management: false,
        marketing_strategy_and_operational_monitoring: false,
        marketing_study: false,
        implementation_of_inbound_marketing_strategy: false,
        outbound_marketing: false,
        communication_strategy: false,
        outsourced_project_manager: false,
        creation_and_graphics: false,
        ux_design: false,
        ui_design_computer_graphics: false,
        redaction_design: false,
        seo_optimization: false,
        website_creation: false,
        community_management: false,
        press_relation: false,
        event: false,
        partnership_distribution_network_and_business_contribution: false,
        translation_work: false,
        administrative_and_financial_management: false,
        financing_grant_application: false,
        management_control: false,
        dashboard_and_financial_management: false,
        business_pland_and_provisional_budget: false,
        transfer_aid_and_buyout_of_business: false,
        outsourced_information_system_management: false,
        schema_directeur_si: false,
        functional_architecture: false,
        infra_reseau: false,
        outsourced_hr_department: false,
        plannings_management: false,
        payroll_tracking: false,
        establishment_of_contracts_end_of_contracts: false,
        suivi_mutuelle_medecine_du_travail: false,
        conflict_management: false,
        assembly_and_monitoring_litigation_files: false,
        harmonization_of_contracts: false,
        RGPD_compliation: false,
        harmonization_salary_scales: false,
        provisional_management_of_jobs_and_skill: false,
        recruitment_and_integration: false,
        suivi_des_grands_comptes: false,
        additional_sales: false,
        measure_of_customers_satisfaction: false,
        after_sales_service: false,

        excel: 0,
        powerpoint: 0,
        microsoft_365: 0,
        word: 0,
        crm_hubspot: 0,
        crm_salesforce: 0,
        crm_pipedrive: 0,
        crm: 0,
        suite_adobe: 0,
        illustrator: 0,
        in_design: 0,
        photoshop: 0,
        marketing_fb: 0,
        google_adwards: 0,
        insta: 0,
        reseaux_sociaux: 0,
        keynote: 0,
        pages: 0,
        gsuite_google: 0,
        numbers: 0,
        erp_sap: 0,
        ciel_gestion: 0,
        cegid: 0,
        sage_gestion_commercial: 0,
        sage_comptabilite: 0,
        quadra: 0,
        reso_pb: 0,
        confiance: 0,
        empathie: 0,
        intelligence_emo: 0,
        communication: 0,
        gestion_temps: 0,
        gestion_stress: 0,
        creativite: 0,
        esprit_entre: 0,
        audace: 0,
        vision_visu: 0,
        motivation: 0,
        presence: 0,
        sens_collectif: 0,
        curiosite: 0,
        sens_effort: 0,
        sport: "",
        autres_softskill: "",

        francais: 0,
        anglais: 0,
        italien: 0,
        chinois: 0,
        russe: 0,
        arabe: 0,
        allemand: 0,
        espagnol: 0,
        autres_langue: ""
    })

    /* quand on clic sur une étoile, elle prend la valeur du clic, si on reclic, elle revient à 0 */
    const onStarClick = (nextValue, name) => {
        if (updateMission[name] === nextValue) {
            setUpdateMission({ ...updateMission, [name]: null })
        } else {
            setUpdateMission({ ...updateMission, [name]: nextValue });
        }
    }

    useEffect(() => { getDataMission() }, [])

    const getDataMission = async () => {
        await axios.get(`http://localhost:5000/mission/${params.id}`)
            .then(res => setUpdateMission(res.data))
            .catch((err) => console.log(err))
    }

    const updateDataMission = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:5000/mission/${params.id}`, updateMission)
            .catch((err) => console.log(err))
            .then(x => {
                props.history.push('/admin/missions')
            }
            )
    }

    return (
        <div className="admin-div">
            <div className='profil-card'>
                <p className='name-card'> Anais</p>
                <img className='pic-card' src={profilPic} alt='profil pic' />
            </div>
            <h1 className='admin-h1'>Modification d'une mission <span className='textModif'>:</span></h1>
            <div className='body'>
                <Form onSubmit={(e) => updateDataMission(e)}>
                    <div className='champs-mission'>
                        <div className="champs-mission-leftside">
                            <FormGroup className="form-group-flex">
                                <Label className="label-flex"> Intitulé de la mission <span className='textModif'>:</span></Label>
                                <Input
                                    className="admin-input-nom_mission"
                                    name="nom_mission"
                                    required
                                    value={updateMission.nom_mission}
                                    type="text"
                                    onChange={(e) => { setUpdateMission({ ...updateMission, nom_mission: e.target.value }) }} />
                            </FormGroup>

                            <FormGroup className="form-group-flex">
                                <Label className="label-flex"> Nom de l'entreprise <span className='textModif'>:</span></Label>
                                <Input
                                    className="admin-input-nom_entreprise"
                                    name="nom_entreprise"
                                    value={updateMission.nom_entreprise}
                                    type="text"
                                    onChange={(e) => { setUpdateMission({ ...updateMission, nom_entreprise: e.target.value }) }} />
                            </FormGroup>
                            <FormGroup className="form-group-flex">
                                <Label className="label-flex"> Email <span className='textModif'>:</span></Label>
                                <Input name="email"
                                    className="admin-input-email"
                                    required
                                    value={updateMission.email}
                                    type="email"
                                    onChange={(e) => { setUpdateMission({ ...updateMission, email: e.target.value }) }} />
                            </FormGroup>
                            <FormGroup className="form-group-flex">
                                <Label className="label-flex"> Téléphone <span className='textModif'>:</span></Label>
                                <Input
                                    className="admin-input-tel"
                                    name="tel"
                                    value={updateMission.tel}
                                    type="tel"
                                    onChange={(e) => { setUpdateMission({ ...updateMission, tel: e.target.value }) }} />
                            </FormGroup>
                            <FormGroup className="form-group-flex">
                                <Label className="label-flex"> Adresse <span className='textModif'>:</span></Label>
                                <Input
                                    className="admin-input-address"
                                    name="address"
                                    value={updateMission.address}
                                    type="text"
                                    onChange={(e) => { setUpdateMission({ ...updateMission, address: e.target.value }) }} />
                            </FormGroup>
                            <FormGroup className="form-group-flex">
                                <Label className="label-flex"> Code postal <span className='textModif'>:</span></Label>
                                <Input
                                    className="admin-input-cp"
                                    name="cp"
                                    value={updateMission.cp}
                                    type="number"
                                    maxLength={5}
                                    onChange={(e) => { setUpdateMission({ ...updateMission, cp: e.target.value }) }} />
                            </FormGroup>
                            <FormGroup className="form-group-flex">
                                <Label className="label-flex"> Date de début de la mission<span className='textModif'>:</span></Label>
                                <Input className="admin-input-date_debut"
                                    name="date_debut"
                                    value={updateMission.date_debut}
                                    type="date"
                                    onChange={(e) => { setUpdateMission({ ...updateMission, date_debut: e.target.value }) }} />
                            </FormGroup>
                            <FormGroup className="form-group-flex">
                                <Label className="label-flex"> Date de fin de la mission <span className='textModif'>:</span></Label>
                                <Input className="admin-input-date_fin"
                                    name="date_fin"
                                    value={updateMission.date_fin}
                                    type="date"
                                    onChange={(e) => { setUpdateMission({ ...updateMission, date_fin: e.target.value }) }} />
                            </FormGroup>
                        </div>
                        <div className="champs-mission-rightside">
                            <FormGroup className="form-group-flex">
                                <Label className="label-flex"> Nombre de jours (par mois) de travail<span className='textModif'>:</span></Label>
                                <Input
                                    className="admin-input-nb_j_par_mois"
                                    name="nb_j_par_mois"
                                    value={updateMission.nb_j_par_mois}
                                    type="number"
                                    onChange={(e) => { setUpdateMission({ ...updateMission, nb_j_par_mois: e.target.value }) }} />
                            </FormGroup>

                            <FormGroup className="form-group-flex">
                                <Label className="label-flex"> N° SIRET <span className='textModif'>:</span></Label>
                                <Input
                                    className="admin-input-siret"
                                    name="siret"
                                    value={updateMission.siret}
                                    type="number"
                                    onChange={(e) => { setUpdateMission({ ...updateMission, siret: e.target.value }) }} />
                            </FormGroup>
                            <FormGroup className="form-group-flex">
                                <Label className="label-flex"> Budget alloué (par mois)<span className='textModif'>:</span></Label>
                                <Input
                                    className="admin-input-budget"
                                    name="budget"
                                    value={updateMission.budget}
                                    type="number"
                                    onChange={(e) => { setUpdateMission({ ...updateMission, budget: e.target.value }) }} />
                            </FormGroup>
                            <FormGroup className="form-group-flex">
                                <Label className="label-flex">Préférence lieu de travail <span className='textModif'>:</span></Label>
                                <Input type="select"
                                    className="admin-input-pref_lieu_travail"
                                    name="pref_lieu_de_travail"
                                    value={updateMission.pref_lieu_de_travail}
                                    onChange={(e) => {
                                        setUpdateMission({
                                            ...updateMission,
                                            pref_lieu_de_travail: e.target.value === 'Présence en entreprise' ? 'Présence en entreprise' : e.target.value === 'Travail à distance' ? 'Travail à distance' : 'Peu importe'
                                        })
                                    }}>
                                    <option hidden={true}>-</option>
                                    <option>Présence en entreprise</option>
                                    <option>Travail à distance</option>
                                    <option>Peu importe</option>
                                </Input>
                            </FormGroup>
                            <FormGroup className="form-group-flex">
                                <Label className="label-flex">Profil <span className='textModif'>:</span></Label>
                                <Input className="admin-input-profil" type="select" name="type_profil" value={updateMission.type_profil}
                                    onChange={(e) => { setUpdateMission({ ...updateMission, type_profil: e.target.value === 'Regular' ? 'Regular' : 'Expert' }) }}>
                                    <option hidden={true}>-</option>
                                    <option>Regular</option>
                                    <option>Expert</option>
                                </Input>
                            </FormGroup>
                            <FormGroup className="form-group-flex">
                                <Label className="label-flex">Fréquence <span className='textModif'>:</span></Label>
                                <Input className="admin-input-frequence" type="select" name="frequence" value={updateMission.frequence}
                                    onChange={(e) => { setUpdateMission({ ...updateMission, frequence: e.target.value === 'Ponctuelle' ? 'Ponctuelle' : 'Récurrente' }) }}>
                                    <option hidden={true}>-</option>
                                    <option>Ponctuelle</option>
                                    <option>Récurrente</option>
                                </Input>
                            </FormGroup>
                            <FormGroup className="form-group-flex">
                                <Label className="label-flex">Mobilité <span className='textModif'>:</span></Label>
                                <Input className="admin-input-mobilite" type="select" name="mobilite" value={updateMission.mobilite}
                                    onChange={(e) => { setUpdateMission({ ...updateMission, mobilite: e.target.value === 'Non' ? 'Non' : 'Oui' }) }}>
                                    <option hidden={true} >-</option>
                                    <option>Oui</option>
                                    <option>Non</option>
                                </Input>
                            </FormGroup>
                        </div>
                    </div>
                    <h2 className='mission-title'>Outils</h2>
                    <div className='cards'>
                        <div className='mission-card'>
                            <p>Excel</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.excel}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'excel')} />
                        </div>
                        <div className='mission-card'>
                            <p>Powerpoint</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.powerpoint}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'powerpoint')} />
                        </div>
                        <div className='mission-card'>
                            <p>Microsoft 365</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.microsoft_365}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'microsoft_365')} />
                        </div>
                        <div className='mission-card'>
                            <p>Word</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.word}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'word')} />
                        </div>
                        <div className='mission-card'>
                            <p>CRM Hubspot</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.crm_hubspot}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'crm_hubspot')} />
                        </div>
                        <div className='mission-card'>
                            <p>CRM Salesforce</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.crm_salesforce}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'crm_salesforce')} />
                        </div>
                        <div className='mission-card'>
                            <p>CRM Pipedrive</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.crm_pipedrive}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'crm_pipedrive')} />
                        </div>
                        <div className='mission-card'>
                            <p>CRM </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.crm}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'crm')} />
                        </div>
                        <div className='mission-card'>
                            <p>Suite Adobe </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.suite_adobe}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'suite_adobe')} />
                        </div>
                        <div className='mission-card'>
                            <p>Illustrator </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.illustrator}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'illustrator')} />
                        </div>
                        <div className='mission-card'>
                            <p>In Design </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.in_design}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'in_design')} />
                        </div>
                        <div className='mission-card'>
                            <p>Photoshop </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.photoshop}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'photoshop')} />
                        </div>
                        <div className='mission-card'>
                            <p>Marketing FB </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.marketing_fb}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'marketing_fb')} />
                        </div>
                        <div className='mission-card'>
                            <p>Google adwards </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.google_adwards}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'google_adwards')} />
                        </div>
                        <div className='mission-card'>
                            <p>Instagram </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.insta}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'insta')} />
                        </div>
                        <div className='mission-card'>
                            <p>Reseaux sociaux </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.reseaux_sociaux}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'reseaux_sociaux')} />
                        </div>
                        <div className='mission-card'>
                            <p>Keynote </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.keynote}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'keynote')} />
                        </div>
                        <div className='mission-card'>
                            <p>Pages </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.pages}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'pages')} />
                        </div>
                        <div className='mission-card'>
                            <p>G Suite Google </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.gsuite_google}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'gsuite_google')} />
                        </div>
                        <div className='mission-card'>
                            <p>Numbers </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.numbers}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'numbers')} />
                        </div>
                        <div className='mission-card'>
                            <p>Erp sap </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.erp_sap}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'erp_sap')} />
                        </div>
                        <div className='mission-card'>
                            <p>Ciel Gestion </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.ciel_gestion}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'ciel_gestion')} />
                        </div>
                        <div className='mission-card'>
                            <p>Cegid </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.cegid}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'cegid')} />
                        </div>
                        <div className='mission-card'>
                            <p>Sage gestion commercial </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.sage_gestion_commercial}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'sage_gestion_commercial')} />
                        </div>
                        <div className='mission-card'>
                            <p>Sage comptabilité </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.sage_comptabilite}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'sage_comptabilite')} />
                        </div>
                        <div className='mission-card'>
                            <p>Quadra </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.quadra}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'quadra')} />
                        </div>
                    </div>
                    <h2 className='mission-title'>Soft Skills</h2>
                    <div className='cards'>
                        <div className='mission-card'>
                            <p>Résolution de problèmes</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.reso_pb}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'reso_pb')} />
                        </div>
                        <div className='mission-card'>
                            <p>Confiance</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.confiance}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'confiance')} />
                        </div>
                        <div className='mission-card'>
                            <p>Empathie</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.empathie}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'empathie')} />
                        </div>
                        <div className='mission-card'>
                            <p>Intelligence émotionnelle</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.intelligence_emo}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'intelligence_emo')} />
                        </div>
                        <div className='mission-card'>
                            <p>Communication </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.communication}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'communication')} />
                        </div>
                        <div className='mission-card'>
                            <p>Gestion du temps </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.gestion_temps}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'gestion_temps')} />
                        </div>
                        <div className='mission-card'>
                            <p>Gestion du stress </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.gestion_stress}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'gestion_stress')} />
                        </div>
                        <div className='mission-card'>
                            <p>Créativité</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.creativite}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'creativite')} />
                        </div>
                        <div className='mission-card'>
                            <p>Esprit d'entreprise</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.esprit_entre}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'esprit_entre')} />
                        </div>
                        <div className='mission-card'>
                            <p>Audace</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.audace}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'audace')} />
                        </div>
                        <div className='mission-card'>
                            <p>Vision, visualisation </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.vision_visu}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'vision_visu')} />
                        </div>
                        <div className='mission-card'>
                            <p>Motivation</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.motivation}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'motivation')} />
                        </div>
                        <div className='mission-card'>
                            <p>Présence</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.presence}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'presence')} />
                        </div>
                        <div className='mission-card'>
                            <p>Sens collectif</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.sens_collectif}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'sens_collectif')} />
                        </div>
                        <div className='mission-card'>
                            <p>Curiosité</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.curiosite}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'curiosite')} />
                        </div>
                        <div className='mission-card'>
                            <p>Sens de l'effort </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.sens_effort}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'sens_effort')} />
                        </div>
                        <div className='champ-libre'>
                            <p style={{ minWidth: '110px', padding: '5px 10px' }}>Autres skills </p>
                            <Input style={{ marginRight: '5px' }} type="textaera" name="text" value={updateMission.autres_softskill} onChange={(e) => setUpdateMission({ ...updateMission, autres_softskill: e.target.value })} />
                        </div>
                    </div>
                    <h2 className='mission-title'>Langues</h2>
                    <div className='cards'>
                        <div className='mission-card'>
                            <p>Français</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.francais}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'francais')} />
                        </div>
                        <div className='mission-card'>
                            <p>Anglais</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.anglais}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'anglais')} />
                        </div>
                        <div className='mission-card'>
                            <p>Espagnol</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.espagnol}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'espagnol')} />
                        </div>
                        <div className='mission-card'>
                            <p>Allemand</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.allemand}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'allemand')} />
                        </div>
                        <div className='mission-card'>
                            <p>Russe</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.russe}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'russe')} />
                        </div>
                        <div className='mission-card'>
                            <p>Italien</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.italien}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'italien')} />
                        </div>
                        <div className='mission-card'>
                            <p>Chinois</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.chinois}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'chinois')} />
                        </div>
                        <div className='mission-card'>
                            <p>Arabe</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.arabe}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'arabe')} />
                        </div>
                        <div className='mission-card'>
                            <p>Autres langues</p>
                            <Input style={{ marginRight: '5px' }} type="textaera" name="text" value={updateMission.autres_langue} onChange={(e) => setUpdateMission({ ...updateMission, autres_langue: e.target.value })} />
                        </div>
                    </div>

                    <h2 className='mission-title'>Famille de prestations</h2>
                    <div>
                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion administrative et comptable</p>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="Option 1" name="Option 1" onClick={() => setUpdateMission({ ...updateMission, assistance_suivi_comptable: document.getElementById('Option 1').checked === true ? true : false })} checked={updateMission.assistance_suivi_comptable === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 1">Assistance et suivi comptable (note de frais, suivi des règlements et de la trésorerie, ...)</label></div>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="Option 2" name="Option 2" onClick={() => setUpdateMission({ ...updateMission, relation_accountant: document.getElementById('Option 2').checked === true ? true : false })} checked={updateMission.relation_accountant === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 2">Relation avec le cabinet d'expertise comptable</label></div>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="Option 3" name="Option 3" onClick={() => setUpdateMission({ ...updateMission, customer_recovery: document.getElementById('Option 3').checked === true ? true : false })} checked={updateMission.customer_recovery === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 3">Relances clients</label></div>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="Option 4" name="Option 4" onClick={() => setUpdateMission({ ...updateMission, payroll_preparation: document.getElementById('Option 4').checked === true ? true : false })} checked={updateMission.payroll_preparation === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 4">Préparation des éléments de paie (Pointages, congés payés, arrêts maladie, primes, etc…)</label></div>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="Option 5" name="Option 5" onClick={() => setUpdateMission({ ...updateMission, assembly_approval_file: document.getElementById('Option 5').checked === true ? true : false })} checked={updateMission.assembly_approval_file === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 5">Montage de dossier d'agrément</label></div>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="Option 6" name="Option 6" onClick={() => setUpdateMission({ ...updateMission, referencing_training_organization: document.getElementById('Option 6').checked === true ? true : false })} checked={updateMission.referencing_training_organization === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 6">Référencement organismes de formations</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion opérationnelle</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 7" name="Option 7" onClick={() => setUpdateMission({ ...updateMission, use_business_software: document.getElementById('Option 7').checked === true ? true : false })} checked={updateMission.use_business_software === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 7">Mise en place, optimisation et formation à l'utilisation de logiciels métiers</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 8" name="Option 8" onClick={() => setUpdateMission({ ...updateMission, internal_procedure: document.getElementById('Option 8').checked === true ? true : false })} checked={updateMission.internal_procedure === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 8">Création et mise en place de procédures internes</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 9" name="Option 9" onClick={() => setUpdateMission({ ...updateMission, database: document.getElementById('Option 9').checked === true ? true : false })} checked={updateMission.database === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 9">Création et traitement de base de données</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 10" name="Option 10" onClick={() => setUpdateMission({ ...updateMission, gestion_achat: document.getElementById('Option 10').checked === true ? true : false })} checked={updateMission.gestion_achat === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 10">Intendance et gestion des achats</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 11" name="Option 11" onClick={() => setUpdateMission({ ...updateMission, administrative_file_management: document.getElementById('Option 11').checked === true ? true : false })} checked={updateMission.administrative_file_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 11">Suivi des dossiers administratifs</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 12" name="Option 12" onClick={() => setUpdateMission({ ...updateMission, management_assistantship: document.getElementById('Option 12').checked === true ? true : false })} checked={updateMission.management_assistantship === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 12">Assistanat de direction</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 13" name="Option 13" onClick={() => setUpdateMission({ ...updateMission, filing_documents: document.getElementById('Option 13').checked === true ? true : false })} checked={updateMission.filing_documents === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 13">Classement de documents</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 14" name="Option 14" onClick={() => setUpdateMission({ ...updateMission, secretariat_and_maintenance_agenda: document.getElementById('Option 14').checked === true ? true : false })} checked={updateMission.secretariat_and_maintenance_agenda === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 14">Secrétariat et tenue de l'agenda </label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion commerciale</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 15" name="Option 15" onClick={() => setUpdateMission({ ...updateMission, commercial_strategy_and_sales_pitch: document.getElementById('Option 15').checked === true ? true : false })} checked={updateMission.commercial_strategy_and_sales_pitch === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 15">Stratégie et argumentaire commercial</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 16" name="Option 16" onClick={() => setUpdateMission({ ...updateMission, management_of_commercial_activity: document.getElementById('Option 16').checked === true ? true : false })} checked={updateMission.management_of_commercial_activity === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 16">Création de tableaux de bord, de procédure et pilotage de l'activité commerciale</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 17" name="Option 17" onClick={() => setUpdateMission({ ...updateMission, prospecting_outbound_sales: document.getElementById('Option 17').checked === true ? true : false })} checked={updateMission.prospecting_outbound_sales === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 17">Prospection / Outbound sales</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 18" name="Option 18" onClick={() => setUpdateMission({ ...updateMission, gestion_achat2: document.getElementById('Option 18').checked === true ? true : false })} checked={updateMission.gestion_achat2 === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 18">Intendance et gestion des achats</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 19" name="Option 19" onClick={() => setUpdateMission({ ...updateMission, response_to_pulic_and_private_tenders: document.getElementById('Option 19').checked === true ? true : false })} checked={updateMission.response_to_pulic_and_private_tenders === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 19">Réponse aux appels d'offres publics et privés</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 20" name="Option 20" onClick={() => setUpdateMission({ ...updateMission, sales_administration: document.getElementById('Option 20').checked === true ? true : false })} checked={updateMission.sales_administration === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 20">Administration des ventes</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 21" name="Option 21" onClick={() => setUpdateMission({ ...updateMission, stock_management: document.getElementById('Option 21').checked === true ? true : false })} checked={updateMission.stock_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 21">Gestion des stocks</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 22" name="Option 22" onClick={() => setUpdateMission({ ...updateMission, business_data_crm: document.getElementById('Option 22').checked === true ? true : false })} checked={updateMission.business_data_crm === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 22">Saisie des données commerciales dans un CRM</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 23" name="Option 23" onClick={() => setUpdateMission({ ...updateMission, order_data_entry: document.getElementById('Option 23').checked === true ? true : false })} checked={updateMission.order_data_entry === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 23">Saisie des commandes</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 24" name="Option 24" onClick={() => setUpdateMission({ ...updateMission, quote_management: document.getElementById('Option 24').checked === true ? true : false })} checked={updateMission.quote_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 24">Gestion des devis</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 25" name="Option 25" onClick={() => setUpdateMission({ ...updateMission, billing: document.getElementById('Option 25').checked === true ? true : false })} checked={updateMission.billing === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 25">Facturation</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 26" name="Option 26" onClick={() => setUpdateMission({ ...updateMission, claims_management: document.getElementById('Option 26').checked === true ? true : false })} checked={updateMission.claims_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 26">Gestion des réclamations</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Marketing / Communication / Digital</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 27" name="Option 27" onClick={() => setUpdateMission({ ...updateMission, marketing_strategy_and_operational_monitoring: document.getElementById('Option 27').checked === true ? true : false })} checked={updateMission.marketing_strategy_and_operational_monitoring === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 27">Stratégie marketing et suivi opérationnel</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 28" name="Option 28" onClick={() => setUpdateMission({ ...updateMission, marketing_study: document.getElementById('Option 28').checked === true ? true : false })} checked={updateMission.marketing_study === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 28">Réalisation d'études de marché </label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 29" name="Option 29" onClick={() => setUpdateMission({ ...updateMission, implementation_of_inbound_marketing_strategy: document.getElementById('Option 29').checked === true ? true : false })} checked={updateMission.implementation_of_inbound_marketing_strategy === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 29">Mise en œuvre d'une stratégie d'inbound marketing</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 30" name="Option 30" onClick={() => setUpdateMission({ ...updateMission, outbound_marketing: document.getElementById('Option 30').checked === true ? true : false })} checked={updateMission.outbound_marketing === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 30">Outbound marketing</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 31" name="Option 31" onClick={() => setUpdateMission({ ...updateMission, communication_strategy: document.getElementById('Option 31').checked === true ? true : false })} checked={updateMission.communication_strategy === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 31">Stratégie de communication</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 32" name="Option 32" onClick={() => setUpdateMission({ ...updateMission, outsourced_project_manager: document.getElementById('Option 32').checked === true ? true : false })} checked={updateMission.outsourced_project_manager === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 32">Chef de projet externalisé</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 33" name="Option 33" onClick={() => setUpdateMission({ ...updateMission, creation_and_graphics: document.getElementById('Option 33').checked === true ? true : false })} checked={updateMission.creation_and_graphics === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 33">Création et graphisme</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 34" name="Option 34" onClick={() => setUpdateMission({ ...updateMission, ux_design: document.getElementById('Option 34').checked === true ? true : false })} checked={updateMission.ux_design === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 34">UX Design</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 35" name="Option 35" onClick={() => setUpdateMission({ ...updateMission, ui_design_computer_graphics: document.getElementById('Option 35').checked === true ? true : false })} checked={updateMission.ui_design_computer_graphics === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 35">UI Design - infographisme</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 36" name="Option 36" onClick={() => setUpdateMission({ ...updateMission, redaction_design: document.getElementById('Option 36').checked === true ? true : false })} checked={updateMission.redaction_design === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 36">Conception rédaction</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 37" name="Option 37" onClick={() => setUpdateMission({ ...updateMission, community_management: document.getElementById('Option 37').checked === true ? true : false })} checked={updateMission.community_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 37">Community management</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 38" name="Option 38" onClick={() => setUpdateMission({ ...updateMission, seo_optimization: document.getElementById('Option 38').checked === true ? true : false })} checked={updateMission.seo_optimization === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 38">Optimisation SEO</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 39" name="Option 39" onClick={() => setUpdateMission({ ...updateMission, website_creation: document.getElementById('Option 39').checked === true ? true : false })} checked={updateMission.website_creation === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 39">Création de site web</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 40" name="Option 40" onClick={() => setUpdateMission({ ...updateMission, press_relation: document.getElementById('Option 40').checked === true ? true : false })} checked={updateMission.press_relation === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 40">Relation presse</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 41" name="Option 41" onClick={() => setUpdateMission({ ...updateMission, event: document.getElementById('Option 41').checked === true ? true : false })} checked={updateMission.event === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 41">Evènementiel</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 42" name="Option 42" onClick={() => setUpdateMission({ ...updateMission, partnership_distribution_network_and_business_contribution: document.getElementById('Option 42').checked === true ? true : false })} checked={updateMission.partnership_distribution_network_and_business_contribution === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 42">Partenariats, montage de réseaux de distribution, apporteurs d'affaire</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 43" name="Option 43" onClick={() => setUpdateMission({ ...updateMission, translation_work: document.getElementById('Option 43').checked === true ? true : false })} checked={updateMission.translation_work === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 43">Travaux de traduction</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion Financière / Contrôle de Gestion</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 44" name="Option 44" onClick={() => setUpdateMission({ ...updateMission, administrative_and_financial_management: document.getElementById('Option 44').checked === true ? true : false })} checked={updateMission.administrative_and_financial_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 44">Direction administrative et financière externalisée</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 45" name="Option 45" onClick={() => setUpdateMission({ ...updateMission, financing_grant_application: document.getElementById('Option 45').checked === true ? true : false })} checked={updateMission.financing_grant_application === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 45">Montage de dossier de financement / subvention</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 46" name="Option 46" onClick={() => setUpdateMission({ ...updateMission, management_control: document.getElementById('Option 46').checked === true ? true : false })} checked={updateMission.management_control === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 46">Contrôle de gestion</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 47" name="Option 47" onClick={() => setUpdateMission({ ...updateMission, dashboard_and_financial_management: document.getElementById('Option 47').checked === true ? true : false })} checked={updateMission.dashboard_and_financial_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 47">Tableau de bord et pilotage financier</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 48" name="Option 48" onClick={() => setUpdateMission({ ...updateMission, business_pland_and_provisional_budget: document.getElementById('Option 48').checked === true ? true : false })} checked={updateMission.business_pland_and_provisional_budget === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 48">Création de business plan et budget prévisionnel</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 49" name="Option 49" onClick={() => setUpdateMission({ ...updateMission, transfer_aid_and_buyout_of_business: document.getElementById('Option 49').checked === true ? true : false })} checked={updateMission.transfer_aid_and_buyout_of_business === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 49">Aide à la cession / rachat d'activités</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">DSI</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 50" name="Option 50" onClick={() => setUpdateMission({ ...updateMission, outsourced_information_system_management: document.getElementById('Option 50').checked === true ? true : false })} checked={updateMission.outsourced_information_system_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 50">Direction des Systèmes d'informations externalisée</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 51" name="Option 51" onClick={() => setUpdateMission({ ...updateMission, schema_directeur_si: document.getElementById('Option 51').checked === true ? true : false })} checked={updateMission.schema_directeur_si === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 51">Schéma directeur SI</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 52" name="Option 52" onClick={() => setUpdateMission({ ...updateMission, functional_architecture: document.getElementById('Option 52').checked === true ? true : false })} checked={updateMission.functional_architecture === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 52">Architecture fonctionnelle / applicative</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 53" name="Option 53" onClick={() => setUpdateMission({ ...updateMission, infra_reseau: document.getElementById('Option 53').checked === true ? true : false })} checked={updateMission.infra_reseau === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 53">Infra / réseau</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion Ressources Humaines / Juridique</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 54" name="Option 54" onClick={() => setUpdateMission({ ...updateMission, outsourced_hr_department: document.getElementById('Option 54').checked === true ? true : false })} checked={updateMission.outsourced_hr_department === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 54">Direction des Ressources Humaines externalisée</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 55" name="Option 55" onClick={() => setUpdateMission({ ...updateMission, plannings_management: document.getElementById('Option 55').checked === true ? true : false })} checked={updateMission.plannings_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 55">Gestion des plannings</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 56" name="Option 56" onClick={() => setUpdateMission({ ...updateMission, payroll_tracking: document.getElementById('Option 56').checked === true ? true : false })} checked={updateMission.payroll_tracking === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 56">Suivi des éléments de paie (absences, CP, RTT..)</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 57" name="Option 57" onClick={() => setUpdateMission({ ...updateMission, establishment_of_contracts_end_of_contracts: document.getElementById('Option 57').checked === true ? true : false })} checked={updateMission.establishment_of_contracts_end_of_contracts === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 57">Etablissement des contrats / éléments de fin de contrats</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 58" name="Option 58" onClick={() => setUpdateMission({ ...updateMission, suivi_mutuelle_medecine_du_travail: document.getElementById('Option 58').checked === true ? true : false })} checked={updateMission.suivi_mutuelle_medecine_du_travail === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 58">Suivi mutuelle et medecine du travail</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 59" name="Option 59" onClick={() => setUpdateMission({ ...updateMission, conflict_management: document.getElementById('Option 59').checked === true ? true : false })} checked={updateMission.conflict_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 59">Gestion des conflits</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 60" name="Option 60" onClick={() => setUpdateMission({ ...updateMission, assembly_and_monitoring_litigation_files: document.getElementById('Option 60').checked === true ? true : false })} checked={updateMission.assembly_and_monitoring_litigation_files === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 60">Montage et suivi des dossiers de contentieux</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 61" name="Option 61" onClick={() => setUpdateMission({ ...updateMission, harmonization_of_contracts: document.getElementById('Option 61').checked === true ? true : false })} checked={updateMission.harmonization_of_contracts === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 61">Harmonisation des contrats</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 62" name="Option 62" onClick={() => setUpdateMission({ ...updateMission, RGPD_compliation: document.getElementById('Option 62').checked === true ? true : false })} checked={updateMission.RGPD_compliation === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 62">Mise en conformité RGPD</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 63" name="Option 63" onClick={() => setUpdateMission({ ...updateMission, harmonization_salary_scales: document.getElementById('Option 63').checked === true ? true : false })} checked={updateMission.harmonization_salary_scales === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 63">Harmonisation des grilles salaires</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 64" name="Option 64" onClick={() => setUpdateMission({ ...updateMission, provisional_management_of_jobs_and_skill: document.getElementById('Option 64').checked === true ? true : false })} checked={updateMission.provisional_management_of_jobs_and_skill === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 64">Gestion prévisionnelle des emplois et des compétences</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 65" name="Option 65" onClick={() => setUpdateMission({ ...updateMission, recruitment_and_integration: document.getElementById('Option 65').checked === true ? true : false })} checked={updateMission.recruitment_and_integration === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 65">Recrutement et intégration</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion de la relation clients</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 66" name="Option 66" onClick={() => setUpdateMission({ ...updateMission, suivi_des_grands_comptes: document.getElementById('Option 66').checked === true ? true : false })} checked={updateMission.suivi_des_grands_comptes === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 66">Suivi grands comptes</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 67" name="Option 67" onClick={() => setUpdateMission({ ...updateMission, additional_sales: document.getElementById('Option 67').checked === true ? true : false })} checked={updateMission.additional_sales === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 67">Ventes additionnelles</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 68" name="Option 68" onClick={() => setUpdateMission({ ...updateMission, measure_of_customers_satisfaction: document.getElementById('Option 68').checked === true ? true : false })} checked={updateMission.measure_of_customers_satisfaction === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 68">Mesure de la satisfaction clients</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 69" name="Option 69" onClick={() => setUpdateMission({ ...updateMission, after_sales_service: document.getElementById('Option 69').checked === true ? true : false })} checked={updateMission.after_sales_service === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 69">Service après ventes</label></div>
                        </div>
                    </div>
                    <Button className="bottom-btn" type="submit">Valider les modifications</Button>
                
                    
                    <Modal isOpen={modalNote} toggle={toggleNote}>
                        <ModalHeader toggle={toggleNote}>Notes</ModalHeader>
                        <ModalBody>
                            <FormGroup>
                                <Input className="admin-input-note" type="textarea" name="note" id="note"
                                   value={updateMission.note}
                                   onChange={(e) => { setUpdateMission({ ...updateMission, note: e.target.value }) }} />
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button className="cancel-modal-button" onClick={toggleNote}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                
                </Form>
                
                <Button className="note-button" onClick={toggleNote}> Modifier des notes </Button>
            </div>
        </div >
    )
}

export default UpdateMission;