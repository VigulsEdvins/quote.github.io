/**
 * i18n/fr.js - French Translations for QuoteWriter
 */
window.QuoteI18n = window.QuoteI18n || {};

window.QuoteI18n.French = {
  // Navigation
  nav_setup: "1. En-tête",
  nav_generator: "2. Créer un devis",
  nav_quote: "3. Aperçu du devis",
  brand_badge: "par Viguls",

  // Setup / Onboarding
  setup_title: "Obtenez votre <span class='highlight-teal'>générateur de devis</span>",
  setup_subtitle: "Configurez une fois. Enregistrez l'URL. Utilisez-le pour chaque chantier — 1 ligne tapée, un devis de marque complet en 30 secondes. Gratuit à vie.",
  setup_callout_1: "Après ce formulaire, vous obtiendrez une URL personnelle préremplie. C'est <strong>VOTRE</strong> outil — mettez-le en favoris.",
  business_name_label: "Nom de l'entreprise <span class='required'>*</span>",
  business_name_hint: "Apparaît sur chaque en-tête de devis, exactement comme vos clients doivent le voir.",
  business_name_placeholder: "ex. Dubois Charpente SARL",
  user_email_label: "Votre e-mail <span class='required'>*</span>",
  user_email_placeholder: "contact@dubois-artisan.fr",
  user_phone_label: "Téléphone <span class='required'>*</span>",
  user_phone_placeholder: "+33 6 12 34 56 78",
  industry_label: "Secteur / Corps de métier <span class='required'>*</span>",
  region_label: "Région <span class='required'>*</span>",
  currency_label: "Devise",
  vat_label: "TVA (automatique par région)",
  avg_job_size_label: "Montant moyen d'un chantier <span class='required'>*</span>",
  quote_language_label: "Langue du devis <span class='required'>*</span>",
  quote_language_hint: "Vos devis seront générés dans cette langue.",
  letterhead_divider: "VOTRE EN-TÊTE · <span class='highlight-teal'>POUR DEVIS PROFESSIONNELS</span>",
  setup_callout_2: "<strong>Ajouté à chaque devis généré.</strong> Logo, SIRET, assurance décennale — des devis dignes d'une agence de design. Modifiable à tout moment via l'icône ⚙.",
  logo_url_label: "URL du logo <span class='optional-tag'>FACULTATIF</span>",
  logo_url_hint: "URL publique de votre logo (carré ≥200px conseillé). Sinon, un monogramme aux couleurs de votre marque sera utilisé.",
  logo_url_placeholder: "https://votre-site.fr/logo.png",
  business_address_label: "Adresse de l'entreprise <span class='optional-tag'>FACULTATIF</span>",
  business_address_placeholder: "ex. 15 rue de la Paix, 75002 Paris, France",
  license_number_label: "N° SIRET / RCS <span class='optional-tag'>FACULTATIF</span>",
  license_number_placeholder: "ex. RCS Paris B 512 345 678",
  tax_id_label: "N° TVA Intracommunautaire <span class='optional-tag'>FACULTATIF</span>",
  tax_id_placeholder: "ex. FR12345678901",
  insurance_details_label: "Assurance décennale / RC Pro <span class='optional-tag'>FACULTATIF</span>",
  insurance_details_placeholder: "ex. Garantie Décennale 2 000 000 € (AXA)",
  trade_memberships_label: "Certifications / Labels <span class='optional-tag'>FACULTATIF</span>",
  trade_memberships_placeholder: "ex. Qualibat RGE · Artisan de France · CAPEB",
  tagline_label: "Slogan sous le nom de l'entreprise <span class='optional-tag'>FACULTATIF</span>",
  tagline_placeholder: "ex. Artisans charpentiers passionnés depuis 2014",
  website_label: "Site internet <span class='optional-tag'>FACULTATIF</span>",
  website_placeholder: "ex. www.dubois-charpente.fr",
  brand_color_label: "Couleur de la marque <span class='optional-tag'>FACULTATIF</span>",
  brand_color_hint: "Utilisée pour les accents graphiques. Vert Viguls par défaut.",
  agree_consent: "J'accepte que Viguls m'envoie le lien de mon outil. <a href='#privacy' class='text-link' id='privacy-link'>Confidentialité</a>",
  btn_get_tool: "Obtenir mon outil personnel →",

  // Generator Screen
  gen_callout: "<strong>Votre outil · prêt à l'emploi</strong><br>Tapez le projet. Ajoutez des options si souhaité. Devis généré en 30 secondes.",
  gen_title_html: "Quel est le <span class='highlight-teal'>prochain devis,</span> <span id='gen-name-display'>{name}</span> ?",
  gen_subtitle: "La description du travail suffit amplement. Ouvrez « Plus d'options » pour préciser le client, l'adresse du chantier et les modalités.",
  job_desc_label: "Description des travaux <span class='required'>*</span>",
  job_desc_placeholder: "ex. Rénovation terrasse en chêne 4x6m, dépose de l'ancienne terrasse et évacuation des déchets",
  job_desc_hint: "Précisez dimensions, matériaux et prestations annexes.",
  group_it_digital: "Technologies de l'information (IT) et numérique",
  group_construction: "Construction et gros œuvre",
  group_trades_interiors: "Second œuvre et aménagements intérieurs",
  group_mep_energy: "Électricité, plomberie et CVC",
  group_outdoor_metal: "Aménagements extérieurs, clôtures et métal",
  group_property_facility: "Services généraux et maintenance",

  chip_deck: "Rénovation terrasse en chêne 4x6m, dépose ancienne terrasse et évacuation",
  chip_kitchen: "Pose cuisine 5x4m, meubles plaqués chêne, électroménager encastré",
  chip_bath: "Rénovation sdb 6m², dépose totale, carrelage neuf, robinetterie encastrée",
  chip_roof: "Remplacement toiture 120m² bac acier, 3 fenêtres de toit, gouttières",
  chip_it: "Site web d'entreprise avec CMS, espace client, UI responsive et SEO",
  sizing_divider: "DIMENSIONS DU CHANTIER · <span class='highlight-teal'>FACULTATIF, PLUS PRÉCIS</span>",
  sizing_warning: "<strong>Remplissez ce qui s'applique, ignorez le reste.</strong> Un seul champ suffit.",
  area_label: "Surface",
  length_label: "Longueur",
  pieces_label_html: "Unités <span class='unit-sub'>FENÊTRES / ARBRES / PRISES...</span>",
  volume_label: "Volume",
  system_size_label_html: "Puissance <span class='unit-sub'>SOLAIRE</span>",
  payment_style_label: "Modalités de règlement",
  client_type_label: "Type de client",
  urgency_label: "Urgence",

  // Accordions
  acc_client_info_html: "<span class='acc-icon'>👤</span> Coordonnées du client",
  client_name_label: "Nom du client / Raison sociale <span class='optional-tag'>FACULTATIF</span>",
  client_name_placeholder: "ex. M. Dupont / SCI Immobilière",
  quote_ref_label: "Référence / N° de commande <span class='optional-tag'>FACULTATIF</span>",
  quote_ref_placeholder: "ex. DEV-2026-042",
  site_address_label: "Adresse du chantier <span class='optional-tag'>FACULTATIF</span>",
  site_address_placeholder: "ex. 12 rue des Fleurs, 75011 Paris",
  site_address_hint: "Si différente de l'adresse de facturation du client.",

  acc_timeline_html: "<span class='acc-icon'>📅</span> Délais et conditions de paiement",
  start_date_label: "Date de début souhaitée <span class='optional-tag'>FACULTATIF</span>",
  duration_label: "Durée estimée <span class='optional-tag'>FACULTATIF</span>",
  duration_placeholder: "ex. 5 jours ouvrés",
  duration_hint: "Laisser vide pour un calendrier standard dès notification d'accord.",
  custom_payment_label: "Échéancier de paiement personnalisé <span class='optional-tag'>FACULTATIF</span>",
  custom_payment_placeholder: "ex. 30% d'acompte · 40% à mi-chantier · 30% à réception des travaux",
  custom_payment_hint: "Nous attribuons des valeurs standard intelligentes. Personnalisez ici.",
  custom_warranty_label: "Garantie personnalisée <span class='optional-tag'>FACULTATIF</span>",
  custom_warranty_placeholder: "ex. Garantie décennale et 2 ans sur éléments d'usure",

  acc_inclusions_html: "<span class='acc-icon'>📋</span> Prestations incluses, exclusions",
  included_label: "Prestations INCLUSES <span class='optional-tag'>UNE PAR LIGNE</span>",
  included_placeholder: "Protection des sols et bâches de chantier\nFourniture des matériaux et quincaillerie\nDeux couches d'huile de protection\nNettoyage et évacuation des gravats",
  excluded_label: "Prestations NON incluses <span class='optional-tag'>UNE PAR LIGNE</span>",
  excluded_placeholder: "Laisser vide pour nos standards.\nOu renseignez vos exclusions:\nDémarches administratives et permis\nDésamiantage préalable",
  assumptions_label: "Conditions préalables <span class='optional-tag'>UNE PAR LIGNE</span>",
  assumptions_placeholder: "Laisser vide pour nos standards.\nOu renseignez:\nAccès libre et stationnement camion\nEau et électricité de chantier fournis",

  acc_covernote_html: "<span class='acc-icon'>✉️</span> Note d'accompagnement",
  covernote_label: "Message personnalisé en tête de devis <span class='optional-tag'>FACULTATIF</span>",
  covernote_placeholder: "ex. Merci de votre confiance. Ce devis récapitule notre visite technique de mardi. Nous restons à votre entière disposition pour tout renseignement.",
  covernote_hint: "Ajoute un texte d'accueil chaleureux avant les lignes chiffrées.",
  btn_generate_quote: "Générer mon devis →",

  // Loading Screen
  loading_title: "Création de votre devis...",
  loading_subtitle: "Calcul des fournitures, main-d'œuvre, tarifs régionaux,<br>échéances et conditions générales.",
  loading_step_1: "Analyse du descriptif des travaux...",
  loading_step_2: "Calcul du quantitatif matériaux et temps d'intervention...",
  loading_step_3: "Application des barèmes et des garanties...",
  loading_step_4: "Génération de la mise en page PDF officielle...",

  // Quote Document View
  ready_title: "Votre devis est prêt",
  ready_subtitle: "Astuce : cliquez sur n'importe quelle ligne pour la modifier avant impression.",
  btn_print: "🖨️ Imprimer / PDF",
  btn_email: "📋 Copier en e-mail",
  btn_new_quote: "+ Nouveau devis",
  btn_edit_letterhead: "⚙️ Modifier l'en-tête",

  quote_badge: "DEVIS",
  date_label: "Date",
  valid_label: "Validité",
  valid_days_text: "14 jours",
  click_to_edit_hint: "<span class='hint-pencil'>✏️</span> Cliquez sur n'importe quel champ pour le modifier",
  quote_for_label: "DEVIS POUR",
  reference_label: "RÉFÉRENCE",
  project_label: "PROJET",

  materials_heading: "FOURNITURES & MATÉRIAUX",
  col_item: "DÉSIGNATION",
  col_qty: "QTÉ",
  col_amount: "MONTANT",
  btn_add_material: "+ Ajouter une ligne de fourniture",

  labour_heading: "MAIN-D'ŒUVRE & POSE",
  col_phase: "PHASE DE TRAVAUX",
  col_duration: "DURÉE",
  btn_add_labour: "+ Ajouter une ligne de main-d'œuvre",

  summary_materials_subtotal: "Sous-total fournitures",
  summary_labour_subtotal: "Sous-total main-d'œuvre",
  summary_subtotal: "Total HT",
  summary_vat: "TVA",
  summary_total: "TOTAL TTC",

  scope_heading: "DÉTAIL DES PRESTATIONS",
  whats_included_html: "<span class='status-icon green-check'>✔</span> Ce qui est inclus",
  not_included_html: "<span class='status-icon red-cross'>✖</span> Non inclus",
  btn_add_inclusion: "+ Ajouter une inclusion",
  btn_add_exclusion: "+ Ajouter une exclusion",

  payment_terms_title: "CONDITIONS DE RÈGLEMENT ET GARANTIE",
  default_payment_terms: "Modalités de paiement : 30% d'acompte à la commande · 40% en cours de chantier · 30% à réception des travaux.\nComprend la garantie décennale et 2 ans sur la mise en œuvre.",

  tc_heading: "CONDITIONS GÉNÉRALES DE VENTE",
  tc_list: [
    { title: "Validité de l'offre :", desc: "La présente proposition est valable pendant 14 jours calendaires à compter de sa date d'émission." },
    { title: "Règlement :", desc: "Les règlements sont exigibles selon l'échéancier convenu. La propriété des matériaux livrés demeure acquise à l'artisan jusqu'au complet paiement." },
    { title: "Travaux supplémentaires :", desc: "Toute modification ou prestation complémentaire fera l'objet d'un avenant écrit chiffré avant réalisation." },
    { title: "Accès et fluides :", desc: "Le client assure l'accès au chantier durant les heures convenues ainsi que la fourniture de l'eau et de l'électricité nécessaires." },
    { title: "Imprévus de chantier :", desc: "Les vices cachés ou dégradations non décelables lors de la visite préalable feront l'objet d'une tarification séparée." },
    { title: "Garanties légales :", desc: "Les travaux sont couverts par les garanties légales et décennales en vigueur après parfait paiement." }
  ],

  signatures_heading: "BON POUR ACCORD & SIGNATURES",
  sig_provider_title: "L'ENTREPRENEUR",
  sig_authorized_badge: "DEVIS APPROUVÉ",
  sig_rep_label: "Représentant :",
  sig_date_label: "Date :",
  sig_client_title: "LE CLIENT (BON POUR ACCORD)",
  sig_client_instruction: "J'accepte le présent devis, son descriptif, ses prix et ses conditions générales :",
  sig_sign_here: "Signature (précédée de la mention manuscrite « Bon pour accord ») :",
  sig_client_name_label: "Nom du signataire :",
  sig_client_signature: "SIGNATURE DU CLIENT",
  sig_for_contractor: "POUR L'ENTREPRENEUR",
  sig_name_date: "Nom et date",
  footer_generated_by: "Généré par",

  footer_page: "Généré avec QuoteWriter · Page 1 sur 1",
  toast_copied_email: "📋 Devis copié dans le presse-papiers au format e-mail !",
  toast_letterhead_saved: "🎉 En-tête enregistré ! Votre outil est opérationnel.",
  toast_quote_ready: "✅ Devis prêt ! Cliquez pour éditer n'importe quelle ligne.",
  toast_example_loaded: "✨ Exemple chargé dans le formulaire",
  toast_changes_discarded: "↩️ Modifications annulées",
  toast_quote_recreated: "✨ Devis recréé avec vos modifications !",
  personal_link_title: "L'URL de votre outil personnel",
  letterhead_saved_tag: "✓ En-tête enregistré",
  personal_link_desc: "Ajoutez ce lien à vos favoris sur votre téléphone ou votre ordinateur. Chaque devis aura déjà vos coordonnées et votre logo chargés.",
  btn_copy_link: "📋 Copier le lien",
  btn_copied: "✓ Copié !",
  toast_link_copied: "🔗 Lien personnel copié dans le presse-papiers ! Enregistrez-le en favori.",
  btn_share_link: "🔗 Lien personnel",
  modal_unsaved_title: "Modifications non enregistrées",
  modal_unsaved_desc_step1: "Vous avez modifié votre en-tête d'entreprise. Souhaitez-vous enregistrer les modifications et recréer le devis, ou les annuler ?",
  modal_unsaved_desc_step2: "Vous avez modifié les détails du devis. Souhaitez-vous enregistrer les modifications et recréer le devis, ou les annuler ?",
  modal_btn_save_recreate: "Enregistrer et recréer le devis",
  modal_btn_discard: "Ignorer les modifications",
  modal_btn_cancel: "Continuer l'édition",
  unit_pcs: "u.",
  select_choose_one: "Choisir...",
  select_choose: "Choisir...",

  email_greeting: "Madame, Monsieur,",
  email_thanks: "Nous vous remercions de l'intérêt porté à notre entreprise pour votre projet : {title}.\n\n",
  email_closing: "Restant à votre entière disposition,\nBien cordialement,",

  select_options: {
    industry_trade: [
      // IT et numérique
      { value: "Web design & development", label: "Création de sites web et développement" },
      { value: "Software & mobile app development", label: "Développement de logiciels et applications mobiles" },
      { value: "IT support, networking & systems", label: "Support informatique, réseaux et systèmes" },
      { value: "Cloud infrastructure & cybersecurity", label: "Infrastructure cloud et cybersécurité" },
      { value: "UI/UX design & digital media", label: "Design UI/UX et médias digitaux" },
      // Gros œuvre et structure
      { value: "General contracting & renovation", label: "Rénovation générale et gros œuvre" },
      { value: "Masonry & brickwork", label: "Maçonnerie et taille de pierre" },
      { value: "Concrete & foundations", label: "Béton armé, fondations et dallage" },
      { value: "Civil engineering & excavation", label: "Terrassement et travaux publics" },
      { value: "Demolition & site clearance", label: "Démolition et curage de bâtiment" },
      // Second œuvre et finitions
      { value: "Carpentry & joinery", label: "Charpente, menuiserie et bois" },
      { value: "Roofing & exterior", label: "Couverture, toiture et zinguerie" },
      { value: "Kitchen & bathroom remodeling", label: "Aménagement cuisine et salle de bain" },
      { value: "Painting & decorating", label: "Peinture et finitions intérieures" },
      { value: "Plastering & drywall", label: "Plâtrerie, cloisons et isolation" },
      { value: "Flooring & tiling", label: "Carrelage, parquets et sols" },
      { value: "Windows, doors & glazing", label: "Menuiserie, fenêtres et vitrerie" },
      // Équipements techniques
      { value: "Electrical & smart home", label: "Électricité générale et domotique" },
      { value: "Plumbing & heating", label: "Plomberie, chauffage et sanitaires" },
      { value: "HVAC & air conditioning", label: "CVC, climatisation et ventilation" },
      { value: "Solar & renewable energy", label: "Énergie solaire et photovoltaïque" },
      // Extérieurs et métal
      { value: "Landscaping & decking", label: "Aménagements extérieurs et terrasses" },
      { value: "Fencing & gates", label: "Clôtures, portails et fermetures" },
      { value: "Metalwork & welding", label: "Métallerie, serrurerie et soudure" },
      // Services
      { value: "Property maintenance & handyman", label: "Entretien immobilier et petits travaux" },
      { value: "Commercial & post-construction cleaning", label: "Nettoyage commercial et fin de chantier" }
    ],
    payment_style: [
      { value: "auto", label: "Automatique (selon envergure)" },
      { value: "deposit-stages", label: "Acompte et situations intermédiaires" },
      { value: "50-50", label: "50% à la commande / 50% à réception" },
      { value: "completion", label: "100% à réception" }
    ],
    client_type: [
      { value: "new", label: "Nouveau client" },
      { value: "returning", label: "Client régulier" },
      { value: "commercial", label: "Professionnel / Syndic de copropriété" }
    ],
    job_urgency: [
      { value: "normal", label: "Planning normal" },
      { value: "urgent", label: "Urgent (sous 48h)" },
      { value: "flexible", label: "Flexible / Mois prochain" }
    ],
    avg_job_size: [
      { value: "Under €2,500", label: "Moins de 2 500 €" },
      { value: "€2,500 - €10,000", label: "2 500 € - 10 000 €" },
      { value: "€10,000 - €50,000", label: "10 000 € - 50 000 €" },
      { value: "€50,000+", label: "Plus de 50 000 €" }
    ]
  },

  templates: {
    deck: {
      title: "Rénovation terrasse en chêne 4×6m, dépose ancienne terrasse et évacuation",
      materials: [
        { name: "Lames de terrasse chêne massif de pays", sub: "Qualité supérieure premier choix, traitement autoclave", qty: "120 m²", amount: 7685 },
        { name: "Lambourdage et structure porteuse", sub: "Chevrons pin traités classe 4, plots réglables autonivelants", qty: "selon plan", amount: 2795 },
        { name: "Visserie inox et clips invisibles", sub: "Vis inox A4 qualité marine, bandes d'étanchéité bitumineuses", qty: "forfait", amount: 1397 },
        { name: "Saturateur et traitement protecteur", sub: "Huile naturelle pour bois extérieur anti-UV et hydrofuge", qty: "forfait", amount: 1118 },
        { name: "Benne et évacuation des déchets", sub: "Dépose ancienne structure bois et évacuation en déchetterie", qty: "1 ens.", amount: 978 }
      ],
      labour: [
        { phase: "Préparation du support et dépose de l'existant", duration: "1 jour", amount: 2562 },
        { phase: "Mise en place de l'ossature et pose des lames", duration: "3 jours", amount: 11100 },
        { phase: "Application du saturateur et nettoyage fin de chantier", duration: "1 jour", amount: 3415 }
      ],
      included: [
        "Fourniture et livraison sur site de l'ensemble des bois et quincailleries",
        "Protection des espaces paysagers environnants",
        "Dépose et recyclage de l'ancienne terrasse",
        "Nettoyage méthodique à la fin de chaque journée",
        "Traitement des déchets en filière certifiée"
      ],
      excluded: [
        "Terrassement lourd ou création de dalle béton armé",
        "Raccordements électriques ou d'arrosage automatique",
        "Frais administratifs éventuels en mairie"
      ]
    },
    kitchen: {
      title: "Pose cuisine 5×4m, meubles plaqués chêne, électroménager encastré",
      materials: [
        { name: "Caissons et façades plaquées chêne véritable", sub: "Charnières avec amortisseurs intégrés, pré-assemblés en atelier", qty: "1 ens.", amount: 8450 },
        { name: "Plan de travail composite quartz 20mm", sub: "Façonnage sur mesure avec découpe sous plan pour évier", qty: "8 ml", amount: 3200 },
        { name: "Pack gros électroménager encastrable", sub: "Plaque induction, four à chaleur tournante, hotte et lave-vaisselle", qty: "1 pack", amount: 4600 },
        { name: "Fournitures plomberie et raccordements", sub: "Évier résine, mitigeur douchette design, rubans LED sous meubles", qty: "forfait", amount: 1450 }
      ],
      labour: [
        { phase: "Dépose ancienne cuisine et adaptation plomberie/électricité", duration: "2 jours", amount: 2800 },
        { phase: "Assemblage, mise à niveau et pose des meubles", duration: "3 jours", amount: 3900 },
        { phase: "Ajustement plan de travail et mise en service appareils", duration: "2 jours", amount: 2400 }
      ],
      included: [
        "Livraison et montage soigné de l'ensemble du mobilier",
        "Raccordement aux réseaux existants d'eau et d'électricité",
        "Mise en service et contrôle de bon fonctionnement",
        "Évacuation des anciens appareils et cartons d'emballage"
      ],
      excluded: [
        "Ouverture de murs porteurs ou pose d'IPN",
        "Déplacement de chaudière gaz ou compteur principal",
        "Réfection de chape au-delà d'un ragréage standard"
      ]
    },
    bath: {
      title: "Rénovation sdb 6m², dépose totale, carrelage neuf, robinetterie encastrée",
      materials: [
        { name: "Grès cérame grand format rectifié", sub: "Carrelage antidérapant haute résistance murs et sol", qty: "24 m²", amount: 1850 },
        { name: "Ensemble sanitaire et robinetterie premium", sub: "Paroi douche italienne, mitigeur thermostatique, WC suspendu", qty: "1 pack", amount: 2950 },
        { name: "Kit d'étanchéité sous carrelage (SPEC)", sub: "Membrane d'étanchéité liquide pour zone de douche", qty: "forfait", amount: 780 }
      ],
      labour: [
        { phase: "Démolition complète jusqu'aux cloisons brutes", duration: "1 jour", amount: 1250 },
        { phase: "Réseaux plomberie encastrés et étanchéité", duration: "2 jours", amount: 2400 },
        { phase: "Pose du carrelage, joints hydrofuges et appareillage", duration: "3 jours", amount: 3600 }
      ],
      included: [
        "Dépose soignée de l'ancienne faïence et des sanitaires",
        "Étanchéité complète des zones humides sous carrelage",
        "Pose, jointoiement et raccordements d'usage",
        "Évacuation et mise en décharge contrôlée des gravats"
      ],
      excluded: [
        "Création d'une alimentation dédiée depuis le tableau principal",
        "Remplacement de plancher porteur détérioré",
        "Miroirs sur mesure rétroéclairés non spécifiés"
      ]
    },
    roof: {
      title: "Remplacement toiture 120m² bac acier, 3 fenêtres de toit, gouttières",
      materials: [
        { name: "Plaques acier profilé bac acier isolé", sub: "Tôle laquée 0.7mm avec feutre régulateur de condensation", qty: "120 m²", amount: 6900 },
        { name: "Fenêtres de toit à rotation et raccords étanches", sub: "Double vitrage thermique renforcé et raccord d'étanchéité", qty: "3 u.", amount: 2400 },
        { name: "Écran sous-toiture HPV et contre-lattage", sub: "Membrane respirante haute résistance à la déchirure", qty: "1 lot", amount: 1150 },
        { name: "Gouttières aluminium laqué sans raccord", sub: "Profilé corniche et descentes avec fixations invisibles", qty: "28 ml", amount: 1380 }
      ],
      labour: [
        { phase: "Montage échafaudage et dépose couverture existante", duration: "2 jours", amount: 2850 },
        { phase: "Pose écran HPV, lattage et fixation bac acier", duration: "4 jours", amount: 6400 },
        { phase: "Pose fenêtres de toit, faîtages et gouttières", duration: "2 jours", amount: 2750 }
      ],
      included: [
        "Dépose complète de l'ancienne couverture et évacuation",
        "Pose dans les règles de l'art de l'écran et du bac acier",
        "Intégration étanche des fenêtres de toit",
        "Pose complète du réseau d'évacuation des eaux pluviales"
      ],
      excluded: [
        "Remplacement lourd de chevrons ou pannes détériorés",
        "Réfection de maçonnerie de cheminée",
        "Maintien de l'échafaudage au-delà du chantier convenu"
      ]
    },
    it: {
      title: "Site web d'entreprise avec CMS, espace client, UI responsive et SEO",
      materials: [
        { name: "Hébergement cloud, nom de domaine et certificat SSL", sub: "Serveur NVMe haute performance, réseau CDN et SSL (1 an)", qty: "1 an", amount: 680 },
        { name: "Licences logicielles CMS, extensions et framework UI", sub: "Licences commerciales CMS et kit d'interface graphique premium", qty: "1 lic.", amount: 950 },
        { name: "Sauvegardes automatiques et suite de sécurité", sub: "Sauvegardes quotidiennes externalisées, pare-feu et monitoring (1 an)", qty: "1 an", amount: 480 }
      ],
      labour: [
        { phase: "Wireframes UI/UX, architecture technique et maquette", duration: "5 jours", amount: 2600 },
        { phase: "Développement frontend responsive et intégration CMS", duration: "8 jours", amount: 4200 },
        { phase: "Espace client sécurisé et connexion aux API métiers", duration: "5 jours", amount: 2800 },
        { phase: "Audit cybersécurité, optimisation SEO et mise en ligne", duration: "2 jours", amount: 1100 }
      ],
      included: [
        "Conception 100% responsive (smartphones, tablettes et ordinateurs)",
        "Panneau d'administration ergonomique avec gestion des droits",
        "Formulaires de contact avec notifications instantanées par e-mail",
        "Optimisation technique pour le référencement naturel (SEO)",
        "Garantie de 30 jours et assistance corrective post-lancement"
      ],
      excluded: [
        "Rédaction mensuelle récurrente de contenus et d'articles de blog",
        "Coûts de consommation des API tierces (SMS, passerelles bancaires)",
        "Migration manuelle de données issues de bases de données obsolètes"
      ]
    },
    general: {
      title: "Travaux généraux de rénovation et aménagement",
      materials: [
        { name: "Matériaux principaux et quincaillerie de chantier", sub: "Qualité artisanale professionnelle selon prescription", qty: "50 u.", amount: 3500 },
        { name: "Ossatures porteuses, chevilles et fixations", sub: "Fixations lourdes certifiées conformes aux DTU", qty: "forfait", amount: 1050 },
        { name: "Traitements protecteurs, colles et consommables", sub: "Mastics d'étanchéité et peintures professionnelles", qty: "1 lot", amount: 525 },
        { name: "Protections de chantier et traitement des gravats", sub: "Bâches, polyane et gestion en centre de tri", qty: "1 lot", amount: 650 }
      ],
      labour: [
        { phase: "Préparation, traçage et organisation du chantier", duration: "1 jour", amount: 1100 },
        { phase: "Exécution des travaux par techniciens qualifiés", duration: "3 jours", amount: 4500 },
        { phase: "Contrôle qualité, finitions et réception", duration: "1 jour", amount: 1250 }
      ],
      included: [
        "Ensemble des matériaux conformes aux normes françaises",
        "Nettoyage de fin de chantier et réception contradictoire",
        "Assurance décennale et responsabilité civile professionnelle"
      ],
      excluded: [
        "Frais d'études de sol ou de structure par bureau de contrôle",
        "Dégradations structurelles antérieures non apparentes",
        "Interventions d'urgence de nuit ou les jours fériés"
      ]
    }
  }
};
