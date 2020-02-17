'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('missions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      }, 
      nom_mission:{
        type:Sequelize.STRING
      },
      nom_entreprise :{
        type:Sequelize.INTEGER
      },
      email:{
        type:Sequelize.STRING
      },
      note:{
        type:Sequelize.STRING
      },
      nb_j_par_mois:{
        type: Sequelize.INTEGER
      },
      type_profil:{
        type: Sequelize.STRING
      },
      siret:{
        type: Sequelize.STRING
      },
      budget:{
        type: Sequelize.INTEGER
      },
      date_debut:{
        type: Sequelize.DATEONLY
      },
      date_fin:{
        type: Sequelize.DATEONLY
      },
      frequence:{
        type:Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      mobilite: {
        type: Sequelize.STRING
      },
      km_max:{
        type:Sequelize.STRING
      },
      tel:{
        type:Sequelize.STRING
      },
      cp:{
        type:Sequelize.STRING
      },
      pref_lieu_de_travail: {
        type: Sequelize.STRING
      },
      disponibilite: {
        type: Sequelize.INTEGER
      },
      excel: {
        type: Sequelize.INTEGER
      },
      powerpoint: {
        type: Sequelize.INTEGER
      },
      word: {
        type: Sequelize.INTEGER
      },
      microsoft_365: {
        type: Sequelize.INTEGER
      },
      crm_hubspot: {
        type: Sequelize.INTEGER
      },
      crm_salesforce: {
        type: Sequelize.INTEGER
      },
      crm_pipedrive: {
        type: Sequelize.INTEGER
      },
      crm: {
        type: Sequelize.INTEGER
      },
      suite_adobe: {
        type: Sequelize.INTEGER
      },
      illustrator: {
        type: Sequelize.INTEGER
      },
      in_design: {
        type: Sequelize.INTEGER
      },
      photoshop: {
        type: Sequelize.INTEGER
      },
      marketing_fb: {
        type: Sequelize.INTEGER
      },
      google_adwards: {
        type: Sequelize.INTEGER
      },
      insta: {
        type: Sequelize.INTEGER
      },
      reseaux_sociaux: {
        type: Sequelize.INTEGER
      },
      keynote: {
        type: Sequelize.INTEGER
      },
      pages: {
        type: Sequelize.INTEGER
      },
      gsuite_google: {
        type: Sequelize.INTEGER
      },
      numbers: {
        type: Sequelize.INTEGER
      },
      erp_sap: {
        type: Sequelize.INTEGER
      },
      ciel_gestion: {
        type: Sequelize.INTEGER
      },
      cegid: {
        type: Sequelize.INTEGER
      },
      sage_gestion_commercial: {
        type: Sequelize.INTEGER
      },
      sage_comptabilite: {
        type: Sequelize.INTEGER
      },
      quadra: {
        type: Sequelize.INTEGER
      },
      reso_pb: {
        type: Sequelize.INTEGER
      },
      confiance: {
        type: Sequelize.INTEGER
      },
      empathie: {
        type: Sequelize.INTEGER
      },
      intelligence_emo: {
        type: Sequelize.INTEGER
      },
      communication: {
        type: Sequelize.INTEGER
      },
      gestion_temps: {
        type: Sequelize.INTEGER
      },
      gestion_stress: {
        type: Sequelize.INTEGER
      },
      creativite: {
        type: Sequelize.INTEGER
      },
      esprit_entre: {
        type: Sequelize.INTEGER
      },
      audace: {
        type: Sequelize.INTEGER
      },
      vision_visu: {
        type: Sequelize.INTEGER
      },
      motivation: {
        type: Sequelize.INTEGER
      },
      presence: {
        type: Sequelize.INTEGER
      },
      sens_collectif: {
        type: Sequelize.INTEGER
      },
      curiosite: {
        type: Sequelize.INTEGER
      },
      sens_effort: {
        type: Sequelize.INTEGER
      },
      sport: {
        type: Sequelize.STRING
      },
      passion: {
        type: Sequelize.STRING
      },
      engagement_asso: {
        type: Sequelize.STRING
      },
      autres_softskill: {
        type: Sequelize.STRING
      },
      assistance_suivi_comptable: {
        type: Sequelize.BOOLEAN
      },
    relation_accountant: {
      type: Sequelize.BOOLEAN
    },
    customer_recovery: {
      type: Sequelize.BOOLEAN
    },
    payroll_preparation: {
      type: Sequelize.BOOLEAN
    },
    assembly_approval_file: {
      type: Sequelize.BOOLEAN
    },
    referencing_training_organization:{
      type: Sequelize.BOOLEAN
    },
    use_business_software:{
      type: Sequelize.BOOLEAN
    },
    internal_procedure: {
      type: Sequelize.BOOLEAN
    },
    database: {
      type: Sequelize.BOOLEAN
    },
    gestion_achat: {
      type: Sequelize.BOOLEAN
    },
    administrative_file_management: {
      type: Sequelize.BOOLEAN
    },
    management_assistantship: {
      type: Sequelize.BOOLEAN
    },
    secretariat_and_maintenance_agenda: {
      type: Sequelize.BOOLEAN
    },
    filing_documents: {
      type: Sequelize.BOOLEAN
    },
    commercial_strategy_and_sales_pitch: {
      type: Sequelize.BOOLEAN
    },
    management_of_commercial_activity: {
      type: Sequelize.BOOLEAN
    },
    prospecting_outbound_sales: {
      type: Sequelize.BOOLEAN
    },
    response_to_pulic_and_private_tenders: {
      type: Sequelize.BOOLEAN
    },
    sales_administration: {
      type: Sequelize.BOOLEAN
    },
    stock_management: {
      type: Sequelize.BOOLEAN
    },
    business_data_crm: {
      type: Sequelize.BOOLEAN
    },
    order_data_entry: {
      type: Sequelize.BOOLEAN
    },
    quote_management: {
      type: Sequelize.BOOLEAN
    },
    billing: {
      type: Sequelize.BOOLEAN
    },
    claims_management: {
      type: Sequelize.BOOLEAN
    },
    marketing_strategy_and_operational_monitoring: {
      type: Sequelize.BOOLEAN
    },
    marketing_study: {
      type: Sequelize.BOOLEAN
    },
    implementation_of_inbound_marketing_strategy: {
      type: Sequelize.BOOLEAN
    },
    outbound_marketing: {
      type: Sequelize.BOOLEAN
    },
    communication_strategy: {
      type: Sequelize.BOOLEAN
    },
    outsourced_project_manager: {
      type: Sequelize.BOOLEAN
    },
    creation_and_graphics: {
      type: Sequelize.BOOLEAN
    },
    ux_design: {
      type: Sequelize.BOOLEAN
    },
    ui_design_computer_graphics: {
      type: Sequelize.BOOLEAN
    },
    redaction_design: {
      type: Sequelize.BOOLEAN
    },
    seo_optimization: {
      type: Sequelize.BOOLEAN
    },
    website_creation: {
      type: Sequelize.BOOLEAN
    },
    community_management: {
      type: Sequelize.BOOLEAN
    },
    press_relation: {
      type: Sequelize.BOOLEAN
    },
    event: {
      type: Sequelize.BOOLEAN
    },
    partnership_distribution_network_and_business_contribution: {
      type: Sequelize.BOOLEAN
    },
    translation_work: {
      type: Sequelize.BOOLEAN
    },
    administrative_and_financial_management: {
      type: Sequelize.BOOLEAN
    },
    financing_grant_application: {
      type: Sequelize.BOOLEAN
    },
    management_control: {
      type: Sequelize.BOOLEAN
    },
    dashboard_and_financial_management: {
      type: Sequelize.BOOLEAN
    },
    business_pland_and_provisional_budget: {
      type: Sequelize.BOOLEAN
    },
    transfer_aid_and_buyout_of_business: {
      type: Sequelize.BOOLEAN
    },
    outsourced_information_system_management: {
      type: Sequelize.BOOLEAN
    },
    schema_directeur_si: {
      type: Sequelize.BOOLEAN
    },
    functional_architecture: {
      type: Sequelize.BOOLEAN
    },
    infra_reseau: {
      type: Sequelize.BOOLEAN
    },
    outsourced_hr_department: {
      type: Sequelize.BOOLEAN
    },
    plannings_management: {
      type: Sequelize.BOOLEAN
    },
    payroll_tracking: {
      type: Sequelize.BOOLEAN
    },
    establishment_of_contracts_end_of_contracts: {
      type: Sequelize.BOOLEAN
    },
    suivi_mutuelle_medecine_du_travail: {
      type: Sequelize.BOOLEAN
    },
    conflict_management: {
      type: Sequelize.BOOLEAN
    },
    assembly_and_monitoring_litigation_files: {
      type: Sequelize.BOOLEAN
    },
    harmonization_of_contracts: {
      type: Sequelize.BOOLEAN
    },
    RGPD_compliation: {
      type: Sequelize.BOOLEAN
    },
    harmonization_salary_scales: {
      type: Sequelize.BOOLEAN
    },
    provisional_management_of_jobs_and_skill: {
      type: Sequelize.BOOLEAN
    },
    recruitment_and_integration: {
      type: Sequelize.BOOLEAN
    },
    suivi_des_grands_comptes: {
      type: Sequelize.BOOLEAN
    },
    additional_sales: {
      type: Sequelize.BOOLEAN
    },
    measure_of_customers_satisfaction: {
      type: Sequelize.BOOLEAN
    },
    after_sales_service: {
      type: Sequelize.BOOLEAN
    },

      francais: {
        type: Sequelize.INTEGER
      },
      anglais: {
        type: Sequelize.INTEGER
      },
      italien: {
        type: Sequelize.INTEGER
      },
      chinois: {
        type: Sequelize.INTEGER
      },
      russe: {
        type: Sequelize.INTEGER
      },
      arabe: {
        type: Sequelize.INTEGER
      },
      allemand: {
        type: Sequelize.INTEGER
      },
      espagnol:{
        type: Sequelize.INTEGER
      },
      autres_langue: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('missions');
  }
};

