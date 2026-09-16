/**
 * i18n/es.js - Spanish Translations for QuoteWriter
 */
window.QuoteI18n = window.QuoteI18n || {};

window.QuoteI18n.Spanish = {
  // Navigation
  nav_setup: "1. Membrete",
  nav_generator: "2. Crear presupuesto",
  nav_quote: "3. Vista previa",
  brand_badge: "por Viguls",

  // Setup / Onboarding
  setup_title: "Obtenga su <span class='highlight-teal'>Generador de Presupuestos</span>",
  setup_subtitle: "Configure una vez. Guarde la URL en favoritos. Úsela para cada trabajo: escriba 1 línea y obtenga un presupuesto completo en 30 segundos. Gratis para siempre.",
  setup_callout_1: "Al completar este formulario, obtendrá una URL personal precargada con sus datos. Es <strong>SU</strong> herramienta: guárdela en favoritos.",
  business_name_label: "Nombre de la empresa <span class='required'>*</span>",
  business_name_hint: "Aparece en el encabezado de cada presupuesto, exactamente como desea que lo vean sus clientes.",
  business_name_placeholder: "ej. Carpintería García S.L.",
  user_email_label: "Su correo electrónico <span class='required'>*</span>",
  user_email_placeholder: "contacto@suempresa.es",
  user_phone_label: "Teléfono <span class='required'>*</span>",
  user_phone_placeholder: "+34 600 000 000",
  industry_label: "Sector / Oficio <span class='required'>*</span>",
  region_label: "Región <span class='required'>*</span>",
  currency_label: "Moneda",
  vat_label: "IVA (automático por región)",
  avg_job_size_label: "Tamaño medio del trabajo <span class='required'>*</span>",
  quote_language_label: "Idioma del presupuesto <span class='required'>*</span>",
  quote_language_hint: "Sus presupuestos se generarán en este idioma.",
  letterhead_divider: "SU MEMBRETE · <span class='highlight-teal'>PARA PRESUPUESTOS DE MARCA</span>",
  setup_callout_2: "<strong>Se añade a cada presupuesto que genere.</strong> Logotipo, registro fiscal, seguro: presupuestos profesionales como de agencia. Puede editar cualquier dato más tarde desde el icono ⚙.",
  logo_url_label: "URL del logotipo <span class='optional-tag'>OPCIONAL</span>",
  logo_url_hint: "URL pública de su logotipo (cuadrado ≥200px recomendado). Si lo omite, se generará un monograma con su nombre.",
  logo_url_placeholder: "https://suempresa.es/logo.png",
  business_address_label: "Dirección de la empresa <span class='optional-tag'>OPCIONAL</span>",
  business_address_placeholder: "ej. Calle Mayor 15, 28013 Madrid, España",
  license_number_label: "Registro / Licencia <span class='optional-tag'>OPCIONAL</span>",
  license_number_placeholder: "ej. Reg. Mercantil 123456",
  tax_id_label: "NIF / CIF <span class='optional-tag'>OPCIONAL</span>",
  tax_id_placeholder: "ej. B12345678",
  insurance_details_label: "Seguro de responsabilidad civil <span class='optional-tag'>OPCIONAL</span>",
  insurance_details_placeholder: "ej. Cobertura RC 1.000.000 € (Mapfre)",
  trade_memberships_label: "Asociaciones / Certificaciones <span class='optional-tag'>OPCIONAL</span>",
  trade_memberships_placeholder: "ej. Gremio de Carpinteros · Instalador Certificado",
  tagline_label: "Lema bajo el nombre de empresa <span class='optional-tag'>OPCIONAL</span>",
  tagline_placeholder: "ej. Especialistas en madera y cubiertas desde 2014",
  website_label: "Sitio web <span class='optional-tag'>OPCIONAL</span>",
  website_placeholder: "ej. www.suempresa.es",
  brand_color_label: "Color de marca <span class='optional-tag'>OPCIONAL</span>",
  brand_color_hint: "Se utiliza en los detalles del encabezado. Por defecto verde Viguls.",
  agree_consent: "Acepto que Viguls me envíe el enlace de mi herramienta. <a href='#privacy' class='text-link' id='privacy-link'>Privacidad</a>",
  btn_get_tool: "Obtener mi herramienta personal →",

  // Generator Screen
  gen_callout: "<strong>Su herramienta · precargada</strong><br>Escriba el trabajo. Añada detalles opcionales si los desea en el presupuesto. Se genera en 30 segundos.",
  gen_title_html: "¿Cuál es el <span class='highlight-teal'>siguiente presupuesto,</span> <span id='gen-name-display'>{name}</span>?",
  gen_subtitle: "Basta con describir el trabajo. Abra \"Más opciones\" para añadir nombre del cliente, dirección del proyecto, plazos de pago y exclusiones.",
  job_desc_label: "Descripción del trabajo <span class='required'>*</span>",
  job_desc_placeholder: "ej. Reconstruir terraza de roble 4x6m, incluye demolición de la terraza antigua y desescombro",
  job_desc_hint: "Indique medidas, materiales, ubicación y extras. Vea ejemplos abajo.",
  group_it_digital: "Tecnología de la información (TI) y digital",
  group_construction: "Construcción y estructuras",
  group_trades_interiors: "Oficios especializados e interiorismo",
  group_mep_energy: "Instalaciones técnicas (Fontanería, Electricidad, Clima)",
  group_outdoor_metal: "Exteriores, cerramientos y metal",
  group_property_facility: "Servicios inmobiliarios y mantenimiento",

  chip_deck: "Reconstruir terraza de roble 4x6m, incluye demolición de terraza antigua",
  chip_kitchen: "Montaje de cocina 5x4m, muebles de roble, electrodomésticos integrados",
  chip_bath: "Reforma integral de baño 6m², desescombro, alicatado nuevo, sanitarios",
  chip_roof: "Sustitución de tejado 120m² chapa metálica, 3 claraboyas, canalones",
  chip_it: "Web corporativa con CMS, portal de clientes, diseño responsive y SEO",
  sizing_divider: "DIMENSIONES DEL TRABAJO · <span class='highlight-teal'>OPCIONAL, MÁS EXACTO</span>",
  sizing_warning: "<strong>Complete lo que aplique, omita el resto.</strong> Un solo campo es suficiente.",
  area_label: "Superficie",
  length_label: "Longitud",
  pieces_label_html: "Unidades <span class='unit-sub'>VENTANAS / ÁRBOLES / ENCHUFES...</span>",
  volume_label: "Volumen",
  system_size_label_html: "Potencia instalación <span class='unit-sub'>SOLAR</span>",
  payment_style_label: "Modalidad de pago",
  client_type_label: "Tipo de cliente",
  urgency_label: "Urgencia",

  // Accordions
  acc_client_info_html: "<span class='acc-icon'>👤</span> Datos del cliente",
  client_name_label: "Nombre del cliente <span class='optional-tag'>OPCIONAL</span>",
  client_name_placeholder: "ej. Juan Pérez / Empresa ABC S.L.",
  quote_ref_label: "Referencia / N.º de pedido <span class='optional-tag'>OPCIONAL</span>",
  quote_ref_placeholder: "ej. PRES-2026-042",
  site_address_label: "Dirección de la obra <span class='optional-tag'>OPCIONAL</span>",
  site_address_placeholder: "ej. Gran Vía 28, 28013 Madrid",
  site_address_hint: "Si es diferente a la dirección de facturación, indíquela aquí.",

  acc_timeline_html: "<span class='acc-icon'>📅</span> Plazos y condiciones de pago",
  start_date_label: "Fecha estimada de inicio <span class='optional-tag'>OPCIONAL</span>",
  duration_label: "Duración estimada <span class='optional-tag'>OPCIONAL</span>",
  duration_placeholder: "ej. 5 días laborables",
  duration_hint: "Dejar en blanco para usar un plazo estándar desde el inicio.",
  custom_payment_label: "Plan de pagos personalizado <span class='optional-tag'>OPCIONAL</span>",
  custom_payment_placeholder: "ej. 25% al aceptar · 35% estructura · 25% instalaciones · 15% entrega",
  custom_payment_hint: "Asignamos valores estándar inteligentes. Escriba aquí para personalizar.",
  custom_warranty_label: "Garantía personalizada <span class='optional-tag'>OPCIONAL</span>",
  custom_warranty_placeholder: "ej. 5 años de garantía en estructura y mano de obra",

  acc_inclusions_html: "<span class='acc-icon'>📋</span> Inclusiones, exclusiones y supuestos",
  included_label: "Qué está INCLUIDO <span class='optional-tag'>UNA POR LÍNEA</span>",
  included_placeholder: "Preparación de la zona y plásticos de protección\nTodos los materiales y fijaciones\nDos capas de sellado protector\nLimpieza y retirada de escombros",
  excluded_label: "Qué NO está incluido <span class='optional-tag'>UNA POR LÍNEA</span>",
  excluded_placeholder: "Dejar en blanco para valores estándar.\nO añada sus exclusiones:\nPermisos municipales y licencias de obra\nRetirada de materiales peligrosos",
  assumptions_label: "Supuestos / Requisitos <span class='optional-tag'>UNA POR LÍNEA</span>",
  assumptions_placeholder: "Dejar en blanco para valores estándar.\nO añada:\nAcceso libre y estacionamiento disponible\nToma de agua y electricidad en obra",

  acc_covernote_html: "<span class='acc-icon'>✉️</span> Nota introductoria para el cliente",
  covernote_label: "Nota personal al inicio del presupuesto <span class='optional-tag'>OPCIONAL</span>",
  covernote_placeholder: "ej. Gracias por consultarnos. Los precios reflejan lo acordado durante nuestra visita técnica del martes. Estamos a su entera disposición para cualquier duda.",
  covernote_hint: "Añade un párrafo introductorio cercano al inicio del documento.",
  btn_generate_quote: "Generar mi presupuesto →",

  // Loading Screen
  loading_title: "Generando su presupuesto...",
  loading_subtitle: "Calculando materiales, horas de trabajo, precios de mercado,<br>hitos de pago y condiciones.",
  loading_step_1: "Analizando la descripción del trabajo...",
  loading_step_2: "Calculando despiece de materiales y mano de obra...",
  loading_step_3: "Aplicando tarifas y calendario de pagos...",
  loading_step_4: "Finalizando el diseño profesional en PDF...",

  // Quote Document View
  ready_title: "Su presupuesto está listo",
  ready_subtitle: "Consejo: haga clic en cualquier línea para editarla antes de imprimir o enviar.",
  btn_print: "🖨️ Imprimir / PDF",
  btn_email: "📋 Copiar como email",
  btn_new_quote: "+ Nuevo presupuesto",
  btn_edit_letterhead: "⚙️ Editar membrete",

  quote_badge: "PRESUPUESTO",
  date_label: "Fecha",
  valid_label: "Validez",
  valid_days_text: "14 días",
  click_to_edit_hint: "<span class='hint-pencil'>✏️</span> Haga clic en cualquier campo para editar antes de imprimir",
  quote_for_label: "PRESUPUESTO PARA",
  reference_label: "REFERENCIA",
  project_label: "PROYECTO",

  materials_heading: "MATERIALES",
  col_item: "CONCEPTO",
  col_qty: "CANTIDAD",
  col_amount: "IMPORTE",
  btn_add_material: "+ Añadir línea de material",

  labour_heading: "MANO DE OBRA",
  col_phase: "FASE DE TRABAJO",
  col_duration: "DURACIÓN",
  btn_add_labour: "+ Añadir línea de mano de obra",

  summary_materials_subtotal: "Subtotal materiales",
  summary_labour_subtotal: "Subtotal mano de obra",
  summary_subtotal: "Base imponible",
  summary_vat: "IVA",
  summary_total: "TOTAL",

  scope_heading: "ALCANCE DE LOS TRABAJOS",
  whats_included_html: "<span class='status-icon green-check'>✔</span> Qué incluye",
  not_included_html: "<span class='status-icon red-cross'>✖</span> Qué no incluye",
  btn_add_inclusion: "+ Añadir inclusión",
  btn_add_exclusion: "+ Añadir exclusión",

  payment_terms_title: "CONDICIONES DE PAGO Y GARANTÍA",
  default_payment_terms: "Plan estándar: 25% a la firma · 40% a mitad de obra · 35% a la entrega final.\nIncluye 2 años de garantía en mano de obra y elementos estructurales.",

  tc_heading: "TÉRMINOS Y CONDICIONES",
  tc_list: [
    { title: "Validez y oferta:", desc: "Este presupuesto tiene una validez de 14 días naturales a partir de la fecha de emisión." },
    { title: "Condiciones de pago:", desc: "Las facturas se abonarán según el calendario acordado. La propiedad de los materiales suministrados corresponde al contratista hasta el pago total." },
    { title: "Modificaciones y extras:", desc: "Cualquier variación o trabajo adicional solicitado durante la ejecución requerirá aprobación por escrito con ajuste de precio previo." },
    { title: "Acceso y suministros:", desc: "El cliente facilitará acceso seguro al inmueble en el horario convenido, así como suministro básico de electricidad y agua." },
    { title: "Imprevistos técnicos:", desc: "Defectos ocultos, humedades no visibles o materiales tóxicos descubiertos tras iniciar la obra requerirán presupuesto independiente." },
    { title: "Garantía:", desc: "Se garantiza la correcta ejecución de los trabajos por el período indicado tras la liquidación del importe total." }
  ],

  signatures_heading: "CONFORMIDAD Y FIRMAS",
  sig_provider_title: "PROVEEDOR DEL SERVICIO",
  sig_authorized_badge: "OFERTA AUTORIZADA",
  sig_rep_label: "Representante:",
  sig_date_label: "Fecha:",
  sig_client_title: "ACEPTACIÓN DEL CLIENTE",
  sig_client_instruction: "Apruebo las especificaciones, alcance, precios y condiciones de este presupuesto:",
  sig_sign_here: "Firma: _________________________________",
  sig_client_name_label: "Nombre del cliente:",
  sig_client_signature: "FIRMA DEL CLIENTE",
  sig_for_contractor: "POR EL CONTRATISTA",
  sig_name_date: "Nombre y fecha",
  footer_generated_by: "Generado por",

  footer_page: "Generado con QuoteWriter · Página 1 de 1",
  toast_copied_email: "📋 ¡Presupuesto copiado al portapapeles en formato email!",
  toast_letterhead_saved: "🎉 ¡Membrete guardado! Su herramienta está lista.",
  toast_quote_ready: "✅ ¡Su presupuesto está listo! Haga clic en cualquier línea para editar.",
  toast_example_loaded: "✨ Ejemplo cargado en el formulario",
  toast_changes_discarded: "↩️ Cambios descartados",
  toast_quote_recreated: "✨ ¡Presupuesto recreado con los nuevos cambios!",
  personal_link_title: "La URL de tu herramienta personal",
  letterhead_saved_tag: "✓ Membrete guardado",
  personal_link_desc: "Guarda este enlace en tus marcadores en tu teléfono o portátil. Cada presupuesto que crees tendrá tu membrete y marca ya cargados.",
  btn_copy_link: "📋 Copiar enlace",
  btn_copied: "✓ ¡Copiado!",
  toast_link_copied: "🔗 ¡Enlace personal copiado al portapapeles! Guárdalo en favoritos.",
  btn_share_link: "🔗 Enlace personal",
  modal_unsaved_title: "Cambios sin guardar",
  modal_unsaved_desc_step1: "Ha realizado cambios en el membrete. ¿Desea guardar los cambios y recrear el presupuesto, o descartarlos?",
  modal_unsaved_desc_step2: "Ha modificado los detalles del presupuesto. ¿Desea guardar los cambios y recrear el presupuesto, o descartarlos?",
  modal_btn_save_recreate: "Guardar y recrear presupuesto",
  modal_btn_discard: "Descartar cambios",
  modal_btn_cancel: "Seguir editando",
  unit_pcs: "uds.",
  select_choose_one: "Seleccionar uno...",
  select_choose: "Seleccionar...",

  email_greeting: "Estimado/a cliente,",
  email_thanks: "Gracias por solicitar presupuesto para el proyecto: {title}.\n\n",
  email_closing: "Atentamente,",

  select_options: {
    industry_trade: [
      // TI y digital
      { value: "Web design & development", label: "Diseño y desarrollo web" },
      { value: "Software & mobile app development", label: "Desarrollo de software y aplicaciones móviles" },
      { value: "IT support, networking & systems", label: "Soporte informático, redes y sistemas" },
      { value: "Cloud infrastructure & cybersecurity", label: "Infraestructura cloud y ciberseguridad" },
      { value: "UI/UX design & digital media", label: "Diseño UI/UX y medios digitales" },
      // Construcción y estructuras
      { value: "General contracting & renovation", label: "Construcción general y reformas" },
      { value: "Masonry & brickwork", label: "Albañilería y cantería" },
      { value: "Concrete & foundations", label: "Hormigón, cimentaciones y soleras" },
      { value: "Civil engineering & excavation", label: "Movimiento de tierras y obra civil" },
      { value: "Demolition & site clearance", label: "Demoliciones y desescombro" },
      // Oficios y acabados
      { value: "Carpentry & joinery", label: "Carpintería y ebanistería" },
      { value: "Roofing & exterior", label: "Cubiertas y tejados" },
      { value: "Kitchen & bathroom remodeling", label: "Reformas de cocinas y baños" },
      { value: "Painting & decorating", label: "Pintura y decoración" },
      { value: "Plastering & drywall", label: "Pladur, yeso y aislamiento" },
      { value: "Flooring & tiling", label: "Pavimentos y alicatados" },
      { value: "Windows, doors & glazing", label: "Ventanas, puertas y acristalamiento" },
      // Instalaciones
      { value: "Electrical & smart home", label: "Electricidad y domótica" },
      { value: "Plumbing & heating", label: "Fontanería y calefacción" },
      { value: "HVAC & air conditioning", label: "Climatización, aire acondicionado y ventilación" },
      { value: "Solar & renewable energy", label: "Energía solar y fotovoltaica" },
      // Exteriores y metal
      { value: "Landscaping & decking", label: "Jardinería y tarimas de exterior" },
      { value: "Fencing & gates", label: "Vallas, cerramientos y cancelas" },
      { value: "Metalwork & welding", label: "Cerrajería, herrería y soldadura" },
      // Servicios
      { value: "Property maintenance & handyman", label: "Mantenimiento de inmuebles y manitas" },
      { value: "Commercial & post-construction cleaning", label: "Limpieza comercial y fin de obra" }
    ],
    payment_style: [
      { value: "auto", label: "Automático (según volumen)" },
      { value: "deposit-stages", label: "Señal e hitos de obra" },
      { value: "50-50", label: "50% inicio / 50% fin de obra" },
      { value: "completion", label: "100% a la finalización" }
    ],
    client_type: [
      { value: "new", label: "Cliente nuevo" },
      { value: "returning", label: "Cliente recurrente" },
      { value: "commercial", label: "Empresa / Administrador de fincas" }
    ],
    job_urgency: [
      { value: "normal", label: "Planificación estándar" },
      { value: "urgent", label: "Urgente (próximas 48h)" },
      { value: "flexible", label: "Flexible / Próximo mes" }
    ],
    avg_job_size: [
      { value: "Under €2,500", label: "Menos de 2.500 €" },
      { value: "€2,500 - €10,000", label: "2.500 € - 10.000 €" },
      { value: "€10,000 - €50,000", label: "10.000 € - 50.000 €" },
      { value: "€50,000+", label: "Más de 50.000 €" }
    ]
  },

  // Quote Job Presets
  templates: {
    deck: {
      title: "Reconstruir terraza de roble 4×6m, incluye demolición de la terraza antigua",
      materials: [
        { name: "Roble macizo calidad premium", sub: "Madera tratada para exterior, cortada a medida", qty: "120 m²", amount: 7685 },
        { name: "Estructura portante y rastreles", sub: "Vigas tratadas C24, pedestales regulables", qty: "según plano", amount: 2795 },
        { name: "Tornillería, fijaciones y sellantes", sub: "Tornillos acero inox A4, grapas invisibles", qty: "partida", amount: 1397 },
        { name: "Tratamiento y lasur protector", sub: "Aceite para teca/roble exterior resistente a rayos UV", qty: "partida", amount: 1118 },
        { name: "Contenedor de residuos y protección", sub: "Retirada de madera antigua y protección del jardín", qty: "1 lote", amount: 978 }
      ],
      labour: [
        { phase: "Preparación del terreno y demolición previa", duration: "1 día", amount: 2562 },
        { phase: "Montaje de estructura e instalación de tarima", duration: "3 días", amount: 11100 },
        { phase: "Aplicación de aceite, sellado y limpieza final", duration: "1 día", amount: 3415 }
      ],
      included: [
        "Suministro de maderas, fijaciones y lasures según memoria técnica",
        "Protección de zonas colindantes y acopio de materiales",
        "Desmontaje de la tarima anterior y desescombro",
        "Limpieza diaria de la zona de trabajo",
        "Gestión de residuos autorizada en punto limpio"
      ],
      excluded: [
        "Movimiento de tierras masivo o cimentación de hormigón",
        "Instalaciones eléctricas o de fontanería enterradas",
        "Pintura de paramentos verticales adyacentes",
        "Tasas municipales de ocupación de vía pública",
        "Cálculos estructurales visados por colegio oficial"
      ]
    },
    kitchen: {
      title: "Montaje de cocina 5×4m, muebles de roble, electrodomésticos integrados",
      materials: [
        { name: "Módulos de cocina y frentes chapados en roble", sub: "Herrajes de cierre amortiguado, premontados en fábrica", qty: "1 conj.", amount: 8450 },
        { name: "Encimera de cuarzo / Silestone", sub: "20mm con rebaje de fregadero bajo encimera y pulido", qty: "8 ml", amount: 3200 },
        { name: "Pack de electrodomésticos integrados", sub: "Placa inducción, horno, campana y lavavajillas", qty: "1 lote", amount: 4600 },
        { name: "Accesorios fontanería y electricidad", sub: "Fregadero, grifo monomando de diseño, tiras LED", qty: "partida", amount: 1450 }
      ],
      labour: [
        { phase: "Desescombro y adecuación de tomas de agua y luz", duration: "2 días", amount: 2800 },
        { phase: "Montaje y nivelado milimétrico de muebles", duration: "3 días", amount: 3900 },
        { phase: "Ajuste de encimera, conexión y puesta en marcha", duration: "2 días", amount: 2400 }
      ],
      included: [
        "Suministro e instalación de todo el mobiliario y encimera",
        "Conexión a tomas existentes de agua, desagüe y electricidad",
        "Pruebas de funcionamiento de todos los electrodomésticos",
        "Limpieza profunda y puesta a punto final"
      ],
      excluded: [
        "Derribo de tabiques maestros o refuerzos con vigas",
        "Desplazamiento de caldera de gas comunitaria",
        "Renovación de solera más allá de pasta niveladora"
      ]
    },
    bath: {
      title: "Reforma integral de baño 6m², desescombro, alicatado nuevo, sanitarios",
      materials: [
        { name: "Gres porcelánico gran formato", sub: "Baldosas rectificadas antideslizantes para suelo y pared", qty: "24 m²", amount: 1850 },
        { name: "Conjunto de sanitarios y grifería", sub: "Mampara ducha, grifo termostático empotrado, inodoro suspendido", qty: "1 lote", amount: 2950 },
        { name: "Kit de impermeabilización y cemento cola flexible", sub: "Membrana impermeable continua para zona de ducha", qty: "partida", amount: 780 }
      ],
      labour: [
        { phase: "Demolición total hasta soporte y desescombro", duration: "1 día", amount: 1250 },
        { phase: "Instalación de tuberías e impermeabilización", duration: "2 días", amount: 2400 },
        { phase: "Alicatado, rejuntado y montaje de sanitarios", duration: "3 días", amount: 3600 }
      ],
      included: [
        "Picado completo de azulejos y retirada de sanitarios antiguos",
        "Certificación de estanqueidad de la zona de ducha",
        "Colocación de alicatado, lechada y griferías",
        "Transporte de escombros a vertedero homologado"
      ],
      excluded: [
        "Tirada de línea eléctrica individual desde cuadro general",
        "Reparación de forjado con carcoma o podredumbre oculta",
        "Suministro de espejos retroiluminados a medida si no se listan"
      ]
    },
    roof: {
      title: "Sustitución de tejado 120m² chapa metálica, 3 claraboyas, canalones",
      materials: [
        { name: "Chapa perfilada / panel sándwich imitación teja", sub: "Acero galvanizado 0.7mm con aislamiento y barrera de vapor", qty: "120 m²", amount: 6900 },
        { name: "Ventanas de tejado / claraboyas con tapajuntas", sub: "Ventanas abatibles de tejado con triple acristalamiento", qty: "3 uds.", amount: 2400 },
        { name: "Lámina impermeable transpirable y rastreles", sub: "Membrana de alta resistencia y rastrel tratado", qty: "1 lote", amount: 1150 },
        { name: "Canalones de aluminio continuo y bajantes", sub: "Perfil circular con soportes reforzados", qty: "28 ml", amount: 1380 }
      ],
      labour: [
        { phase: "Montaje de andamiaje y retirada de tejado antiguo", duration: "2 días", amount: 2850 },
        { phase: "Colocación de lámina, rastreles y fijación de chapa", duration: "4 días", amount: 6400 },
        { phase: "Remates de cumbrera, claraboyas y canalones", duration: "2 días", amount: 2750 }
      ],
      included: [
        "Retirada integral de la cubierta anterior y desescombro",
        "Instalación de nueva cubierta ventilada e impermeabilización",
        "Integración estanca de claraboyas con baberos de plomo/aluminio",
        "Sustitución completa de canalones y bajantes"
      ],
      excluded: [
        "Sustitución de cerchas de madera principales afectadas por carcoma",
        "Rehabilitación integral de chimeneas de obra",
        "Alquiler de andamios fuera del plazo pactado"
      ]
    },
    it: {
      title: "Web corporativa con CMS, portal de clientes, diseño responsive y SEO",
      materials: [
        { name: "Alojamiento cloud, dominio y certificado SSL", sub: "Servidor NVMe de alto rendimiento, CDN y SSL (1 año)", qty: "1 año", amount: 680 },
        { name: "Licencias de CMS, plugins y kit UI", sub: "Licencias comerciales de gestor de contenidos y framework UI", qty: "1 lic.", amount: 950 },
        { name: "Copias de seguridad automatizadas y suite de seguridad", sub: "Backups diarios externos, monitor de actividad y firewall (1 año)", qty: "1 año", amount: 480 }
      ],
      labour: [
        { phase: "Wireframes UI/UX, arquitectura y prototipo interactivo", duration: "5 días", amount: 2600 },
        { phase: "Desarrollo frontend responsive e integración CMS", duration: "8 días", amount: 4200 },
        { phase: "Autenticación portal de clientes y conexión APIs", duration: "5 días", amount: 2800 },
        { phase: "Auditoría de seguridad, indexación SEO y puesta en marcha", duration: "2 días", amount: 1100 }
      ],
      included: [
        "Diseño completamente adaptativo (móvil, tablet, ordenador)",
        "Panel de administración CMS sencillo con gestión de usuarios",
        "Formularios de contacto con avisos automáticos por e-mail",
        "Base técnica de posicionamiento SEO y alta en analítica",
        "30 días de garantía y corrección de incidencias post-lanzamiento"
      ],
      excluded: [
        "Redacción periódica mensual de contenidos y artículos",
        "Costes de consumo de pasarelas de pago o SMS de terceros",
        "Migración manual de datos desde sistemas legados obsoletos"
      ]
    },
    general: {
      title: "Proyecto de reforma y construcción",
      materials: [
        { name: "Materiales principales y herrajes", sub: "Calidad profesional adaptada a especificación", qty: "50 uds.", amount: 3500 },
        { name: "Estructura portante, anclajes y fijaciones", sub: "Elementos de fijación técnica homologados", qty: "partida", amount: 1050 },
        { name: "Tratamientos protectores y consumibles", sub: "Selladores de alta durabilidad y pinturas técnicas", qty: "1 lote", amount: 525 },
        { name: "Protección de obra y contenedor", sub: "Láminas de protección y retirada de residuos", qty: "1 lote", amount: 650 }
      ],
      labour: [
        { phase: "Preparación de obra, replanteo y mediciones", duration: "1 día", amount: 1100 },
        { phase: "Ejecución principal de trabajos especializados", duration: "3 días", amount: 4500 },
        { phase: "Control de calidad, remates y entrega", duration: "1 día", amount: 1250 }
      ],
      included: [
        "Todos los materiales especificados y mano de obra profesional",
        "Limpieza diaria y revisión de entrega con el cliente",
        "Garantías de fabricante y de ejecución"
      ],
      excluded: [
        "Tasas de licencias municipales o proyectos visados",
        "Vicios ocultos detectados tras demoliciones",
        "Trabajos nocturnos o festivos no programados"
      ]
    }
  }
};
