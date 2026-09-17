/**
 * i18n.js - Comprehensive Translations for QuoteWriter
 * Supports: English, Latvian, German
 */

window.QuoteI18n = {
  English: {
    // Navigation
    nav_setup: "1. Letterhead",
    nav_generator: "2. Create Quote",
    nav_quote: "3. Quote Preview",
    nav_saved_quotes: "Saved Quotes",
    nav_saved_quotes_html: "📁 Saved Quotes <span class='nav-count-badge' id='nav-quotes-count'>0</span>",
    brand_badge: "by Viguls",

    // Setup / Onboarding
    setup_title: "Get your <span class='highlight-teal'>personal Quote Writer</span>",
    setup_subtitle: "Set it up once. Bookmark the URL. Use it for every job — type 1 line, get a full branded quote in 30 seconds. Free forever.",
    setup_callout_1: "After this form, you get a personal URL pre-filled with your details. That's <strong>YOUR</strong> tool — bookmark it.",
    business_name_label: "Business name <span class='required'>*</span>",
    business_name_hint: "This appears on every quote header — exactly as you want clients to see it.",
    business_name_placeholder: "e.g. Smith Carpentry Ltd",
    user_email_label: "Your email <span class='required'>*</span>",
    user_email_placeholder: "you@business.com",
    user_phone_label: "Phone <span class='required'>*</span>",
    user_phone_placeholder: "+371 29 _ _ _ _ _ _",
    industry_label: "Industry / trade <span class='required'>*</span>",
    region_label: "Region <span class='required'>*</span>",
    currency_label: "Currency",
    vat_label: "VAT (auto by region)",
    avg_job_size_label: "Average job size <span class='required'>*</span>",
    quote_language_label: "Quote language <span class='required'>*</span>",
    quote_language_hint: "Your quotes will be generated in this language.",
    letterhead_divider: "YOUR LETTERHEAD · <span class='highlight-teal'>FOR BRANDED QUOTES</span>",
    setup_callout_2: "<strong>Adds to every quote you generate.</strong> Logo, license, insurance — makes your quotes look like a €5K-a-month branding agency built them. Skip any field, you can always edit later via the ⚙ icon.",
    logo_url_label: "Logo URL <span class='optional-tag'>OPTIONAL</span>",
    logo_url_hint: "Public URL to your logo (square ≥200px works best). Skip — we use a coloured monogram from your business name.",
    logo_url_placeholder: "https://yoursite.com/logo.png",
    business_address_label: "Business address <span class='optional-tag'>OPTIONAL</span>",
    business_address_placeholder: "e.g. 12 High Street, Manchester, M1 2AB, United Kingdom",
    license_number_label: "License / Reg. # <span class='optional-tag'>OPTIONAL</span>",
    license_number_placeholder: "e.g. Reg. 12345678",
    tax_id_label: "VAT / Tax # <span class='optional-tag'>OPTIONAL</span>",
    tax_id_placeholder: "e.g. LV40003123456",
    insurance_details_label: "Insurance details <span class='optional-tag'>OPTIONAL</span>",
    insurance_details_placeholder: "e.g. Public liability £2,000,000 (NIG)",
    trade_memberships_label: "Trade memberships / certifications <span class='optional-tag'>OPTIONAL</span>",
    trade_memberships_placeholder: "e.g. NICEIC · Gas Safe 7654321 · FMB Member",
    tagline_label: "Tagline below business name <span class='optional-tag'>OPTIONAL</span>",
    tagline_placeholder: "e.g. Roofing specialists since 2014",
    website_label: "Website <span class='optional-tag'>OPTIONAL</span>",
    website_placeholder: "e.g. www.yourtrade.com",
    brand_color_label: "Brand colour <span class='optional-tag'>OPTIONAL</span>",
    brand_color_hint: "Used for quote header accents. Defaults to Viguls teal.",
    agree_consent: "I agree Viguls can email me my tool link and follow up about marketing systems. <a href='#privacy' class='text-link' id='privacy-link'>Privacy</a>",
    btn_get_tool: "Get My Personal Tool →",

    // Generator Screen
    gen_callout: "<strong>Your tool · pre-filled</strong><br>Type the job. Add optional details if you want them on the quote. Generates in 30 seconds.",
    gen_title_html: "What's the <span class='highlight-teal'>next quote,</span> <span id='gen-name-display'>{name}</span>?",
    gen_subtitle: "Just the job is enough. Open \"More options\" to add client name, project address, custom payment terms, exclusions — anything you want on the quote.",
    job_desc_label: "Job description <span class='required'>*</span>",
    job_desc_placeholder: "e.g. Rebuild deck 4x6m oak, includes demo of old deck and disposal",
    job_desc_hint: "Include size, materials, location, and any extras. Examples below.",
    group_it_digital: "Information Technology (IT) & Digital",
    group_construction: "Construction & Structural Works",
    group_trades_interiors: "Specialist Trades & Interiors",
    group_mep_energy: "Electrical, Plumbing & HVAC (MEP)",
    group_outdoor_metal: "Landscaping, Metal & Fencing",
    group_property_facility: "Facility & Property Services",

    chip_deck: "Rebuild deck 4x6m oak, includes demo of old deck",
    chip_kitchen: "Install kitchen 5x4m, oak veneer cabinets, integrated appliances",
    chip_bath: "Bathroom renovation 6m², full strip-out, new tiling, new fixtures",
    chip_roof: "Roof replacement 120m² metal, 3 skylights, gutters included",
    chip_it: "Corporate website with CMS, customer portal, responsive UI and SEO setup",
    sizing_divider: "SIZE OF THE JOB · <span class='highlight-teal'>OPTIONAL, MORE ACCURATE</span>",
    sizing_warning: "<strong>Fill what applies, skip the rest.</strong> One field is enough. These override anything we read from the description.",
    area_label: "Area",
    length_label: "Length",
    pieces_label_html: "Pieces <span class='unit-sub'>WINDOWS / TREES / SOCKETS...</span>",
    volume_label: "Volume",
    system_size_label_html: "System size <span class='unit-sub'>SOLAR</span>",
    payment_style_label: "Payment style",
    client_type_label: "Client type",
    urgency_label: "Urgency",

    // Accordions
    acc_client_info_html: "<span class='acc-icon'>👤</span> Client info",
    client_name_label: "Client name <span class='optional-tag'>OPTIONAL</span>",
    client_name_placeholder: "e.g. John Smith / SIA ABC",
    quote_ref_label: "Reference / PO # <span class='optional-tag'>OPTIONAL</span>",
    quote_ref_placeholder: "e.g. INQ-2026-042",
    site_address_label: "Project / site address <span class='optional-tag'>OPTIONAL</span>",
    site_address_placeholder: "e.g. 12 Brivibas iela, Riga, LV-1011",
    site_address_hint: "If different from the client's billing address, put the site address here.",

    acc_timeline_html: "<span class='acc-icon'>📅</span> Timeline & payment terms",
    start_date_label: "Estimated start date <span class='optional-tag'>OPTIONAL</span>",
    duration_label: "Estimated duration <span class='optional-tag'>OPTIONAL</span>",
    duration_placeholder: "e.g. 5 working days",
    duration_hint: "Leave blank to use a generic \"from start\" timeline.",
    custom_payment_label: "Custom payment schedule <span class='optional-tag'>OPTIONAL · OVERRIDES DEFAULT</span>",
    custom_payment_placeholder: "e.g. 25% deposit on acceptance · 35% at framing · 25% at first fix · 15% on completion",
    custom_payment_hint: "We pick smart defaults by job size. Type your own here to override.",
    custom_warranty_label: "Custom warranty <span class='optional-tag'>OPTIONAL · OVERRIDES DEFAULT</span>",
    custom_warranty_placeholder: "e.g. 5-year workmanship warranty on roofing, 2 years on flashings",

    acc_inclusions_html: "<span class='acc-icon'>📋</span> Inclusions, exclusions, assumptions",
    included_label: "What's INCLUDED <span class='optional-tag'>ONE PER LINE · OVERRIDES INDUSTRY DEFAULTS</span>",
    included_placeholder: "Site preparation and protective covering\nAll materials and fixings\nTwo-coat finish\nCleanup and waste removal",
    excluded_label: "What's NOT INCLUDED <span class='optional-tag'>ONE PER LINE · OVERRIDES INDUSTRY DEFAULTS</span>",
    excluded_placeholder: "Leave blank to use sensible defaults.\nOr write your own:\nBuilding permits and council fees\nHazardous material removal",
    assumptions_label: "Assumptions <span class='optional-tag'>ONE PER LINE · OVERRIDES DEFAULTS</span>",
    assumptions_placeholder: "Leave blank to use sensible defaults.\nOr write your own:\nReasonable site access and parking available\nPower and water on-site",

    acc_covernote_html: "<span class='acc-icon'>✉️</span> Cover note for client",
    covernote_label: "Personal note that appears at top of quote <span class='optional-tag'>OPTIONAL</span>",
    covernote_placeholder: "e.g. Thanks for inviting us to quote. Pricing below reflects the spec we discussed during our site visit on Tuesday. Happy to walk through any line — just hit reply.",
    covernote_hint: "Adds a friendly intro paragraph above the quote details. Skips if blank.",
    btn_generate_quote: "Generate My Quote →",

    // Loading Screen
    loading_title: "Building your quote...",
    loading_subtitle: "Calculating materials, labor hours, regional pricing,<br>payment milestones, and T&Cs.",
    loading_step_1: "Analysing the job...",
    loading_step_2: "Calculating materials & labor hours...",
    loading_step_3: "Applying regional pricing & milestones...",
    loading_step_4: "Finalising branded PDF layout...",

    // Quote Document View
    ready_title: "Your quote is ready",
    ready_subtitle: "Tip: click any line to edit it before printing/sending.",
    btn_print: "🖨️ Print / PDF",
    btn_email: "📋 Copy as email",
    btn_new_quote: "+ New quote",
    btn_edit_letterhead: "⚙️ Edit letterhead",
    btn_save_quote: "💾 Save Quote",
    btn_view_saved_quotes: "📁 Saved Quotes",
    gen_view_saved_quotes: "📁 Saved Quotes (<span id='gen-quotes-count'>0</span>)",
    toast_quote_saved: "💾 Quote saved to your list!",
    toast_quote_updated: "💾 Quote updated successfully!",
    toast_quote_deleted: "🗑️ Quote deleted.",
    quotes_list_title: "Your Saved <span class='highlight-teal'>Quotes</span>",
    quotes_list_subtitle: "Manage, re-open, duplicate, print, or export all your generated quotes.",
    btn_create_new_quote: "+ New Quote",
    metric_total_quotes: "Total Quotes",
    metric_total_value: "Pipeline Value",
    metric_avg_quote: "Average Quote",
    search_quotes_placeholder: "Search by quote #, client, or job...",
    filter_all_status: "All Statuses",
    status_draft: "Draft",
    status_sent: "Sent",
    status_accepted: "Accepted",
    sort_newest: "Newest First",
    sort_oldest: "Oldest First",
    sort_highest: "Highest Amount",
    sort_lowest: "Lowest Amount",
    btn_export_quotes: "⬇ Export",
    empty_quotes_title: "No saved quotes yet",
    empty_quotes_desc: "Quotes you create or save will appear here so you can easily manage, re-open, or duplicate them anytime.",
    btn_card_open: "Open",
    btn_card_duplicate: "Duplicate",
    btn_card_delete: "Delete",
    modal_delete_title: "Delete Quote",
    modal_delete_desc: "Are you sure you want to delete this quote? This action cannot be undone.",
    modal_btn_confirm_delete: "Delete Quote",

    quote_badge: "QUOTE",
    date_label: "Date",
    valid_label: "Valid",
    valid_days_text: "14 days",
    click_to_edit_hint: "<span class='hint-pencil'>✏️</span> Click any field below to edit before printing",
    quote_for_label: "QUOTE FOR",
    reference_label: "REFERENCE",
    project_label: "PROJECT",

    materials_heading: "MATERIALS",
    col_item: "ITEM",
    col_qty: "QTY",
    col_amount: "AMOUNT",
    btn_add_material: "+ Add material line",

    labour_heading: "LABOUR",
    col_phase: "PHASE",
    col_duration: "DURATION",
    btn_add_labour: "+ Add labour line",

    summary_materials_subtotal: "Materials subtotal",
    summary_labour_subtotal: "Labour subtotal",
    summary_subtotal: "Subtotal",
    summary_vat: "VAT",
    summary_total: "TOTAL",

    scope_heading: "SCOPE OF WORK",
    whats_included_html: "<span class='status-icon green-check'>✔</span> What's included",
    not_included_html: "<span class='status-icon red-cross'>✖</span> Not included",
    btn_add_inclusion: "+ Add inclusion",
    btn_add_exclusion: "+ Add exclusion",

    payment_terms_title: "PAYMENT TERMS & WARRANTY",
    default_payment_terms: "Standard schedule: 25% on acceptance · 40% midway · 35% on final handover.\nIncludes 2-year craftsmanship warranty on all structural elements.",

    tc_heading: "TERMS & CONDITIONS",
    tc_list: [
      { title: "Validity & Offer:", desc: "This quotation remains valid for acceptance for 14 calendar days from the date of issuance." },
      { title: "Payment Terms:", desc: "Invoices are due per the agreed schedule. Title and ownership of all supplied materials remain with the contractor until the total balance is paid in full." },
      { title: "Variations & Additional Work:", desc: "Any alterations, extras, or additions requested during the project will be agreed in writing with an itemized price adjustment prior to execution." },
      { title: "Site Access & Power:", desc: "Client agrees to provide free, safe, and uninterrupted access to the site during agreed hours, including basic power and water supplies." },
      { title: "Unforeseen Conditions:", desc: "Latent defects, dry rot, structural instability, or hazardous substances (e.g. asbestos) not visible during initial survey are subject to separate quotation." },
      { title: "Warranty:", desc: "Workmanship is guaranteed for the specified period upon full settlement. Normal wear and tear or accidental client damage are excluded." }
    ],

    signatures_heading: "ACCEPTANCE & SIGNATURES",
    sig_provider_title: "SERVICE PROVIDER",
    sig_authorized_badge: "AUTHORIZED PROPOSAL",
    sig_rep_label: "Representative:",
    sig_date_label: "Date:",
    sig_client_title: "CLIENT ACCEPTANCE",
    sig_client_instruction: "I approve the specifications, scope, pricing, and terms of this quote:",
    sig_sign_here: "Signature: _________________________________",
    sig_client_name_label: "Client Name:",
    sig_client_signature: "CLIENT SIGNATURE",
    sig_for_contractor: "FOR THE CONTRACTOR",
    sig_name_date: "Name & date",
    footer_generated_by: "Generated by",

    footer_page: "Generated with QuoteWriter · Page 1 of 1",
    toast_copied_email: "📋 Formatted quote copied to clipboard as email!",
    toast_letterhead_saved: "🎉 Letterhead saved! Personal tool ready.",
    toast_quote_ready: "✅ Your quote is ready! Click any line to edit.",
    toast_example_loaded: "✨ Loaded example spec into form",
    toast_changes_discarded: "↩️ Changes discarded",
    toast_quote_recreated: "✨ Quote recreated with your changes!",
    personal_link_title: "Your Personal Tool URL",
    letterhead_saved_tag: "✓ Letterhead Saved",
    personal_link_desc: "Bookmark or save this link on your phone or laptop. Every quote you create will have your branding and letterhead already loaded.",
    btn_copy_link: "📋 Copy Link",
    btn_copied: "✓ Copied!",
    toast_link_copied: "🔗 Personal link copied to clipboard! Save or bookmark it.",
    btn_share_link: "🔗 Personal link",
    modal_unsaved_title: "Unsaved Changes",
    modal_unsaved_desc_step1: "You made changes to your Letterhead settings. Would you like to save changes and recreate your quote, or discard them?",
    modal_unsaved_desc_step2: "You modified the quote details. Would you like to save changes and recreate your quote, or discard them?",
    modal_btn_save_recreate: "Save & Recreate Quote",
    modal_btn_discard: "Discard Changes",
    modal_btn_cancel: "Keep Editing",
    unit_pcs: "pcs",
    select_choose_one: "Choose one...",
    select_choose: "Choose...",

    select_options: {
      industry_trade: [
        // IT & Digital
        { value: "Web design & development", label: "Web design & development" },
        { value: "Software & mobile app development", label: "Software & mobile app development" },
        { value: "IT support, networking & systems", label: "IT support, networking & systems" },
        { value: "Cloud infrastructure & cybersecurity", label: "Cloud infrastructure & cybersecurity" },
        { value: "UI/UX design & digital media", label: "UI/UX design & digital media" },
        // Construction & Structural
        { value: "General contracting & renovation", label: "General contracting & renovation" },
        { value: "Masonry & brickwork", label: "Masonry & brickwork" },
        { value: "Concrete & foundations", label: "Concrete & foundations" },
        { value: "Civil engineering & excavation", label: "Civil engineering & excavation" },
        { value: "Demolition & site clearance", label: "Demolition & site clearance" },
        // Trades & Interiors
        { value: "Carpentry & joinery", label: "Carpentry & joinery" },
        { value: "Roofing & exterior", label: "Roofing & exterior" },
        { value: "Kitchen & bathroom remodeling", label: "Kitchen & bathroom remodeling" },
        { value: "Painting & decorating", label: "Painting & decorating" },
        { value: "Plastering & drywall", label: "Plastering & drywall" },
        { value: "Flooring & tiling", label: "Flooring & tiling" },
        { value: "Windows, doors & glazing", label: "Windows, doors & glazing" },
        // MEP
        { value: "Electrical & smart home", label: "Electrical & smart home" },
        { value: "Plumbing & heating", label: "Plumbing & heating" },
        { value: "HVAC & air conditioning", label: "HVAC & air conditioning" },
        { value: "Solar & renewable energy", label: "Solar & renewable energy" },
        // Outdoor & Metal
        { value: "Landscaping & decking", label: "Landscaping & decking" },
        { value: "Fencing & gates", label: "Fencing & gates" },
        { value: "Metalwork & welding", label: "Metalwork & welding" },
        // Facility & Property
        { value: "Property maintenance & handyman", label: "Property maintenance & handyman" },
        { value: "Commercial & post-construction cleaning", label: "Commercial & post-construction cleaning" }
      ],
      payment_style: [
        { value: "auto", label: "Auto (pick by job size)" },
        { value: "deposit-stages", label: "Deposit & milestone staged" },
        { value: "50-50", label: "50% upfront / 50% upon completion" },
        { value: "completion", label: "100% upon completion" }
      ],
      client_type: [
        { value: "new", label: "New client" },
        { value: "returning", label: "Returning client" },
        { value: "commercial", label: "Commercial / Property manager" }
      ],
      job_urgency: [
        { value: "normal", label: "Normal scheduling" },
        { value: "urgent", label: "Urgent priority (next 48h)" },
        { value: "flexible", label: "Flexible / Next month" }
      ],
      avg_job_size: [
        { value: "Under €2,500", label: "Under €2,500" },
        { value: "€2,500 - €10,000", label: "€2,500 - €10,000" },
        { value: "€10,000 - €50,000", label: "€10,000 - €50,000" },
        { value: "€50,000+", label: "€50,000+" }
      ]
    },

    // Quote Job Presets
    templates: {
      deck: {
        title: "Rebuild deck 4×6m oak, includes demo of old deck",
        materials: [
          { name: "Oak (premium hardwood)", sub: "Premium grade, sized to plan", qty: "120 m²", amount: 7685 },
          { name: "Sub-frame & support structure", sub: "C24 treated timber, pedestals & joists", qty: "per spec", amount: 2795 },
          { name: "Fixings, fasteners, sealant", sub: "Stainless A4 screws, hidden clips, tape", qty: "allowance", amount: 1397 },
          { name: "Finishes (oil, varnish, stain)", sub: "UV-resistant exterior decking oil", qty: "allowance", amount: 1118 },
          { name: "Disposal & site protection", sub: "Old timber demo skip & turf protection", qty: "1 lot", amount: 978 }
        ],
        labour: [
          { phase: "Site preparation & demolition (if needed)", duration: "1 day", amount: 2562 },
          { phase: "Primary build & installation", duration: "3 days", amount: 11100 },
          { phase: "Finishing, sealing & cleanup", duration: "1 day", amount: 3415 }
        ],
        included: [
          "All timber, fixings, finishes and consumables as specified",
          "Site preparation and protective covering of adjacent areas",
          "Removal of existing structure (if part of scope)",
          "Cleanup of work area at the end of each day",
          "Final waste removal and disposal"
        ],
        excluded: [
          "Foundation / groundwork",
          "Electrical / plumbing first-fix integration",
          "Painting & decorating finishes",
          "Permit & planning fees",
          "Surveying or structural calculations",
          "Hazardous material removal (asbestos, lead paint, etc.)",
          "Unforeseen site conditions discovered after work begins (re-quoted)"
        ]
      },
      kitchen: {
        title: "Install kitchen 5×4m, oak veneer cabinets, integrated appliances",
        materials: [
          { name: "Cabinetry & Oak Veneer Units", sub: "Bespoke soft-close carcasing, pre-assembled", qty: "1 set", amount: 8450 },
          { name: "Quartz / Composite Countertops", sub: "20mm engineered stone with undermount cutout", qty: "8 lm", amount: 3200 },
          { name: "Integrated Appliance Package", sub: "Induction hob, oven, extract & integrated dishwasher", qty: "1 pkg", amount: 4600 },
          { name: "Plumbing & Electrical 2nd Fix Items", sub: "Sink, designer mixer tap, LED under-cabinet strips", qty: "allowance", amount: 1450 }
        ],
        labour: [
          { phase: "Rip-out, first-fix plumbing & electrics reroute", duration: "2 days", amount: 2800 },
          { phase: "Cabinetry installation & precision scribing", duration: "3 days", amount: 3900 },
          { phase: "Worktop template, fit & appliance commissioning", duration: "2 days", amount: 2400 }
        ],
        included: [
          "Supply and installation of all kitchen cabinetry and worktops",
          "Connection to existing water, waste, and electrical points",
          "Appliance fitting and commissioning",
          "Final tidy and thorough handover cleaning"
        ],
        excluded: [
          "Structural wall removals or steel beam installations",
          "Major boiler relocation or gas main alterations",
          "Floor screeding beyond standard leveling compound",
          "Council planning application fees"
        ]
      },
      bath: {
        title: "Bathroom renovation 6m², full strip-out, new tiling, new fixtures",
        materials: [
          { name: "Large Format Porcelain Tiles", sub: "Rectified anti-slip porcelain wall & floor tiles", qty: "24 m²", amount: 1850 },
          { name: "Sanitaryware & Brassware Suite", sub: "Walk-in shower screen, concealed valve, rimless WC, vanity", qty: "1 pkg", amount: 2950 },
          { name: "Tanking kit, adhesive & epoxy grout", sub: "Full wet-room waterproofing membrane", qty: "allowance", amount: 780 }
        ],
        labour: [
          { phase: "Full strip-out and waste disposal", duration: "1 day", amount: 1250 },
          { phase: "Plumbing first-fix & wall tanking waterproofing", duration: "2 days", amount: 2400 },
          { phase: "Tiling, grouting & sanitaryware second-fix", duration: "3 days", amount: 3600 }
        ],
        included: [
          "Complete strip out down to studs/masonry",
          "Full wet-zone waterproof tanking certificate",
          "Tile fixing, grouting, and sanitaryware fitting",
          "Disposal of old sanitaryware and rubble"
        ],
        excluded: [
          "Underfloor heating electrical connection to main board",
          "Extensive joist sistering or structural dry rot repair",
          "Supply of high-end custom mirrors unless listed"
        ]
      },
      roof: {
        title: "Roof replacement 120m² metal, 3 skylights, gutters included",
        materials: [
          { name: "Standing Seam Metal Panels / Profiled Sheets", sub: "0.7mm coated steel with anti-condensation backing", qty: "120 m²", amount: 6900 },
          { name: "Skylight Windows & Flashing Kits", sub: "Triple-glazed thermally broken roof windows", qty: "3 units", amount: 2400 },
          { name: "Breathable Membrane & Treated Counter-battens", sub: "Heavy-duty vapour permeable underlay", qty: "1 lot", amount: 1150 },
          { name: "Seamless Aluminium Gutters & Downpipes", sub: "Deep-flow profile with matching brackets", qty: "28 lm", amount: 1380 }
        ],
        labour: [
          { phase: "Scaffolding erection & old covering strip-off", duration: "2 days", amount: 2850 },
          { phase: "Membrane, battening & panel fixing", duration: "4 days", amount: 6400 },
          { phase: "Skylight integration, flashing & guttering", duration: "2 days", amount: 2750 }
        ],
        included: [
          "Complete removal of old roofing covering",
          "Fitting of new membrane, battens, and standing seam roof",
          "Installation of skylights and bespoke flashing kits",
          "Full gutter replacement and site cleanup"
        ],
        excluded: [
          "Major timber truss replacement if rot is uncovered",
          "Chimney rebuilding or structural masonry repairs",
          "Long-term scaffolding rental beyond agreed build window"
        ]
      },
      it: {
        title: "Corporate website with CMS, customer portal, responsive UI and SEO setup",
        materials: [
          { name: "Cloud hosting, SSL & domain registration", sub: "High-performance NVMe cloud server, CDN & SSL certificate (1 year)", qty: "1 yr", amount: 680 },
          { name: "CMS, plugins & UI component framework", sub: "Enterprise CMS licenses, premium UI design kit & security suite", qty: "1 license", amount: 950 },
          { name: "Automated backups & monitoring suite", sub: "Daily offsite backups, uptime monitor & firewall subscription (1 year)", qty: "1 yr", amount: 480 }
        ],
        labour: [
          { phase: "UI/UX wireframes, visual design & client prototype", duration: "5 days", amount: 2600 },
          { phase: "Frontend responsive development & CMS backend integration", duration: "8 days", amount: 4200 },
          { phase: "Customer portal authentication & API integration", duration: "5 days", amount: 2800 },
          { phase: "Testing, security audit, SEO indexing & launch", duration: "2 days", amount: 1100 }
        ],
        included: [
          "Fully responsive design (mobile, tablet, desktop)",
          "Easy-to-use CMS administration panel with user management",
          "Lead capture forms with automated email notifications",
          "Search engine optimization (SEO) technical foundation & analytics setup",
          "30-day post-launch warranty and bug-fix support"
        ],
        excluded: [
          "Ongoing monthly copywriting and content creation",
          "Paid third-party API usage fees (SMS gateways, payment gateways)",
          "Legacy system data migration requiring custom database extraction"
        ]
      },
      general: {
        title: "General Construction & Renovation Project",
        materials: [
          { name: "Primary project materials & hardware", sub: "Commercial grade, tailored to specification", qty: "50 units", amount: 3500 },
          { name: "Sub-structure, anchors & fixings", sub: "Compliant structural fasteners and supports", qty: "allowance", amount: 1050 },
          { name: "Protective coatings, sealants & consumables", sub: "High-durability commercial sealants", qty: "1 lot", amount: 525 },
          { name: "Site protection & debris containment", sub: "Heavy duty dust sheeting & disposal", qty: "1 lot", amount: 650 }
        ],
        labour: [
          { phase: "Site preparation, measure & layout", duration: "1 day", amount: 1100 },
          { phase: "Core fabrication & mechanical installation", duration: "3 days", amount: 4500 },
          { phase: "Quality inspection, sealing & final handover", duration: "1 day", amount: 1250 }
        ],
        included: [
          "All specified materials and certified trade labor",
          "Daily cleanup and final handover inspection",
          "Manufacturer product warranties and installation guarantee"
        ],
        excluded: [
          "Planning permission or structural engineer stamps",
          "Unforeseen structural defects behind walls or underground",
          "Out-of-hours weekend emergency scheduling"
        ]
      }
    }
  },

  Latvian: {
    // Navigation
    nav_setup: "1. Veidlapa",
    nav_generator: "2. Izveidot tāmi",
    nav_quote: "3. Tāmes priekšskatījums",
    nav_saved_quotes: "Saglabātās tāmes",
    nav_saved_quotes_html: "📁 Saglabātās tāmes <span class='nav-count-badge' id='nav-quotes-count'>0</span>",
    brand_badge: "no Viguls",

    // Setup / Onboarding
    setup_title: "Iegūstiet savu <span class='highlight-teal'>personīgo Tāmētāju</span>",
    setup_subtitle: "Iestatiet vienreiz. Saglabājiet saiti grāmatzīmēs. Izmantojiet katram darbam — ievadiet 1 rindiņu un saņemiet pilnu zīmola tāmi 30 sekundēs. Bez maksas uz visiem laikiem.",
    setup_callout_1: "Pēc šīs formas aizpildīšanas jūs saņemsiet personīgu saiti ar jūsu datiem. Tas ir <strong>JŪSU</strong> rīks — saglabājiet to grāmatzīmēs.",
    business_name_label: "Uzņēmuma nosaukums <span class='required'>*</span>",
    business_name_hint: "Šis parādīsies katras tāmes galvenē — tieši tā, kā vēlaties, lai klienti to redz.",
    business_name_placeholder: "piem. SIA Smith Carpentry",
    user_email_label: "Jūsu e-pasts <span class='required'>*</span>",
    user_email_placeholder: "jusu@uznemums.lv",
    user_phone_label: "Tālrunis <span class='required'>*</span>",
    user_phone_placeholder: "+371 29 _ _ _ _ _ _",
    industry_label: "Nozare / amats <span class='required'>*</span>",
    region_label: "Reģions <span class='required'>*</span>",
    currency_label: "Valūta",
    vat_label: "PVN (automātiski pēc reģiona)",
    avg_job_size_label: "Vidējais pasūtījuma apjoms <span class='required'>*</span>",
    quote_language_label: "Tāmes valoda <span class='required'>*</span>",
    quote_language_hint: "Jūsu tāmes tiks ģenerētas šajā valodā.",
    letterhead_divider: "JŪSU VEIDLAPA · <span class='highlight-teal'>ZĪMOLA TĀMĒM</span>",
    setup_callout_2: "<strong>Tiek pievienots katrai ģenerētajai tāmei.</strong> Logotips, reģistrācija, apdrošināšana — piešķir tāmēm izskatu, it kā tās būtu veidojusi dārga dizaina aģentūra. Varat izlaist jebkuru lauku un vēlāk to labot caur ⚙ ikonu.",
    logo_url_label: "Logotipa URL <span class='optional-tag'>PĒC IZVĒLES</span>",
    logo_url_hint: "Publiska saite uz jūsu logotipu (vislabāk kvadrātveida ≥200px). Izlaidiet — mēs izmantosim monogrammu no uzņēmuma nosaukuma.",
    logo_url_placeholder: "https://jusuuznemums.lv/logo.png",
    business_address_label: "Juridiskā adrese <span class='optional-tag'>PĒC IZVĒLES</span>",
    business_address_placeholder: "piem. Brīvības iela 100, Rīga, LV-1010, Latvija",
    license_number_label: "Reģistrācijas / Būvkomersanta Nr. <span class='optional-tag'>PĒC IZVĒLES</span>",
    license_number_placeholder: "piem. Reģ. 40203099123",
    tax_id_label: "PVN / Nodokļu maksātāja Nr. <span class='optional-tag'>PĒC IZVĒLES</span>",
    tax_id_placeholder: "piem. LV40203099123",
    insurance_details_label: "Apdrošināšanas dati <span class='optional-tag'>PĒC IZVĒLES</span>",
    insurance_details_placeholder: "piem. Civiltiesiskā atbildība €1,500,000 (BTA)",
    trade_memberships_label: "Sertifikāti / Guildes piederība <span class='optional-tag'>PĒC IZVĒLES</span>",
    trade_memberships_placeholder: "piem. Sertificēts būvdarbu vadītājs · LBS biedrs",
    tagline_label: "Devīze zem uzņēmuma nosaukuma <span class='optional-tag'>PĒC IZVĒLES</span>",
    tagline_placeholder: "piem. Kvalitatīvi jumiķu darbi kopš 2014. gada",
    website_label: "Mājaslapa <span class='optional-tag'>PĒC IZVĒLES</span>",
    website_placeholder: "piem. www.jusuamats.lv",
    brand_color_label: "Zīmola krāsa <span class='optional-tag'>PĒC IZVĒLES</span>",
    brand_color_hint: "Izmanto tāmes akcentiem. Pēc noklusējuma Viguls tumši zaļā.",
    agree_consent: "Piekrītu, ka Viguls var nosūtīt manu rīka saiti un informāciju par sistēmām. <a href='#privacy' class='text-link' id='privacy-link'>Privātums</a>",
    btn_get_tool: "Saņemt manu personīgo rīku →",

    // Generator Screen
    gen_callout: "<strong>Jūsu rīks · sagatavots</strong><br>Ievadiet darbu. Pievienojiet papildu detaļas, ja vēlaties tās tāmē. Tiek ģenerēts 30 sekundēs.",
    gen_title_html: "Kāda ir <span class='highlight-teal'>nākamā tāme,</span> <span id='gen-name-display'>{name}</span>?",
    gen_subtitle: "Pietiek tikai ar darba aprakstu. Atveriet \"Papildu opcijas\", lai pievienotu klienta vārdu, objekta adresi, pielāgotus apmaksas nosacījumus un izņēmumus.",
    job_desc_label: "Darba apraksts <span class='required'>*</span>",
    job_desc_placeholder: "piem. Pārbūvēt ozolkoka terasi 4x6m, iekļaujot vecās terases demontāžu un utilizāciju",
    job_desc_hint: "Iekļaujiet izmēru, materiālus, atrašanās vietu un papilddarbus. Piemēri zemāk.",
    group_it_digital: "Informācijas tehnoloģijas (IT) un digitālie pakalpojumi",
    group_construction: "Būvniecība un nesošās konstrukcijas",
    group_trades_interiors: "Apdare, galdniecība un interjers",
    group_mep_energy: "Elektroapgāde, siltumapgāde un inženiersistēmas",
    group_outdoor_metal: "Labiekārtošana, metāls un nožogojumi",
    group_property_facility: "Apsaimniekošana un uzkopšana",

    chip_deck: "Pārbūvēt ozolkoka terasi 4x6m, iekļaujot vecās terases demontāžu un utilizāciju",
    chip_kitchen: "Virtuves montāža 5x4m, ozola finiera skapīši, iebūvētā tehnika",
    chip_bath: "Vannas istabas remonts 6m², pilna demontāža, jaunas flīzes, santehnika",
    chip_roof: "Jumta maiņa 120m² metāla profils, 3 jumta logi, notekas iekļautas",
    chip_it: "Korporatīvā mājaslapa ar CMS, klientu portālu, responsīvu UI un SEO",
    sizing_divider: "DARBA APJOMS · <span class='highlight-teal'>PĒC IZVĒLES, PRECĪZĀKAM APRĒĶINAM</span>",
    sizing_warning: "<strong>Aizpildiet to, kas attiecas, pārējo izlaidiet.</strong> Pietiek ar vienu lauku. Šie dati aizstāj aprakstā minētos parametrus.",
    area_label: "Platība",
    length_label: "Garums",
    pieces_label_html: "Skaits <span class='unit-sub'>LOGI / KOKI / ROZETES...</span>",
    volume_label: "Tilpums",
    system_size_label_html: "Sistēmas jauda <span class='unit-sub'>SAULES PANEĻI</span>",
    payment_style_label: "Apmaksas modelis",
    client_type_label: "Klienta veids",
    urgency_label: "Steidzamība",

    // Accordions
    acc_client_info_html: "<span class='acc-icon'>👤</span> Klienta informācija",
    client_name_label: "Klienta vārds / nosaukums <span class='optional-tag'>PĒC IZVĒLES</span>",
    client_name_placeholder: "piem. Jānis Bērziņš / SIA ABC",
    quote_ref_label: "Atsauces / Pasūtījuma Nr. <span class='optional-tag'>PĒC IZVĒLES</span>",
    quote_ref_placeholder: "piem. INQ-2026-042",
    site_address_label: "Objekta / darba vietas adrese <span class='optional-tag'>PĒC IZVĒLES</span>",
    site_address_placeholder: "piem. Brīvības iela 12, Rīga, LV-1011",
    site_address_hint: "Ja tā atšķiras no klienta norēķinu adreses, ievadiet objekta adresi šeit.",

    acc_timeline_html: "<span class='acc-icon'>📅</span> Termiņi un apmaksas nosacījumi",
    start_date_label: "Plānotais sākuma datums <span class='optional-tag'>PĒC IZVĒLES</span>",
    duration_label: "Paredzamais ilgums <span class='optional-tag'>PĒC IZVĒLES</span>",
    duration_placeholder: "piem. 5 darba dienas",
    duration_hint: "Atstājiet tukšu, lai izmantotu vispārīgu laika grafiku.",
    custom_payment_label: "Pielāgots apmaksas grafiks <span class='optional-tag'>PĒC IZVĒLES · AIZSTĀJ NOKLUSĒJUMU</span>",
    custom_payment_placeholder: "piem. 25% avanss parakstot · 35% pēc karkasa · 25% pēc komunikācijām · 15% pieņemot",
    custom_payment_hint: "Mēs izvēlamies piemērotu noklusējumu. Ievadiet savu, lai to aizstātu.",
    custom_warranty_label: "Garantijas termiņš <span class='optional-tag'>PĒC IZVĒLES · AIZSTĀJ NOKLUSĒJUMU</span>",
    custom_warranty_placeholder: "piem. 5 gadu garantija jumta segumam, 2 gadi skārdnieka mezgliem",

    acc_inclusions_html: "<span class='acc-icon'>📋</span> Iekļauts, nav iekļauts, pieņēmumi",
    included_label: "Kas ir IEKĻAUTS <span class='optional-tag'>VIENS KATRĀ RINDĀ</span>",
    included_placeholder: "Būvlaukuma sagatavošana un aizsargpārklāji\nVisi nepieciešamie materiāli un stiprinājumi\nDivkāršs apdares pārklājums\nUzkopšana un būvgružu izvešana",
    excluded_label: "Kas NAV IEKĻAUTS <span class='optional-tag'>VIENS KATRĀ RINDĀ</span>",
    excluded_placeholder: "Atstājiet tukšu noklusējumam.\nVai ierakstiet savus:\nBūvatļauju un pašvaldības nodevas\nBīstamo atkritumu utilizācija",
    assumptions_label: "Pieņēmumi <span class='optional-tag'>VIENS KATRĀ RINDĀ</span>",
    assumptions_placeholder: "Atstājiet tukšu noklusējumam.\nVai ierakstiet savus:\nBrīva piebraukšana un stāvvieta objektā\nElektrības un ūdens pieslēgums uz vietas",

    acc_covernote_html: "<span class='acc-icon'>✉️</span> Pavadvēstule klientam",
    covernote_label: "Personīga piezīme tāmes sākumā <span class='optional-tag'>PĒC IZVĒLES</span>",
    covernote_placeholder: "piem. Paldies par uzaicinājumu sagatavot tāmi. Cenas atbilst otrdienas objekta apskatē pārrunātajam. Labprāt atbildēšu uz visiem jautājumiem.",
    covernote_hint: "Pievieno draudzīgu ievada rindkopu virs tāmes pozīcijām. Ja tukšs, netiek rādīts.",
    btn_generate_quote: "Ģenerēt manu tāmi →",

    // Loading Screen
    loading_title: "Tiek veidota tāme...",
    loading_subtitle: "Tiek aprēķināti materiāli, darba stundas, reģionālās cenas,<br>apmaksas posmi un nosacījumi.",
    loading_step_1: "Analizējam darba apjomu...",
    loading_step_2: "Aprēķinām materiālus un darba stundas...",
    loading_step_3: "Piemērojam reģionālās cenas un posmus...",
    loading_step_4: "Pabeidzam noformēto tāmi...",

    // Quote Document View
    ready_title: "Jūsu tāme ir gatava",
    ready_subtitle: "Ieteikums: noklikšķiniet uz jebkuras rindas, lai to labotu pirms drukāšanas.",
    btn_print: "🖨️ Drukāt / PDF",
    btn_email: "📋 Kopēt e-pastam",
    btn_new_quote: "+ Jauna tāme",
    btn_edit_letterhead: "⚙️ Labot veidlapu",
    btn_save_quote: "💾 Saglabāt tāmi",
    btn_view_saved_quotes: "📁 Saglabātās tāmes",
    gen_view_saved_quotes: "📁 Saglabātās tāmes (<span id='gen-quotes-count'>0</span>)",
    toast_quote_saved: "💾 Tāme veiksmīgi saglabāta!",
    toast_quote_updated: "💾 Tāmes izmaiņas saglabātas!",
    toast_quote_deleted: "🗑️ Tāme izdzēsta.",
    quotes_list_title: "Jūsu saglabātās <span class='highlight-teal'>tāmes</span>",
    quotes_list_subtitle: "Pārvaldiet, atveriet, dublējiet, drukājiet vai eksportējiet visas izveidotās tāmes.",
    btn_create_new_quote: "+ Jauna tāme",
    metric_total_quotes: "Kopā tāmju",
    metric_total_value: "Kopējā vērtība",
    metric_avg_quote: "Vidējā tāme",
    search_quotes_placeholder: "Meklēt pēc tāmes #, klienta vai nosaukuma...",
    filter_all_status: "Visi statusi",
    status_draft: "Melnraksts",
    status_sent: "Nosūtīta",
    status_accepted: "Apstiprināta",
    sort_newest: "Jaunākās vispirms",
    sort_oldest: "Vecākās vispirms",
    sort_highest: "Lielākā summa",
    sort_lowest: "Mazākā summa",
    btn_export_quotes: "⬇ Eksportēt",
    empty_quotes_title: "Vēl nav saglabātu tāmju",
    empty_quotes_desc: "Izveidotās vai saglabātās tāmes parādīsies šeit, lai jūs tās varētu ērti atvērt, dublēt vai rediģēt.",
    btn_card_open: "Atvērt",
    btn_card_duplicate: "Dublēt",
    btn_card_delete: "Dzēst",
    modal_delete_title: "Dzēst tāmi",
    modal_delete_desc: "Vai tiešām vēlaties dzēst šo tāmi? Šo darbību nevar atsaukt.",
    modal_btn_confirm_delete: "Dzēst tāmi",

    quote_badge: "TĀME",
    date_label: "Datums",
    valid_label: "Derīgs",
    valid_days_text: "14 dienas",
    click_to_edit_hint: "<span class='hint-pencil'>✏️</span> Noklikšķiniet uz jebkura lauka zemāk, lai to labotu",
    quote_for_label: "TĀME KLIENTAM",
    reference_label: "ATSAUCE",
    project_label: "PROJEKTS",

    materials_heading: "MATERIĀLI",
    col_item: "POZĪCIJA",
    col_qty: "DAUDZUMS",
    col_amount: "SUMMA",
    btn_add_material: "+ Pievienot materiālu rindu",

    labour_heading: "DARBS",
    col_phase: "DARBA POSMS",
    col_duration: "ILGUMS",
    btn_add_labour: "+ Pievienot darba rindu",

    summary_materials_subtotal: "Materiāli kopā",
    summary_labour_subtotal: "Darbs kopā",
    summary_subtotal: "Kopā bez PVN",
    summary_vat: "PVN",
    summary_total: "KOPĀ APMAKSAI",

    scope_heading: "DARBA APJOMS",
    whats_included_html: "<span class='status-icon green-check'>✔</span> Kas ir iekļauts",
    not_included_html: "<span class='status-icon red-cross'>✖</span> Nav iekļauts",
    btn_add_inclusion: "+ Pievienot iekļauto",
    btn_add_exclusion: "+ Pievienot neiekļauto",

    payment_terms_title: "APMAKSAS NOTEIKUMI UN GARANTIJA",
    default_payment_terms: "Standarta grafiks: 25% avanss parakstot · 40% darbu vidusposmā · 35% pēc nodošanas.\nIetver 2 gadu meistara garantiju visiem nesošajiem elementiem.",

    tc_heading: "NOTEIKUMI UN NOSACĪJUMI",
    tc_list: [
      { title: "Derīgums un piedāvājums:", desc: "Šis tāmes piedāvājums ir derīgs akceptēšanai 14 kalendārās dienas no izsniegšanas datuma." },
      { title: "Apmaksas kārtība:", desc: "Rēķini tiek apmaksāti saskaņā ar saskaņoto grafiku. Materiāli paliek izpildītāja īpašumā līdz pilnīgai rēķinu apmaksai." },
      { title: "Izmaiņas un papilddarbi:", desc: "Jebkuras izmaiņas, papildinājumi vai papildu darbi tiek rakstiski saskaņoti ar cenas korekciju pirms to izpildes uzsākšanas." },
      { title: "Piekļuve un komunikācijas:", desc: "Pasūtītājs nodrošina brīvu un drošu piekļuvi objektam darba laikā, kā arī nepārtrauktu elektroenerģijas un ūdens pieejamību." },
      { title: "Neparedzēti apstākļi:", desc: "Slēpti defekti, puve vai bīstamas vielas, kas nebija redzamas sākotnējā apskatē, tiek tāmētas un apmaksātas atsevišķi." },
      { title: "Garantija:", desc: "Veiktajiem darbiem tiek nodrošināta norādītā garantija pēc pilnīgas norēķinu veikšanas. Dabiskais nolietojums nav garantijas gadījums." }
    ],

    signatures_heading: "APSTIPRINĀJUMS UN PARAKSTI",
    sig_provider_title: "PAKALPOJUMA SNIEDZĒJS",
    sig_authorized_badge: "AUTORIZĒTS PIEDĀVĀJUMS",
    sig_rep_label: "Pārstāvis:",
    sig_date_label: "Datums:",
    sig_client_title: "KLIENTA APSTIPRINĀJUMS",
    sig_client_instruction: "Apstiprinu šīs tāmes specifikāciju, darbu apjomu, cenas un nosacījumus:",
    sig_sign_here: "Paraksts: _________________________________",
    sig_client_name_label: "Klienta Vārds, Uzvārds:",
    sig_client_signature: "KLIENTA PARAKSTS",
    sig_for_contractor: "IZPILDĪTĀJS",
    sig_name_date: "Vārds, uzvārds un datums",
    footer_generated_by: "Ģenerēts ar",

    footer_page: "Ģenerēts ar QuoteWriter · 1. lapa no 1",
    toast_copied_email: "📋 Tāmes e-pasts nokopēts starpliktuvē!",
    toast_letterhead_saved: "🎉 Veidlapa saglabāta! Rīks sagatavots.",
    toast_quote_ready: "✅ Tāme ir gatava! Noklikšķiniet, lai labotu.",
    toast_example_loaded: "✨ Piemērs ielādēts formā",
    toast_changes_discarded: "↩️ Izmaiņas atmestas",
    toast_quote_recreated: "✨ Tāme pārrēķināta ar jaunajiem datiem!",
    personal_link_title: "Jūsu personīgā rīka saite",
    letterhead_saved_tag: "✓ Veidlapa saglabāta",
    personal_link_desc: "Pievienojiet šo saiti grāmatzīmēm telefonā vai datorā. Katrā tāmē jau būs ielādēti jūsu uzņēmuma rekvizīti un zīmols.",
    btn_copy_link: "📋 Kopēt saiti",
    btn_copied: "✓ Nokopēts!",
    toast_link_copied: "🔗 Personīgā saite nokopēta starpliktuvē! Saglabājiet to grāmatzīmēs.",
    btn_share_link: "🔗 Personīgā saite",
    modal_unsaved_title: "Nesaglabātas izmaiņas",
    modal_unsaved_desc_step1: "Jūs veicāt izmaiņas veidlapas iestatījumos. Vai vēlaties saglabāt izmaiņas un pārrēķināt tāmi, vai atcelt izmaiņas?",
    modal_unsaved_desc_step2: "Jūs mainījāt tāmes datus. Vai vēlaties saglabāt izmaiņas un pārrēķināt tāmi, vai atcelt izmaiņas?",
    modal_btn_save_recreate: "Saglabāt un pārrēķināt tāmi",
    modal_btn_discard: "Atmest izmaiņas",
    modal_btn_cancel: "Turpināt labot",
    unit_pcs: "gab.",
    select_choose_one: "Izvēlieties vienu...",
    select_choose: "Izvēlieties...",

    select_options: {
      industry_trade: [
        // IT & Digital
        { value: "Web design & development", label: "Mājaslapu izstrāde un programmēšana" },
        { value: "Software & mobile app development", label: "Programmatūras un mobilo lietotņu izstrāde" },
        { value: "IT support, networking & systems", label: "IT atbalsts, datortīkli un sistēmas" },
        { value: "Cloud infrastructure & cybersecurity", label: "Mākoņpakalpojumi un kiberdrošība" },
        { value: "UI/UX design & digital media", label: "UI/UX dizains un digitālie mediji" },
        // Būvniecība
        { value: "General contracting & renovation", label: "Ģenerālā būvniecība un remonts" },
        { value: "Masonry & brickwork", label: "Mūrnieku un akmens apstrādes darbi" },
        { value: "Concrete & foundations", label: "Betonēšana un pamatu izbūve" },
        { value: "Civil engineering & excavation", label: "Zemes darbi un inženiertīkli" },
        { value: "Demolition & site clearance", label: "Demontāža un teritorijas tīrīšana" },
        // Apdare & amatniecība
        { value: "Carpentry & joinery", label: "Galdniecība un kokapstrāde" },
        { value: "Roofing & exterior", label: "Jumti un fasādes darbi" },
        { value: "Kitchen & bathroom remodeling", label: "Virtuvju un vannasistabu remonts" },
        { value: "Painting & decorating", label: "Krāsošana un apdare" },
        { value: "Plastering & drywall", label: "Ģipškartons, apmešana un izolācija" },
        { value: "Flooring & tiling", label: "Grīdas un flīzēšana" },
        { value: "Windows, doors & glazing", label: "Logi, durvis un stiklošana" },
        // Inženiersistēmas
        { value: "Electrical & smart home", label: "Elektroinstalācija un viedā māja" },
        { value: "Plumbing & heating", label: "Santehnika un apkure" },
        { value: "HVAC & air conditioning", label: "Ventilācija un gaisa kondicionēšana" },
        { value: "Solar & renewable energy", label: "Saules paneļi un enerģētika" },
        // Āra darbi un metāls
        { value: "Landscaping & decking", label: "Labiekārtošana un terases" },
        { value: "Fencing & gates", label: "Žogi, vārti un nožogojumi" },
        { value: "Metalwork & welding", label: "Metālapstrāde un metināšana" },
        // Apsaimniekošana
        { value: "Property maintenance & handyman", label: "Ēku apsaimniekošana un meistara pakalpojumi" },
        { value: "Commercial & post-construction cleaning", label: "Komerctelpu un pēcceltniecības uzkopšana" }
      ],
      payment_style: [
        { value: "auto", label: "Automātiski (pēc darba apjoma)" },
        { value: "deposit-stages", label: "Avanss un starpmaksājumi" },
        { value: "50-50", label: "50% avansā / 50% pabeidzot" },
        { value: "completion", label: "100% pēc nodošanas" }
      ],
      client_type: [
        { value: "new", label: "Jauns klients" },
        { value: "returning", label: "Esošais klients" },
        { value: "commercial", label: "Komercklients / Apsaimniekotājs" }
      ],
      job_urgency: [
        { value: "normal", label: "Parastais grafiks" },
        { value: "urgent", label: "Steidzami (tuvākajās 48h)" },
        { value: "flexible", label: "Elastīgs / Nākamajā mēnesī" }
      ],
      avg_job_size: [
        { value: "Under €2,500", label: "Zem €2,500" },
        { value: "€2,500 - €10,000", label: "€2,500 - €10,000" },
        { value: "€10,000 - €50,000", label: "€10,000 - €50,000" },
        { value: "€50,000+", label: "€50,000+" }
      ]
    },

    // Quote Job Presets
    templates: {
      deck: {
        title: "Pārbūvēt ozolkoka terasi 4×6m, iekļaujot vecās terases demontāžu",
        materials: [
          { name: "Ozols (augstvērtīga cietkoksne)", sub: "Augstākā šķira, sazāģēts pēc plāna", qty: "120 m²", amount: 7685 },
          { name: "Nesošais karkass un atbalsta konstrukcija", sub: "C24 impregnētas brusas, pēdas un lāgas", qty: "pēc spec.", amount: 2795 },
          { name: "Stiprinājumi, skrūves, hermētiķi", sub: "Nerūsējošā tērauda A4 skrūves, slēptās spailes", qty: "komplekts", amount: 1397 },
          { name: "Apdare (eļļa, vasks, aizsardzība)", sub: "UV noturīga terases eļļa ārdarbiem", qty: "komplekts", amount: 1118 },
          { name: "Būvgružu izvešana un objekta aizsardzība", sub: "Konteiners vecajiem kokmateriāliem un zāliena aizsardzība", qty: "1 kopa", amount: 978 }
        ],
        labour: [
          { phase: "Objekta sagatavošana un demontāža (ja nepieciešams)", duration: "1 diena", amount: 2562 },
          { phase: "Pamatnes izbūve un terases montāža", duration: "3 dienas", amount: 11100 },
          { phase: "Apstrāde ar eļļu, hermetizācija un sakopšana", duration: "1 diena", amount: 3415 }
        ],
        included: [
          "Visi specifikācijā norādītie kokmateriāli, stiprinājumi un apdares līdzekļi",
          "Būvlaukuma sagatavošana un blakus esošo zonu aizsargpārklāji",
          "Esošās konstrukcijas demontāža (ja ietilpst darba apjomā)",
          "Darba vietas sakopšana katras dienas beigās",
          "Būvgružu gala izvešana un utilizācija"
        ],
        excluded: [
          "Pamatu un zemes darbi",
          "Elektroinstalācijas un santehnikas integrācija",
          "Krāsošanas un dekoratīvās apdares papilddarbi",
          "Būvatļaujas un saskaņošanas nodevas pašvaldībā",
          "Ģeodēziskā uzmērīšana un konstrukciju slodžu aprēķini",
          "Bīstamo atkritumu (azbests, svina krāsa u.c.) utilizācija",
          "Neparedzēti apstākļi, kas atklāti pēc darbu uzsākšanas (tiek tāmēti atsevišķi)"
        ]
      },
      kitchen: {
        title: "Virtuves montāža 5×4m, ozola finiera skapīši, iebūvētā tehnika",
        materials: [
          { name: "Virtuves mēbeles un ozola finiera moduļi", sub: "Izgatavots pēc pasūtījuma ar kluso aizvēršanos", qty: "1 kompl.", amount: 8450 },
          { name: "Kvarca / kompozītmateriāla virsma", sub: "20mm akmens masa ar integrētu izlietnes izgriezumu", qty: "8 tm", amount: 3200 },
          { name: "Iebūvējamās sadzīves tehnikas komplekts", sub: "Indukcijas plīts virsma, cepeškrāsns, tvaika nosūcējs, trauku mašīna", qty: "1 kompl.", amount: 4600 },
          { name: "Santehnikas un elektroinstalācijas gala materiāli", sub: "Izlietne, dizaina jaucējkrāns, LED lentes zem skapīšiem", qty: "komplekts", amount: 1450 }
        ],
        labour: [
          { phase: "Demontāža, ūdens un elektrības komunikāciju pielāgošana", duration: "2 dienas", amount: 2800 },
          { phase: "Mēbeļu montāža, līmeņošana un precīza pielāgošana", duration: "3 dienas", amount: 3900 },
          { phase: "Virsmas uzstādīšana, tehnikas pieslēgšana un pārbaude", duration: "2 dienas", amount: 2400 }
        ],
        included: [
          "Visu virtuves skapīšu un darba virsmu piegāde un montāža",
          "Pieslēgums pie esošajiem ūdens, kanalizācijas un elektrības punktiem",
          "Sadzīves tehnikas iebūve un darbības pārbaude",
          "Būvgružu savākšana un telpas nodošanas uzkopšana"
        ],
        excluded: [
          "Nesošo sienu demontāža vai metāla siju ievietošana",
          "Gāzes vada vai apkures katla pārvietošana",
          "Grīdas betonēšana ārpus standarta izlīdzinošā slāņa",
          "Saskaņošana būvvaldē"
        ]
      },
      bath: {
        title: "Vannas istabas remonts 6m², pilna demontāža, jaunas flīzes, santehnika",
        materials: [
          { name: "Lielformāta akmensmasas flīzes", sub: "Rektificētas pretslīdes sienu un grīdas flīzes", qty: "24 m²", amount: 1850 },
          { name: "Santehnikas un furnitūras komplekts", sub: "Iebūvētā duša, stikla siena, pods ar rāmi, izlietnes skapītis", qty: "1 kompl.", amount: 2950 },
          { name: "Hidroizolācijas komplekts, līme un epoksīda šuvotājs", sub: "Pilna mitro zonu hidroizolācijas membrāna", qty: "komplekts", amount: 780 }
        ],
        labour: [
          { phase: "Pilna demontāža līdz karkasam un būvgružu izvešana", duration: "1 diena", amount: 1250 },
          { phase: "Santehnikas komunikāciju montāža un hidroizolācija", duration: "2 dienas", amount: 2400 },
          { phase: "Flīzēšana, šuvošana un santehnikas gala montāža", duration: "3 dienas", amount: 3600 }
        ],
        included: [
          "Pilnīga vecās apdares un iekārtu noņemšana",
          "Sertificēta mitro zonu hidroizolācija",
          "Flīžu ieklāšana, šuvošana un santehnikas uzstādīšana",
          "Vecās santehnikas un būvgružu utilizācija"
        ],
        excluded: [
          "Siltās grīdas kabeļa pievilkšana no galvenā elektrosadales skapja",
          "Puvuša pārseguma siju protezēšana vai nesošo konstrukciju maiņa",
          "Ekskluzīvu pasūtījuma spoguļu piegāde, ja nav atsevišķi minēts"
        ]
      },
      roof: {
        title: "Jumta maiņa 120m² metāla profils, 3 jumta logi, notekas iekļautas",
        materials: [
          { name: "Valcprofila / metāla dakstiņu segums", sub: "0.7mm polimērpārklājuma tērauds ar antikondensāta pārklājumu", qty: "120 m²", amount: 6900 },
          { name: "Jumta logi ar pieslēguma hidroizolācijas komplektiem", sub: "Trīskāršā stiklojuma energoefektīvi logi", qty: "3 gab.", amount: 2400 },
          { name: "Difūzijas membrāna un impregnēti pretlati", sub: "Augstas izturības tvaika caurlaidīga zemseguma membrāna", qty: "1 kopa", amount: 1150 },
          { name: "Bezšuvju alumīnija noteku sistēma", sub: "Dziļā profila teknes un notekcaurules ar stiprinājumiem", qty: "28 tm", amount: 1380 }
        ],
        labour: [
          { phase: "Sastatņu uzstādīšana un vecā jumta seguma noņemšana", duration: "2 dienas", amount: 2850 },
          { phase: "Membrānas, latojuma un jumta seguma montāža", duration: "4 dienas", amount: 6400 },
          { phase: "Jumta logu iestrāde, skārda mezgli un notekas", duration: "2 dienas", amount: 2750 }
        ],
        included: [
          "Pilnīga vecā jumta seguma demontāža",
          "Jaunās membrānas, latu un metāla seguma ieklāšana",
          "Jumta logu montāža ar oriģinālajiem pieslēgumiem",
          "Pilna noteksistēmas nomaiņa un būvlaukuma sakopšana"
        ],
        excluded: [
          "Bojāto spāru vai karkasa nomaiņa, ja atklājas puve",
          "Dūmvada pārmūrēšana vai fasādes remonts",
          "Sastatņu noma ārpus saskaņotā darbu veikšanas perioda"
        ]
      },
      it: {
        title: "Korporatīvā mājaslapa ar CMS, klientu portālu, responsīvu UI un SEO",
        materials: [
          { name: "Mākoņserveris, domēns un SSL sertifikāts", sub: "Augstas veiktspējas NVMe serveris, CDN tīkls un SSL (1 gads)", qty: "1 gads", amount: 680 },
          { name: "Satura vadības sistēmas (CMS) un UI licences", sub: "Komerciālas CMS licences, dizaina bibliotēkas un drošības spraudņi", qty: "1 lic.", amount: 950 },
          { name: "Automātiskā dublēšana un monitorings", sub: "Datu rezerves kopijas, darbspējas uzraudzība un ugunsmūris (1 gads)", qty: "1 gads", amount: 480 }
        ],
        labour: [
          { phase: "UI/UX prototipēšana, arhitektūra un dizains", duration: "5 dienas", amount: 2600 },
          { phase: "Frontend adaptīvā izstrāde un CMS integrācija", duration: "8 dienas", amount: 4200 },
          { phase: "Klientu portāla autorizācija un API pieslēgumi", duration: "5 dienas", amount: 2800 },
          { phase: "Testēšana, kiberdrošības pārbaude, SEO un palaišana", duration: "2 dienas", amount: 1100 }
        ],
        included: [
          "Pilnībā responsīvs dizains (mobilajiem, planšetēm un datoriem)",
          "Ērta CMS vadības panelis administratoriem ar piekļuves tiesībām",
          "Pieteikumu formas ar automātiskiem e-pasta paziņojumiem",
          "Tehniskā SEO bāze un Google Analytics pieslēgšana",
          "30 dienu garantija un kļūdu labošana pēc nodošanas ekspluatācijā"
        ],
        excluded: [
          "Regulāra ikmēneša satura un tekstu rakstīšana",
          "Maksas ārējo API (SMS vārteju, banku komisiju) uzturēšana",
          "Vēsturisko datubāzu manuāla pārnešana no nestandarta sistēmām"
        ]
      },
      general: {
        title: "Būvniecības un telpu renovācijas projekts",
        materials: [
          { name: "Galvenie būvmateriāli un furnitūra", sub: "Komerciālas kvalitātes, atbilstoši specifikācijai", qty: "50 vien.", amount: 3500 },
          { name: "Nesošās konstrukcijas, enkuri un stiprinājumi", sub: "Sertificēti konstrukciju elementi un balsti", qty: "komplekts", amount: 1050 },
          { name: "Aizsargpārklājumi, hermētiķi un palīgmateriāli", sub: "Paaugstinātas izturības profesionālie materiāli", qty: "1 kopa", amount: 525 },
          { name: "Būvlaukuma aizsardzība un atkritumu konteiners", sub: "Izturīgas aizsargplēves un atkritumu izvešana", qty: "1 kopa", amount: 650 }
        ],
        labour: [
          { phase: "Objekta sagatavošana, uzmērīšana un plānošana", duration: "1 diena", amount: 1100 },
          { phase: "Galvenie montāžas un būvdarbi", duration: "3 dienas", amount: 4500 },
          { phase: "Kvalitātes kontrole, nobeiguma darbi un nodošana", duration: "1 diena", amount: 1250 }
        ],
        included: [
          "Visi specifikācijā norādītie materiāli un sertificēts meistaru darbs",
          "Ikdienas uzkopšana un gala nodošanas pārbaude",
          "Materiālu ražotāja garantijas un paveiktā darba garantija"
        ],
        excluded: [
          "Būvatļauju un inženieru saskaņojumu nodevas",
          "Slēpti konstrukciju defekti aiz sienām vai pazemē",
          "Ārpuskārtas brīvdienu un avārijas darbi"
        ]
      }
    }
  },

  German: {
    // Navigation
    nav_setup: "1. Briefkopf",
    nav_generator: "2. Angebot erstellen",
    nav_quote: "3. Angebotsvorschau",
    nav_saved_quotes: "Gespeicherte Angebote",
    nav_saved_quotes_html: "📁 Gespeicherte Angebote <span class='nav-count-badge' id='nav-quotes-count'>0</span>",
    brand_badge: "von Viguls",

    // Setup / Onboarding
    setup_title: "Holen Sie sich Ihren <span class='highlight-teal'>persönlichen Angebots-Ersteller</span>",
    setup_subtitle: "Einmal einrichten. URL als Lesezeichen speichern. Für jeden Auftrag nutzen — 1 Zeile tippen, vollständiges Markenangebot in 30 Sekunden erhalten. Dauerhaft kostenlos.",
    setup_callout_1: "Nach diesem Formular erhalten Sie eine persönliche URL mit Ihren Daten. Das ist <strong>IHR</strong> Tool — speichern Sie es als Lesezeichen.",
    business_name_label: "Firmenname <span class='required'>*</span>",
    business_name_hint: "Erscheint auf jedem Angebot — genau so, wie Ihre Kunden es sehen sollen.",
    business_name_placeholder: "z.B. Schmidt Zimmerei GmbH",
    user_email_label: "Ihre E-Mail <span class='required'>*</span>",
    user_email_placeholder: "ihre@firma.de",
    user_phone_label: "Telefon <span class='required'>*</span>",
    user_phone_placeholder: "+49 30 _ _ _ _ _ _",
    industry_label: "Branche / Gewerk <span class='required'>*</span>",
    region_label: "Region <span class='required'>*</span>",
    currency_label: "Währung",
    vat_label: "MwSt. (automatisch nach Region)",
    avg_job_size_label: "Durchschnittliche Auftragsgröße <span class='required'>*</span>",
    quote_language_label: "Angebotssprache <span class='required'>*</span>",
    quote_language_hint: "Ihre Angebote werden in dieser Sprache erstellt.",
    letterhead_divider: "IHR BRIEFKOPF · <span class='highlight-teal'>FÜR MARKENANGEBOTE</span>",
    setup_callout_2: "<strong>Wird zu jedem erstellten Angebot hinzugefügt.</strong> Logo, Steuernummer, Versicherung — lässt Ihre Angebote aussehen wie von einer Premium-Agentur. Felder können jederzeit über ⚙ angepasst werden.",
    logo_url_label: "Logo-URL <span class='optional-tag'>OPTIONAL</span>",
    logo_url_hint: "Öffentliche URL zu Ihrem Logo (quadratisch ≥200px empfohlen). Bei Leerlassen wird ein Monogramm erstellt.",
    logo_url_placeholder: "https://ihrefirma.de/logo.png",
    business_address_label: "Geschäftsadresse <span class='optional-tag'>OPTIONAL</span>",
    business_address_placeholder: "z.B. Musterstraße 12, 10115 Berlin, Deutschland",
    license_number_label: "Handelsregister / Betriebs-Nr. <span class='optional-tag'>OPTIONAL</span>",
    license_number_placeholder: "z.B. HRB 123456",
    tax_id_label: "USt-IdNr. / Steuernummer <span class='optional-tag'>OPTIONAL</span>",
    tax_id_placeholder: "z.B. DE123456789",
    insurance_details_label: "Betriebshaftpflichtversicherung <span class='optional-tag'>OPTIONAL</span>",
    insurance_details_placeholder: "z.B. Deckungssumme 3.000.000 € (Allianz)",
    trade_memberships_label: "Innung / Zertifizierungen <span class='optional-tag'>OPTIONAL</span>",
    trade_memberships_placeholder: "z.B. Handwerkskammer Berlin · Meisterbetrieb",
    tagline_label: "Untertitel / Slogan <span class='optional-tag'>OPTIONAL</span>",
    tagline_placeholder: "z.B. Meisterbetrieb für Holzbau seit 2014",
    website_label: "Webseite <span class='optional-tag'>OPTIONAL</span>",
    website_placeholder: "z.B. www.schmidt-holzbau.de",
    brand_color_label: "Markenfarbe <span class='optional-tag'>OPTIONAL</span>",
    brand_color_hint: "Wird für Akzente im Angebotskopf verwendet. Standard ist Viguls-Teal.",
    agree_consent: "Ich stimme zu, dass Viguls mir den Link zusendet. <a href='#privacy' class='text-link' id='privacy-link'>Datenschutz</a>",
    btn_get_tool: "Mein persönliches Tool erhalten →",

    // Generator Screen
    gen_callout: "<strong>Ihr Tool · vorausgefüllt</strong><br>Auftrag eingeben. Optionale Details hinzufügen. Erstellt in 30 Sekunden.",
    gen_title_html: "Was ist das <span class='highlight-teal'>nächste Angebot,</span> <span id='gen-name-display'>{name}</span>?",
    gen_subtitle: "Die Beschreibung reicht völlig aus. Öffnen Sie 'Weitere Optionen', um Kundennamen, Projektadresse oder Zahlungsbedingungen hinzuzufügen.",
    job_desc_label: "Auftragsbeschreibung <span class='required'>*</span>",
    job_desc_placeholder: "z.B. Holzterrasse 4x6m Eiche neu bauen, inkl. Abbruch der alten Terrasse",
    job_desc_hint: "Größe, Material, Standort und Extras angeben. Beispiele unten.",
    group_it_digital: "Informationstechnologie (IT) & Digitales",
    group_construction: "Hoch- & Rohbau, Bauunternehmen",
    group_trades_interiors: "Ausbau, Innenausbau & Gewerke",
    group_mep_energy: "Haustechnik, Elektro, Sanitär & Klima",
    group_outdoor_metal: "GalaBau, Zaunbau & Metallbau",
    group_property_facility: "Facility Management & Gebäudeservice",

    chip_deck: "Holzterrasse 4x6m Eiche neu bauen, inkl. Abbruch der alten Terrasse",
    chip_kitchen: "Küche montieren 5x4m, Eichenfurnier-Schränke, integrierte Einbaugeräte",
    chip_bath: "Badezimmer-Renovierung 6m², kompletter Rückbau, neue Fliesen, Sanitär",
    chip_roof: "Dacherneuerung 120m² Blechdach, 3 Dachfenster, Dachrinnen inklusive",
    chip_it: "Unternehmens-Website mit CMS, Kundenportal, responsivem UI & SEO",
    sizing_divider: "AUFTRAGSGRÖSSE · <span class='highlight-teal'>OPTIONAL, PRÄZISER</span>",
    sizing_warning: "<strong>Ausfüllen was zutrifft, Rest freilassen.</strong> Ein Feld genügt bereits.",
    area_label: "Fläche",
    length_label: "Länge",
    pieces_label_html: "Stückzahl <span class='unit-sub'>FENSTER / BÄUME / STECKDOSEN...</span>",
    volume_label: "Volumen",
    system_size_label_html: "Anlagengröße <span class='unit-sub'>SOLAR</span>",
    payment_style_label: "Zahlungsmodell",
    client_type_label: "Kundentyp",
    urgency_label: "Dringlichkeit",

    // Accordions
    acc_client_info_html: "<span class='acc-icon'>👤</span> Kundeninformationen",
    client_name_label: "Kundenname <span class='optional-tag'>OPTIONAL</span>",
    client_name_placeholder: "z.B. Max Mustermann / Muster GmbH",
    quote_ref_label: "Referenz / Auftrags-Nr. <span class='optional-tag'>OPTIONAL</span>",
    quote_ref_placeholder: "z.B. ANG-2026-042",
    site_address_label: "Projekt- / Baustellenadresse <span class='optional-tag'>OPTIONAL</span>",
    site_address_placeholder: "z.B. Hauptstraße 25, 10115 Berlin",
    site_address_hint: "Falls abweichend von der Rechnungsadresse, hier eintragen.",

    acc_timeline_html: "<span class='acc-icon'>📅</span> Zeitplan & Zahlungsbedingungen",
    start_date_label: "Voraussichtlicher Baubeginn <span class='optional-tag'>OPTIONAL</span>",
    duration_label: "Geschätzte Dauer <span class='optional-tag'>OPTIONAL</span>",
    duration_placeholder: "z.B. 5 Arbeitstage",
    duration_hint: "Leer lassen für regulären Zeitplan ab Auftragsvergabe.",
    custom_payment_label: "Individueller Zahlungsplan <span class='optional-tag'>OPTIONAL · ÜBERSCHREIBT STANDARD</span>",
    custom_payment_placeholder: "z.B. 25% bei Beauftragung · 35% bei Rohbau · 25% Installation · 15% bei Abnahme",
    custom_payment_hint: "Wir wählen smarte Standards. Hier überschreiben.",
    custom_warranty_label: "Gewährleistung <span class='optional-tag'>OPTIONAL · ÜBERSCHREIBT STANDARD</span>",
    custom_warranty_placeholder: "z.B. 5 Jahre Gewährleistung auf Handwerksleistung nach VOB/B",

    acc_inclusions_html: "<span class='acc-icon'>📋</span> Inbegriffen, Nicht inbegriffen, Annahmen",
    included_label: "Was INBEGRIFFEN ist <span class='optional-tag'>EINE POSITION PRO ZEILE</span>",
    included_placeholder: "Baustelleneinrichtung und Schutzabdeckungen\nSämtliche Materialien und Befestigungen\nZweifacher Oberflächenschutz\nBesenreine Endreinigung und Müllentsorgung",
    excluded_label: "Was NICHT inbegriffen ist <span class='optional-tag'>EINE POSITION PRO ZEILE</span>",
    excluded_placeholder: "Leer lassen für Standard.\nOder eigenes eintragen:\nBehördliche Genehmigungen\nEntsorgung von Schadstoffen / Asbest",
    assumptions_label: "Voraussetzungen / Annahmen <span class='optional-tag'>EINE POSITION PRO ZEILE</span>",
    assumptions_placeholder: "Leer lassen für Standard.\nOder eigenes eintragen:\nFreier Zugang und Parkmöglichkeiten vorhanden\nBauwasser und Baustrom bauseits bereitgestellt",

    acc_covernote_html: "<span class='acc-icon'>✉️</span> Anschreiben für Kunden",
    covernote_label: "Persönliche Notiz oben auf dem Angebot <span class='optional-tag'>OPTIONAL</span>",
    covernote_placeholder: "z.B. Vielen Dank für die Anfrage. Das folgende Angebot entspricht den vor Ort besprochenen Spezifikationen. Bei Rückfragen stehen wir gerne zur Verfügung.",
    covernote_hint: "Fügt eine persönliche Einleitung über den Positionen ein.",
    btn_generate_quote: "Mein Angebot erstellen →",

    // Loading Screen
    loading_title: "Ihr Angebot wird erstellt...",
    loading_subtitle: "Berechne Material, Arbeitsstunden, regionale Preise,<br>Zahlungsmeilensteine und Bedingungen.",
    loading_step_1: "Auftrag wird analysiert...",
    loading_step_2: "Materialien und Arbeitszeiten werden berechnet...",
    loading_step_3: "Regionale Preise und Meilensteine anwenden...",
    loading_step_4: "Finalisiere PDF-Layout...",

    // Quote Document View
    ready_title: "Ihr Angebot ist bereit",
    ready_subtitle: "Tipp: Klicken Sie auf eine Zeile, um sie vor dem Druck anzupassen.",
    btn_print: "🖨️ Drucken / PDF",
    btn_email: "📋 Als E-Mail kopieren",
    btn_new_quote: "+ Neues Angebot",
    btn_edit_letterhead: "⚙️ Briefkopf bearbeiten",
    btn_save_quote: "💾 Angebot speichern",
    btn_view_saved_quotes: "📁 Gespeicherte Angebote",
    gen_view_saved_quotes: "📁 Gespeicherte Angebote (<span id='gen-quotes-count'>0</span>)",
    toast_quote_saved: "💾 Angebot erfolgreich gespeichert!",
    toast_quote_updated: "💾 Angebot aktualisiert!",
    toast_quote_deleted: "🗑️ Angebot gelöscht.",
    quotes_list_title: "Ihre gespeicherten <span class='highlight-teal'>Angebote</span>",
    quotes_list_subtitle: "Verwalten, öffnen, duplizieren, drucken oder exportieren Sie alle erstellten Angebote.",
    btn_create_new_quote: "+ Neues Angebot",
    metric_total_quotes: "Angebote gesamt",
    metric_total_value: "Gesamtwert",
    metric_avg_quote: "Durchschnittsangebot",
    search_quotes_placeholder: "Nach Angebots-Nr., Kunde oder Projekt suchen...",
    filter_all_status: "Alle Status",
    status_draft: "Entwurf",
    status_sent: "Gesendet",
    status_accepted: "Angenommen",
    sort_newest: "Neueste zuerst",
    sort_oldest: "Älteste zuerst",
    sort_highest: "Höchster Betrag",
    sort_lowest: "Niedrigster Betrag",
    btn_export_quotes: "⬇ Exportieren",
    empty_quotes_title: "Noch keine Angebote gespeichert",
    empty_quotes_desc: "Erstellte oder gespeicherte Angebote erscheinen hier, damit Sie sie jederzeit öffnen, duplizieren oder bearbeiten können.",
    btn_card_open: "Öffnen",
    btn_card_duplicate: "Duplizieren",
    btn_card_delete: "Löschen",
    modal_delete_title: "Angebot löschen",
    modal_delete_desc: "Sind Sie sicher, dass Sie dieses Angebot löschen möchten? Diese Aktion kann nicht rückgängig gemacht werden.",
    modal_btn_confirm_delete: "Angebot löschen",

    quote_badge: "ANGEBOT",
    date_label: "Datum",
    valid_label: "Gültig",
    valid_days_text: "14 Tage",
    click_to_edit_hint: "<span class='hint-pencil'>✏️</span> Klicken Sie auf ein beliebiges Feld, um es zu bearbeiten",
    quote_for_label: "ANGEBOT FÜR",
    reference_label: "REFERENZ",
    project_label: "PROJEKT",

    materials_heading: "MATERIALIEN",
    col_item: "POSITION",
    col_qty: "MENGE",
    col_amount: "BETRAG",
    btn_add_material: "+ Materialzeile hinzufügen",

    labour_heading: "ARBEITSLEISTUNG",
    col_phase: "LEISTUNGSPHASE",
    col_duration: "DAUER",
    btn_add_labour: "+ Arbeitszeile hinzufügen",

    summary_materials_subtotal: "Materialzwischensumme",
    summary_labour_subtotal: "Arbeitszwischensumme",
    summary_subtotal: "Zwischensumme netto",
    summary_vat: "MwSt.",
    summary_total: "GESAMTBETRAG",

    scope_heading: "LEISTUNGSUMFANG",
    whats_included_html: "<span class='status-icon green-check'>✔</span> Was inbegriffen ist",
    not_included_html: "<span class='status-icon red-cross'>✖</span> Nicht inbegriffen",
    btn_add_inclusion: "+ Position hinzufügen",
    btn_add_exclusion: "+ Ausschluss hinzufügen",

    payment_terms_title: "ZAHLUNGSBEDINGUNGEN & GEWÄHRLEISTUNG",
    default_payment_terms: "Standard-Zahlungsplan: 25% bei Beauftragung · 40% bei Zwischenabnahme · 35% bei Endabnahme.\nInklusive 2 Jahre Handwerkergarantie auf alle tragenden Konstruktionen.",

    tc_heading: "ALLGEMEINE GESCHÄFTSBEDINGUNGEN",
    tc_list: [
      { title: "Gültigkeit & Angebot:", desc: "Dieses Angebot ist ab Ausstellungsdatum 14 Kalendertage bindend." },
      { title: "Zahlungsbedingungen:", desc: "Rechnungen sind nach Zahlungsplan fällig. Bis zur vollständigen Bezahlung bleibt die gelieferte Ware Eigentum des Auftragnehmers." },
      { title: "Änderungen & Zusatzleistungen:", desc: "Nachträgliche Änderungen oder Mehraufwände bedürfen der schriftlichen Vereinbarung vor deren Ausführung." },
      { title: "Zugang & Baustrom:", desc: "Der Auftraggeber gewährleistet ungehinderten Zugang sowie bauseitige Bereitstellung von Strom und Wasser." },
      { title: "Unvorhersehbare Bedingungen:", desc: "Versteckte Mängel, Fäulnis oder Schadstoffe (z.B. Asbest), die bei Besichtigung nicht erkennbar waren, werden gesondert abgerechnet." },
      { title: "Gewährleistung:", desc: "Es gelten die gesetzlichen Gewährleistungsfristen nach VOB/B bzw. BGB nach vollständigem Zahlungseingang." }
    ],

    signatures_heading: "BESTÄTIGUNG & UNTERSCHRIFTEN",
    sig_provider_title: "AUFTRAGNEHMER",
    sig_authorized_badge: "AUTORISIERTES ANGEBOT",
    sig_rep_label: "Vertreter:",
    sig_date_label: "Datum:",
    sig_client_title: "AUFTRAGSERTEILUNG",
    sig_client_instruction: "Hiermit bestätige ich die Ausführung zu den oben genannten Konditionen:",
    sig_sign_here: "Unterschrift: _________________________________",
    sig_client_name_label: "Name in Druckschrift:",
    sig_client_signature: "UNTERSCHRIFT AUFTRAGGEBER",
    sig_for_contractor: "FÜR DEN AUFTRAGNEHMER",
    sig_name_date: "Name & Datum",
    footer_generated_by: "Erstellt mit",

    footer_page: "Erstellt mit QuoteWriter · Seite 1 von 1",
    toast_copied_email: "📋 Angebot formatiert in die Zwischenablage kopiert!",
    toast_letterhead_saved: "🎉 Briefkopf gespeichert! Ihr Tool ist bereit.",
    toast_quote_ready: "✅ Ihr Angebot ist bereit! Klicken zum Bearbeiten.",
    toast_example_loaded: "✨ Beispieldaten in Formular geladen",
    toast_changes_discarded: "↩️ Änderungen verworfen",
    toast_quote_recreated: "✨ Angebot mit neuen Daten aktualisiert!",
    personal_link_title: "Ihre persönliche Tool-URL",
    letterhead_saved_tag: "✓ Briefkopf gespeichert",
    personal_link_desc: "Speichern Sie diesen Link als Lesezeichen auf Ihrem Smartphone oder Laptop. Jedes Angebot enthält automatisch Ihren Briefkopf.",
    btn_copy_link: "📋 Link kopieren",
    btn_copied: "✓ Kopiert!",
    toast_link_copied: "🔗 Persönlicher Link in die Zwischenablage kopiert! Als Lesezeichen speichern.",
    btn_share_link: "🔗 Persönlicher Link",
    modal_unsaved_title: "Ungespeicherte Änderungen",
    modal_unsaved_desc_step1: "Sie haben Änderungen am Briefkopf vorgenommen. Möchten Sie die Änderungen speichern und das Angebot neu erstellen oder verwerfen?",
    modal_unsaved_desc_step2: "Sie haben die Angebotsangaben geändert. Möchten Sie die Änderungen speichern und das Angebot neu erstellen oder verwerfen?",
    modal_btn_save_recreate: "Speichern & Angebot neu erstellen",
    modal_btn_discard: "Änderungen verwerfen",
    modal_btn_cancel: "Weiter bearbeiten",
    unit_pcs: "Stk.",
    select_choose_one: "Bitte wählen...",
    select_choose: "Wählen...",

    select_options: {
      industry_trade: [
        // IT & Digital
        { value: "Web design & development", label: "Webdesign & Webentwicklung" },
        { value: "Software & mobile app development", label: "Software- & App-Entwicklung" },
        { value: "IT support, networking & systems", label: "IT-Support, Netzwerktechnik & Systemadministration" },
        { value: "Cloud infrastructure & cybersecurity", label: "Cloud-Infrastruktur & Cybersicherheit" },
        { value: "UI/UX design & digital media", label: "UI/UX Design & Digitale Medien" },
        // Hoch- & Rohbau
        { value: "General contracting & renovation", label: "Generalbau & Komplettsanierung" },
        { value: "Masonry & brickwork", label: "Maurer- & Steinmetzarbeiten" },
        { value: "Concrete & foundations", label: "Betonbau & Fundamentarbeiten" },
        { value: "Civil engineering & excavation", label: "Tiefbau & Erdarbeiten" },
        { value: "Demolition & site clearance", label: "Abbruch & Entkernungsarbeiten" },
        // Ausbau & Gewerke
        { value: "Carpentry & joinery", label: "Zimmerei & Tischlerarbeiten" },
        { value: "Roofing & exterior", label: "Dachdeckerei & Fassadenbau" },
        { value: "Kitchen & bathroom remodeling", label: "Küchen- & Badrenovierung" },
        { value: "Painting & decorating", label: "Maler- & Lackierarbeiten" },
        { value: "Plastering & drywall", label: "Trockenbau & Verputzarbeiten" },
        { value: "Flooring & tiling", label: "Bodenverlegung & Fliesenarbeiten" },
        { value: "Windows, doors & glazing", label: "Fenster, Türen & Glasbau" },
        // Haustechnik & Energie
        { value: "Electrical & smart home", label: "Elektrotechnik & Smart Home" },
        { value: "Plumbing & heating", label: "Sanitär, Heizung & Klima" },
        { value: "HVAC & air conditioning", label: "Lüftungs- & Klimatechnik" },
        { value: "Solar & renewable energy", label: "Photovoltaik & Erneuerbare Energien" },
        // GalaBau & Metall
        { value: "Landscaping & decking", label: "Garten-, Landschafts- & Terrassenbau" },
        { value: "Fencing & gates", label: "Zaunbau & Toranlagen" },
        { value: "Metalwork & welding", label: "Metallbau & Schweißtechnik" },
        // Facility & Gebäudeservice
        { value: "Property maintenance & handyman", label: "Hausmeisterservice & Instandhaltung" },
        { value: "Commercial & post-construction cleaning", label: "Gewerbe- & Bauendreinigung" }
      ],
      payment_style: [
        { value: "auto", label: "Automatisch (nach Auftragsgröße)" },
        { value: "deposit-stages", label: "Anzahlung & Abschlagszahlungen" },
        { value: "50-50", label: "50% Anzahlung / 50% bei Fertigstellung" },
        { value: "completion", label: "100% nach Abnahme" }
      ],
      client_type: [
        { value: "new", label: "Neukunde" },
        { value: "returning", label: "Bestandskunde" },
        { value: "commercial", label: "Gewerblich / Hausverwaltung" }
      ],
      job_urgency: [
        { value: "normal", label: "Reguläre Planung" },
        { value: "urgent", label: "Dringend (nächste 48 Std.)" },
        { value: "flexible", label: "Flexibel / Nächster Monat" }
      ],
      avg_job_size: [
        { value: "Under €2,500", label: "Unter 2.500 €" },
        { value: "€2,500 - €10,000", label: "2.500 € - 10.000 €" },
        { value: "€10,000 - €50,000", label: "10.000 € - 50.000 €" },
        { value: "€50,000+", label: "Über 50.000 €" }
      ]
    },

    // Quote Job Presets
    templates: {
      deck: {
        title: "Holzterrasse 4×6m Eiche neu bauen, inkl. Abbruch der alten Terrasse",
        materials: [
          { name: "Eiche (Premium Hartholz)", sub: "Premium Qualität, nach Plan zugeschnitten", qty: "120 m²", amount: 7685 },
          { name: "Unterkonstruktion & Trageelemente", sub: "C24 imprägniertes Konstruktionsholz, Stelzlager & Balken", qty: "nach Spez.", amount: 2795 },
          { name: "Befestigungen, Schrauben, Dichtbänder", sub: "Edelstahl A4 Schrauben, verdeckte Clips, Schutzband", qty: "Pauschale", amount: 1397 },
          { name: "Oberflächenbehandlung (Terrassenöl)", sub: "UV-beständiges Terrassenöl für den Außenbereich", qty: "Pauschale", amount: 1118 },
          { name: "Entsorgung & Baustellenschutz", sub: "Bauschuttcontainer für Altholz & Rasenschutz", qty: "1 Pos.", amount: 978 }
        ],
        labour: [
          { phase: "Baustelleneinrichtung & Abbruch (falls erforderlich)", duration: "1 Tag", amount: 2562 },
          { phase: "Hauptkonstruktion & Dielenmontage", duration: "3 Tage", amount: 11100 },
          { phase: "Einpflege, Versiegelung & Endreinigung", duration: "1 Tag", amount: 3415 }
        ],
        included: [
          "Sämtliche Hölzer, Befestigungen, Lasuren und Verbrauchsmaterialien wie spezifiziert",
          "Baustelleneinrichtung und Schutzabdeckungen angrenzender Bereiche",
          "Rückbau und Entsorgung der bestehenden Holzterrasse",
          "Tägliche besenreine Reinigung der Baustelle",
          "Fachgerechte Abfalltrennung und Entsorgung"
        ],
        excluded: [
          "Erdaushub und Streifenfundamente",
          "Elektro- und Sanitär-Vorinstallationen",
          "Maler- und Dekorationsarbeiten",
          "Baugenehmigungen und behördliche Gebühren",
          "Statische Berechnungen oder Bodenprüfungen",
          "Entsorgung von Altlasten oder Schadstoffen",
          "Unvorhersehbare Mehrarbeiten nach Baubeginn (gesonderte Beauftragung)"
        ]
      },
      kitchen: {
        title: "Küche montieren 5×4m, Eichenfurnier-Schränke, integrierte Einbaugeräte",
        materials: [
          { name: "Küchenkorpusse & Eichenfurnier-Fronten", sub: "Maßgefertigt mit Soft-Close Beschlägen, vormontiert", qty: "1 Satz", amount: 8450 },
          { name: "Quarzkomposit-Arbeitsplatten", sub: "20mm Kunststein mit Unterbau-Spülenausschnitt", qty: "8 lfm", amount: 3200 },
          { name: "Integriertes Einbaugeräte-Paket", sub: "Induktionskochfeld, Backofen, Dunstabzug & Geschirrspüler", qty: "1 Set", amount: 4600 },
          { name: "Sanitär- & Elektro-Endinstallation", sub: "Unterbauspüle, Designarmatur, LED-Unterbauleisten", qty: "Pauschale", amount: 1450 }
        ],
        labour: [
          { phase: "Demontage, Sanitär- und Elektro-Rohinstallation", duration: "2 Tage", amount: 2800 },
          { phase: "Küchenmontage, Ausrichtung und Passleisten", duration: "3 Tage", amount: 3900 },
          { phase: "Arbeitsplatten-Einpassung & Geräteinbetriebnahme", duration: "2 Tage", amount: 2400 }
        ],
        included: [
          "Lieferung und fachgerechte Montage aller Schränke und Arbeitsplatten",
          "Anschluss an bestehende Wasser-, Abwasser- und Elektroanschlüsse",
          "Einbau und Inbetriebnahme sämtlicher Elektrogeräte",
          "Besenreine Endreinigung und Übergabe"
        ],
        excluded: [
          "Tragende Wanddurchbrüche oder Stahlträger-Einbau",
          "Verlegung von Gasanschlüssen oder Heizungsanlagen",
          "Estricharbeiten über Standard-Ausgleichsmasse hinaus",
          "Baugenehmigungen oder Gutachterkosten"
        ]
      },
      bath: {
        title: "Badezimmer-Renovierung 6m², kompletter Rückbau, neue Fliesen, Sanitär",
        materials: [
          { name: "Großformatige Feinsteinzeugfliesen", sub: "Rektifizierte rutschhemmende Wand- & Bodenfliesen", qty: "24 m²", amount: 1850 },
          { name: "Sanitärobjekte & Design-Armaturen", sub: "Walk-in Glaswand, Unterputz-Thermostat, randloses WC, Waschtisch", qty: "1 Set", amount: 2950 },
          { name: "Abdichtungsset, Fliesenkleber & Epoxidharzfuge", sub: "Vollflächige Verbundabdichtung für Nassräume", qty: "Pauschale", amount: 780 }
        ],
        labour: [
          { phase: "Kompletter Rückbau, Entkernung & Bauschuttentsorgung", duration: "1 Tag", amount: 1250 },
          { phase: "Sanitär-Rohinstallation & Verbundabdichtung", duration: "2 Tage", amount: 2400 },
          { phase: "Fliesenverlegung, Verfugung & Endmontage Sanitär", duration: "3 Tage", amount: 3600 }
        ],
        included: [
          "Vollständiger Rückbau bis auf Mauerwerk / Rohbau",
          "Fachgerechte Verbundabdichtung gemäß DIN 18534",
          "Fliesenverlegung, Verfugung und Sanitärmontage",
          "Fachgerechte Entsorgung von Altsanitär und Bauschutt"
        ],
        excluded: [
          "Elektrischer Anschluss der Fußbodenheizung an die Hauptverteilung",
          "Statische Verstärkung von Deckenbalken bei Hausschwammbefall",
          "Lieferung von Sonderanfertigungen / Spiegeln, falls nicht aufgeführt"
        ]
      },
      roof: {
        title: "Dacherneuerung 120m² Blechdach, 3 Dachfenster, Dachrinnen inklusive",
        materials: [
          { name: "Stehfalz-Profilbleche / Metalldach", sub: "0.7mm beschichteter Qualitätsstahl mit Antikondensvlies", qty: "120 m²", amount: 6900 },
          { name: "Dachfenster inkl. Eindeckrahmen", sub: "3-fach verglaste energetische Klapp-Schwing-Fenster", qty: "3 Stk.", amount: 2400 },
          { name: "Diffusionsoffene Unterspannbahn & Konterlattung", sub: "Hochreißfeste dampfdurchlässige Unterdeckung", qty: "1 Pos.", amount: 1150 },
          { name: "Nahtlose Aluminium-Dachrinnen & Fallrohre", sub: "Halbrundes Profil mit passenden Rinnenhaltern", qty: "28 lfm", amount: 1380 }
        ],
        labour: [
          { phase: "Gerüststellung & Altdach-Abdeckung", duration: "2 Tage", amount: 2850 },
          { phase: "Unterspannbahn, Lattung & Stehfalz-Montage", duration: "4 Tage", amount: 6400 },
          { phase: "Dachfenster-Einbau, Kehlbleche & Rinnenmontage", duration: "2 Tage", amount: 2750 }
        ],
        included: [
          "Vollständiger Rückbau und Entsorgung des alten Dacheindeckung",
          "Montage von Unterspannbahn, Lattung und Stehfalzdach",
          "Fachgerechter Einbau der Dachfenster mit Systemanschlüssen",
          "Komplette Rinneninstallation und Baustellenräumung"
        ],
        excluded: [
          "Austausch morscher Dachstuhlbalken oder Sparren",
          "Schornsteinsanierung oder Mauerwerksreparaturen",
          "Gerüstvorhaltung über das vereinbarte Zeitfenster hinaus"
        ]
      },
      it: {
        title: "Unternehmens-Website mit CMS, Kundenportal, responsivem UI & SEO",
        materials: [
          { name: "Cloud-Hosting, Domain & SSL-Zertifikat", sub: "Hochleistungs-NVMe-Cloud-Server, CDN & SSL (1 Jahr)", qty: "1 Jahr", amount: 680 },
          { name: "CMS-, Plugin- & UI-Komponentenlizenzen", sub: "Enterprise CMS-Lizenzen, UI Design Kit & Sicherheitssuite", qty: "1 Liz.", amount: 950 },
          { name: "Automatisierte Backups & Monitoring-Paket", sub: "Tägliche Offsite-Sicherungen, Uptime-Monitor & Firewall (1 Jahr)", qty: "1 Jahr", amount: 480 }
        ],
        labour: [
          { phase: "UI/UX-Wireframing, Architektur & interaktiver Prototyp", duration: "5 Tage", amount: 2600 },
          { phase: "Responsives Frontend & CMS-Backend-Integration", duration: "8 Tage", amount: 4200 },
          { phase: "Kundenportal-Authentifizierung & API-Anbindung", duration: "5 Tage", amount: 2800 },
          { phase: "Testing, Sicherheitsprüfung, SEO-Setup & Livegang", duration: "2 Tage", amount: 1100 }
        ],
        included: [
          "Vollständig responsives Design (Mobil, Tablet, Desktop)",
          "Benutzerfreundliches CMS-Adminpanel mit Rechteverwaltung",
          "Kontakt- und Lead-Formulare mit automatischer Benachrichtigung",
          "Technisches SEO-Fundament und Google Analytics-Einrichtung",
          "30 Tage Garantie & Bugfixing nach Veröffentlichung"
        ],
        excluded: [
          "Laufende monatliche Texterstellung und Content-Pflege",
          "Kostenpflichtige externe APIs (SMS-Gateways, Zahlungsdienstleister)",
          "Manuelle Datenmigration aus veralteten Altsystemen"
        ]
      },
      general: {
        title: "Allgemeines Bau- & Sanierungsprojekt",
        materials: [
          { name: "Hauptbaumaterialien & Beschläge", sub: "Handwerkerqualität, nach Kundenspezifikation", qty: "50 Einheiten", amount: 3500 },
          { name: "Tragkonstruktion, Dübel & Verbindungsmittel", sub: "Bauaufsichtlich zugelassene Schwerlastbefestigungen", qty: "Pauschale", amount: 1050 },
          { name: "Schutzanstriche, Dichtstoffe & Verbrauchsmaterial", sub: "Hochwertige Profi-Dichtmassen", qty: "1 Pos.", amount: 525 },
          { name: "Baustellensicherung & Schuttentsorgung", sub: "Schutzfolien, Staubschutz & Entsorgungscontainer", qty: "1 Pos.", amount: 650 }
        ],
        labour: [
          { phase: "Baustelleneinrichtung, Aufmaß & Vorbereitung", duration: "1 Tag", amount: 1100 },
          { phase: "Fachgerechte handwerkliche Ausführung & Montage", duration: "3 Tage", amount: 4500 },
          { phase: "Qualitätsprüfung, Versiegelung & Endabnahme", duration: "1 Tag", amount: 1250 }
        ],
        included: [
          "Sämtliche spezifizierten Materialien und Fachhandwerkerleistung",
          "Tägliche Zwischenreinigung und förmliche Endabnahme",
          "Herstellergarantien und gesetzliche Gewährleistung"
        ],
        excluded: [
          "Behördliche Genehmigungsgebühren oder Statikerkosten",
          "Versteckte Mängel in Bausubstanz oder Erdreich",
          "Notdiensteinsätze an Wochenenden außerhalb regulärer Zeiten"
        ]
      }
    }
  }
};
