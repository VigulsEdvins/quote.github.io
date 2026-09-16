/**
 * i18n/et.js - Estonian Translations for QuoteWriter
 */
window.QuoteI18n = window.QuoteI18n || {};

window.QuoteI18n.Estonian = {
  // Navigation
  nav_setup: "1. Päis",
  nav_generator: "2. Koosta pakkumine",
  nav_quote: "3. Hinnapakkumise eelvaade",
  brand_badge: "Vigulsilt",

  // Setup / Onboarding
  setup_title: "Hankige oma <span class='highlight-teal'>isiklik Hinnapakkumiste koostaja</span>",
  setup_subtitle: "Seadistage üks kord. Salvestage URL järjehoidjasse. Kasutage iga töö jaoks — sisestage 1 rida ja saate professionaalse pakkumise 30 sekundiga. Igavesti tasuta.",
  setup_callout_1: "Pärast vormi täitmist saate isikliku lingi oma andmetega. See on <strong>TEIE</strong> tööriist — salvestage see.",
  business_name_label: "Ettevõtte / meistri nimi <span class='required'>*</span>",
  business_name_hint: "Kuvatakse iga pakkumise päises täpselt nii, nagu kliendid seda nägema peaksid.",
  business_name_placeholder: "nt. Smith Carpentry OÜ",
  user_email_label: "Teie e-post <span class='required'>*</span>",
  user_email_placeholder: "info@ettevote.ee",
  user_phone_label: "Telefon <span class='required'>*</span>",
  user_phone_placeholder: "+372 5000 0000",
  industry_label: "Valdkond / tegevusala <span class='required'>*</span>",
  region_label: "Piirkond <span class='required'>*</span>",
  currency_label: "Valuuta",
  vat_label: "Käibemaks (automaatne)",
  avg_job_size_label: "Keskmine projekti maht <span class='required'>*</span>",
  quote_language_label: "Pakkumise keel <span class='required'>*</span>",
  quote_language_hint: "Teie hinnapakkumised koostatakse selles keeles.",
  letterhead_divider: "TEIE PÄIS · <span class='highlight-teal'>BRÄNDITUD PAKKUMISTELE</span>",
  setup_callout_2: "<strong>Lisatakse igale koostatud pakkumisele.</strong> Logo, registrikood, kindlustus — loob tipptasemel professionaalse mulje. Saate seda hiljem muuta ikooni ⚙ kaudu.",
  logo_url_label: "Logo URL <span class='optional-tag'>VALIKULINE</span>",
  logo_url_hint: "Avalik link logole (ruut ≥200px). Kui jätate tühjaks, luuakse nime põhjal monogramm.",
  logo_url_placeholder: "https://ettevote.ee/logo.png",
  business_address_label: "Aadress <span class='optional-tag'>VALIKULINE</span>",
  business_address_placeholder: "nt. Tartu mnt 25, 10117 Tallinn, Eesti",
  license_number_label: "Registrikood / litsents <span class='optional-tag'>VALIKULINE</span>",
  license_number_placeholder: "nt. Reg. kood 12345678",
  tax_id_label: "KMKR number <span class='optional-tag'>VALIKULINE</span>",
  tax_id_placeholder: "nt. EE100012345",
  insurance_details_label: "Vastutuskindlustus <span class='optional-tag'>VALIKULINE</span>",
  insurance_details_placeholder: "nt. Tsiviilvastutuskindlustus €1,000,000 (Ergo)",
  trade_memberships_label: "Sertifikaadid / Liidud <span class='optional-tag'>VALIKULINE</span>",
  trade_memberships_placeholder: "nt. Kutsetunnistusega ehitusjuht · EEEL liige",
  tagline_label: "Hüüdlause ettevõtte nime all <span class='optional-tag'>VALIKULINE</span>",
  tagline_placeholder: "nt. Usaldusväärsed katusetööd ja puitkonstruktsioonid aastast 2014",
  website_label: "Koduleht <span class='optional-tag'>VALIKULINE</span>",
  website_placeholder: "nt. www.ettevote.ee",
  brand_color_label: "Brändi värv <span class='optional-tag'>VALIKULINE</span>",
  brand_color_hint: "Kasutatakse pakkumise aktsentideks. Vaikimisi Viguls roheline.",
  agree_consent: "Nõustun lingi saamisega oma tööriistale. <a href='#privacy' class='text-link' id='privacy-link'>Privaatsus</a>",
  btn_get_tool: "Hangi oma isiklik tööriist →",

  // Generator Screen
  gen_callout: "<strong>Teie tööriist · eeltäidetud</strong><br>Kirjeldage tööd. Lisage soovi korral lisadetaile. Valmib 30 sekundiga.",
  gen_title_html: "Mis on <span class='highlight-teal'>järgmine pakkumine,</span> <span id='gen-name-display'>{name}</span>?",
  gen_subtitle: "Piisab vaid töö kirjeldusest. Avage \"Lisavalikud\", et lisada kliendi nimi, objekti aadress või maksetingimused.",
  job_desc_label: "Töö kirjeldus <span class='required'>*</span>",
  job_desc_placeholder: "nt. Tammepuidust terrassi ehitus 4x6m, vana terrassi lammutus ja utiliseerimine",
  job_desc_hint: "Märkige mõõdud, materjalid ja lisatööd. Näited allpool.",
  group_it_digital: "Infotehnoloogia (IT) ja digiteenused",
  group_construction: "Ehitus ja kandekonstruktsioonid",
  group_trades_interiors: "Siseviimistlus ja eritööd",
  group_mep_energy: "Tehnovõrgud, elekter ja küte",
  group_outdoor_metal: "Haljastus, piirded ja metallitööd",
  group_property_facility: "Kinnisvarahooldus ja puhastusteenused",

  chip_deck: "Tammepuidust terrassi ehitus 4x6m, vana lammutus ja utiliseerimine",
  chip_kitchen: "Köögi paigaldus 5x4m, tammespoon, integreeritud kodumasinad",
  chip_bath: "Vannitoa remont 6m², plaatimine, sanitaartehnika, hüdroisolatsioon",
  chip_roof: "Katuse vahetus 120m² valtsplekk, 3 katuseakent, vihmaveesüsteem",
  chip_it: "Ettevõtte veebileht koos CMS-i, kliendiportaali, kohanduva disaini ja SEO-ga",
  sizing_divider: "TÖÖ MAHT · <span class='highlight-teal'>VALIKULINE, TÄPSEMAKS HINNANGUKS</span>",
  sizing_warning: "<strong>Täitke sobivad väljad, ülejäänu jätke tühjaks.</strong> Piisab ühest väljast.",
  area_label: "Pindala",
  length_label: "Pikkus",
  pieces_label_html: "Kogus <span class='unit-sub'>AKNAD / PUUD / PISTIKUD...</span>",
  volume_label: "Maht",
  system_size_label_html: "Võimsus <span class='unit-sub'>PÄIKESEPANEELID</span>",
  payment_style_label: "Makseviis",
  client_type_label: "Kliendi tüüp",
  urgency_label: "Kiirus",

  // Accordions
  acc_client_info_html: "<span class='acc-icon'>👤</span> Kliendi andmed",
  client_name_label: "Kliendi nimi / Ettevõte <span class='optional-tag'>VALIKULINE</span>",
  client_name_placeholder: "nt. Jaan Tamm / OÜ ABC Grupp",
  quote_ref_label: "Viitenumber / Tellimuse nr <span class='optional-tag'>VALIKULINE</span>",
  quote_ref_placeholder: "nt. TELL-2026-042",
  site_address_label: "Objekti aadress <span class='optional-tag'>VALIKULINE</span>",
  site_address_placeholder: "nt. Pärnu mnt 15, Tallinn",
  site_address_hint: "Kui erineb arve aadressist.",

  acc_timeline_html: "<span class='acc-icon'>📅</span> Ajakava ja maksetingimused",
  start_date_label: "Eeldatav alguskuupäev <span class='optional-tag'>VALIKULINE</span>",
  duration_label: "Eeldatav kestus <span class='optional-tag'>VALIKULINE</span>",
  duration_placeholder: "nt. 5 tööpäeva",
  duration_hint: "Jätke tühjaks tavapärase ajakava kasutamiseks.",
  custom_payment_label: "Kohandatud maksegraafik <span class='optional-tag'>VALIKULINE</span>",
  custom_payment_placeholder: "nt. 25% ettemaks · 35% karkassi valmimisel · 25% paigaldus · 15% üleandmisel",
  custom_payment_hint: "Määgame nutikad vaikeväärtused. Sisestage oma graafik asendamiseks.",
  custom_warranty_label: "Garantiiaeg <span class='optional-tag'>VALIKULINE</span>",
  custom_warranty_placeholder: "nt. 5 aastat katusetöödele ja 2 aastat liiteplekkidele",

  acc_inclusions_html: "<span class='acc-icon'>📋</span> Kaasatud, mittekaasatud tööd",
  included_label: "HINNAS SISALDUB <span class='optional-tag'>ÜKS RIDA KIRJE KOHTA</span>",
  included_placeholder: "Ehitusplatsi ettevalmistus ja kattekiled\nKõik kinnitustarvikud ja materjalid\nKahekordne terrassiõli viimistlus\nEhitusjäätmete koristus ja vedu",
  excluded_label: "HINNAS EI SISALDU <span class='optional-tag'>ÜKS RIDA KIRJE KOHTA</span>",
  excluded_placeholder: "Jätke tühjaks vaikeväärtuste jaoks.\nVõi märkige:\nEhitusload ja ametlikud kooskõlastused\nOhtlike jäätmete (asbest) utiliseerimine",
  assumptions_label: "Eeldused ja tingimused <span class='optional-tag'>ÜKS RIDA KIRJE KOHTA</span>",
  assumptions_placeholder: "Jätke tühjaks vaikeväärtuste jaoks.\nVõi märkige:\nVaba ligipääs objektile ja parkimine\nVee ja elektri olemasolu objektil",

  acc_covernote_html: "<span class='acc-icon'>✉️</span> Saatekiri kliendile",
  covernote_label: "Isiklik pöördumine pakkumise alguses <span class='optional-tag'>VALIKULINE</span>",
  covernote_placeholder: "nt. Tänan huvi tundmise eest. Hinnad vastavad teisipäevasel ülevaatusel kokkulepitule. Vastame meeleldi lisaküsimustele.",
  covernote_hint: "Lisab viisaka sissejuhatuse enne tabelit.",
  btn_generate_quote: "Koosta minu pakkumine →",

  // Loading Screen
  loading_title: "Hinnapakkumise koostamine...",
  loading_subtitle: "Arvutatakse materjalikulu, töötunde, piirkondlikke hindasid,<br>makseetappe ja garantiitingimusi.",
  loading_step_1: "Analüüsime töö kirjeldust...",
  loading_step_2: "Arvutame materjalikulu ja tööaega...",
  loading_step_3: "Rakendame hinnastust ja maksegraafikut...",
  loading_step_4: "Viimistleme PDF-dokumendi...",

  // Quote Document View
  ready_title: "Teie hinnapakkumine on valmis",
  ready_subtitle: "Vihje: klõpsake mis tahes real, et seda enne printimist muuta.",
  btn_print: "🖨️ Prindi / PDF",
  btn_email: "📋 Kopeeri e-kirjana",
  btn_new_quote: "+ Uus pakkumine",
  btn_edit_letterhead: "⚙️ Muuda päist",

  quote_badge: "HINNAPAKKUMINE",
  date_label: "Kuupäev",
  valid_label: "Kehtivus",
  valid_days_text: "14 päeva",
  click_to_edit_hint: "<span class='hint-pencil'>✏️</span> Muutmiseks klõpsake suvalisel väljal",
  quote_for_label: "PAKKUMINE KLIENDILE",
  reference_label: "VIITENUMBER",
  project_label: "PROJEKT / OBJEKT",

  materials_heading: "MATERJALID JA TARVIKUD",
  col_item: "NIMETUS",
  col_qty: "KOGUS",
  col_amount: "SUMMA",
  btn_add_material: "+ Lisa materjalirida",

  labour_heading: "TÖÖD JA PAIGALDUS",
  col_phase: "TÖÖETAPP",
  col_duration: "KESTUS",
  btn_add_labour: "+ Lisa tööetapp",

  summary_materials_subtotal: "Materjalid kokku",
  summary_labour_subtotal: "Tööraha kokku",
  summary_subtotal: "Vahesumma km-ta",
  summary_vat: "Käibemaks",
  summary_total: "KOKKU TASUMISELE",

  scope_heading: "TÖÖDE MAHT",
  whats_included_html: "<span class='status-icon green-check'>✔</span> Sisaldub hinnas",
  not_included_html: "<span class='status-icon red-cross'>✖</span> Ei sisaldu hinnas",
  btn_add_inclusion: "+ Lisa sisalduv töö",
  btn_add_exclusion: "+ Lisa välistus",

  payment_terms_title: "MAKSETINGIMUSED JA GARANTII",
  default_payment_terms: "Standardne graafik: 25% ettemaks lepingu sõlmimisel · 40% tööde vaheetapis · 35% üleandmisel.\nKandekonstruktsioonidele kehtib 2-aastane teostusgarantii.",

  tc_heading: "LEPINGUTINGIMUSED",
  tc_list: [
    { title: "Pakkumise kehtivus:", desc: "Käesolev hinnapakkumine kehtib vastuvõtmiseks 14 kalendripäeva alates väljastamisest." },
    { title: "Maksetingimused:", desc: "Arved kuuluvad tasumisele kokkulepitud graafiku alusel. Materjalid jäävad teostaja omandusse kuni arve täieliku tasumiseni." },
    { title: "Lisatööd ja muudatused:", desc: "Kõik muudatused ja lisatööd lepitakse enne teostamist kokku kirjalikult koos hinna korrigeerimisega." },
    { title: "Ligipääs ja elekter:", desc: "Tellija tagab vaba ja ohutu ligipääsu objektile tööajal ning elektri ja vee kasutamise võimaluse." },
    { title: "Ettenägematud asjaolud:", desc: "Varjatud defektid, hallitus või vigastused, mis ei olnud ülevaatusel nähtavad, hinnastatakse eraldi." },
    { title: "Garantii:", desc: "Tehtud töödele kehtib garantii pärast arve täielikku tasumist." }
  ],

  signatures_heading: "KINNITUS JA ALLKIRJAD",
  sig_provider_title: "TEOSTAJA",
  sig_authorized_badge: "KORREKTNE PAKKUMINE",
  sig_rep_label: "Esindaja:",
  sig_date_label: "Kuupäev:",
  sig_client_title: "TELLIJA KINNITUS",
  sig_client_instruction: "Kinnitan pakkumise spetsifikatsiooni, tööde mahu, hinnad ja tingimused:",
  sig_sign_here: "Allkiri: _________________________________",
  sig_client_name_label: "Tellija nimi:",
  sig_client_signature: "KLIENDI ALLKIRI",
  sig_for_contractor: "TÖÖVÕTJA",
  sig_name_date: "Nimi ja kuupäev",
  footer_generated_by: "Loodud programmiga",

  footer_page: "Koostatud programmiga QuoteWriter · Lk 1 / 1",
  toast_copied_email: "📋 Pakkumine kopeeritud e-kirjana lõikelauale!",
  toast_letterhead_saved: "🎉 Päis salvestatud! Tööriist on valmis.",
  toast_quote_ready: "✅ Pakkumine valmis! Klõpsake muutmiseks.",
  toast_example_loaded: "✨ Näidis laaditud vormi",
  toast_changes_discarded: "↩️ Muudatustest loobuti",
  toast_quote_recreated: "✨ Pakkumine loodi uute andmetega uuesti!",
  personal_link_title: "Teie isikliku tööriista link",
  letterhead_saved_tag: "✓ Kirjaplangi salvestatud",
  personal_link_desc: "Salvestage see link oma telefoni või arvuti järjehoidjatesse. Igal pakkumusel on teie kirjaplangi andmed juba olemas.",
  btn_copy_link: "📋 Kopeeri link",
  btn_copied: "✓ Kopeeritud!",
  toast_link_copied: "🔗 Isiklik link kopeeritud lõikelauale! Salvestage see järjehoidjasse.",
  btn_share_link: "🔗 Isiklik link",
  modal_unsaved_title: "Salvestamata muudatused",
  modal_unsaved_desc_step1: "Olete muutnud ettevõtte andmeid. Kas soovite muudatused salvestada ja pakkumise uuesti luua või neist loobuda?",
  modal_unsaved_desc_step2: "Olete muutnud pakkumise andmeid. Kas soovite muudatused salvestada ja pakkumise uuesti luua või neist loobuda?",
  modal_btn_save_recreate: "Salvesta ja loo pakkumine uuesti",
  modal_btn_discard: "Loobu muudatustest",
  modal_btn_cancel: "Jätka muutmist",
  unit_pcs: "tk",
  select_choose_one: "Vali...",
  select_choose: "Vali...",

  email_greeting: "Tere,",
  email_thanks: "Täname võimaluse eest esitada hinnapakkumine projektile: {title}.\n\n",
  email_closing: "Lugupidamisega,",

  select_options: {
    industry_trade: [
      // IT ja digiteenused
      { value: "Web design & development", label: "Veebidisain ja arendus" },
      { value: "Software & mobile app development", label: "Tarkvara ja mobiilirakenduste arendus" },
      { value: "IT support, networking & systems", label: "IT-tugi, võrgud ja süsteemihaldus" },
      { value: "Cloud infrastructure & cybersecurity", label: "Pilvetaristu ja küberturvalisus" },
      { value: "UI/UX design & digital media", label: "UI/UX disain ja digitaalne meedia" },
      // Ehitus ja struktuur
      { value: "General contracting & renovation", label: "Üldehitus ja renoveerimine" },
      { value: "Masonry & brickwork", label: "Müüriladumine ja kivitööd" },
      { value: "Concrete & foundations", label: "Betoonitööd ja vundamendid" },
      { value: "Civil engineering & excavation", label: "Pinnasetööd ja välisvõrgud" },
      { value: "Demolition & site clearance", label: "Lammutus ja ehitusplatsi koristus" },
      // Siseviimistlus ja paigaldus
      { value: "Carpentry & joinery", label: "Puusepa- ja tisleritööd" },
      { value: "Roofing & exterior", label: "Katuse- ja fassaaditööd" },
      { value: "Kitchen & bathroom remodeling", label: "Köögi ja vannitoa remont" },
      { value: "Painting & decorating", label: "Maalritööd ja siseviimistlus" },
      { value: "Plastering & drywall", label: "Kipsitööd, krohvimine ja soojustus" },
      { value: "Flooring & tiling", label: "Põrandakatted ja plaatimine" },
      { value: "Windows, doors & glazing", label: "Aknad, uksed ja klaasimistööd" },
      // Tehnovõrgud
      { value: "Electrical & smart home", label: "Elektritööd ja targa kodu lahendused" },
      { value: "Plumbing & heating", label: "Sanitaartehnika ja küttesüsteemid" },
      { value: "HVAC & air conditioning", label: "Ventilatsioon ja kliimaseadmed" },
      { value: "Solar & renewable energy", label: "Päikeseenergia ja taastuvenergeetika" },
      // Välitööd ja metall
      { value: "Landscaping & decking", label: "Haljastus ja terrassid" },
      { value: "Fencing & gates", label: "Aiad, väravad ja piirded" },
      { value: "Metalwork & welding", label: "Metallitööd ja keevitamine" },
      // Teenused
      { value: "Property maintenance & handyman", label: "Kinnisvara hooldus ja pisiremondid" },
      { value: "Commercial & post-construction cleaning", label: "Äripindade ja ehitusjärgne koristus" }
    ],
    payment_style: [
      { value: "auto", label: "Automaatne (mahu järgi)" },
      { value: "deposit-stages", label: "Ettemaks ja vaheetapid" },
      { value: "50-50", label: "50% alguses / 50% lõpus" },
      { value: "completion", label: "100% üleandmisel" }
    ],
    client_type: [
      { value: "new", label: "Uus klient" },
      { value: "returning", label: "Püsiklient" },
      { value: "commercial", label: "Äriklient / Haldusfirma" }
    ],
    job_urgency: [
      { value: "normal", label: "Tavapärane graafik" },
      { value: "urgent", label: "Kiire (48h jooksul)" },
      { value: "flexible", label: "Paindlik / Järgmisel kuul" }
    ],
    avg_job_size: [
      { value: "Under €2,500", label: "Alla 2 500 €" },
      { value: "€2,500 - €10,000", label: "2 500 € - 10 000 €" },
      { value: "€10,000 - €50,000", label: "10 000 € - 50 000 €" },
      { value: "€50,000+", label: "Üle 50 000 €" }
    ]
  },

  templates: {
    deck: {
      title: "Tammepuidust terrassi ehitus 4×6m, vana lammutus ja utiliseerimine",
      materials: [
        { name: "Kvaliteetne tammepuidust terrassilaud", sub: "Kvaliteetne ilmastikukindel puit, mõõtu lõigatud", qty: "120 m²", amount: 7685 },
        { name: "Kandekarkass ja alustalad", sub: "C24 süvaimmutatud prussid, reguleeritavad jalad", qty: "vastavalt plaanile", amount: 2795 },
        { name: "Kinnitusvahendid ja kruvid", sub: "Roostevabad A4 kruvid, varjatud klambrid", qty: "komplekt", amount: 1397 },
        { name: "Viimistlus ja terrassiõli", sub: "UV-kindel ilmastikukindel terrassiõli", qty: "komplekt", amount: 1118 },
        { name: "Prahikonteiner ja haljastuse kaitse", sub: "Vana puidu äravedu ja murukatte kaitse", qty: "1 kmpl.", amount: 978 }
      ],
      labour: [
        { phase: "Ehitusplatsi ettevalmistus ja vana terrassi lammutus", duration: "1 päev", amount: 2562 },
        { phase: "Karkassi ehitus ja terrassilaudade paigaldus", duration: "3 päeva", amount: 11100 },
        { phase: "Õlitamine, vuukide viimistlus ja koristus", duration: "1 päev", amount: 3415 }
      ],
      included: [
        "Kõik spetsifikatsioonis toodud puitmaterjalid ja kinnitused",
        "Kõrvalolevate alade kaitsekatted",
        "Vana terrassi eemaldamine ja utiliseerimine",
        "Töökoha igapäevane koristamine",
        "Ehitusjäätmete ametlik ladestamine"
      ],
      excluded: [
        "Süvakaeve või betoonvundamendi valamine",
        "Elektripaigaldise või valgustuse ehitus",
        "Ehituslubade taotlemine omavalitsusest"
      ]
    },
    kitchen: {
      title: "Köögi paigaldus 5×4m, tammespoon, integreeritud kodumasinad",
      materials: [
        { name: "Kapi korpused ja tammespooniga esipaneelid", sub: "Vaikseltsulguvad hinged, tehases kokku pandud", qty: "1 kmpl.", amount: 8450 },
        { name: "Kvartsist töötasapind", sub: "20mm kivi koos integreeritud valamu avaga", qty: "8 jm", amount: 3200 },
        { name: "Integreeritud kodumasinate komplekt", sub: "Induktsioonplaat, ahi, õhupuhasti, nõudepesumasin", qty: "1 kmpl.", amount: 4600 },
        { name: "Sanitaartehnika ja elektriühendused", sub: "Valamu, disainsegisti, LED-valgustid kappide all", qty: "komplekt", amount: 1450 }
      ],
      labour: [
        { phase: "Vana köögi lammutus, vee- ja elektriühenduste kohandus", duration: "2 päeva", amount: 2800 },
        { phase: "Kappide paigaldus, rihtimine ja kinnitus", duration: "3 päeva", amount: 3900 },
        { phase: "Töötasapinna paigaldus ja seadmete ühendamine", duration: "2 päeva", amount: 2400 }
      ],
      included: [
        "Kogu köögimööbli tarne ja paigaldus",
        "Ühendamine olemasolevate torude ja pistikutega",
        "Kõigi seadmete töökontroll",
        "Puhastamine ja pakendite äravedu"
      ],
      excluded: [
        "Kandvate seinte lammutus",
        "Gaasitrassi ümbertõstmine",
        "Põranda betoneerimine"
      ]
    },
    bath: {
      title: "Vannitoa remont 6m², plaatimine, sanitaartehnika, hüdroisolatsioon",
      materials: [
        { name: "Suuremõõtmelised keraamilised plaadid", sub: "Rektifitseeritud libisemiskindlad seina- ja põrandaplaadid", qty: "24 m²", amount: 1850 },
        { name: "Sanitaartehnika ja segistid", sub: "Dušiklaas, süvistatud termostaatsegisti, seinapealne WC", qty: "1 kmpl.", amount: 2950 },
        { name: "Hüdroisolatsiooni süsteem ja plaadisegu", sub: "Täielik märgade ruumide hüdroisolatsioon", qty: "komplekt", amount: 780 }
      ],
      labour: [
        { phase: "Täielik lammutus kuni kandekonstruktsioonini", duration: "1 päev", amount: 1250 },
        { phase: "Torutööd ja hüdroisolatsiooni paigaldus", duration: "2 päeva", amount: 2400 },
        { phase: "Plaatimine, vuukimine ja sanitaartehnika montaaž", duration: "3 päeva", amount: 3600 }
      ],
      included: [
        "Vana viimistluse ja sanitaartehnika eemaldamine",
        "Nõuetekohane hüdroisolatsioon dušialal",
        "Plaatide paigaldus, vuukimine ja hermetiseerimine",
        "Ehitusprahi äravedu"
      ],
      excluded: [
        "Eraldi toitekaabli vedamine jaotuskilbist",
        "Pehkinud talade või kandekarkassi vahetus",
        "Eritellimusel LED-peeglid, kui pole märgitud"
      ]
    },
    roof: {
      title: "Katuse vahetus 120m² valtsplekk, 3 katuseakent, vihmaveesüsteem",
      materials: [
        { name: "Valtsplekk-katuseprofiil / katuseplekk", sub: "0.7mm kaetud teras koos antikondensaatkihiga", qty: "120 m²", amount: 6900 },
        { name: "Katuseaknad koos paigaldusääristega", sub: "Kolmekordse klaaspaketiga energiatõhusad aknad", qty: "3 tk", amount: 2400 },
        { name: "Hingav aluskate ja immutatud distantsliistud", sub: "Suure rebenemiskindlusega auru läbilaskev membraan", qty: "1 kmpl.", amount: 1150 },
        { name: "Õmblusteta alumiiniumist vihmaveesüsteem", sub: "Sügava profiiliga rennid ja torud kinnitustega", qty: "28 jm", amount: 1380 }
      ],
      labour: [
        { phase: "Tellingute paigaldus ja vana katusekatte eemaldamine", duration: "2 päeva", amount: 2850 },
        { phase: "Aluskatte, roovituse ja katusepleki paigaldus", duration: "4 päeva", amount: 6400 },
        { phase: "Katuseakende sõlmed, harjaplekid ja rennid", duration: "2 päeva", amount: 2750 }
      ],
      included: [
        "Vana katusekatte eemaldamine ja utiliseerimine",
        "Hingava katusekonstruktsiooni ehitus",
        "Katuseakende ilmastikukindel paigaldus",
        "Vihmaveesüsteemi paigaldus ja platsi koristus"
      ],
      excluded: [
        "Mädanenud sarikate asendamine",
        "Korstnapitside parandustööd",
        "Tellingute rent pärast kokkulepitud aega"
      ]
    },
    it: {
      title: "Ettevõtte veebileht koos CMS-i, kliendiportaali, kohanduva disaini ja SEO-ga",
      materials: [
        { name: "Pilveserver, domeen ja SSL-turvasertifikaat", sub: "Kiire NVMe pilveserver, CDN-võrk ja SSL (1 aasta)", qty: "1 a.", amount: 680 },
        { name: "CMS-i, pistikprogrammide ja UI litsentsid", sub: "Kommertslitsentsid sisuhaldusele ja turvakomplektile", qty: "1 lits.", amount: 950 },
        { name: "Automaatne varundus ja monitooring", sub: "Igapäevased välised varukoopiad, serveri jälgimine ja tulemüür (1 aasta)", qty: "1 a.", amount: 480 }
      ],
      labour: [
        { phase: "UI/UX struktuur, prototüüpimine ja visuaalne disain", duration: "5 päeva", amount: 2600 },
        { phase: "Frontend kohanduv programmeerimine ja CMS integratsioon", duration: "8 päeva", amount: 4200 },
        { phase: "Kliendiportaali autoriseerimine ja API liidestused", duration: "5 päeva", amount: 2800 },
        { phase: "Turvatestimine, SEO seadistus ja avalikustamine", duration: "2 päeva", amount: 1100 }
      ],
      included: [
        "100% kohanduv disain (mobiilid, tahvlid, arvutid)",
        "Lihtne CMS-i halduspaneel koos administraatorite õigustega",
        "Päringuvormid koos automaatsete e-kirja teavitustega",
        "Tehniline SEO optimeerimine ja Google Analytics ühendus",
        "30-päevane garantiihooldus ja vigade parandus peale üleandmist"
      ],
      excluded: [
        "Iga-kuine sisuloome ja tekstide kirjutamine",
        "Tasuliste kolmandate osapoolte API-de (SMS-lüüsid, pangalingid) lepingud",
        "Aegunud andmebaaside käsitsi teisendamine ebastandardsetest süsteemidest"
      ]
    },
    general: {
      title: "Ehitus- ja renoveerimisprojekt",
      materials: [
        { name: "Peamised ehitusmaterjalid ja tarvikud", sub: "Professionaalne ehituskvaliteet vastavalt spetsifikatsioonile", qty: "50 tk", amount: 3500 },
        { name: "Kandvad profiilid ja ankrud", sub: "Nõuetekohased konstruktsioonilised kinnitused", qty: "komplekt", amount: 1050 },
        { name: "Kaitsekatted, hermeetikud ja kulumaterjalid", sub: "Vastupidavad professionaalsed tihendusmaterjalid", qty: "1 kmpl.", amount: 525 },
        { name: "Platsi kaitse ja prügikonteiner", sub: "Kaitsekiled ja ehitusjäätmete utiliseerimine", qty: "1 kmpl.", amount: 650 }
      ],
      labour: [
        { phase: "Ettevalmistus, mõõdistus ja tööde planeerimine", duration: "1 päev", amount: 1100 },
        { phase: "Põhilised ehitus- ja montaažitööd", duration: "3 päeva", amount: 4500 },
        { phase: "Kvaliteedikontroll, viimistlus ja üleandmine", duration: "1 päev", amount: 1250 }
      ],
      included: [
        "Kõik loetletud materjalid ja spetsialistide töö",
        "Tööde vahekontroll ja lõplik üleandmine kliendile",
        "Materjalide ja paigalduse garantii"
      ],
      excluded: [
        "Lubade või auditite riigilõivud",
        "Varjatud ehituslikud defektid konstruktsioonides",
        "Öised või nädalavahetuse erakorralised tööd"
      ]
    }
  }
};
