'use strict';
module.exports = (sequelize, DataTypes) => {
  const freelancer = sequelize.define('freelancer', {
    img: {
      type: DataTypes.STRING,
    },
    status: {
      defaultValue: 0,
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers
        
      }, 

    },
    title: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 40],
      }
    },
    firstname: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 40],
      }
    },
    lastname: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 40],
      }
    },
    note: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 65534],
      }
    },
    address: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 200],
      }
    },
    mobilite: {
      type: DataTypes.STRING,
    },
    km_max: {
      type: DataTypes.STRING,
    },
    tel: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 10],
      }
    },
    cp: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 5],
      }
    },
    pref_lieu_de_travail: {
      type: DataTypes.STRING     
    },

    disponibilite: {
      defaultValue: 0,
      type: DataTypes.INTEGER,
    },

    tjm_min: {
      defaultValue: 0,
      type: DataTypes.INTEGER
    },

    tjm_max: {
      defaultValue: 0,
      type: DataTypes.INTEGER
    },

    email: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 40],
        isEmail: true,

      }
    },
    excel:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    powerpoint:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    word:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    microsoft_365:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    crm_hubspot:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    crm_salesforce:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    crm_pipedrive:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    crm:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    suite_adobe:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    illustrator:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    in_design:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    photoshop:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    marketing_fb:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    google_adwards:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    insta:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    reseaux_sociaux:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    keynote:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    pages:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    gsuite_google:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    numbers:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    erp_sap:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    ciel_gestion:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    cegid:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    sage_gestion_commercial:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    sage_comptabilite:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    quadra:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    reso_pb:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    confiance:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    empathie:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    intelligence_emo:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    communication:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    gestion_temps:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    gestion_stress:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    creativite:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    esprit_entre:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    audace:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    vision_visu:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    motivation:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    presence:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    sens_collectif:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    curiosite:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    sens_effort:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    sport: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 100],

      }
    },
    passion: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 100],

      }
    },
    engagement_asso: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 100],

      }
    },
    autres_softskill: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 100],

      }
    },

    assistance_suivi_comptable:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    relation_accountant:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    customer_recovery:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    payroll_preparation:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    assembly_approval_file:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    referencing_training_organization: {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    use_business_software: {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    internal_procedure:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    database:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    gestion_achat:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    gestion_achat2: {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    administrative_file_management:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    management_assistantship:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    secretariat_and_maintenance_agenda:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    filing_documents:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    commercial_strategy_and_sales_pitch:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    management_of_commercial_activity:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    prospecting_outbound_sales:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    response_to_pulic_and_private_tenders:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    sales_administration:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    stock_management:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    business_data_crm:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    order_data_entry:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    quote_management:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    billing:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    claims_management:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    marketing_strategy_and_operational_monitoring:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    marketing_study:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    implementation_of_inbound_marketing_strategy:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    outbound_marketing:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    communication_strategy:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    outsourced_project_manager:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    creation_and_graphics:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    ux_design:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    ui_design_computer_graphics:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    redaction_design:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    seo_optimization:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    website_creation:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    community_management:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    press_relation:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    event:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    partnership_distribution_network_and_business_contribution:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    translation_work:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    administrative_and_financial_management:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    financing_grant_application:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    management_control:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    dashboard_and_financial_management:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    business_pland_and_provisional_budget:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    transfer_aid_and_buyout_of_business:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    outsourced_information_system_management:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    schema_directeur_si:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    functional_architecture:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    infra_reseau:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    outsourced_hr_department:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    plannings_management:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    payroll_tracking:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    establishment_of_contracts_end_of_contracts:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    suivi_mutuelle_medecine_du_travail:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    conflict_management:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    assembly_and_monitoring_litigation_files:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    harmonization_of_contracts:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    RGPD_compliation:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    harmonization_salary_scales:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    provisional_management_of_jobs_and_skill:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    recruitment_and_integration:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    suivi_des_grands_comptes:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    additional_sales:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    measure_of_customers_satisfaction:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },
    after_sales_service:  {
      type:DataTypes.BOOLEAN,
      validate:{
        isIn: [[true, false]],
      }
    },

    francais:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    anglais:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    italien:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    chinois:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    russe:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    arabe:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    allemand:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },

    espagnol:  {
      type: DataTypes.INTEGER,
      validate: {
        max: 3, // only allow values <= 1000000
        min: 0,
        isInt: true, // checks for valid integers

      }

    },
    autres_langue: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 50],
      }
    },
  },
  );

  //table de jointure
  freelancer.associate = function(models) {
    freelancer.belongsToMany(models.users, {
      through: 'tj_users_f'
    })
    freelancer.belongsToMany(models.missions,{
      through: 'tj_missions_f'
    })
  };
  return freelancer;
};