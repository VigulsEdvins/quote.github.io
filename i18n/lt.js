/**
 * i18n/lt.js - Lithuanian Translations for QuoteWriter
 */
window.QuoteI18n = window.QuoteI18n || {};

window.QuoteI18n.Lithuanian = {
  // Navigation
  nav_setup: "1. Blankas",
  nav_generator: "2. Kurti sąmatą",
  nav_quote: "3. Sąmatos peržiūra",
  brand_badge: "su Viguls",

  // Setup / Onboarding
  setup_title: "Gaukite asmeninį <span class='highlight-teal'>Sąmatų generatorių</span>",
  setup_subtitle: "Nustatykite vieną kartą. Išsaugokite nuorodą. Naudokite kiekvienam darbui — įveskite 1 eilutę ir gaukite firminę sąmatą per 30 sekundžių. Nemokamai visam laikui.",
  setup_callout_1: "Užpildę šią formą gausite asmeninę nuorodą su jūsų rekvizitais. Tai <strong>JŪSŲ</strong> įrankis — išsisaugokite jį.",
  business_name_label: "Įmonės / meistro pavadinimas <span class='required'>*</span>",
  business_name_hint: "Rodoma kiekvienos sąmatos viršuje — būtent taip, kaip norite, kad matytų klientai.",
  business_name_placeholder: "pvz., UAB Smith Carpentry",
  user_email_label: "El. paštas <span class='required'>*</span>",
  user_email_placeholder: "info@jusuverslas.lt",
  user_phone_label: "Telefonas <span class='required'>*</span>",
  user_phone_placeholder: "+370 600 00000",
  industry_label: "Veiklos sritis / specialybė <span class='required'>*</span>",
  region_label: "Regionas <span class='required'>*</span>",
  currency_label: "Valiuta",
  vat_label: "PVM (automatiškai pagal regioną)",
  avg_job_size_label: "Vidutinė užsakymo vertė <span class='required'>*</span>",
  quote_language_label: "Sąmatos kalba <span class='required'>*</span>",
  quote_language_hint: "Jūsų sąmatos bus generuojamos šia kalba.",
  letterhead_divider: "JŪSŲ BLANKAS · <span class='highlight-teal'>FIRMINĖMS SĄMATOMS</span>",
  setup_callout_2: "<strong>Pridedama prie kiekvienos sukurtos sąmatos.</strong> Logotipas, įmonės kodas, draudimas — suteikia profesionalų agentūros lygio įvaizdį. Vėliau galima keisti per ⚙.",
  logo_url_label: "Logotipo URL <span class='optional-tag'>NEBŪTINA</span>",
  logo_url_hint: "Vieša nuoroda į jūsų logotipą (kvadratinis ≥200px). Praleidus, bus sukurta monograma iš pavadinimo.",
  logo_url_placeholder: "https://jusuverslas.lt/logo.png",
  business_address_label: "Buveinės / veiklos adresas <span class='optional-tag'>NEBŪTINA</span>",
  business_address_placeholder: "pvz., Gedimino pr. 10, LT-01103 Vilnius, Lietuva",
  license_number_label: "Įmonės / pažymėjimo kodas <span class='optional-tag'>NEBŪTINA</span>",
  license_number_placeholder: "pvz., Įm. k. 302030991",
  tax_id_label: "PVM mokėtojo kodas <span class='optional-tag'>NEBŪTINA</span>",
  tax_id_placeholder: "pvz., LT100003123416",
  insurance_details_label: "Civilinės atsakomybės draudimas <span class='optional-tag'>NEBŪTINA</span>",
  insurance_details_placeholder: "pvz., CA draudimas €1,000,000 (Lietuvos draudimas)",
  trade_memberships_label: "Sertifikatai / Atestatai <span class='optional-tag'>NEBŪTINA</span>",
  trade_memberships_placeholder: "pvz., Atestuotas statybos vadovas · LSA narys",
  tagline_label: "Šūkis po įmonės pavadinimu <span class='optional-tag'>NEBŪTINA</span>",
  tagline_placeholder: "pvz., Kokybiški stogų ir medienos darbai nuo 2014 m.",
  website_label: "Svetainė <span class='optional-tag'>NEBŪTINA</span>",
  website_placeholder: "pvz., www.jusuamatai.lt",
  brand_color_label: "Prekės ženklo spalva <span class='optional-tag'>NEBŪTINA</span>",
  brand_color_hint: "Naudojama sąmatos akcentams. Pagal nutylėjimą Viguls tamsiai žalia.",
  agree_consent: "Sutinku, kad Viguls atsiųstų nuorodą į mano įrankį. <a href='#privacy' class='text-link' id='privacy-link'>Privatumas</a>",
  btn_get_tool: "Gauti asmeninį įrankį →",

  // Generator Screen
  gen_callout: "<strong>Jūsų įrankis · paruoštas</strong><br>Aprašykite darbą. Pridėkite papildomų parametrų jei reikia. Sąmata sukuriama per 30 sekundžių.",
  gen_title_html: "Kokia <span class='highlight-teal'>kita sąmata,</span> <span id='gen-name-display'>{name}</span>?",
  gen_subtitle: "Užtenka tik darbo aprašymo. Atverkite „Daugiau parinkčių“, jei norite nurodyti kliento vardą, objekto adresą ar specialias sąlygas.",
  job_desc_label: "Darbų aprašymas <span class='required'>*</span>",
  job_desc_placeholder: "pvz., Ąžuolo terasos 4x6m montavimas, senos terasos išardymas ir utilizavimas",
  job_desc_hint: "Nurodykite matmenis, medžiagas ir papildomus reikalavimus. Pavyzdžiai žemiau.",
  group_it_digital: "Informacinės technologijos (IT) ir skaitmeninės paslaugos",
  group_construction: "Statyba ir konstrukcijos",
  group_trades_interiors: "Apdailos, stalių darbai ir interjeras",
  group_mep_energy: "Inžinerinės sistemos, elektra ir santechnika",
  group_outdoor_metal: "Aplinkotvarka, tvoros ir metalo darbai",
  group_property_facility: "Pastatų priežiūra ir valymas",

  chip_deck: "Ąžuolo terasos 4x6m montavimas, senos terasos išardymas ir utilizavimas",
  chip_kitchen: "Virtuvės montavimas 5x4m, ąžuolo lukštas, integruota buitinė technika",
  chip_bath: "Vonios kambario remontas 6m², plytelės, santechnika, hidroizoliacija",
  chip_roof: "Stogo keitimas 120m² skarda, 3 stoglangiai, latakai",
  chip_it: "Įmonės svetainė su TVS, klientų savitarna, prisitaikančiu dizainu ir SEO",
  sizing_divider: "DARBŲ APIMTIS · <span class='highlight-teal'>NEBŪTINA, TIKSLUMUI</span>",
  sizing_warning: "<strong>Užpildykite taikomus laukus, kitus praleiskite.</strong> Užtenka vieno lauko.",
  area_label: "Plotas",
  length_label: "Ilgis",
  pieces_label_html: "Kiekis <span class='unit-sub'>LANGAI / MEDŽIAI / ROZETĖS...</span>",
  volume_label: "Tūris",
  system_size_label_html: "Galia <span class='unit-sub'>SAULĖS JĖGAINĖS</span>",
  payment_style_label: "Mokėjimo modelis",
  client_type_label: "Kliento tipas",
  urgency_label: "Skuba",

  // Accordions
  acc_client_info_html: "<span class='acc-icon'>👤</span> Kliento duomenys",
  client_name_label: "Kliento vardas / Įmonė <span class='optional-tag'>NEBŪTINA</span>",
  client_name_placeholder: "pvz., Jonas Jonaitis / UAB Verslas",
  quote_ref_label: "Nuorodos / Užsakymo Nr. <span class='optional-tag'>NEBŪTINA</span>",
  quote_ref_placeholder: "pvz., UŽS-2026-042",
  site_address_label: "Objekto / darbų adresas <span class='optional-tag'>NEBŪTINA</span>",
  site_address_placeholder: "pvz., Gedimino pr. 12, Vilnius",
  site_address_hint: "Jei skiriasi nuo kliento sąskaitos adreso.",

  acc_timeline_html: "<span class='acc-icon'>📅</span> Terminai ir apmokėjimo sąlygos",
  start_date_label: "Planuojama pradžios data <span class='optional-tag'>NEBŪTINA</span>",
  duration_label: "Numatoma trukmė <span class='optional-tag'>NEBŪTINA</span>",
  duration_placeholder: "pvz., 5 darbo dienos",
  duration_hint: "Palikite tuščią standartiniam grafikui nuo patvirtinimo.",
  custom_payment_label: "Individualus mokėjimų grafikas <span class='optional-tag'>NEBŪTINA</span>",
  custom_payment_placeholder: "pvz., 25% avansas · 35% karkasas · 25% apdaila · 15% priduodant",
  custom_payment_hint: "Priskiriame standartinį grafiką. Įveskite savo pakeitimams.",
  custom_warranty_label: "Garantinis laikotarpis <span class='optional-tag'>NEBŪTINA</span>",
  custom_warranty_placeholder: "pvz., 5 metų garantija konstrukcijai ir meistrų darbui",

  acc_inclusions_html: "<span class='acc-icon'>📋</span> Įskaičiuota, neįskaičiuota, prielaidos",
  included_label: "Kas ĮSKAIČIUOTA <span class='optional-tag'>PO VIENĄ EILUTĖJE</span>",
  included_placeholder: "Aikštelės paruošimas ir apsauginės plėvelės\nVisos medžiagos ir tvirtinimo detalės\nDvigubas alyvavimo padengimas\nStatybinio laužo išvežimas",
  excluded_label: "Kas NEĮSKAIČIUOTA <span class='optional-tag'>PO VIENĄ EILUTĖJE</span>",
  excluded_placeholder: "Palikite tuščią standartui.\nArba įrašykite:\nStatybos leidimai ir mokesčiai\nPavojingų atliekų šalinimas",
  assumptions_label: "Prielaidos ir reikalavimai <span class='optional-tag'>PO VIENĄ EILUTĖJE</span>",
  assumptions_placeholder: "Palikite tuščią standartui.\nArba įrašykite:\nLaisvas privažiavimas prie objekto\nElektros ir vandens įvadas vietoje",

  acc_covernote_html: "<span class='acc-icon'>✉️</span> Lydraštis klientui",
  covernote_label: "Asmeninė žinutė sąmatos pradžioje <span class='optional-tag'>NEBŪTINA</span>",
  covernote_placeholder: "pvz., Dėkojame už kreipimąsi. Kainos atitinka antradienį apžiūros metu aptartą specifikaciją. Mielai atsakysime į visus klausimus.",
  covernote_hint: "Prideda draugišką įžangos pastraipą virš lentelės.",
  btn_generate_quote: "Generuoti mano sąmatą →",

  // Loading Screen
  loading_title: "Kuriama jūsų sąmata...",
  loading_subtitle: "Skaičiuojamos medžiagos, meistrų darbo valandos, kainos,<br>mokėjimo etapai ir sąlygos.",
  loading_step_1: "Analizuojamas darbų aprašymas...",
  loading_step_2: "Skaičiuojamos medžiagos ir darbo laikas...",
  loading_step_3: "Taikomos regioninės kainos ir etapai...",
  loading_step_4: "Generuojamas PDF dokumentas...",

  // Quote Document View
  ready_title: "Jūsų sąmata paruošta",
  ready_subtitle: "Patarimas: spustelėkite bet kurią eilutę, kad ją paredaguotumėte prieš spausdinant.",
  btn_print: "🖨️ Spausdinti / PDF",
  btn_email: "📋 Kopijuoti el. laiškui",
  btn_new_quote: "+ Nauja sąmata",
  btn_edit_letterhead: "⚙️ Redaguoti blanką",

  quote_badge: "SĄMATA",
  date_label: "Data",
  valid_label: "Galioja",
  valid_days_text: "14 dienų",
  click_to_edit_hint: "<span class='hint-pencil'>✏️</span> Spustelėkite bet kurį lauką, kad pataisytumėte",
  quote_for_label: "SĄMATA KLIENTUI",
  reference_label: "UŽSAKYMO NR.",
  project_label: "PROJEKTAS",

  materials_heading: "MEDŽIAGOS IR DETALĖS",
  col_item: "PAVADINIMAS",
  col_qty: "KIEKIS",
  col_amount: "SUMA",
  btn_add_material: "+ Pridėti medžiagų eilutę",

  labour_heading: "DARBAI IR MONTAVIMAS",
  col_phase: "DARBŲ ETAPAS",
  col_duration: "TRUKMĖ",
  btn_add_labour: "+ Pridėti darbų eilutę",

  summary_materials_subtotal: "Medžiagos iš viso",
  summary_labour_subtotal: "Darbai iš viso",
  summary_subtotal: "Suma be PVM",
  summary_vat: "PVM",
  summary_total: "IŠ VISO APMOKĖJIMUI",

  scope_heading: "DARBŲ APIMTIS",
  whats_included_html: "<span class='status-icon green-check'>✔</span> Kas įskaičiuota",
  not_included_html: "<span class='status-icon red-cross'>✖</span> Neįskaičiuota",
  btn_add_inclusion: "+ Pridėti įskaičiuotą",
  btn_add_exclusion: "+ Pridėti neįskaičiuotą",

  payment_terms_title: "MOKĖJIMO SĄLYGOS IR GARANTIJA",
  default_payment_terms: "Standartinis grafikas: 25% avansas pasirašius · 40% darbų viduryje · 35% atlikus darbus.\nSuteikiama 2 metų meistro garantija visoms konstrukcijoms.",

  tc_heading: "SĄLYGOS IR REIKALAVIMAI",
  tc_list: [
    { title: "Galiojimas ir pasiūlymas:", desc: "Ši sąmata galioja 14 kalendorinių dienų nuo jos išdavimo dienos." },
    { title: "Apmokėjimo tvarka:", desc: "Sąskaitos apmokamos pagal suderintą grafiką. Medžiagos lieka vykdytojo nuosavybe iki visiško atsiskaitymo." },
    { title: "Pakeitimai ir papildomi darbai:", desc: "Bet kokie pakeitimai ar papildomi darbai derinami raštu su kainos patikslinimu prieš juos pradedant." },
    { title: "Prieiga ir komunikacijos:", desc: "Užsakovas užtikrina saugią prieigą prie objekto darbo metu bei elektros ir vandens tiekimą." },
    { title: "Nenumatytos aplinkybės:", desc: "Paslėpti defektai, puvinys ar konstrukcijų pažeidimai, nematyti pirminės apžiūros metu, skaičiuojami atskirai." },
    { title: "Garantija:", desc: "Atliktiems darbams suteikiama garantija po visiško tarpusavio atsiskaitymo." }
  ],

  signatures_heading: "PATVIRTINIMAS IR PARAŠAI",
  sig_provider_title: "PASLAUGŲ TEIKĖJAS",
  sig_authorized_badge: "AUTORIZUOTAS PASIŪLYMAS",
  sig_rep_label: "Atstovas:",
  sig_date_label: "Data:",
  sig_client_title: "KLIENTO PATVIRTINIMAS",
  sig_client_instruction: "Tvirtinu šios sąmatos specifikaciją, darbų apimtį, kainas ir sąlygas:",
  sig_sign_here: "Parašas: _________________________________",
  sig_client_name_label: "Kliento vardas, pavardė:",
  sig_client_signature: "KLIENTO PARAŠAS",
  sig_for_contractor: "VYKDYTOJAS",
  sig_name_date: "Vardas, pavardė ir data",
  footer_generated_by: "Sukurta su",

  footer_page: "Sukurta su QuoteWriter · 1 psl. iš 1",
  toast_copied_email: "📋 Sąmata nukopijuota el. laiško formatu!",
  toast_letterhead_saved: "🎉 Blankas išsaugotas! Įrankis paruoštas.",
  toast_quote_ready: "✅ Sąmata paruošta! Spustelėkite norėdami redaguoti.",
  toast_example_loaded: "✨ Pavyzdys įkeltas į formą",
  toast_changes_discarded: "↩️ Pakeitimai atmesti",
  toast_quote_recreated: "✨ Sąmata atnaujinta su naujais duomenimis!",
  personal_link_title: "Jūsų asmeninio įrankio nuoroda",
  letterhead_saved_tag: "✓ Firminis blankas išsaugotas",
  personal_link_desc: "Išsaugokite šią nuorodą žymėse telefone ar kompiuteryje. Kiekvienoje sąmatoje jau bus įkelti jūsų įmonės rekvizitai.",
  btn_copy_link: "📋 Kopijuoti nuorodą",
  btn_copied: "✓ Nukopijuota!",
  toast_link_copied: "🔗 Asmeninė nuoroda nukopijuota į iškarpinę! Išsaugokite ją žymėse.",
  btn_share_link: "🔗 Asmeninė nuoroda",
  modal_unsaved_title: "Neišsaugoti pakeitimai",
  modal_unsaved_desc_step1: "Pakeitėte įmonės rekvizitus. Ar norite išsaugoti pakeitimus ir atnaujinti sąmatą, ar juos atmesti?",
  modal_unsaved_desc_step2: "Pakeitėte sąmatos duomenis. Ar norite išsaugoti pakeitimus ir atnaujinti sąmatą, ar juos atmesti?",
  modal_btn_save_recreate: "Išsaugoti ir atnaujinti sąmatą",
  modal_btn_discard: "Atmesti pakeitimus",
  modal_btn_cancel: "Tęsti redagavimą",
  unit_pcs: "vnt.",
  select_choose_one: "Pasirinkite...",
  select_choose: "Pasirinkite...",

  email_greeting: "Laba diena,",
  email_thanks: "Dėkojame už galimybę pateikti sąmatą projektui: {title}.\n\n",
  email_closing: "Pagarbiai,",

  select_options: {
    industry_trade: [
      // IT ir skaitmeninės paslaugos
      { value: "Web design & development", label: "Svetainių kūrimas ir programavimas" },
      { value: "Software & mobile app development", label: "Programinės įrangos ir mobiliųjų programėlių kūrimas" },
      { value: "IT support, networking & systems", label: "IT priežiūra, kompiuterių tinklai ir sistemos" },
      { value: "Cloud infrastructure & cybersecurity", label: "Debesų kompiuterija ir kibernetinis saugumas" },
      { value: "UI/UX design & digital media", label: "UI/UX dizainas ir skaitmeninė medija" },
      // Statyba ir konstrukcijos
      { value: "General contracting & renovation", label: "Bendrieji statybos ir remonto darbai" },
      { value: "Masonry & brickwork", label: "Mūro ir akmens apdirbimo darbai" },
      { value: "Concrete & foundations", label: "Betonavimas ir pamatų liejimas" },
      { value: "Civil engineering & excavation", label: "Žemės darbai ir inžineriniai tinklai" },
      { value: "Demolition & site clearance", label: "Griovimo ir atliekų išvežimo darbai" },
      // Apdaila ir specialieji darbai
      { value: "Carpentry & joinery", label: "Stalių ir medienos darbai" },
      { value: "Roofing & exterior", label: "Stogų ir fasadų darbai" },
      { value: "Kitchen & bathroom remodeling", label: "Virtuvės ir vonios kambario remontas" },
      { value: "Painting & decorating", label: "Dažymas ir vidaus apdaila" },
      { value: "Plastering & drywall", label: "Gipskartonis, tinkavimas ir izoliacija" },
      { value: "Flooring & tiling", label: "Grindų danga ir plytelių klojimas" },
      { value: "Windows, doors & glazing", label: "Langai, durys ir stiklinimas" },
      // Inžinerija
      { value: "Electrical & smart home", label: "Elektros instaliacija ir išmanūs namai" },
      { value: "Plumbing & heating", label: "Santechnika ir šildymas" },
      { value: "HVAC & air conditioning", label: "Vėdinimas ir kondicionavimas" },
      { value: "Solar & renewable energy", label: "Saulės elektrinės ir energetika" },
      // Aplinka ir metalas
      { value: "Landscaping & decking", label: "Aplinkotvarka ir terasos" },
      { value: "Fencing & gates", label: "Tvoros, vartai ir aptvėrimai" },
      { value: "Metalwork & welding", label: "Metalo apdirbimas ir suvirinimas" },
      // Paslaugos
      { value: "Property maintenance & handyman", label: "Pastatų priežiūra ir meistro paslaugos" },
      { value: "Commercial & post-construction cleaning", label: "Komercinių patalpų ir postatybinis valymas" }
    ],
    payment_style: [
      { value: "auto", label: "Automatiškai (pagal apimtį)" },
      { value: "deposit-stages", label: "Avansas ir tarpiniai mokėjimai" },
      { value: "50-50", label: "50% avansas / 50% pabaigus" },
      { value: "completion", label: "100% po pridavimo" }
    ],
    client_type: [
      { value: "new", label: "Naujas klientas" },
      { value: "returning", label: "Esamas klientas" },
      { value: "commercial", label: "Verslo klientas / Administratorius" }
    ],
    job_urgency: [
      { value: "normal", label: "Įprastas grafikas" },
      { value: "urgent", label: "Skubus (per 48 val.)" },
      { value: "flexible", label: "Lankstus / Kitą mėnesį" }
    ],
    avg_job_size: [
      { value: "Under €2,500", label: "Iki 2 500 €" },
      { value: "€2,500 - €10,000", label: "2 500 € - 10 000 €" },
      { value: "€10,000 - €50,000", label: "10 000 € - 50 000 €" },
      { value: "€50,000+", label: "Daugiau nei 50 000 €" }
    ]
  },

  templates: {
    deck: {
      title: "Ąžuolo terasos 4×6m montavimas, senos terasos išardymas ir utilizavimas",
      materials: [
        { name: "Aukščiausios kokybės ąžuolo terasinės lentos", sub: "Impregnuota kokybiška mediena, supjauta pagal planą", qty: "120 m²", amount: 7685 },
        { name: "Laikantysis karkasas ir gulekšniai", sub: "C24 graduota mediena, reguliuojamos atramos", qty: "pagal proj.", amount: 2795 },
        { name: "Tvirtinimo elementai ir varžtai", sub: "Nerūdijančio plieno A4 varžtai, paslėpti fiksatoriai", qty: "kompl.", amount: 1397 },
        { name: "Apsauginė alyva ir apdaila", sub: "UV atspari natūrali lauko terasų alyva", qty: "kompl.", amount: 1118 },
        { name: "Statybinis konteineris ir aplinkos apsauga", sub: "Senų medienos konstrukcijų išvežimas ir vejos apsauga", qty: "1 vnt.", amount: 978 }
      ],
      labour: [
        { phase: "Aikštelės paruošimas ir senos terasos ardymas", duration: "1 diena", amount: 2562 },
        { phase: "Karkaso montavimas ir lentų klojimas", duration: "3 dienos", amount: 11100 },
        { phase: "Alyvavimas, siūlių sandarinimas ir valymas", duration: "1 diena", amount: 3415 }
      ],
      included: [
        "Visų specifikacijoje nurodytų medžiagų ir tvirtinimų tiekimas",
        "Gretimų zonų apsauga plėvelėmis ir skydais",
        "Senos terasos demontavimas ir utilizavimas",
        "Kasdienis darbo vietos sutvarkymas",
        "Statybinių atliekų pridavimas į aikšteles"
      ],
      excluded: [
        "Gilinimo ar polių gręžimo darbai uolienose",
        "Elektros instaliacijos ar apšvietimo montavimas",
        "Statybos leidimų gavimas savivaldybėje"
      ]
    },
    kitchen: {
      title: "Virtuvės montavimas 5×4m, ąžuolo lukštas, integruota buitinė technika",
      materials: [
        { name: "Spintelių korpusai ir ąžuolo lukšto fasadai", sub: "Švelnaus uždarymo furnitūra, gamyklinis surinkimas", qty: "1 kompl.", amount: 8450 },
        { name: "Kvarco kompozito stalviršis", sub: "20mm su integruota kriauklės išpjova ir poliravimu", qty: "8 m", amount: 3200 },
        { name: "Integruojamos technikos komplektas", sub: "Indukcinė kaitlentė, orkaitė, gartraukis, indaplovė", qty: "1 kompl.", amount: 4600 },
        { name: "Santechnikos ir elektros detalės", sub: "Plautuvė, maišytuvas, LED juostos po spintelėmis", qty: "kompl.", amount: 1450 }
      ],
      labour: [
        { phase: "Ardymo darbai, vandentiekio ir elektros taškų perkėlimas", duration: "2 dienos", amount: 2800 },
        { phase: "Baldų surinkimas, lygiavimas ir tvirtinimas", duration: "3 dienos", amount: 3900 },
        { phase: "Stalviršio montavimas ir technikos pajungimas", duration: "2 dienos", amount: 2400 }
      ],
      included: [
        "Visų baldų atvežimas ir montavimas",
        "Pajungimas prie esamų vandentiekio ir elektros taškų",
        "Prietaisų veikimo patikrinimas",
        "Išvalymas ir šiukšlių išvežimas"
      ],
      excluded: [
        "Nešančiųjų sienų griovimas ar angų kirtimas",
        "Dujotiekio ar katilų perkėlimas",
        "Grindų betonavimas"
      ]
    },
    bath: {
      title: "Vonios kambario remontas 6m², plytelės, santechnika, hidroizoliacija",
      materials: [
        { name: "Didelio formato akmens masės plytelės", sub: "Rektifikuotos neslidžios sienų ir grindų plytelės", qty: "24 m²", amount: 1850 },
        { name: "Santechnikos prietaisų komplektas", sub: "Dušo stiklas, potinkinis maišytuvas, pakabinamas WC", qty: "1 kompl.", amount: 2950 },
        { name: "Hidroizoliacijos sistema ir klijai", sub: "Tepama hidroizoliacinė membrana dušo zonai", qty: "kompl.", amount: 780 }
      ],
      labour: [
        { phase: "Visiškas ardymas iki konstrukcijų ir išvežimas", duration: "1 diena", amount: 1250 },
        { phase: "Vamzdynų montavimas ir hidroizoliavimas", duration: "2 dienos", amount: 2400 },
        { phase: "Plytelių klojimas, glaistymas ir prietaisų montavimas", duration: "3 dienos", amount: 3600 }
      ],
      included: [
        "Senų plytelių ir santechnikos išardymas",
        "Patikima drėgnų zonų hidroizoliacija",
        "Plytelių klijavimas ir silikonizavimas",
        "Statybinio laužo išvežimas"
      ],
      excluded: [
        "Atskiro kabelio tiesimas iš skydinės",
        "Supuvusių perdangų stiprinimas",
        "Veidrodžiai su LED pašvietimu, jei nenurodyti"
      ]
    },
    roof: {
      title: "Stogo keitimas 120m² skarda, 3 stoglangiai, latakai",
      materials: [
        { name: "Plieninė stogo danga / profiliuota skarda", sub: "0.7mm padengtas plienas su antikondensacine plėve", qty: "120 m²", amount: 6900 },
        { name: "Stoglangiai su hidroizoliaciniais apsiuvais", sub: "Trigubo stiklo paketo energetiškai efektyvūs langai", qty: "3 vnt.", amount: 2400 },
        { name: "Difuzinė plėvelė ir impregnuoti grebėstai", sub: "Didelio tankio garui pralaidi stogo plėvelė", qty: "1 kompl.", amount: 1150 },
        { name: "Besiūlė aliuminio lietaus nuvedimo sistema", sub: "Gilaus profilio latakai ir lietvamzdžiai su laikikliais", qty: "28 m", amount: 1380 }
      ],
      labour: [
        { phase: "Pastolių statymas ir senos dangos nuėmimas", duration: "2 dienos", amount: 2850 },
        { phase: "Plėvelės tiesimas, grebėstavimas ir skardos klojimas", duration: "4 dienos", amount: 6400 },
        { phase: "Stoglangių įstatymas, skardinimas ir latakai", duration: "2 dienos", amount: 2750 }
      ],
      included: [
        "Senos stogo dangos nuardymas ir utilizavimas",
        "Kokybiškas vėdinamos stogo konstrukcijos įrengimas",
        "Sandarus stoglangių integravimas",
        "Lietaus nuvedimo sistemos sumontavimas"
      ],
      excluded: [
        "Supuvusių gegnių ar mūrtašių keitimas",
        "Kaminų mūrijimas ar remontas",
        "Pastolių nuoma po sutarto termino"
      ]
    },
    it: {
      title: "Įmonės svetainė su TVS, klientų savitarna, prisitaikančiu dizainu ir SEO",
      materials: [
        { name: "Debesų serveris, domenas ir SSL sertifikatas", sub: "Spartusis NVMe debesų serveris, CDN tinklas ir SSL (1 metai)", qty: "1 m.", amount: 680 },
        { name: "TVS, įskiepių ir UI komponentų licencijos", sub: "Komercinės TVS licencijos, UI dizaino biblioteka ir saugumo modulis", qty: "1 lic.", amount: 950 },
        { name: "Automatinis atsarginių kopijų darymas ir stebėsena", sub: "Kasdienės nutolusios kopijos, veikimo stebėjimas ir ugniasienė (1 metai)", qty: "1 m.", amount: 480 }
      ],
      labour: [
        { phase: "UI/UX prototipų kūrimas, architektūra ir dizainas", duration: "5 dienos", amount: 2600 },
        { phase: "Frontend prisitaikantis programavimas ir TVS integracija", duration: "8 dienos", amount: 4200 },
        { phase: "Klientų zonos autorizacija ir API integracijos", duration: "5 dienos", amount: 2800 },
        { phase: "Kibernetinio saugumo patikra, SEO indeksavimas ir startas", duration: "2 dienos", amount: 1100 }
      ],
      included: [
        "100% prisitaikantis dizainas visiems ekranams (telefonams, planšetėms, kompiuteriams)",
        "Patogus TVS valdymo skydelis su naudotojų teisių administravimu",
        "Interaktyvios užklausų formos su el. pašto pranešimais",
        "Techninė SEO bazė ir Google Analytics pajungimas",
        "30 dienų garantinė priežiūra ir klaidų taisymas po paleidimo"
      ],
      excluded: [
        "Nuolatinis kasmėnesinis tekstų rašymas ir turinio pildymas",
        "Mokamų trečiųjų šalių API (SMS vartai, bankiniai moduliai) abonementai",
        "Rankinis duomenų perkėlimas iš nestruktūrizuotų pasenusių sistemų"
      ]
    },
    general: {
      title: "Statybos ir renovacijos projektas",
      materials: [
        { name: "Pagrindinės medžiagos ir tvirtinimai", sub: "Sertifikuota meistrų kokybė pagal projektą", qty: "50 vnt.", amount: 3500 },
        { name: "Laikančiosios konstrukcijos ir ankeriai", sub: "Statybiniai patikrinti tvirtinimo mazgai", qty: "kompl.", amount: 1050 },
        { name: "Apsauginės dangos, hermetikai ir medžiagos", sub: "Elastingi profesionalūs hermetikai ir dažai", qty: "1 kompl.", amount: 525 },
        { name: "Objekto apsauga ir šiukšlių konteineris", sub: "Apsauginės plėvelės ir atliekų išvežimas", qty: "1 kompl.", amount: 650 }
      ],
      labour: [
        { phase: "Paruošimas, matavimai ir planavimas", duration: "1 diena", amount: 1100 },
        { phase: "Pagrindiniai statybos ir montavimo darbai", duration: "3 dienos", amount: 4500 },
        { phase: "Kokybės patikra ir objekto pridavimas", duration: "1 diena", amount: 1250 }
      ],
      included: [
        "Visos medžiagos pagal sąmatą ir sertifikuotų meistrų darbas",
        "Tarpiniai patikrinimai ir galutinis pridavimas",
        "Atliktų darbų ir medžiagų garantija"
      ],
      excluded: [
        "Leidimų ar ekspertizių mokesčiai",
        "Paslėpti avariniai konstrukcijų defektai",
        "Nenumatyti savaitgalio ar naktiniai darbai"
      ]
    }
  }
};
