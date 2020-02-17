import React,{useState} from 'react'



const Slide4 = (props) => {

    const data = props.data


return(

        <div>
        <h2 className='competences-title'>Prestations</h2>
        <div className='competences'>
            {data.map(x =>
                <div className='cards' id="prestation-scroll">
                    

                    <div className="fifth-div-creation-neoworker">

                    <div>

                        {/*<select
                        className="famille-prestation-select" type="select" name="famille-prestation" id='famille-prestation'
                        onChange={(e) => setPrestation(e.target.value)}>
                        <option>--Choisir une option--</option>
                        <option value="Gestion administrative et comptable">Gestion administrative et comptable</option>
                        <option value="Gestion opérationnelle">Gestion opérationnelle</option>
                        <option value="Gestion commerciale">Gestion commerciale</option>
                        <option value="Marketing / Communication / Digital">Marketing / Communication / Digital</option>
                        <option value="Gestion Financière / Contrôle de Gestion">Gestion Financière / Contrôle de Gestion</option>
                        <option value="DSI">DSI</option>
                        <option value="Gestion Ressources Humaines / Juridique">Gestion Ressources Humaines / Juridique</option>
                        <option value="Gestion de la relation clients">Gestion de la relation clients</option>
                    </select>
                    */}

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion administrative et comptable</p>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="Option 1" name="Option 1" checked={x.assistance_suivi_comptable === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 1">Assistance et suivi comptable (note de frais, suivi des règlements et de la trésorerie, ...)</label></div>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="Option 2" name="Option 2" checked={x.relation_accountant === true ? "checked" : ""}/>
                                <label className="label-prestation" for="Option 2">Relation avec le cabinet d'expertise comptable</label></div>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="Option 3" name="Option 3" checked={x.customer_recovery === true ? "checked" : ""}/>
                                <label className="label-prestation" for="Option 3">Relances clients</label></div>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="Option 4" name="Option 4" checked={x.payroll_preparation === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 4">Préparation des éléments de paie (Pointages, congés payés, arrêts maladie, primes, etc…)</label></div>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="Option 5" name="Option 5" checked={x.assembly_approval_file === true ? "checked" : ""}/>
                                <label className="label-prestation" for="Option 5">Montage de dossier d'agrément</label></div>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="Option 6" name="Option 6" checked={x.referencing_training_organization === true ? "checked" : ""}/>
                                <label className="label-prestation" for="Option 6">Référencement organismes de formations</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion opérationnelle</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 7" name="Option 7" checked={x.use_business_software === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 7">Mise en place, optimisation et formation à l'utilisation de logiciels métiers</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 8" name="Option 8" checked={x.internal_procedure === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 8">Création et mise en place de procédures internes</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 9" name="Option 9" checked={x.database === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 9">Création et traitement de base de données</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 10" name="Option 10" checked={x.gestion_achat === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 10">Intendance et gestion des achats</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 11" name="Option 11" checked={x.administrative_file_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 11">Suivi des dossiers administratifs</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 12" name="Option 12" checked={x.management_assistantship === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 12">Assistanat de direction</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 13" name="Option 13" checked={x.filing_documents === true ? "checked" : ""} />
                                <label className="label-prestationGestion administrative et comptable" for="Option 13">Classement de documents</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 14" name="Option 14" checked={x.secretariat_and_maintenance_agenda === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 14">Secrétariat et tenue de l'agenda </label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion commerciale</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 15" name="Option 15" checked={x.commercial_strategy_and_sales_pitch === true ? "checked" : ""}/>
                                <label className="label-prestation" for="Option 15">Stratégie et argumentaire commercial</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 16" name="Option 16" checked={x.management_of_commercial_activity === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 16">Création de tableaux de bord, de procédure et pilotage de l'activité commerciale</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 17" name="Option 17" checked={x.prospecting_outbound_sales === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 17">Prospection / Outbound sales</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 18" name="Option 18" checked={x.gestion_achat2 === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 18">Intendance et gestion des achats</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 19" name="Option 19" checked={x.response_to_pulic_and_private_tenders === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 19">Réponse aux appels d'offres publics et privés</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 20" name="Option 20" checked={x.sales_administration === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 20">Administration des ventes</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 21" name="Option 21" checked={x.stock_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 21">Gestion des stocks</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 22" name="Option 22" checked={x.business_data_crm === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 22">Saisie des données commerciales dans un CRM</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 23" name="Option 23" checked={x.order_data_entry === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 23">Saisie des commandes</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 24" name="Option 24" checked={x.quote_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 24">Gestion des devis</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 25" name="Option 25" checked={x.billing === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 25">Facturation</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 26" name="Option 26" checked={x.claims_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 26">Gestion des réclamations</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Marketing / Communication / Digital</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 27" name="Option 27" checked={x.marketing_strategy_and_operational_monitoring === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 27">Stratégie marketing et suivi opérationnel</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 28" name="Option 28" checked={x.marketing_study === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 28">Réalisation d'études de marché </label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 29" name="Option 29" checked={x.implementation_of_inbound_marketing_strategy === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 29">Mise en œuvre d'une stratégie d'inbound marketing</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 30" name="Option 30" checked={x.outbound_marketing === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 30">Outbound marketing</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 31" name="Option 31" checked={x.communication_strategy === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 31">Stratégie de communication</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 32" name="Option 32" checked={x.outsourced_project_manager === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 32">Chef de projet externalisé</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 33" name="Option 33" checked={x.creation_and_graphics === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 33">Création et graphisme</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 34" name="Option 34" checked={x.ux_design === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 34">Ux Design</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 35" name="Option 35" checked={x.ui_design_computer_graphics === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 35">UI Design - infographisme</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 36" name="Option 36" checked={x.redaction_design === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 36">Conception rédaction</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 37" name="Option 37" checked={x.community_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 37">Community management</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 38" name="Option 38" checked={x.seo_optimization === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 38">Optimisation SEO</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 39" name="Option 39" checked={x.website_creation === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 39">Création de site web</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 40" name="Option 40" checked={x.press_relation === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 40">Relation presse</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 41" name="Option 41" checked={x.event === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 41">Evènementiel</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 42" name="Option 42" checked={x.partnership_distribution_network_and_business_contribution === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 42">Partenariats, montage de réseaux de distribution, apporteurs d'affaire</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 43" name="Option 43" checked={x.translation_work === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 43">Travaux de traduction</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion Financière / Contrôle de Gestion</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 44" name="Option 44" checked={x.administrative_and_financial_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 44">Direction administrative et financière externalisée</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 45" name="Option 45" checked={x.financing_grant_application === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 45">Montage de dossier de financement / subvention</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 46" name="Option 46" checked={x.management_control === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 46">Contrôle de gestion</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 47" name="Option 47" checked={x.dashboard_and_financial_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 47">Tableau de bord et pilotage financier</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 48" name="Option 48" checked={x.business_pland_and_provisional_budget === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 48">Création de business plan et budget prévisionnel</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 49" name="Option 49" checked={x.transfer_aid_and_buyout_of_business === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 49">Aide à la cession / rachat d'activités</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">DSI</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 50" name="Option 50" checked={x.outsourced_information_system_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 50">Direction des Systèmes d'informations externalisée</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 51" name="Option 51" checked={x.schema_directeur_si === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 51">Schéma directeur SI</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 52" name="Option 52" checked={x.functional_architecture === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 52">Architecture fonctionnelle / applicative</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 53" name="Option 53" checked={x.infra_reseau === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 53">Infra / réseau</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion Ressources Humaines / Juridique</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 54" name="Option 54" checked={x.outsourced_hr_department === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 54">Direction des Ressources Humaines externalisée</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 55" name="Option 55" checked={x.plannings_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 55">Gestion des plannings</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 56" name="Option 56" checked={x.payroll_tracking === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 56">Suivi des éléments de paie (absences, CP, RTT..)</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 57" name="Option 57" checked={x.establishment_of_contracts_end_of_contracts === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 57">Etablissement des contrats / éléments de fin de contrats</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 58" name="Option 58" checked={x.suivi_mutuelle_medecine_du_travail === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 58">Suivi mutuelle et medecine du travail</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 59" name="Option 59" checked={x.conflict_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 59">Gestion des conflits</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 60" name="Option 60" checked={x.assembly_and_monitoring_litigation_files === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 60">Montage et suivi des dossiers de contentieux</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 61" name="Option 61" checked={x.harmonization_of_contracts === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 61">Harmonisation des contrats</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 62" name="Option 62" checked={x.RGPD_compliation === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 62">Mise en conformité RGPD</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 63" name="Option 63" checked={x.harmonization_salary_scales === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 63">Harmonisation des grilles salaires</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 64" name="Option 64" checked={x.provisional_management_of_jobs_and_skill === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 64">Gestion prévisionnelle des emplois et des compétences</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 65" name="Option 65" checked={x.recruitment_and_integration === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 65">Recrutement et intégration</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion de la relation clients</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 66" name="Option 66" checked={x.suivi_des_grands_comptes === true ? "checked" : ""}/>
                                <label className="label-prestation" for="Option 66">Suivi grands comptes</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 67" name="Option 67" checked={x.additional_sales === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 67">Ventes additionnelles</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 68" name="Option 68" checked={x.measure_of_customers_satisfaction === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 68">Mesure de la satisfaction clients</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 69" name="Option 69" checked={x.after_sales_service === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 69">Service après ventes</label></div>
                        </div>
                    </div>

                    </div>

                </div>
            )}

        </div>
        </div>
    )
}









export default Slide4;