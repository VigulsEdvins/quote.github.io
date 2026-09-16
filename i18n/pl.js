/**
 * i18n/pl.js - Polish Translations for QuoteWriter
 */
window.QuoteI18n = window.QuoteI18n || {};

window.QuoteI18n.Polish = {
  // Navigation
  nav_setup: "1. Nagłówek",
  nav_generator: "2. Generator wycen",
  nav_quote: "3. Podgląd oferty",
  brand_badge: "Narzędzie Viguls",

  // Setup / Onboarding
  setup_title: "Odbierz swój <span class='highlight-teal'>osobisty generator wycen</span>",
  setup_subtitle: "Skonfiguruj raz. Zapisz URL w zakładkach. Używaj przy każdym zleceniu — wpisz 1 linijkę i otrzymaj profesjonalną ofertę w 30 sekund. Całkowicie za darmo.",
  setup_callout_1: "Po wypełnieniu formularza otrzymasz spersonalizowany link z Twoimi danymi. To <strong>TWOJE</strong> narzędzie — zapisz je w zakładkach.",
  business_name_label: "Nazwa firmy / wykonawcy <span class='required'>*</span>",
  business_name_hint: "Pojawi się w nagłówku każdej wyceny dokładnie tak, jak powinni to widzieć klienci.",
  business_name_placeholder: "np. Kowalski Usługi Stolarskie",
  user_email_label: "Twój adres e-mail <span class='required'>*</span>",
  user_email_placeholder: "kontakt@twojafirma.pl",
  user_phone_label: "Numer telefonu <span class='required'>*</span>",
  user_phone_placeholder: "+48 500 000 000",
  industry_label: "Branża / specjalizacja <span class='required'>*</span>",
  region_label: "Region <span class='required'>*</span>",
  currency_label: "Waluta",
  vat_label: "VAT (automatycznie wg regionu)",
  avg_job_size_label: "Średnia wielkość zlecenia <span class='required'>*</span>",
  quote_language_label: "Język wyceny <span class='required'>*</span>",
  quote_language_hint: "Twoje wyceny będą generowane w tym języku.",
  letterhead_divider: "TWÓJ PAPIER FIRMOWY · <span class='highlight-teal'>DLA PROFESJONALNYCH WYCEN</span>",
  setup_callout_2: "<strong>Dodawane do każdej wyceny.</strong> Logo, NIP, ubezpieczenie — sprawiają, że oferty wyglądają jak przygotowane przez agencję brandingową. Pomiń dowolne pole, zawsze możesz edytować później ikoną ⚙.",
  logo_url_label: "URL Logo <span class='optional-tag'>OPCJONALNIE</span>",
  logo_url_hint: "Publiczny link do logo (kwadrat ≥200px). Jeśli puste, wygenerujemy monogram na podstawie nazwy.",
  logo_url_placeholder: "https://twojafirma.pl/logo.png",
  business_address_label: "Adres firmy <span class='optional-tag'>OPCJONALNIE</span>",
  business_address_placeholder: "np. ul. Marszałkowska 10, 00-001 Warszawa",
  license_number_label: "REGON / Licencja <span class='optional-tag'>OPCJONALNIE</span>",
  license_number_placeholder: "np. REGON 123456789",
  tax_id_label: "NIP <span class='optional-tag'>OPCJONALNIE</span>",
  tax_id_placeholder: "np. PL1234567890",
  insurance_details_label: "Ubezpieczenie OC <span class='optional-tag'>OPCJONALNIE</span>",
  insurance_details_placeholder: "np. OC działalności gospodarczej 1 000 000 PLN (PZU)",
  trade_memberships_label: "Uprawnienia / Certyfikaty <span class='optional-tag'>OPCJONALNIE</span>",
  trade_memberships_placeholder: "np. Uprawnienia budowlane bez ograniczeń · Członek PIIB",
  tagline_label: "Slogan pod nazwą firmy <span class='optional-tag'>OPCJONALNIE</span>",
  tagline_placeholder: "np. Solidne konstrukcje drewniane i dachy od 2012 roku",
  website_label: "Strona internetowa <span class='optional-tag'>OPCJONALNIE</span>",
  website_placeholder: "np. www.twojafirma.pl",
  brand_color_label: "Kolor marki <span class='optional-tag'>OPCJONALNIE</span>",
  brand_color_hint: "Używany jako akcent w dokumentach. Domyślnie zieleń Viguls.",
  agree_consent: "Zgadzam się na otrzymanie linku do narzędzia. <a href='#privacy' class='text-link' id='privacy-link'>Prywatność</a>",
  btn_get_tool: "Odbierz swoje narzędzie →",

  // Generator Screen
  gen_callout: "<strong>Twoje narzędzie · wstępnie wypełnione</strong><br>Opisz zlecenie. Opcjonalnie dodaj szczegóły. Gotowe w 30 sekund.",
  gen_title_html: "Jaka jest <span class='highlight-teal'>następna wycena,</span> <span id='gen-name-display'>{name}</span>?",
  gen_subtitle: "Wystarczy sam opis prac. Rozwiń „Opcje dodatkowe”, aby dodać dane klienta, adres budowy lub harmonogram płatności.",
  job_desc_label: "Opis zlecenia <span class='required'>*</span>",
  job_desc_placeholder: "np. Budowa tarasu dębowego 4x6m, demontaż i utylizacja starego tarasu",
  job_desc_hint: "Podaj wymiary, materiały lub specyfikację. Zobacz przykłady poniżej.",
  group_it_digital: "Technologie informatyczne (IT) i usługi cyfrowe",
  group_construction: "Budownictwo i konstrukcje",
  group_trades_interiors: "Wykończenia wnętrz i prace stolarskie",
  group_mep_energy: "Instalacje sanitarne, elektryczne i HVAC",
  group_outdoor_metal: "Tereny zewnętrzne, ogrodzenia i ślusarstwo",
  group_property_facility: "Utrzymanie nieruchomości i sprzątanie",

  chip_deck: "Budowa tarasu dębowego 4x6m, demontaż starego tarasu i utylizacja",
  chip_kitchen: "Montaż kuchni 5x4m, fornir dębowy, sprzęt AGD w zabudowie",
  chip_bath: "Remont łazienki 6m², glazura, instalacja sanitarna, hydroizolacja",
  chip_roof: "Wymiana dachu 120m² blacha na rąbek, 3 okna dachowe, rynny",
  chip_it: "Strona firmowa z CMS, panelem klienta, responsywnym UI i optymalizacją SEO",
  sizing_divider: "ROZMIAR ZLECENIA · <span class='highlight-teal'>OPCJONALNIE, DLA WIĘKSZEJ DOKŁADNOŚCI</span>",
  sizing_warning: "<strong>Wypełnij tylko pasujące pola, resztę pozostaw pustą.</strong> Wystarczy jedno pole.",
  area_label: "Powierzchnia",
  length_label: "Długość",
  pieces_label_html: "Liczba sztuk <span class='unit-sub'>OKNA / DRZEWA / PUNKTY...</span>",
  volume_label: "Objętość",
  system_size_label_html: "Moc instalacji <span class='unit-sub'>PANELE FOTOWOLTAICZNE</span>",
  payment_style_label: "Model płatności",
  client_type_label: "Typ klienta",
  urgency_label: "Termin realizacji",

  // Accordions
  acc_client_info_html: "<span class='acc-icon'>👤</span> Dane klienta i lokalizacja",
  client_name_label: "Nazwa klienta / Firma <span class='optional-tag'>OPCJONALNIE</span>",
  client_name_placeholder: "np. Jan Kowalski / ABC Sp. z o.o.",
  quote_ref_label: "Numer referencyjny / Zlecenie <span class='optional-tag'>OPCJONALNIE</span>",
  quote_ref_placeholder: "np. ZLEC-2026-042",
  site_address_label: "Adres realizacji prac <span class='optional-tag'>OPCJONALNIE</span>",
  site_address_placeholder: "np. ul. Lipowa 12, 02-797 Warszawa",
  site_address_hint: "Jeśli inny niż adres do faktury.",

  acc_timeline_html: "<span class='acc-icon'>📅</span> Harmonogram i płatności",
  start_date_label: "Planowana data rozpoczęcia <span class='optional-tag'>OPCJONALNIE</span>",
  duration_label: "Szacowany czas trwania <span class='optional-tag'>OPCJONALNIE</span>",
  duration_placeholder: "np. 5 dni roboczych",
  duration_hint: "Pozostaw puste dla standardowego czasu realizacji.",
  custom_payment_label: "Własny harmonogram płatności <span class='optional-tag'>OPCJONALNIE</span>",
  custom_payment_placeholder: "np. 25% zaliczka · 35% po stanie surowym · 25% montaż · 15% odbiór",
  custom_payment_hint: "Podajemy inteligentne wartości domyślne. Wpisz własne, aby je zastąpić.",
  custom_warranty_label: "Gwarancja <span class='optional-tag'>OPCJONALNIE</span>",
  custom_warranty_placeholder: "np. 5 lat na poszycie dachowe, 2 lata na obróbki blacharskie",

  acc_inclusions_html: "<span class='acc-icon'>📋</span> Zakres prac, wyłączenia i założenia",
  included_label: "ZAKRES PRAC OBEJMUJE <span class='optional-tag'>JEDNA POZYCJA NA LINIJKĘ</span>",
  included_placeholder: "Zabezpieczenie miejsca prac i folie ochronne\nWszystkie łączniki, wkręty i materiały montażowe\nDwukrotne olejowanie deski tarasowej\nUprzątnięcie i wywóz odpadów budowlanych",
  excluded_label: "ZAKRES PRAC NIE OBEJMUJE <span class='optional-tag'>JEDNA POZYCJA NA LINIJKĘ</span>",
  excluded_placeholder: "Pozostaw puste dla domyślnych wartości.\nLub wpisz:\nPozwolenia budowlane i uzgodnienia urzędowe\nUtylizacja materiałów niebezpiecznych (azbest)",
  assumptions_label: "Założenia i warunki techniczne <span class='optional-tag'>JEDNA POZYCJA NA LINIJKĘ</span>",
  assumptions_placeholder: "Pozostaw puste dla domyślnych wartości.\nLub wpisz:\nSwobodny dojazd i parking dla pojazdów wykonawcy\nDostęp do prądu i bieżącej wody na terenie inwestycji",

  acc_covernote_html: "<span class='acc-icon'>✉️</span> Wiadomość wprowadzająca (list przewodni)",
  covernote_label: "Osobista wiadomość na początku wyceny <span class='optional-tag'>OPCJONALNIE</span>",
  covernote_placeholder: "np. Dziękujemy za spotkanie na budowie. Przesyłam szczegółową kalkulację kosztów zgodnie z ustaleniami z wtorku. Z przyjemnością odpowiem na wszelkie pytania.",
  covernote_hint: "Dodaje uprzejme wprowadzenie nad tabelą kosztorysową.",
  btn_generate_quote: "Wygeneruj moją ofertę →",

  // Loading Screen
  loading_title: "Generowanie profesjonalnej wyceny...",
  loading_subtitle: "Kalkulacja kosztów materiałów, robocizny, stawek regionalnych,<br>etapów płatności i warunków gwarancji.",
  loading_step_1: "Analizowanie zakresu prac...",
  loading_step_2: "Szacowanie zapotrzebowania na materiały i czas pracy...",
  loading_step_3: "Dostosowywanie stawek i harmonogramu płatności...",
  loading_step_4: "Finalizowanie dokumentu PDF...",

  // Quote Document View
  ready_title: "Twoja oferta jest gotowa",
  ready_subtitle: "Wskazówka: kliknij dowolną linijkę w ofercie, aby edytować tekst lub kwoty przed wydrukiem.",
  btn_print: "🖨️ Drukuj / PDF",
  btn_email: "📋 Kopiuj jako e-mail",
  btn_new_quote: "+ Nowa wycena",
  btn_edit_letterhead: "⚙️ Edytuj nagłówek",

  quote_badge: "OFERTA CENOWA",
  date_label: "Data",
  valid_label: "Ważność",
  valid_days_text: "14 dni",
  click_to_edit_hint: "<span class='hint-pencil'>✏️</span> Kliknij dowolne pole, aby edytować",
  quote_for_label: "OFERTA DLA",
  reference_label: "NUMER REFERENCYJNY",
  project_label: "PROJEKT / ZLECENIE",

  materials_heading: "MATERIAŁY I ARTYKUŁY",
  col_item: "POZYCJA",
  col_qty: "ILOŚĆ",
  col_amount: "KWOTA",
  btn_add_material: "+ Dodaj pozycję materiałową",

  labour_heading: "ROBOCIZNA I MONTAŻ",
  col_phase: "ETAP PRAC",
  col_duration: "CZAS TRWANIA",
  btn_add_labour: "+ Dodaj etap prac",

  summary_materials_subtotal: "Suma materiałów",
  summary_labour_subtotal: "Suma robocizny",
  summary_subtotal: "Wartość netto",
  summary_vat: "Podatek VAT",
  summary_total: "ŁĄCZNIE DO ZAPŁATY",

  scope_heading: "ZAKRES PRAC",
  whats_included_html: "<span class='status-icon green-check'>✔</span> W cenie",
  not_included_html: "<span class='status-icon red-cross'>✖</span> Poza zakresem",
  btn_add_inclusion: "+ Dodaj pozycję w zakresie",
  btn_add_exclusion: "+ Dodaj pozycję poza zakresem",

  payment_terms_title: "PŁATNOŚCI I GWARANCJA",
  default_payment_terms: "Standardowy harmonogram: 25% zaliczka przy podpisaniu umowy · 40% na półmetku prac · 35% po odbiorze końcowym.\nKonstrukcje nośne objęte są 2-letnią gwarancją wykonawczą.",

  tc_heading: "OGÓLNE WARUNKI UMOWY",
  tc_list: [
    { title: "Ważność oferty:", desc: "Niniejsza oferta cenowa zachowuje ważność przez 14 dni kalendarzowych od daty wystawienia." },
    { title: "Warunki płatności:", desc: "Faktury i płatności regulowane są zgodnie z ustalonym harmonogramem. Wszystkie dostarczone materiały pozostają własnością wykonawcy do momentu pełnego uregulowania należności." },
    { title: "Prace dodatkowe:", desc: "Wszelkie prace wykraczające poza powyższy zakres wymagają uprzedniej pisemnej akceptacji obydwu stron wraz z ustaleniem dodatkowego wynagrodzenia." },
    { title: "Dostęp i media:", desc: "Inwestor zapewnia wykonawcy swobodny dostęp do miejsca wykonywania robót w godzinach pracy oraz nieodpłatny dostęp do energii elektrycznej i wody." },
    { title: "Wady ukryte:", desc: "Wady konstrukcyjne podłoża, zawilgocenia lub inne przeszkody niewidoczne podczas oględzin wstępnych podlegają odrębnej wycenie po ich ujawnieniu." },
    { title: "Gwarancja:", desc: "Gwarancja na wykonane prace zaczyna obowiązywać po podpisaniu protokołu odbioru końcowego i całkowitym rozliczeniu płatności." }
  ],

  signatures_heading: "POTWIERDZENIE I PODPISY",
  sig_provider_title: "WYKONAWCA",
  sig_authorized_badge: "OFERTA AUTORYZOWANA",
  sig_rep_label: "Przedstawiciel:",
  sig_date_label: "Data:",
  sig_client_title: "AKCEPTACJA KLIENTA",
  sig_client_instruction: "Niniejszym akceptuję specyfikację oferty, zakres prac, koszty oraz warunki umowy:",
  sig_sign_here: "Podpis: _________________________________",
  sig_client_name_label: "Imię i nazwisko:",
  sig_client_signature: "PODPIS KLIENTA",
  sig_for_contractor: "WYKONAWCA",
  sig_name_date: "Imię, nazwisko i data",
  footer_generated_by: "Wygenerowano w",

  footer_page: "Wygenerowano w programie QuoteWriter · Strona 1 z 1",
  toast_copied_email: "📋 Oferta skopiowana jako e-mail do schowka!",
  toast_letterhead_saved: "🎉 Nagłówek zapisany! Narzędzie jest gotowe.",
  toast_quote_ready: "✅ Oferta gotowa! Kliknij, aby edytować.",
  toast_example_loaded: "✨ Załadowano przykładowe zlecenie",
  toast_changes_discarded: "↩️ Zmiany odrzucone",
  toast_quote_recreated: "✨ Wycena utworzona ponownie z nowymi danymi!",
  personal_link_title: "Twój osobisty link do narzędzia",
  letterhead_saved_tag: "✓ Nagłówek zapisany",
  personal_link_desc: "Zapisz ten link w zakładkach na telefonie lub komputerze. Każdy kosztorys będzie od razu zawierał Twoje dane firmowe i nagłówek.",
  btn_copy_link: "📋 Kopiuj link",
  btn_copied: "✓ Skopiowano!",
  toast_link_copied: "🔗 Osobisty link skopiowany do schowka! Zapisz go w zakładkach.",
  btn_share_link: "🔗 Osobisty link",
  modal_unsaved_title: "Niezapisane zmiany",
  modal_unsaved_desc_step1: "Wprowadzono zmiany w nagłówku firmy. Czy chcesz zapisać zmiany i utworzyć wycenę ponownie, czy je odrzucić?",
  modal_unsaved_desc_step2: "Zmieniono szczegóły wyceny. Czy chcesz zapisać zmiany i utworzyć wycenę ponownie, czy je odrzucić?",
  modal_btn_save_recreate: "Zapisz i utwórz wycenę ponownie",
  modal_btn_discard: "Odrzuć zmiany",
  modal_btn_cancel: "Kontynuuj edycję",
  unit_pcs: "szt.",
  select_choose_one: "Wybierz...",
  select_choose: "Wybierz...",

  email_greeting: "Dzień dobry,",
  email_thanks: "Dziękujemy za możliwość przedstawienia oferty na realizację zlecenia: {title}.\n\n",
  email_closing: "Z poważaniem,",

  select_options: {
    industry_trade: [
      // IT i usługi cyfrowe
      { value: "Web design & development", label: "Projektowanie i tworzenie stron WWW" },
      { value: "Software & mobile app development", label: "Tworzenie oprogramowania i aplikacji mobilnych" },
      { value: "IT support, networking & systems", label: "Obsługa informatyczna, sieci i systemy IT" },
      { value: "Cloud infrastructure & cybersecurity", label: "Infrastruktura chmurowa i cyberbezpieczeństwo" },
      { value: "UI/UX design & digital media", label: "Projektowanie UI/UX i media cyfrowe" },
      // Budownictwo i konstrukcje
      { value: "General contracting & renovation", label: "Generalne wykonawstwo i remonty" },
      { value: "Masonry & brickwork", label: "Murarstwo i roboty kamieniarskie" },
      { value: "Concrete & foundations", label: "Betonowanie i fundamenty" },
      { value: "Civil engineering & excavation", label: "Roboty ziemne, wykopy i sieci zewnętrzne" },
      { value: "Demolition & site clearance", label: "Rozbiórki, wyburzenia i sprzątanie pobudowlane" },
      // Prace wykończeniowe i stolarskie
      { value: "Carpentry & joinery", label: "Stolarstwo i ciesielstwo" },
      { value: "Roofing & exterior", label: "Dekarstwo i elewacje" },
      { value: "Kitchen & bathroom remodeling", label: "Remonty kuchni i łazienek" },
      { value: "Painting & decorating", label: "Malarstwo i wykończenia wnętrz" },
      { value: "Plastering & drywall", label: "Zabudowa g-k, tynki i ocieplenia" },
      { value: "Flooring & tiling", label: "Podłogi i glazurnictwo" },
      { value: "Windows, doors & glazing", label: "Okna, drzwi i szklenie" },
      // Instalacje
      { value: "Electrical & smart home", label: "Elektryka i inteligentny dom" },
      { value: "Plumbing & heating", label: "Instalacje hydrauliczne i grzewcze" },
      { value: "HVAC & air conditioning", label: "Wentylacja i klimatyzacja (HVAC)" },
      { value: "Solar & renewable energy", label: "Fotowoltaika i pompy ciepła" },
      // Tereny zewnętrzne i ślusarstwo
      { value: "Landscaping & decking", label: "Ogrody, tarasy i mała architektura" },
      { value: "Fencing & gates", label: "Ogrodzenia, bramy i balustrady" },
      { value: "Metalwork & welding", label: "Ślusarstwo, konstrukcje stalowe i spawalnictwo" },
      // Usługi i utrzymanie
      { value: "Property maintenance & handyman", label: "Złota rączka i konserwacja nieruchomości" },
      { value: "Commercial & post-construction cleaning", label: "Sprzątanie obiektów i czyszczenie pobudowlane" }
    ],
    payment_style: [
      { value: "auto", label: "Automatycznie (wg skali zlecenia)" },
      { value: "deposit-stages", label: "Zaliczka i płatności etapowe" },
      { value: "50-50", label: "50% przed rozpoczęciem / 50% po odbiorze" },
      { value: "completion", label: "100% po zakończeniu prac" }
    ],
    client_type: [
      { value: "new", label: "Nowy klient" },
      { value: "returning", label: "Klient powracający" },
      { value: "commercial", label: "Klient biznesowy / Wspólnota" }
    ],
    job_urgency: [
      { value: "normal", label: "Standardowy termin" },
      { value: "urgent", label: "Pilne (do 48h)" },
      { value: "flexible", label: "Elastyczny / W przyszłym miesiącu" }
    ],
    avg_job_size: [
      { value: "Under €2,500", label: "Poniżej 2 500 €" },
      { value: "€2,500 - €10,000", label: "2 500 € - 10 000 €" },
      { value: "€10,000 - €50,000", label: "10 000 € - 50 000 €" },
      { value: "€50,000+", label: "Powyżej 50 000 €" }
    ]
  },

  templates: {
    deck: {
      title: "Budowa tarasu dębowego 4×6m, demontaż starego tarasu i utylizacja",
      materials: [
        { name: "Deska tarasowa dębowa Premium", sub: "Drewno selekcjonowane, suszone komorowo, ryflowane", qty: "120 m²", amount: 7685 },
        { name: "Legary konstrukcyjne i podbudowa", sub: "Kantówki impregnowane ciśnieniowo C24, regulowane wsporniki", qty: "wg projektu", amount: 2795 },
        { name: "Zestaw łączników i wkrętów A4", sub: "Nierdzewne wkręty do drewna egzotycznego, klipsy montażowe", qty: "komplet", amount: 1397 },
        { name: "Olejowanie i impregnacja UV", sub: "Olej hydrofobowy z filtrem UV do drewna twardego", qty: "komplet", amount: 1118 },
        { name: "Kontener na gruz i odpady drewniane", sub: "Podstawienie kontenera, zabezpieczenie trawnika i wywóz", qty: "1 szt.", amount: 978 }
      ],
      labour: [
        { phase: "Zabezpieczenie terenu i demontaż starego tarasu", duration: "1 dzień", amount: 2562 },
        { phase: "Montaż konstrukcji nośnej i układanie desek", duration: "3 dni", amount: 11100 },
        { phase: "Olejowanie, obróbki krawędziowe i sprzątanie", duration: "1 dzień", amount: 3415 }
      ],
      included: [
        "Wszystkie materiały drzewne i łączniki ujęte w kosztorysie",
        "Wykładziny ochronne dla otaczających terenów zielonych",
        "Demontaż istniejącej konstrukcji tarasu",
        "Codzienne sprzątanie stanowiska pracy",
        "Legalna utylizacja odpadów pobudowlanych"
      ],
      excluded: [
        "Głębokie wykopy ziemne i wylewki betonowe",
        "Instalacja zasilania elektrycznego lub oświetlenia ogrodowego",
        "Uzyskanie ewentualnych pozwoleń urzędowych"
      ]
    },
    kitchen: {
      title: "Montaż kuchni 5×4m, fornir dębowy, sprzęt AGD w zabudowie",
      materials: [
        { name: "Zabudowa meblowa na wymiar fornir dębowy", sub: "Zawiasy z cichym domykiem, szuflady z dociągiem", qty: "1 kpl.", amount: 8450 },
        { name: "Blat kwarcytowy z podwieszanym zlewem", sub: "Konglomerat kwarcowy 20mm z ociekaczem frezowanym", qty: "8 mb", amount: 3200 },
        { name: "Zestaw sprzętu AGD do zabudowy", sub: "Płyta indukcyjna, piekarnik, zmywarka, okap zintegrowany", qty: "1 kpl.", amount: 4600 },
        { name: "Armatura i instalacje podblatowe", sub: "Zlewozmywak, bateria elastyczna, oświetlenie podszafkowe LED", qty: "komplet", amount: 1450 }
      ],
      labour: [
        { phase: "Demontaż starej zabudowy, przygotowanie podejść wod-kan", duration: "2 dni", amount: 2800 },
        { phase: "Montaż korpusów szafek, poziomowanie i regulacja frontów", duration: "3 dni", amount: 3900 },
        { phase: "Instalacja blatu, podłączenie AGD i próby szczelności", duration: "2 dni", amount: 2400 }
      ],
      included: [
        "Kompletna dostawa i wniesienie mebli kuchennych",
        "Podłączenie urządzeń do istniejących instalacji",
        "Uruchomienie próbne i kalibracja sprzętu",
        "Sprzątanie końcowe i wywóz opakowań tekturowych"
      ],
      excluded: [
        "Przebudowa ścian nośnych i instalacji gazowej",
        "Wymiana pionów kanalizacyjnych",
        "Nowa wylewka samopoziomująca podłogi"
      ]
    },
    bath: {
      title: "Remont łazienki 6m², glazura, instalacja sanitarna, hydroizolacja",
      materials: [
        { name: "Płytki gresowe wielkoformatowe", sub: "Gres rektyfikowany antypoślizgowy R10, fuga epoksydowa", qty: "24 m²", amount: 1850 },
        { name: "Armatura sanitarna i kabina walk-in", sub: "Ścianka ze szkła hartowanego 8mm, zestaw podtynkowy prysznicowy, miska WC rimless", qty: "1 kpl.", amount: 2950 },
        { name: "Kompletna hydroizolacja dwuskładnikowa", sub: "Folia w płynie, taśmy uszczelniające narożniki, klej odkształcalny S1", qty: "komplet", amount: 780 }
      ],
      labour: [
        { phase: "Skuwanie starych płytek do stanu surowego", duration: "1 dzień", amount: 1250 },
        { phase: "Prace hydrauliczne i wykonanie hydroizolacji", duration: "2 dni", amount: 2400 },
        { phase: "Układanie gresu, fugowanie i biały montaż", duration: "3 dni", amount: 3600 }
      ],
      included: [
        "Usunięcie dotychczasowych okładzin i urządzeń sanitarnych",
        "Atestowana hydroizolacja strefy mokrej",
        "Precyzyjne układanie płytek ze szlifowaniem krawędzi pod kątem 45°",
        "Wywóz i utylizacja gruzu łazienkowego"
      ],
      excluded: [
        "Doprowadzenie nowego obwodu elektrycznego z rozdzielnicy",
        "Wymiana skorodowanych pionów w szachcie instalacyjnym",
        "Lustra podgrzewane na wymiar (chyba że wskazano inaczej)"
      ]
    },
    roof: {
      title: "Wymiana dachu 120m² blacha na rąbek, 3 okna dachowe, rynny",
      materials: [
        { name: "Blacha na rąbek stojący powlekana", sub: "Stal 0.7mm z matową powłoką poliuretanową", qty: "120 m²", amount: 6900 },
        { name: "Okna dachowe 3-szybowe z kołnierzami", sub: "Wysokoenergooszczędne pakiety szybowe, kołnierze uszczelniające", qty: "3 szt.", amount: 2400 },
        { name: "Membrana dachowa paroprzepuszczalna i kontrłaty", sub: "Wysokogramaturowa membrana 210g/m²", qty: "1 kpl.", amount: 1150 },
        { name: "System rynnowy stalowy głęboki", sub: "Rynny półokrągłe 135mm, rury spustowe i haki doczołowe", qty: "28 mb", amount: 1380 }
      ],
      labour: [
        { phase: "Montaż rusztowań i demontaż starego pokrycia dachowego", duration: "2 dni", amount: 2850 },
        { phase: "Układanie membrany, łacenie i montaż paneli blachy", duration: "4 dni", amount: 6400 },
        { phase: "Obróbki blacharskie, montaż okien dachowych i orynnowania", duration: "2 dni", amount: 2750 }
      ],
      included: [
        "Bezpieczny demontaż i wywóz starego pokrycia",
        "Wykonanie szczelnej warstwy wstępnego krycia",
        "Prawidłowy montaż okien dachowych z izolacją termiczną",
        "Montaż kompletnego orynnowania i uprzątnięcie posesji"
      ],
      excluded: [
        "Wymiana uszkodzonych krokwi więźby dachowej",
        "Przebudowa i przemurowanie kominów ponad dachem",
        "Długoterminowy wynajem rusztowania ponad ustalony czas"
      ]
    },
    it: {
      title: "Strona firmowa z CMS, panelem klienta, responsywnym UI i optymalizacją SEO",
      materials: [
        { name: "Hosting w chmurze NVMe, domena i certyfikat SSL", sub: "Wysokowydajny serwer chmurowy, sieć CDN i SSL (1 rok)", qty: "1 rok", amount: 680 },
        { name: "Licencje CMS, wtyczek i bibliotek komponentów UI", sub: "Komercyjne licencje systemu CMS i zestaw projektowy UI", qty: "1 lic.", amount: 950 },
        { name: "Automatyczne kopie zapasowe i pakiet cyberbezpieczeństwa", sub: "Codzienny backup off-site, monitoring uptime i firewall (1 rok)", qty: "1 rok", amount: 480 }
      ],
      labour: [
        { phase: "Makiety UI/UX, architektura informacji i prototyp", duration: "5 dni", amount: 2600 },
        { phase: "Responsywne wdrożenie frontend i integracja zaplecza CMS", duration: "8 dni", amount: 4200 },
        { phase: "Uwierzytelnianie strefy klienta i integracje API", duration: "5 dni", amount: 2800 },
        { phase: "Testy bezpieczeństwa, audyt SEO i publikacja", duration: "2 dni", amount: 1100 }
      ],
      included: [
        "W pełni responsywny layout (smartfony, tablety, komputery)",
        "Intuicyjny panel administracyjny CMS z uprawnieniami użytkowników",
        "Formularze kontaktowe z automatycznym powiadamianiem e-mail",
        "Optymalizacja techniczna pod wyszukiwarki (SEO) i konfiguracja analityki",
        "30 dni bezpłatnej opieki gwarancyjnej i usuwania ewentualnych usterek"
      ],
      excluded: [
        "Cykliczny comiesięczny copywriting i tworzenie treści na bloga",
        "Płatne opłaty transakcyjne bramek płatności lub SMS",
        "Ręczna migracja danych ze starych, niestandardowych baz danych"
      ]
    },
    general: {
      title: "Kompleksowe prace remontowo-budowlane",
      materials: [
        { name: "Główne materiały konstrukcyjne i wykończeniowe", sub: "Atestowane materiały budowlane zgodne z projektem", qty: "50 szt.", amount: 3500 },
        { name: "Profile konstrukcyjne, kotwy i mocowania", sub: "Łączniki o podwyższonej nośności", qty: "komplet", amount: 1050 },
        { name: "Materiały izolacyjne, uszczelniacze i preparaty", sub: "Profesjonalne środki gruntujące i uszczelniające", qty: "1 kpl.", amount: 525 },
        { name: "Zabezpieczenie budowy i pojemniki na odpady", sub: "Folie ochronne, płyty pilśniowe i wywóz śmieci", qty: "1 kpl.", amount: 650 }
      ],
      labour: [
        { phase: "Przygotowanie stanowiska, pomiary i trasowanie", duration: "1 dzień", amount: 1100 },
        { phase: "Główne prace montażowe i budowlane", duration: "3 dni", amount: 4500 },
        { phase: "Kontrola jakości, prace wykończeniowe i odbiór", duration: "1 dzień", amount: 1250 }
      ],
      included: [
        "Dostawa ujętych materiałów oraz robocizna wykwalifikowanej ekipy",
        "Bieżący nadzór techniczny i protokół odbioru prac",
        "Gwarancja jakości na wykonane usługi"
      ],
      excluded: [
        "Opłaty administracyjne i skarbowe za pozwolenia",
        "Naprawa ukrytych uszkodzeń konstrukcji budynku",
        "Prace w godzinach nocnych i dniach świątecznych"
      ]
    }
  }
};
