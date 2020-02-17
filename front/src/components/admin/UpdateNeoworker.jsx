import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Input, Button, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios'
import profilPic from '../../img/anais.jpg'
import './CommonDesign.css'

const ChangeNeoworker = (props) => {

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

    // Get Neoworker data
    const [updateNeoworker, setUpdateNeoworker] = useState([])

    const getData = async (id) => {
        await axios.get(`http://localhost:5000/freelancer/${params.id}`)
            .then(res => setUpdateNeoworker(res.data))
            .catch((err) => console.log(err))
    }

    useEffect(() => { getData() }, [])

    //function to update a neoworker
    const updateDataNeoworker = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:5000/freelancer/${params.id}`, updateNeoworker)
            .catch((err) => console.log(err))
            .then(x => {
                props.history.push('/admin/neoworker/liste')
            }
            )
    }

    useEffect(() => { }, [])

    const onStarClick = (nextValue, name) => {
        if (updateNeoworker[name] === nextValue) {
            setUpdateNeoworker({ ...updateNeoworker, [name]: null })
        } else {
            setUpdateNeoworker({ ...updateNeoworker, [name]: nextValue })
        }
    }

      // 8 fonctions pour checker et pusher toute les box dans chacune des familles de prestation

      const checkAll1 = () => {

        let tableau = []
        tableau = document.getElementsByClassName('checkbox1')

        if (document.getElementById('checkboxAll1').checked) {
            for (let i = 0; i < tableau.length; i++) {
                tableau[i].checked = true
            }
        } else {
            for (let i = 0; i < tableau.length; i++) {
                tableau[i].checked = false
            }
        }

            setUpdateNeoworker(
            {
                ...updateNeoworker,
                assistance_suivi_comptable: document.getElementById('Option 1').checked === true ? true : false,
                relation_accountant: document.getElementById('Option 2').checked === true ? true : false,
                customer_recovery: document.getElementById('Option 3').checked === true ? true : false,
                payroll_preparation: document.getElementById('Option 4').checked === true ? true : false,
                assembly_approval_file: document.getElementById('Option 5').checked === true ? true : false,
                referencing_training_organization: document.getElementById('Option 6').checked === true ? true : false
            })

    }

    const checkAll2 = () => {

        let tableau = []
        tableau = document.getElementsByClassName('checkbox2')

        if (document.getElementById('checkboxAll2').checked) {
            for (let i = 0; i < tableau.length; i++) {
                tableau[i].checked = true
            }
        } else {
            for (let i = 0; i < tableau.length; i++) {
                tableau[i].checked = false
            }
        }

            setUpdateNeoworker(
            {
                ...updateNeoworker,
                use_business_software: document.getElementById('Option 7').checked === true ? true : false,
                internal_procedure: document.getElementById('Option 8').checked === true ? true : false,
                database: document.getElementById('Option 9').checked === true ? true : false,
                gestion_achat: document.getElementById('Option 10').checked === true ? true : false,
                administrative_file_management: document.getElementById('Option 11').checked === true ? true : false,
                referencing_training_organization: document.getElementById('Option 6').checked === true ? true : false,
                management_assistantship: document.getElementById('Option 12').checked === true ? true : false,
                filing_documents: document.getElementById('Option 13').checked === true ? true : false,
                secretariat_and_maintenance_agenda: document.getElementById('Option 14').checked === true ? true : false
            })

    }

    const checkAll3 = () => {

        let tableau = []
        tableau = document.getElementsByClassName('checkbox3')

        if (document.getElementById('checkboxAll3').checked) {
            for (let i = 0; i < tableau.length; i++) {
                tableau[i].checked = true
            }
        } else {
            for (let i = 0; i < tableau.length; i++) {
                tableau[i].checked = false
            }
        }

            setUpdateNeoworker(
            {
                ...updateNeoworker,
                commercial_strategy_and_sales_pitch: document.getElementById('Option 15').checked === true ? true : false,
                management_of_commercial_activity: document.getElementById('Option 16').checked === true ? true : false,
                prospecting_outbound_sales: document.getElementById('Option 17').checked === true ? true : false,
                gestion_achat2: document.getElementById('Option 18').checked === true ? true : false,
                response_to_pulic_and_private_tenders: document.getElementById('Option 19').checked === true ? true : false,
                sales_administration: document.getElementById('Option 20').checked === true ? true : false,
                stock_management: document.getElementById('Option 21').checked === true ? true : false,
                business_data_crm: document.getElementById('Option 22').checked === true ? true : false,
                order_data_entry: document.getElementById('Option 23').checked === true ? true : false,
                quote_management: document.getElementById('Option 24').checked === true ? true : false,
                billing: document.getElementById('Option 25').checked === true ? true : false,
                claims_management: document.getElementById('Option 26').checked === true ? true : false
            })

    }

    const checkAll4 = () => {

        let tableau = []
        tableau = document.getElementsByClassName('checkbox4')

        if (document.getElementById('checkboxAll4').checked) {
            for (let i = 0; i < tableau.length; i++) {
                tableau[i].checked = true
            }
        } else {
            for (let i = 0; i < tableau.length; i++) {
                tableau[i].checked = false
            }
        }

            setUpdateNeoworker(
            {
                ...updateNeoworker,
                marketing_strategy_and_operational_monitoring: document.getElementById('Option 27').checked === true ? true : false,
                marketing_study: document.getElementById('Option 28').checked === true ? true : false,
                implementation_of_inbound_marketing_strategy: document.getElementById('Option 29').checked === true ? true : false,
                outbound_marketing: document.getElementById('Option 30').checked === true ? true : false,
                communication_strategy: document.getElementById('Option 31').checked === true ? true : false,
                outsourced_project_manager: document.getElementById('Option 32').checked === true ? true : false,
                creation_and_graphics: document.getElementById('Option 33').checked === true ? true : false,
                ux_design: document.getElementById('Option 34').checked === true ? true : false,
                ui_design_computer_graphics: document.getElementById('Option 35').checked === true ? true : false,
                redaction_design: document.getElementById('Option 36').checked === true ? true : false,
                community_management: document.getElementById('Option 37').checked === true ? true : false,
                seo_optimization: document.getElementById('Option 38').checked === true ? true : false,
                website_creation: document.getElementById('Option 39').checked === true ? true : false,
                press_relation: document.getElementById('Option 40').checked === true ? true : false,
                event: document.getElementById('Option 41').checked === true ? true : false,
                partnership_distribution_network_and_business_contribution: document.getElementById('Option 42').checked === true ? true : false,
                translation_work: document.getElementById('Option 43').checked === true ? true : false

            })

    }

    const checkAll5 = () => {

        let tableau = []
        tableau = document.getElementsByClassName('checkbox5')

        if (document.getElementById('checkboxAll5').checked) {
            for (let i = 0; i < tableau.length; i++) {
                tableau[i].checked = true
            }
        } else {
            for (let i = 0; i < tableau.length; i++) {
                tableau[i].checked = false
            }
        }

            setUpdateNeoworker(
            {
                ...updateNeoworker,
                administrative_and_financial_management: document.getElementById('Option 44').checked === true ? true : false,
                financing_grant_application: document.getElementById('Option 45').checked === true ? true : false,
                management_control: document.getElementById('Option 46').checked === true ? true : false,
                dashboard_and_financial_management: document.getElementById('Option 47').checked === true ? true : false,
                business_pland_and_provisional_budget: document.getElementById('Option 48').checked === true ? true : false,
                transfer_aid_and_buyout_of_business: document.getElementById('Option 49').checked === true ? true : false
            })

    }

    const checkAll6 = () => {

        let tableau = []
        tableau = document.getElementsByClassName('checkbox6')

        if (document.getElementById('checkboxAll6').checked) {
            for (let i = 0; i < tableau.length; i++) {
                tableau[i].checked = true
            }
        } else {
            for (let i = 0; i < tableau.length; i++) {
                tableau[i].checked = false
            }
        }

            setUpdateNeoworker(
            {
                ...updateNeoworker,
                outsourced_information_system_management: document.getElementById('Option 50').checked === true ? true : false,
                schema_directeur_si: document.getElementById('Option 51').checked === true ? true : false,
                functional_architecture: document.getElementById('Option 52').checked === true ? true : false,
                infra_reseau: document.getElementById('Option 53').checked === true ? true : false
            })

    }

    const checkAll7 = () => {

        let tableau = []
        tableau = document.getElementsByClassName('checkbox7')

        if (document.getElementById('checkboxAll7').checked) {
            for (let i = 0; i < tableau.length; i++) {
                tableau[i].checked = true
            }
        } else {
            for (let i = 0; i < tableau.length; i++) {
                tableau[i].checked = false
            }
        }

            setUpdateNeoworker(
            {
                ...updateNeoworker,
                outsourced_hr_department: document.getElementById('Option 54').checked === true ? true : false,
                plannings_management: document.getElementById('Option 55').checked === true ? true : false,
                payroll_tracking: document.getElementById('Option 56').checked === true ? true : false,
                establishment_of_contracts_end_of_contracts: document.getElementById('Option 57').checked === true ? true : false,
                suivi_mutuelle_medecine_du_travail: document.getElementById('Option 58').checked === true ? true : false,
                conflict_management: document.getElementById('Option 59').checked === true ? true : false,
                assembly_and_monitoring_litigation_files: document.getElementById('Option 60').checked === true ? true : false,
                harmonization_of_contracts: document.getElementById('Option 61').checked === true ? true : false,
                RGPD_compliation: document.getElementById('Option 62').checked === true ? true : false,
                harmonization_salary_scales: document.getElementById('Option 63').checked === true ? true : false,
                provisional_management_of_jobs_and_skill: document.getElementById('Option 64').checked === true ? true : false,
                recruitment_and_integration: document.getElementById('Option 65').checked === true ? true : false
            })

    }

    const checkAll8 = () => {

        let tableau = []
        tableau = document.getElementsByClassName('checkbox8')

        if (document.getElementById('checkboxAll8').checked) {
            for (let i = 0; i < tableau.length; i++) {
                tableau[i].checked = true
            }
        } else {
            for (let i = 0; i < tableau.length; i++) {
                tableau[i].checked = false
            }
        }

            setUpdateNeoworker(
            {
                ...updateNeoworker,
                suivi_des_grands_comptes: document.getElementById('Option 66').checked === true ? true : false,
                additional_sales: document.getElementById('Option 67').checked === true ? true : false,
                measure_of_customers_satisfaction: document.getElementById('Option 68').checked === true ? true : false,
                after_sales_service: document.getElementById('Option 69').checked === true ? true : false
            })

    }

    return (
        <div className='admin-div'>
            <div className='profil-card'>
                <p className='name-card'> Anais</p>
                <img className='pic-card' src={profilPic} alt='profil pic' />
            </div>
            <h1 className='admin-h1'>Modifier un Neoworker <span className='textModif'>:</span></h1>
            <div className='body'>
                <Form onSubmit={(e) => updateDataNeoworker(e)} className="form-flex">
                    <div className='champs-mission'>
                        <div className="champs-mission-leftside">
                            <FormGroup className="form-group-flex">
                                <Label className="label-flex"> Métier <span className='textModif'>:</span></Label>
                                <Input className="admin-input-metier"
                                    type="text" id="title" name="Métier"
                                    value={updateNeoworker.title}
                                    onChange={(e) => { setUpdateNeoworker({ ...updateNeoworker, title: e.target.value }) }} />
                            </FormGroup>
                            <FormGroup className="form-group-flex">
                                <Label className="label-flex"> Prénom <span className='textModif'>:</span></Label>
                                <Input
                                    className="admin-input-firstname"
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    required
                                    value={updateNeoworker.firstname}
                                    onChange={(e) => { setUpdateNeoworker({ ...updateNeoworker, firstname: e.target.value }) }} />
                            </FormGroup>
                            <FormGroup className="form-group-flex">
                                <Label className="label-flex"> Nom <span className='textModif'>:</span></Label>
                                <Input
                                    className="admin-input-lastname"
                                    required
                                    type="text" id="lastname" name="lastname"
                                    value={updateNeoworker.lastname}
                                    onChange={(e) => { setUpdateNeoworker({ ...updateNeoworker, lastname: e.target.value }) }} />
                            </FormGroup>
                            <FormGroup className="form-group-flex">
                                <Label className="label-flex"> Adresse <span className='textModif'>:</span></Label>
                                <Input
                                    className="admin-input-address"

                                    type="text" id="address" name="address"
                                    value={updateNeoworker.address}
                                    onChange={(e) => { setUpdateNeoworker({ ...updateNeoworker, address: e.target.value }) }} />
                            </FormGroup>
                            <FormGroup className="form-group-flex">
                                <Label className="label-flex"> Code Postal <span className='textModif'>:</span></Label>
                                <Input
                                    className="admin-input-cp"

                                    type="number" id="cp" name="cp"
                                    value={updateNeoworker.cp}
                                    onChange={(e) => { setUpdateNeoworker({ ...updateNeoworker, cp: e.target.value }) }}
                                    maxlength="5" />
                            </FormGroup>
                            <FormGroup className="form-group-flex">
                                <Label className="label-flex"> Email <span className='textModif'>:</span></Label>
                                <Input
                                    className="admin-input-email"
                                    required
                                    type="email" id="email" name="email"
                                    value={updateNeoworker.email}
                                    onChange={(e) => { setUpdateNeoworker({ ...updateNeoworker, email: e.target.value }) }} />
                            </FormGroup>
                            <FormGroup className="form-group-flex">
                                <Label className="label-flex"> Téléphone <span className='textModif'>:</span></Label>
                                <Input
                                    className="admin-input-tel"
                                    type="number" id="tel" name="tel"
                                    value={updateNeoworker.tel}
                                    onChange={(e) => { setUpdateNeoworker({ ...updateNeoworker, tel: e.target.value }) }} />
                            </FormGroup>
                        </div>
                        <div className="champs-mission-rightside">
                            <FormGroup className="form-group-flex">
                                <Label className="label-flex"> Taux journalier minimum <span className='textModif'>:</span></Label>
                                <Input className="admin-input-tj_min"
                                    type="number" id="tjm_min" name="tjm_min"
                                    value={updateNeoworker.tjm_min}
                                    onChange={(e) => { setUpdateNeoworker({ ...updateNeoworker, tjm_min: e.target.value }) }} />
                            </FormGroup>
                            <FormGroup className="form-group-flex">
                                <Label className="label-flex"> Taux journalier maximum <span className='textModif'>:</span></Label>
                                <Input className="admin-input-tj_max"
                                    type="number"
                                    id="tjm_max" name="tjm_max"
                                    value={updateNeoworker.tjm_max}
                                    onChange={(e) => { setUpdateNeoworker({ ...updateNeoworker, tjm_max: e.target.value }) }} />
                            </FormGroup>
                            <FormGroup className="form-group-flex">
                                <Label className="label-flex"> Disponibilité (nombre jours/mois) <span className='textModif'>:</span></Label>
                                <Input className="admin-input-dispo"
                                    type="number"
                                    id="disponibilite" name="disponibilite"
                                    value={updateNeoworker.disponibilite} onChange={(e) => { setUpdateNeoworker({ ...updateNeoworker, disponibilite: e.target.value }) }} />
                            </FormGroup>

                            <FormGroup className="form-group-flex">
                                <Label className="label-flex">Préférence lieu de travail <span className='textModif'>:</span></Label>
                                <Input className="admin-input-pref_lieu_travail" type="select"
                                    id="pref_lieu_de_travail"
                                    name="pref_lieu_de_travail"
                                    value={updateNeoworker.pref_lieu_de_travail}
                                    onChange={(e) => {
                                        setUpdateNeoworker({
                                            ...updateNeoworker,
                                            pref_lieu_de_travail: e.target.value === 'Présence en entreprise' ? 'Présence en entreprise' : e.target.value === 'Travail à distance' ? 'Travail à distance' : 'Peu importe'
                                        })
                                    }}>
                                    <option hidden="true">-</option>
                                    <option>Présence en entreprise</option>
                                    <option>Travail à distance</option>
                                    <option>Peu importe</option>
                                </Input>
                            </FormGroup>

                            <FormGroup className="form-group-flex">
                                <Label className="label-flex">Mobilité <span className='textModif'>:</span></Label>
                                <Input type="select" name="mobilite" id='mobilite'
                                    className="admin-input-mobilite"
                                    value={updateNeoworker.mobilite}
                                    onChange={(e) => { setUpdateNeoworker({ ...updateNeoworker, mobilite: e.target.value === 'Non' ? 'Non' : 'Oui' }) }}>
                                    <option hidden="true">-</option>
                                    <option>Oui</option>
                                    <option>Non</option>
                                </Input>
                            </FormGroup>

                            <FormGroup className="form-group-flex">
                                <Label className="label-flex">Km maximum <span className='textModif'>:</span></Label>
                                <Input type="select" name="km_max" id='km_max'
                                    className="admin-input-km_max"
                                    value={updateNeoworker.km_max}
                                    onChange={(e) => { setUpdateNeoworker({ ...updateNeoworker, km_max: e.target.value === '10 km' ? '10 km' : e.target.value === '20 km' ? '20 km' : e.target.value === '30 km' ? '30 km' : e.target.value === '40 km' ? '40 km' : e.target.value === '50 km' ? '50 km' : e.target.value === 'plus de 50 km ...' ? 'plus de 50 km ...' : ''}) }}>
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

                    <h2 className='mission-title'>Outils</h2>
                    <div className='cards'>
                        <div className='mission-card'>
                            <p>Excel</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.excel}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'excel')} />
                        </div>
                        <div className='mission-card'>
                            <p>Powerpoint</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.powerpoint}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'powerpoint')} />
                        </div>
                        <div className='mission-card'>
                            <p>Microsoft 365</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.microsoft_365}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'microsoft_365')} />
                        </div>
                        <div className='mission-card'>
                            <p>Word</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.word}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'word')} />
                        </div>
                        <div className='mission-card'>
                            <p>CRM Hubspot</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.crm_hubspot}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'crm_hubspot')} />
                        </div>
                        <div className='mission-card'>
                            <p>CRM Salesforce</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.crm_salesforce}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'crm_salesforce')} />
                        </div>
                        <div className='mission-card'>
                            <p>CRM Pipedrive</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.crm_pipedrive}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'crm_pipedrive')} />
                        </div>
                        <div className='mission-card'>
                            <p>CRM </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.crm}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'crm')} />
                        </div>
                        <div className='mission-card'>
                            <p>Suite Adobe </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.suite_adobe}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'suite_adobe')} />
                        </div>
                        <div className='mission-card'>
                            <p>Illustrator </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.illustrator}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'illustrator')} />
                        </div>
                        <div className='mission-card'>
                            <p>In Design </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.in_design}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'in_design')} />
                        </div>
                        <div className='mission-card'>
                            <p>Photoshop </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.photoshop}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'photoshop')} />
                        </div>
                        <div className='mission-card'>
                            <p>Marketing FB </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.marketing_fb}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'marketing_fb')} />
                        </div>
                        <div className='mission-card'>
                            <p>Google adwards </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.google_adwards}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'google_adwards')} />
                        </div>
                        <div className='mission-card'>
                            <p>Instagram </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.insta}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'insta')} />
                        </div>
                        <div className='mission-card'>
                            <p>Reseaux sociaux </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.reseaux_sociaux}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'reseaux_sociaux')} />
                        </div>
                        <div className='mission-card'>
                            <p>Keynote </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.keynote}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'keynote')} />
                        </div>
                        <div className='mission-card'>
                            <p>Pages </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.pages}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'pages')} />
                        </div>
                        <div className='mission-card'>
                            <p>G Suite Google </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.gsuite_google}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'gsuite_google')} />
                        </div>
                        <div className='mission-card'>
                            <p>Numbers </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.numbers}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'numbers')} />
                        </div>
                        <div className='mission-card'>
                            <p>Erp sap </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.erp_sap}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'erp_sap')} />
                        </div>
                        <div className='mission-card'>
                            <p>Ciel Gestion </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.ciel_gestion}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'ciel_gestion')} />
                        </div>
                        <div className='mission-card'>
                            <p>Cegid </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.cegid}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'cegid')} />
                        </div>
                        <div className='mission-card'>
                            <p>Sage gestion commercial </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.sage_gestion_commercial}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'sage_gestion_commercial')} />
                        </div>
                        <div className='mission-card'>
                            <p>Sage comptabilité </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.sage_comptabilite}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'sage_comptabilite')} />
                        </div>
                        <div className='mission-card'>
                            <p>Quadra </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.quadra}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'quadra')} />
                        </div>
                    </div>
                    <h2 className='mission-title'>Soft Skills</h2>
                    <div className='cards'>
                        <div className='mission-card'>
                            <p>Résolution de problèmes</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.reso_pb}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'reso_pb')} />
                        </div>
                        <div className='mission-card'>
                            <p>Confiance</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.confiance}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'confiance')} />
                        </div>
                        <div className='mission-card'>
                            <p>Empathie</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.empathie}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'empathie')} />
                        </div>
                        <div className='mission-card'>
                            <p>Intelligence émotionnelle</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.intelligence_emo}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'intelligence_emo')} />
                        </div>
                        <div className='mission-card'>
                            <p>Communication </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.communication}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'communication')} />
                        </div>
                        <div className='mission-card'>
                            <p>Gestion du temps </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.gestion_temps}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'gestion_temps')} />
                        </div>
                        <div className='mission-card'>
                            <p>Gestion du stress </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.gestion_stress}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'gestion_stress')} />
                        </div>
                        <div className='mission-card'>
                            <p>Créativité</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.creativite}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'creativite')} />
                        </div>
                        <div className='mission-card'>
                            <p>Esprit d'entreprise</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.esprit_entre}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'esprit_entre')} />
                        </div>
                        <div className='mission-card'>
                            <p>Audace</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.audace}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'audace')} />
                        </div>
                        <div className='mission-card'>
                            <p>Vision, visualisation </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.vision_visu}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'vision_visu')} />
                        </div>
                        <div className='mission-card'>
                            <p>Motivation</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.motivation}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'motivation')} />
                        </div>
                        <div className='mission-card'>
                            <p>Présence</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.presence}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'presence')} />
                        </div>
                        <div className='mission-card'>
                            <p>Sens collectif</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.sens_collectif}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'sens_collectif')} />
                        </div>
                        <div className='mission-card'>
                            <p>Curiosité</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.curiosite}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'curiosite')} />
                        </div>
                        <div className='mission-card'>
                            <p>Sens de l'effort </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.sens_effort}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'sens_effort')} />
                        </div>
                        <div className='mission-card'>
                            <p>Autres skills</p>
                            <Input type="textaera" name="text" id="autres_skills" value={updateNeoworker.autres_softskill} onChange={(e) => setUpdateNeoworker({ ...updateNeoworker, autres_softskill: e.target.value })} />
                        </div>
                    </div>
                    <h2 className='mission-title'>Langues</h2>
                    <div className='cards'>
                        <div className='mission-card'>
                            <p>Français</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.francais}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'francais')} />
                        </div>
                        <div className='mission-card'>
                            <p>Anglais</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.anglais}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'anglais')} />
                        </div>
                        <div className='mission-card'>
                            <p>Espagnol</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.espagnol}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'espagnol')} />
                        </div>
                        <div className='mission-card'>
                            <p>Allemand</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.allemand}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'allemand')} />
                        </div>
                        <div className='mission-card'>
                            <p>Russe</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.russe}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'russe')} />
                        </div>
                        <div className='mission-card'>
                            <p>Italien</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.italien}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'italien')} />
                        </div>
                        <div className='mission-card'>
                            <p>Chinois</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.chinois}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'chinois')} />
                        </div>
                        <div className='mission-card'>
                            <p>Arabe</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={updateNeoworker.arabe}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'arabe')} />
                        </div>
                        <div className='mission-card'>
                            <p>Autres langues</p>
                            <Input type="textaera" name="text" id="langues" value={updateNeoworker.autres_langue} onChange={(e) => setUpdateNeoworker({ ...updateNeoworker, autres_langue: e.target.value })} />
                        </div>
                    </div>


                    <h2 className='mission-title'>Famille de prestations</h2>
                    <div>
                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion administrative et comptable</p>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="checkboxAll1" onClick={checkAll1}></input>
                                <label className="label-prestation"><span className="italic-span">... cocher toutes les prestations ...</span></label>
                            </div>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox1" id="Option 1" name="Option 1" onClick={() => setUpdateNeoworker({ ...updateNeoworker, assistance_suivi_comptable: document.getElementById('Option 1').checked === true ? true : false })} checked={updateNeoworker.assistance_suivi_comptable === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 1">Assistance et suivi comptable (note de frais, suivi des règlements et de la trésorerie, ...)</label></div>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox1" id="Option 2" name="Option 2" onClick={() => setUpdateNeoworker({ ...updateNeoworker, relation_accountant: document.getElementById('Option 2').checked === true ? true : false })} checked={updateNeoworker.relation_accountant === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 2">Relation avec le cabinet d'expertise comptable</label></div>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox1" id="Option 3" name="Option 3" onClick={() => setUpdateNeoworker({ ...updateNeoworker, customer_recovery: document.getElementById('Option 3').checked === true ? true : false })} checked={updateNeoworker.customer_recovery === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 3">Relances clients</label></div>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox1" id="Option 4" name="Option 4" onClick={() => setUpdateNeoworker({ ...updateNeoworker, payroll_preparation: document.getElementById('Option 4').checked === true ? true : false })} checked={updateNeoworker.payroll_preparation === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 4">Préparation des éléments de paie (Pointages, congés payés, arrêts maladie, primes, etc…)</label></div>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox1" id="Option 5" name="Option 5" onClick={() => setUpdateNeoworker({ ...updateNeoworker, assembly_approval_file: document.getElementById('Option 5').checked === true ? true : false })} checked={updateNeoworker.assembly_approval_file === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 5">Montage de dossier d'agrément</label></div>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox1" id="Option 6" name="Option 6" onClick={() => setUpdateNeoworker({ ...updateNeoworker, referencing_training_organization: document.getElementById('Option 6').checked === true ? true : false })} checked={updateNeoworker.referencing_training_organization === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 6">Référencement organismes de formations</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion opérationnelle</p>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="checkboxAll2" onClick={checkAll2}></input>
                                <label className="label-prestation"><span className="italic-span">... cocher toutes les prestations ...</span></label>
                            </div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox2" id="Option 7" name="Option 7" onClick={() => setUpdateNeoworker({ ...updateNeoworker, use_business_software: document.getElementById('Option 7').checked === true ? true : false })} checked={updateNeoworker.use_business_software === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 7">Mise en place, optimisation et formation à l'utilisation de logiciels métiers</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox2" id="Option 8" name="Option 8" onClick={() => setUpdateNeoworker({ ...updateNeoworker, internal_procedure: document.getElementById('Option 8').checked === true ? true : false })} checked={updateNeoworker.internal_procedure === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 8">Création et mise en place de procédures internes</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox2" id="Option 9" name="Option 9" onClick={() => setUpdateNeoworker({ ...updateNeoworker, database: document.getElementById('Option 9').checked === true ? true : false })} checked={updateNeoworker.database === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 9">Création et traitement de base de données</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox2" id="Option 10" name="Option 10" onClick={() => setUpdateNeoworker({ ...updateNeoworker, gestion_achat: document.getElementById('Option 10').checked === true ? true : false })} checked={updateNeoworker.gestion_achat === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 10">Intendance et gestion des achats</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox2" id="Option 11" name="Option 11" onClick={() => setUpdateNeoworker({ ...updateNeoworker, administrative_file_management: document.getElementById('Option 11').checked === true ? true : false })} checked={updateNeoworker.administrative_file_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 11">Suivi des dossiers administratifs</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox2" id="Option 12" name="Option 12" onClick={() => setUpdateNeoworker({ ...updateNeoworker, management_assistantship: document.getElementById('Option 12').checked === true ? true : false })} checked={updateNeoworker.management_assistantship === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 12">Assistanat de direction</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox2" id="Option 13" name="Option 13" onClick={() => setUpdateNeoworker({ ...updateNeoworker, filing_documents: document.getElementById('Option 13').checked === true ? true : false })} checked={updateNeoworker.filing_documents === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 13">Classement de documents</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox2" id="Option 14" name="Option 14" onClick={() => setUpdateNeoworker({ ...updateNeoworker, secretariat_and_maintenance_agenda: document.getElementById('Option 14').checked === true ? true : false })} checked={updateNeoworker.secretariat_and_maintenance_agenda === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 14">Secrétariat et tenue de l'agenda </label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion commerciale</p>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="checkboxAll3" onClick={checkAll3}></input>
                                <label className="label-prestation"><span className="italic-span">... cocher toutes les prestations ...</span></label>
                            </div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox3" id="Option 15" name="Option 15" onClick={() => setUpdateNeoworker({ ...updateNeoworker, commercial_strategy_and_sales_pitch: document.getElementById('Option 15').checked === true ? true : false })} checked={updateNeoworker.commercial_strategy_and_sales_pitch === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 15">Stratégie et argumentaire commercial</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox3" id="Option 16" name="Option 16" onClick={() => setUpdateNeoworker({ ...updateNeoworker, management_of_commercial_activity: document.getElementById('Option 16').checked === true ? true : false })} checked={updateNeoworker.management_of_commercial_activity === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 16">Création de tableaux de bord, de procédure et pilotage de l'activité commerciale</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox3" id="Option 17" name="Option 17" onClick={() => setUpdateNeoworker({ ...updateNeoworker, prospecting_outbound_sales: document.getElementById('Option 17').checked === true ? true : false })} checked={updateNeoworker.prospecting_outbound_sales === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 17">Prospection / Outbound sales</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox3" id="Option 18" name="Option 18" onClick={() => setUpdateNeoworker({ ...updateNeoworker, gestion_achat2: document.getElementById('Option 18').checked === true ? true : false })} checked={updateNeoworker.gestion_achat2 === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 18">Intendance et gestion des achats</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox3" id="Option 19" name="Option 19" onClick={() => setUpdateNeoworker({ ...updateNeoworker, response_to_pulic_and_private_tenders: document.getElementById('Option 19').checked === true ? true : false })} checked={updateNeoworker.response_to_pulic_and_private_tenders === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 19">Réponse aux appels d'offres publics et privés</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox3" id="Option 20" name="Option 20" onClick={() => setUpdateNeoworker({ ...updateNeoworker, sales_administration: document.getElementById('Option 20').checked === true ? true : false })} checked={updateNeoworker.sales_administration === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 20">Administration des ventes</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox3" id="Option 21" name="Option 21" onClick={() => setUpdateNeoworker({ ...updateNeoworker, stock_management: document.getElementById('Option 21').checked === true ? true : false })} checked={updateNeoworker.stock_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 21">Gestion des stocks</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox3" id="Option 22" name="Option 22" onClick={() => setUpdateNeoworker({ ...updateNeoworker, business_data_crm: document.getElementById('Option 22').checked === true ? true : false })} checked={updateNeoworker.business_data_crm === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 22">Saisie des données commerciales dans un CRM</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox3" id="Option 23" name="Option 23" onClick={() => setUpdateNeoworker({ ...updateNeoworker, order_data_entry: document.getElementById('Option 23').checked === true ? true : false })} checked={updateNeoworker.order_data_entry === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 23">Saisie des commandes</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox3" id="Option 24" name="Option 24" onClick={() => setUpdateNeoworker({ ...updateNeoworker, quote_management: document.getElementById('Option 24').checked === true ? true : false })} checked={updateNeoworker.quote_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 24">Gestion des devis</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox3" id="Option 25" name="Option 25" onClick={() => setUpdateNeoworker({ ...updateNeoworker, billing: document.getElementById('Option 25').checked === true ? true : false })} checked={updateNeoworker.billing === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 25">Facturation</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox3" id="Option 26" name="Option 26" onClick={() => setUpdateNeoworker({ ...updateNeoworker, claims_management: document.getElementById('Option 26').checked === true ? true : false })} checked={updateNeoworker.claims_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 26">Gestion des réclamations</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Marketing / Communication / Digital</p>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="checkboxAll4" onClick={checkAll4}></input>
                                <label className="label-prestation"><span className="italic-span">... cocher toutes les prestations ...</span></label>
                            </div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox4" id="Option 27" name="Option 27" onClick={() => setUpdateNeoworker({ ...updateNeoworker, marketing_strategy_and_operational_monitoring: document.getElementById('Option 27').checked === true ? true : false })} checked={updateNeoworker.marketing_strategy_and_operational_monitoring === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 27">Stratégie marketing et suivi opérationnel</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox4" id="Option 28" name="Option 28" onClick={() => setUpdateNeoworker({ ...updateNeoworker, marketing_study: document.getElementById('Option 28').checked === true ? true : false })} checked={updateNeoworker.marketing_study === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 28">Réalisation d'études de marché </label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox4" id="Option 29" name="Option 29" onClick={() => setUpdateNeoworker({ ...updateNeoworker, implementation_of_inbound_marketing_strategy: document.getElementById('Option 29').checked === true ? true : false })} checked={updateNeoworker.implementation_of_inbound_marketing_strategy === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 29">Mise en œuvre d'une stratégie d'inbound marketing</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox4" id="Option 30" name="Option 30" onClick={() => setUpdateNeoworker({ ...updateNeoworker, outbound_marketing: document.getElementById('Option 30').checked === true ? true : false })} checked={updateNeoworker.outbound_marketing === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 30">Outbound marketing</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox4" id="Option 31" name="Option 31" onClick={() => setUpdateNeoworker({ ...updateNeoworker, communication_strategy: document.getElementById('Option 31').checked === true ? true : false })} checked={updateNeoworker.communication_strategy === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 31">Stratégie de communication</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox4" id="Option 32" name="Option 32" onClick={() => setUpdateNeoworker({ ...updateNeoworker, outsourced_project_manager: document.getElementById('Option 32').checked === true ? true : false })} checked={updateNeoworker.outsourced_project_manager === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 32">Chef de projet externalisé</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox4" id="Option 33" name="Option 33" onClick={() => setUpdateNeoworker({ ...updateNeoworker, creation_and_graphics: document.getElementById('Option 33').checked === true ? true : false })} checked={updateNeoworker.creation_and_graphics === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 33">Création et graphisme</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox4" id="Option 34" name="Option 34" onClick={() => setUpdateNeoworker({ ...updateNeoworker, ux_design: document.getElementById('Option 34').checked === true ? true : false })} checked={updateNeoworker.ux_design === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 34">UX Design</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox4" id="Option 35" name="Option 35" onClick={() => setUpdateNeoworker({ ...updateNeoworker, ui_design_computer_graphics: document.getElementById('Option 35').checked === true ? true : false })} checked={updateNeoworker.ui_design_computer_graphics === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 35">UI Design - infographisme</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox4" id="Option 36" name="Option 36" onClick={() => setUpdateNeoworker({ ...updateNeoworker, redaction_design: document.getElementById('Option 36').checked === true ? true : false })} checked={updateNeoworker.redaction_design === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 36">Conception rédaction</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox4" id="Option 37" name="Option 37" onClick={() => setUpdateNeoworker({ ...updateNeoworker, community_management: document.getElementById('Option 37').checked === true ? true : false })} checked={updateNeoworker.community_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 37">Community management</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox4" id="Option 38" name="Option 38" onClick={() => setUpdateNeoworker({ ...updateNeoworker, seo_optimization: document.getElementById('Option 38').checked === true ? true : false })} checked={updateNeoworker.seo_optimization === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 38">Optimisation SEO</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox4" id="Option 39" name="Option 39" onClick={() => setUpdateNeoworker({ ...updateNeoworker, website_creation: document.getElementById('Option 39').checked === true ? true : false })} checked={updateNeoworker.website_creation === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 39">Création de site web</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox4" id="Option 40" name="Option 40" onClick={() => setUpdateNeoworker({ ...updateNeoworker, press_relation: document.getElementById('Option 40').checked === true ? true : false })} checked={updateNeoworker.press_relation === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 40">Relation presse</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox4" id="Option 41" name="Option 41" onClick={() => setUpdateNeoworker({ ...updateNeoworker, event: document.getElementById('Option 41').checked === true ? true : false })} checked={updateNeoworker.event === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 41">Evènementiel</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox4" id="Option 42" name="Option 42" onClick={() => setUpdateNeoworker({ ...updateNeoworker, partnership_distribution_network_and_business_contribution: document.getElementById('Option 42').checked === true ? true : false })} checked={updateNeoworker.partnership_distribution_network_and_business_contribution === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 42">Partenariats, montage de réseaux de distribution, apporteurs d'affaire</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox4" id="Option 43" name="Option 43" onClick={() => setUpdateNeoworker({ ...updateNeoworker, translation_work: document.getElementById('Option 43').checked === true ? true : false })} checked={updateNeoworker.translation_work === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 43">Travaux de traduction</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion Financière / Contrôle de Gestion</p>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="checkboxAll5" onClick={checkAll5}></input>
                                <label className="label-prestation"><span className="italic-span">... cocher toutes les prestations ...</span></label>
                            </div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox5" id="Option 44" name="Option 44" onClick={() => setUpdateNeoworker({ ...updateNeoworker, administrative_and_financial_management: document.getElementById('Option 44').checked === true ? true : false })} checked={updateNeoworker.administrative_and_financial_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 44">Direction administrative et financière externalisée</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox5" id="Option 45" name="Option 45" onClick={() => setUpdateNeoworker({ ...updateNeoworker, financing_grant_application: document.getElementById('Option 45').checked === true ? true : false })} checked={updateNeoworker.financing_grant_application === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 45">Montage de dossier de financement / subvention</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox5" id="Option 46" name="Option 46" onClick={() => setUpdateNeoworker({ ...updateNeoworker, management_control: document.getElementById('Option 46').checked === true ? true : false })} checked={updateNeoworker.management_control === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 46">Contrôle de gestion</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox5" id="Option 47" name="Option 47" onClick={() => setUpdateNeoworker({ ...updateNeoworker, dashboard_and_financial_management: document.getElementById('Option 47').checked === true ? true : false })} checked={updateNeoworker.dashboard_and_financial_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 47">Tableau de bord et pilotage financier</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox5" id="Option 48" name="Option 48" onClick={() => setUpdateNeoworker({ ...updateNeoworker, business_pland_and_provisional_budget: document.getElementById('Option 48').checked === true ? true : false })} checked={updateNeoworker.business_pland_and_provisional_budget === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 48">Création de business plan et budget prévisionnel</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox5" id="Option 49" name="Option 49" onClick={() => setUpdateNeoworker({ ...updateNeoworker, transfer_aid_and_buyout_of_business: document.getElementById('Option 49').checked === true ? true : false })} checked={updateNeoworker.transfer_aid_and_buyout_of_business === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 49">Aide à la cession / rachat d'activités</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">DSI</p>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="checkboxAll6" onClick={checkAll6}></input>
                                <label className="label-prestation"><span className="italic-span">... cocher toutes les prestations ...</span></label>
                            </div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox6" id="Option 50" name="Option 50" onClick={() => setUpdateNeoworker({ ...updateNeoworker, outsourced_information_system_management: document.getElementById('Option 50').checked === true ? true : false })} checked={updateNeoworker.outsourced_information_system_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 50">Direction des Systèmes d'informations externalisée</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox6" id="Option 51" name="Option 51" onClick={() => setUpdateNeoworker({ ...updateNeoworker, schema_directeur_si: document.getElementById('Option 51').checked === true ? true : false })} checked={updateNeoworker.schema_directeur_si === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 51">Schéma directeur SI</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox6" id="Option 52" name="Option 52" onClick={() => setUpdateNeoworker({ ...updateNeoworker, functional_architecture: document.getElementById('Option 52').checked === true ? true : false })} checked={updateNeoworker.functional_architecture === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 52">Architecture fonctionnelle / applicative</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox6" id="Option 53" name="Option 53" onClick={() => setUpdateNeoworker({ ...updateNeoworker, infra_reseau: document.getElementById('Option 53').checked === true ? true : false })} checked={updateNeoworker.infra_reseau === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 53">Infra / réseau</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion Ressources Humaines / Juridique</p>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="checkboxAll7" onClick={checkAll7}></input>
                                <label className="label-prestation"><span className="italic-span">... cocher toutes les prestations ...</span></label>
                            </div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox7" id="Option 54" name="Option 54" onClick={() => setUpdateNeoworker({ ...updateNeoworker, outsourced_hr_department: document.getElementById('Option 54').checked === true ? true : false })} checked={updateNeoworker.outsourced_hr_department === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 54">Direction des Ressources Humaines externalisée</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox7" id="Option 55" name="Option 55" onClick={() => setUpdateNeoworker({ ...updateNeoworker, plannings_management: document.getElementById('Option 55').checked === true ? true : false })} checked={updateNeoworker.plannings_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 55">Gestion des plannings</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox7" id="Option 56" name="Option 56" onClick={() => setUpdateNeoworker({ ...updateNeoworker, payroll_tracking: document.getElementById('Option 56').checked === true ? true : false })} checked={updateNeoworker.payroll_tracking === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 56">Suivi des éléments de paie (absences, CP, RTT..)</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox7" id="Option 57" name="Option 57" onClick={() => setUpdateNeoworker({ ...updateNeoworker, establishment_of_contracts_end_of_contracts: document.getElementById('Option 57').checked === true ? true : false })} checked={updateNeoworker.establishment_of_contracts_end_of_contracts === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 57">Etablissement des contrats / éléments de fin de contrats</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox7" id="Option 58" name="Option 58" onClick={() => setUpdateNeoworker({ ...updateNeoworker, suivi_mutuelle_medecine_du_travail: document.getElementById('Option 58').checked === true ? true : false })} checked={updateNeoworker.suivi_mutuelle_medecine_du_travail === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 58">Suivi mutuelle et medecine du travail</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox7" id="Option 59" name="Option 59" onClick={() => setUpdateNeoworker({ ...updateNeoworker, conflict_management: document.getElementById('Option 59').checked === true ? true : false })} checked={updateNeoworker.conflict_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 59">Gestion des conflits</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox7" id="Option 60" name="Option 60" onClick={() => setUpdateNeoworker({ ...updateNeoworker, assembly_and_monitoring_litigation_files: document.getElementById('Option 60').checked === true ? true : false })} checked={updateNeoworker.assembly_and_monitoring_litigation_files === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 60">Montage et suivi des dossiers de contentieux</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox7" id="Option 61" name="Option 61" onClick={() => setUpdateNeoworker({ ...updateNeoworker, harmonization_of_contracts: document.getElementById('Option 61').checked === true ? true : false })} checked={updateNeoworker.harmonization_of_contracts === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 61">Harmonisation des contrats</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox7" id="Option 62" name="Option 62" onClick={() => setUpdateNeoworker({ ...updateNeoworker, RGPD_compliation: document.getElementById('Option 62').checked === true ? true : false })} checked={updateNeoworker.RGPD_compliation === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 62">Mise en conformité RGPD</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox7" id="Option 63" name="Option 63" onClick={() => setUpdateNeoworker({ ...updateNeoworker, harmonization_salary_scales: document.getElementById('Option 63').checked === true ? true : false })} checked={updateNeoworker.harmonization_salary_scales === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 63">Harmonisation des grilles salaires</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox7" id="Option 64" name="Option 64" onClick={() => setUpdateNeoworker({ ...updateNeoworker, provisional_management_of_jobs_and_skill: document.getElementById('Option 64').checked === true ? true : false })} checked={updateNeoworker.provisional_management_of_jobs_and_skill === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 64">Gestion prévisionnelle des emplois et des compétences</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox7" id="Option 65" name="Option 65" onClick={() => setUpdateNeoworker({ ...updateNeoworker, recruitment_and_integration: document.getElementById('Option 65').checked === true ? true : false })} checked={updateNeoworker.recruitment_and_integration === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 65">Recrutement et intégration</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion de la relation clients</p>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="checkboxAll8" onClick={checkAll8}></input>
                                <label className="label-prestation"><span className="italic-span">... cocher toutes les prestations ...</span></label>
                            </div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox8" id="Option 66" name="Option 66" onClick={() => setUpdateNeoworker({ ...updateNeoworker, suivi_des_grands_comptes: document.getElementById('Option 66').checked === true ? true : false })} checked={updateNeoworker.suivi_des_grands_comptes === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 66">Suivi grands comptes</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox8" id="Option 67" name="Option 67" onClick={() => setUpdateNeoworker({ ...updateNeoworker, additional_sales: document.getElementById('Option 67').checked === true ? true : false })} checked={updateNeoworker.additional_sales === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 67">Ventes additionnelles</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox8" id="Option 68" name="Option 68" onClick={() => setUpdateNeoworker({ ...updateNeoworker, measure_of_customers_satisfaction: document.getElementById('Option 68').checked === true ? true : false })} checked={updateNeoworker.measure_of_customers_satisfaction === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 68">Mesure de la satisfaction clients</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox8" id="Option 69" name="Option 69" onClick={() => setUpdateNeoworker({ ...updateNeoworker, after_sales_service: document.getElementById('Option 69').checked === true ? true : false })} checked={updateNeoworker.after_sales_service === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 69">Service après ventes</label></div>
                        </div>
                    </div>

                    <h2 className='mission-title'>Modifier un mot de passe pour le Neoworker</h2>

                    <FormGroup className="form-group-flex-password-create">
                    <Label className="label-flex"> Mot de passe <span className='textModif'>:</span></Label>
                            <Input
                                className="admin-create-input-password"
                                type="password"
                                id="password" name="password"
                                value={updateNeoworker.password}
                                onChange={(e) => { setUpdateNeoworker({ ...updateNeoworker, password: e.target.value }) }} />
                                 <div><input className="checkbox" type="checkbox" onClick={showPassword}/>Montrer mot de passe</div>
                    </FormGroup>

                    <Button className="btn" type="submit">Valider les modifications</Button>

                    
                    <Modal isOpen={modalNote} toggle={toggleNote}>
                        <ModalHeader toggle={toggleNote}>Notes</ModalHeader>
                        <ModalBody>
                            <FormGroup>
                                <Input className="admin-input-note" type="textarea" name="note" id="note"
                                   value={updateNeoworker.note} 
                                   onChange={(e) => { setUpdateNeoworker({ ...updateNeoworker, note: e.target.value }) }} />
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button className="cancel-modal-button" onClick={toggleNote}>Cancel</Button>
                        </ModalFooter>
                    </Modal>               

                    <form/>
                </Form>
                
                <Button className="note-button" onClick={toggleNote}> Modifier des notes </Button>
            </div>
        </div>
    )
}

export default ChangeNeoworker;