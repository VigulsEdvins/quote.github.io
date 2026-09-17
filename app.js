/**
 * QuoteWriter - Core Application Logic
 * Implements full state flow, estimation engine, live recalculation,
 * dynamic multi-language localization (English, Latvian, German),
 * print formatting, email export, and local storage / URL persistence.
 */

(() => {
  'use strict';

  // --- APPLICATION STATE ---
  const state = {
    profile: {
      business_name: '',
      user_email: '',
      user_phone: '',
      industry_trade: '',
      business_region: '',
      currency: 'EUR',
      currency_symbol: '€',
      vat_rate: 21,
      avg_job_size: '',
      quote_language: 'English',
      logo_url: '',
      business_address: '',
      license_number: '',
      tax_id: '',
      insurance_details: '',
      trade_memberships: '',
      business_tagline: '',
      business_website: '',
      brand_color: '#0b5e55'
    },
    quote: {
      job_preset: 'deck',
      number: '2026-0003',
      date: '16 Sept 2026',
      valid_days: '14 days',
      quote_for: '—',
      reference: '—',
      project_title: 'Rebuild deck 4×6m oak, includes demo of old deck',
      cover_note: '',
      materials: [],
      labour: [],
      included: [],
      excluded: [],
      payment_terms: ''
    },
    savedQuotes: [],
    currentQuoteId: null,
    catalog: [],
    catalogFilter: 'all',
    catalogSearch: ''
  };

  // Currency symbols map
  const CURRENCY_SYMBOLS = {
    EUR: '€',
    GBP: '£',
    USD: '$',
    AUD: 'A$'
  };

  // Region defaults map
  const REGION_DEFAULTS = {
    Latvia: { vat: 21, currency: 'EUR', phonePrefix: '+371' },
    'United Kingdom': { vat: 20, currency: 'GBP', phonePrefix: '+44' },
    Germany: { vat: 19, currency: 'EUR', phonePrefix: '+49' },
    Ireland: { vat: 23, currency: 'EUR', phonePrefix: '+353' },
    Netherlands: { vat: 21, currency: 'EUR', phonePrefix: '+31' },
    'United States': { vat: 0, currency: 'USD', phonePrefix: '+1' },
    Australia: { vat: 10, currency: 'AUD', phonePrefix: '+61' }
  };

  // DOM Elements
  const views = {
    setup: document.getElementById('view-setup'),
    generator: document.getElementById('view-generator'),
    loading: document.getElementById('view-loading'),
    quote: document.getElementById('view-quote'),
    quotes: document.getElementById('view-quotes')
  };

  const navTabs = {
    setup: document.getElementById('nav-setup-tab'),
    generator: document.getElementById('nav-gen-tab'),
    quote: document.getElementById('nav-quote-tab'),
    quotes: document.getElementById('nav-quotes-tab')
  };

  const toastEl = document.getElementById('toast');
  const setupForm = document.getElementById('setup-form');
  const generatorForm = document.getElementById('generator-form');

  // Modal elements
  const unsavedModal = document.getElementById('unsaved-modal');
  const unsavedModalTitle = document.getElementById('unsaved-modal-title');
  const unsavedModalDesc = document.getElementById('unsaved-modal-desc');
  const modalBtnSave = document.getElementById('modal-btn-save');
  const modalBtnSaveText = document.getElementById('modal-btn-save-text');
  const modalBtnDiscard = document.getElementById('modal-btn-discard');
  const modalBtnDiscardText = document.getElementById('modal-btn-discard-text');
  const modalBtnCancel = document.getElementById('modal-btn-cancel');
  const modalCloseIcon = document.getElementById('modal-close-icon');

  let step1Snapshot = null;
  let step2Snapshot = null;
  let pendingNav = null;
  let hasGeneratedQuote = false;

  // --- FORM SNAPSHOT & DIRTY DETECTION ---
  function getSetupFormSnapshot() {
    if (!setupForm) return {};
    const data = new FormData(setupForm);
    const obj = {};
    for (let [k, v] of data.entries()) {
      obj[k] = v;
    }
    return obj;
  }

  function restoreSetupFormFromSnapshot(snapshot) {
    if (!setupForm || !snapshot) return;
    Object.keys(snapshot).forEach(k => {
      if (setupForm.elements[k]) {
        setupForm.elements[k].value = snapshot[k];
      }
    });
    if (snapshot.brand_color) {
      updateColorPreview(snapshot.brand_color);
    }
  }

  function isStep1Dirty() {
    if (!step1Snapshot || !setupForm) return false;
    const current = getSetupFormSnapshot();
    for (let k of Object.keys(step1Snapshot)) {
      if ((current[k] || '') !== (step1Snapshot[k] || '')) {
        return true;
      }
    }
    return false;
  }

  function getGeneratorFormSnapshot() {
    if (!generatorForm) return {};
    const data = new FormData(generatorForm);
    const obj = {};
    for (let [k, v] of data.entries()) {
      obj[k] = v;
    }
    return obj;
  }

  function restoreGeneratorFormFromSnapshot(snapshot) {
    if (!generatorForm || !snapshot) return;
    Object.keys(snapshot).forEach(k => {
      if (generatorForm.elements[k]) {
        generatorForm.elements[k].value = snapshot[k];
      }
    });
  }

  function isStep2Dirty() {
    if (!step2Snapshot || !generatorForm) return false;
    const current = getGeneratorFormSnapshot();
    for (let k of Object.keys(step2Snapshot)) {
      if ((current[k] || '') !== (step2Snapshot[k] || '')) {
        return true;
      }
    }
    return false;
  }

  // --- UNSAVED CHANGES MODAL PROMPT ---
  function getCurrentActiveView() {
    for (let [name, el] of Object.entries(views)) {
      if (el && el.classList.contains('active')) return name;
    }
    return 'setup';
  }

  function promptUnsavedChanges(sourceStep, targetView) {
    pendingNav = { sourceStep, targetView };
    const lang = state.profile.quote_language || 'English';
    const dict = getDictionary(lang);

    if (unsavedModalTitle) {
      unsavedModalTitle.textContent = dict.modal_unsaved_title || 'Unsaved Changes';
    }

    if (unsavedModalDesc) {
      unsavedModalDesc.textContent = sourceStep === 'setup'
        ? (dict.modal_unsaved_desc_step1 || 'You made changes to your Letterhead settings. Would you like to save changes and recreate your quote, or discard them?')
        : (dict.modal_unsaved_desc_step2 || 'You modified the quote details. Would you like to save changes and recreate your quote, or discard them?');
    }

    if (modalBtnSaveText) {
      modalBtnSaveText.textContent = dict.modal_btn_save_recreate || 'Save & Recreate Quote';
    }
    if (modalBtnDiscardText) {
      modalBtnDiscardText.textContent = dict.modal_btn_discard || 'Discard Changes';
    }
    if (modalBtnCancel) {
      modalBtnCancel.textContent = dict.modal_btn_cancel || 'Keep Editing';
    }

    if (unsavedModal) {
      unsavedModal.classList.remove('hidden');
    }
  }

  function hideUnsavedModal() {
    if (unsavedModal) {
      unsavedModal.classList.add('hidden');
    }
  }

  function handleModalSaveAndRecreate() {
    if (!pendingNav) {
      hideUnsavedModal();
      return;
    }
    const { sourceStep, targetView } = pendingNav;
    hideUnsavedModal();
    pendingNav = null;

    const lang = state.profile.quote_language || 'English';
    const dict = getDictionary(lang);

    if (sourceStep === 'setup') {
      const formData = new FormData(setupForm);
      state.profile.business_name = formData.get('business_name') || 'Test Edvin';
      state.profile.user_email = formData.get('user_email') || '';
      state.profile.user_phone = formData.get('user_phone') || '';
      state.profile.industry_trade = formData.get('industry_trade') || '';
      state.profile.business_region = formData.get('business_region') || 'Latvia';
      state.profile.currency = formData.get('currency') || 'EUR';
      state.profile.currency_symbol = CURRENCY_SYMBOLS[state.profile.currency] || '€';
      state.profile.vat_rate = parseFloat(formData.get('vat_rate')) || 21;
      state.profile.avg_job_size = formData.get('avg_job_size') || '';
      state.profile.quote_language = formData.get('quote_language') || 'English';

      state.profile.logo_url = formData.get('logo_url') || '';
      state.profile.business_address = formData.get('business_address') || '';
      state.profile.license_number = formData.get('license_number') || '';
      state.profile.tax_id = formData.get('tax_id') || '';
      state.profile.insurance_details = formData.get('insurance_details') || '';
      state.profile.trade_memberships = formData.get('trade_memberships') || '';
      state.profile.business_tagline = formData.get('business_tagline') || '';
      state.profile.business_website = formData.get('business_website') || '';
      state.profile.brand_color = formData.get('brand_color') || '#0b5e55';

      saveProfileToStorage();
      applyLanguage(state.profile.quote_language);
      step1Snapshot = getSetupFormSnapshot();

      // Recreate/update quote sheet with new letterhead details and brand color
      renderQuoteDocument();
      hasGeneratedQuote = true;
      navTabs.quote.removeAttribute('disabled');

      showToast(dict.toast_quote_recreated || '✨ Quote recreated with your changes!');
      switchView(targetView || 'quote');
    } else if (sourceStep === 'generator') {
      step2Snapshot = getGeneratorFormSnapshot();
      hasGeneratedQuote = true;
      runQuoteGenerationFlow();
      showToast(dict.toast_quote_recreated || '✨ Quote recreated with your changes!');
    }
  }

  function handleModalDiscard() {
    if (!pendingNav) {
      hideUnsavedModal();
      return;
    }
    const { sourceStep, targetView } = pendingNav;
    hideUnsavedModal();
    pendingNav = null;

    const lang = state.profile.quote_language || 'English';
    const dict = getDictionary(lang);

    if (sourceStep === 'setup') {
      restoreSetupFormFromSnapshot(step1Snapshot);
    } else if (sourceStep === 'generator') {
      restoreGeneratorFormFromSnapshot(step2Snapshot);
    }

    showToast(dict.toast_changes_discarded || '↩️ Changes discarded');
    if (targetView) {
      if (targetView === 'generator') updateGeneratorViewGreeting();
      switchView(targetView);
    }
  }

  function trySwitchView(targetView) {
    const currentView = getCurrentActiveView();
    if (currentView === targetView) return;

    if (currentView === 'setup' && isStep1Dirty()) {
      promptUnsavedChanges('setup', targetView);
      return;
    }

    if (currentView === 'generator' && isStep2Dirty()) {
      promptUnsavedChanges('generator', targetView);
      return;
    }

    if (targetView === 'generator') {
      updateGeneratorViewGreeting();
    }
    switchView(targetView);
  }

  // --- PERSONAL URL ENCODING & RESTORATION ---
  function encodeProfileToBase64(p) {
    try {
      const clean = {};
      const fields = [
        'business_name', 'user_email', 'user_phone', 'industry_trade', 'business_region',
        'currency', 'vat_rate', 'avg_job_size', 'quote_language', 'logo_url',
        'business_address', 'license_number', 'tax_id', 'insurance_details',
        'trade_memberships', 'business_tagline', 'business_website', 'brand_color'
      ];
      fields.forEach(k => {
        if (p[k] !== undefined && p[k] !== null && p[k] !== '') {
          clean[k] = p[k];
        }
      });
      const jsonStr = JSON.stringify(clean);
      return btoa(encodeURIComponent(jsonStr).replace(/%([0-9A-F]{2})/g, (match, p1) => {
        return String.fromCharCode('0x' + p1);
      }));
    } catch (e) {
      console.error('Error encoding profile to base64', e);
      return '';
    }
  }

  function decodeProfileFromBase64(base64Str) {
    try {
      const binaryStr = atob(base64Str);
      const jsonStr = decodeURIComponent(Array.prototype.map.call(binaryStr, (c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(jsonStr);
    } catch (e) {
      console.warn('Could not decode base64 profile', e);
      return null;
    }
  }

  function generatePersonalUrl(profile) {
    const p = profile || state.profile;
    const url = new URL(window.location.origin + window.location.pathname);
    const encoded = encodeProfileToBase64(p);
    if (encoded) {
      url.searchParams.set('p', encoded);
    }
    if (p.business_name) {
      url.searchParams.set('biz', p.business_name);
    }
    if (p.brand_color) {
      url.searchParams.set('color', p.brand_color.replace('#', ''));
    }
    if (p.quote_language) {
      url.searchParams.set('lang', p.quote_language);
    }
    return url.toString();
  }

  function updatePersonalUrlDisplays() {
    const personalUrl = generatePersonalUrl(state.profile);
    const linkInput = document.getElementById('personal-tool-url');
    if (linkInput) {
      linkInput.value = personalUrl;
    }
    return personalUrl;
  }

  function updateBrowserUrlWithPersonalLink(stepOverride) {
    if (!state.profile.business_name) return;
    const personalUrl = generatePersonalUrl(state.profile);
    const urlObj = new URL(personalUrl);
    if (stepOverride) {
      urlObj.searchParams.set('step', stepOverride);
    }
    window.history.replaceState({}, '', urlObj.toString());
    const linkInput = document.getElementById('personal-tool-url');
    if (linkInput) {
      linkInput.value = personalUrl;
    }
  }

  function fallbackCopy(text, callback) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
    } catch (e) {
      console.warn('Fallback copy failed', e);
    }
    document.body.removeChild(tempInput);
    if (callback) callback();
  }

  function copyPersonalLink(buttonEl) {
    const personalUrl = generatePersonalUrl(state.profile);
    const input = document.getElementById('personal-tool-url');
    if (input) input.value = personalUrl;

    const performFeedback = () => {
      const currentLang = state.profile.quote_language || 'English';
      const dict = getDictionary(currentLang);
      showToast(dict.toast_link_copied || '🔗 Personal link copied to clipboard! Save or bookmark it.');
      if (buttonEl) {
        const originalText = buttonEl.getAttribute('data-original-text') || buttonEl.textContent;
        if (!buttonEl.getAttribute('data-original-text')) {
          buttonEl.setAttribute('data-original-text', originalText);
        }
        buttonEl.textContent = dict.btn_copied || '✓ Copied!';
        buttonEl.classList.add('btn-copied-state');
        setTimeout(() => {
          buttonEl.textContent = originalText;
          buttonEl.classList.remove('btn-copied-state');
        }, 2500);
      }
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(personalUrl).then(performFeedback).catch(() => {
        fallbackCopy(personalUrl, performFeedback);
      });
    } else {
      fallbackCopy(personalUrl, performFeedback);
    }
  }

  // --- INITIALIZATION ---
  function init() {
    loadProfileFromStorageOrUrl();
    loadSavedQuotesFromStorage();
    loadCatalogFromStorage();
    syncSetupFormFromState();
    
    // Apply current language translations
    const currentLang = state.profile.quote_language || 'English';
    applyLanguage(currentLang);

    bindEvents();
    updatePersonalUrlDisplays();
    
    // Check URL or state to decide initial view
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('step') === 'setup') {
      switchView('setup');
    } else if (urlParams.get('step') === 'loading') {
      switchView('loading');
    } else if (urlParams.get('step') === 'quote') {
      generateSampleQuote(false);
      switchView('quote');
    } else if (urlParams.get('step') === 'quotes') {
      switchView('quotes');
    } else if (urlParams.get('step') === 'generator' || urlParams.get('p') || localStorage.getItem('quote_writer_has_setup') === 'true') {
      updateGeneratorViewGreeting();
      switchView('generator');
      if (urlParams.get('open') === 'all') {
        document.querySelectorAll('.accordion-item').forEach(el => el.classList.add('open'));
      }
    } else {
      switchView('setup');
    }

    step1Snapshot = getSetupFormSnapshot();
    step2Snapshot = getGeneratorFormSnapshot();
  }

  // --- VIEW NAVIGATION ---
  function switchView(viewName) {
    Object.keys(views).forEach(k => views[k]?.classList.remove('active'));
    Object.keys(navTabs).forEach(k => navTabs[k]?.classList.remove('active'));

    if (views[viewName]) {
      views[viewName].classList.add('active');
    }

    if (navTabs[viewName]) {
      navTabs[viewName].classList.add('active');
      navTabs[viewName].removeAttribute('disabled');
    }

    if (viewName === 'generator') {
      updatePersonalUrlDisplays();
    } else if (viewName === 'quotes') {
      renderQuotesListView();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- TOAST NOTIFICATIONS ---
  let toastTimer = null;
  function showToast(message, duration = 3200) {
    if (toastTimer) clearTimeout(toastTimer);
    toastEl.innerHTML = message;
    toastEl.classList.remove('hidden');
    toastTimer = setTimeout(() => {
      toastEl.classList.add('hidden');
    }, duration);
  }

  // --- LOCAL STORAGE & URL STATE ---
  function saveProfileToStorage() {
    try {
      localStorage.setItem('quote_writer_profile', JSON.stringify(state.profile));
      localStorage.setItem('quote_writer_has_setup', 'true');
    } catch (e) {
      console.warn('Storage not accessible', e);
    }
  }

  // --- REUSABLE ITEM & PRICE CATALOG ---
  const STORAGE_KEY_CATALOG = 'quote_writer_item_catalog';

  const DEFAULT_CATALOG_ITEMS = [
    {
      id: 'cat_mat_1',
      name: 'Premium Composite Decking Boards',
      type: 'material',
      sub: 'Charcoal / Teak finish, anti-slip UV resistant (3.6m board)',
      qty: '24 boards',
      price: 45
    },
    {
      id: 'cat_mat_2',
      name: 'Treated Timber Sub-Frame Joists (C24)',
      type: 'material',
      sub: '47x150mm pressure treated structural joists (4.8m lengths)',
      qty: '18 lengths',
      price: 28
    },
    {
      id: 'cat_mat_3',
      name: 'Moisture-Resistant Gypsum Board 12.5mm',
      type: 'material',
      sub: 'Green drywall boards for bathrooms/kitchens (1200x2400mm)',
      qty: '15 sheets',
      price: 16.5
    },
    {
      id: 'cat_mat_4',
      name: 'Large Format Porcelain Floor Tiles',
      type: 'material',
      sub: '600x600mm rectified edge, matte stone finish (Grade 5)',
      qty: '25 m²',
      price: 38
    },
    {
      id: 'cat_mat_5',
      name: 'Dulux Diamond Trade Matt Paint (5L)',
      type: 'material',
      sub: 'Scuff-resistant scrubbable interior wall emulsion (White/Tint)',
      qty: '3 cans',
      price: 52
    },
    {
      id: 'cat_mat_6',
      name: 'Stainless Steel Deck Screws & Hidden Clips',
      type: 'material',
      sub: 'A4 Marine grade corrosion-resistant box of 500 pcs',
      qty: '2 boxes',
      price: 34
    },
    {
      id: 'cat_lab_1',
      name: 'Master Carpenter / Joiner Daily Rate',
      type: 'labour',
      sub: 'Structural framing, custom cabinetry & fine architectural woodwork',
      qty: '1 day',
      price: 320
    },
    {
      id: 'cat_lab_2',
      name: 'Certified Electrician (First & Second Fix)',
      type: 'labour',
      sub: 'Circuit wiring, consumer unit, lighting & NICEIC certification',
      qty: '2 days',
      price: 380
    },
    {
      id: 'cat_lab_3',
      name: 'Demolition & Site Strip-Out Crew',
      type: 'labour',
      sub: 'Safe removal of existing fittings, debris bagging & skip loading',
      qty: '1.5 days',
      price: 240
    },
    {
      id: 'cat_lab_4',
      name: 'Wall & Floor Tiling Specialist',
      type: 'labour',
      sub: 'Substrate prep, tanking/waterproofing, precision tile layout & epoxy grouting',
      qty: '3 days',
      price: 310
    },
    {
      id: 'cat_lab_5',
      name: 'Site Survey & Structural Planning Consultation',
      type: 'labour',
      sub: 'Laser measurement, structural feasibility inspection & CAD line plan',
      qty: 'Half day',
      price: 190
    }
  ];

  function loadCatalogFromStorage() {
    try {
      const data = localStorage.getItem(STORAGE_KEY_CATALOG);
      if (data) {
        const stored = JSON.parse(data);
        if (Array.isArray(stored) && stored.length > 0) {
          state.catalog = stored;
        } else {
          state.catalog = [...DEFAULT_CATALOG_ITEMS];
        }
      } else {
        state.catalog = [...DEFAULT_CATALOG_ITEMS];
        saveCatalogToStorage();
      }
    } catch (e) {
      console.warn('Could not load catalog from storage', e);
      state.catalog = [...DEFAULT_CATALOG_ITEMS];
    }
  }

  function saveCatalogToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY_CATALOG, JSON.stringify(state.catalog));
    } catch (e) {
      console.warn('Could not save catalog to localStorage', e);
    }
  }

  function openCatalogDrawer(category = 'all') {
    state.catalogFilter = category;
    const drawer = document.getElementById('catalog-drawer');
    if (!drawer) return;

    // Highlight correct filter pill
    document.querySelectorAll('.catalog-filter-pill').forEach(pill => {
      const cat = pill.getAttribute('data-cat') || 'all';
      pill.classList.toggle('active', cat === category);
    });

    // Populate search input if previous search existed
    const searchInput = document.getElementById('catalog-search-input');
    const searchClear = document.getElementById('catalog-search-clear');
    if (searchInput) {
      searchInput.value = state.catalogSearch || '';
    }
    if (searchClear) {
      searchClear.classList.toggle('hidden', !state.catalogSearch);
    }

    renderCatalogDrawer();
    drawer.classList.remove('hidden');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCatalogDrawer() {
    const drawer = document.getElementById('catalog-drawer');
    if (!drawer) return;
    drawer.classList.add('hidden');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function insertCatalogItemIntoQuote(itemId, btnEl) {
    const item = state.catalog.find(c => c.id === itemId);
    if (!item) return;

    const sym = state.profile.currency_symbol || '€';
    const dict = getDictionary(state.profile.quote_language);

    if (item.type === 'material') {
      addMaterialRow(item.name, item.sub || '', item.qty || '1 unit', Number(item.price) || 0);
    } else {
      addLabourRow(item.name, item.qty || '1 day', Number(item.price) || 0);
    }

    recalculateTotals();
    saveCurrentQuote(false);

    // Visual button feedback
    if (btnEl) {
      const origHtml = btnEl.innerHTML;
      btnEl.classList.add('added-flash');
      btnEl.innerHTML = `✓ ${dict.catalog_btn_added || 'Added'}`;
      setTimeout(() => {
        btnEl.classList.remove('added-flash');
        btnEl.innerHTML = origHtml;
      }, 1200);
    }

    showToast(`✓ ${item.name} (${sym}${item.price}) ${dict.toast_item_added || 'added to quote'}`);
  }

  function addCustomCatalogItem(name, type, sub, qty, price) {
    const newItem = {
      id: 'custom_' + Date.now(),
      name: name.trim(),
      type: type === 'labour' ? 'labour' : 'material',
      sub: (sub || '').trim(),
      qty: (qty || '1 unit').trim(),
      price: parseFloat(price) || 0,
      isCustom: true
    };
    state.catalog.unshift(newItem);
    saveCatalogToStorage();
    renderCatalogDrawer();

    const dict = getDictionary(state.profile.quote_language);
    showToast(`🎉 ${dict.toast_catalog_created || 'New catalog item saved!'}`);
  }

  function deleteCatalogItem(itemId) {
    state.catalog = state.catalog.filter(c => c.id !== itemId);
    saveCatalogToStorage();
    renderCatalogDrawer();

    const dict = getDictionary(state.profile.quote_language);
    showToast(dict.toast_catalog_deleted || 'Item removed from catalog');
  }

  function renderCatalogDrawer() {
    const listEl = document.getElementById('catalog-items-list');
    const emptyEl = document.getElementById('catalog-empty-state');
    if (!listEl) return;

    const filter = state.catalogFilter || 'all';
    const search = (state.catalogSearch || '').toLowerCase().trim();
    const sym = state.profile.currency_symbol || '€';
    const dict = getDictionary(state.profile.quote_language);

    const allItems = state.catalog || [];

    // Update pill counter badges
    const countAll = allItems.length;
    const countMaterials = allItems.filter(i => i.type === 'material').length;
    const countLabour = allItems.filter(i => i.type === 'labour').length;

    const countAllEl = document.getElementById('count-cat-all');
    const countMatEl = document.getElementById('count-cat-material');
    const countLabEl = document.getElementById('count-cat-labour');
    if (countAllEl) countAllEl.textContent = countAll;
    if (countMatEl) countMatEl.textContent = countMaterials;
    if (countLabEl) countLabEl.textContent = countLabour;

    let items = allItems;

    if (filter !== 'all') {
      items = items.filter(item => item.type === filter);
    }

    if (search) {
      items = items.filter(item => {
        const name = (item.name || '').toLowerCase();
        const sub = (item.sub || '').toLowerCase();
        const qty = (item.qty || '').toLowerCase();
        return name.includes(search) || sub.includes(search) || qty.includes(search);
      });
    }

    if (items.length === 0) {
      listEl.innerHTML = '';
      if (emptyEl) emptyEl.classList.remove('hidden');
      return;
    }

    if (emptyEl) emptyEl.classList.add('hidden');

    listEl.innerHTML = items.map(item => {
      const isLabour = item.type === 'labour';
      const tagClass = isLabour ? 'tag-type-labour' : 'tag-type-material';
      const tagIcon = isLabour ? '⚡' : '🧱';
      const tagText = isLabour ? (dict.catalog_type_labour || 'Labour') : (dict.catalog_type_material || 'Material');
      const formattedPrice = typeof item.price === 'number' ? item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : item.price;
      const unitText = item.qty ? escapeHtml(item.qty) : (isLabour ? '1 day' : '1 unit');

      return `
        <div class="catalog-card" data-id="${item.id}" data-type="${item.type}">
          <div class="catalog-card-header">
            <span class="catalog-card-type-tag ${tagClass}">${tagIcon} ${tagText}</span>
            <div class="catalog-card-pricing">
              <span class="catalog-card-price">${sym}${formattedPrice}</span>
              <span class="catalog-card-qty">/ ${unitText}</span>
            </div>
          </div>
          <div class="catalog-card-body">
            <div class="catalog-card-name">${escapeHtml(item.name)}</div>
            ${item.sub ? `<div class="catalog-card-sub">${escapeHtml(item.sub)}</div>` : ''}
          </div>
          <div class="catalog-card-footer">
            <div class="catalog-card-actions" style="width: 100%; justify-content: flex-end;">
              ${item.isCustom ? `
                <button type="button" class="btn-delete-catalog-item" data-action="delete-catalog" data-id="${item.id}" title="${dict.catalog_delete_tip || 'Delete custom item'}" aria-label="Delete">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>
                </button>
              ` : ''}
              <button type="button" class="btn-add-to-quote" data-action="add-to-quote" data-id="${item.id}">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                ${dict.catalog_btn_add || '+ Add to Quote'}
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // --- SAVED QUOTES PERSISTENCE & MANAGEMENT ---
  const STORAGE_KEY_SAVED_QUOTES = 'quote_writer_saved_quotes';

  function loadSavedQuotesFromStorage() {
    try {
      const data = localStorage.getItem(STORAGE_KEY_SAVED_QUOTES);
      if (data) {
        state.savedQuotes = JSON.parse(data);
        if (!Array.isArray(state.savedQuotes)) {
          state.savedQuotes = [];
        }
      } else {
        state.savedQuotes = [];
      }
    } catch (e) {
      console.warn('Could not load saved quotes', e);
      state.savedQuotes = [];
    }
    updateNavQuotesCount();
  }

  function saveQuotesToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY_SAVED_QUOTES, JSON.stringify(state.savedQuotes));
    } catch (e) {
      console.warn('Could not save quotes to localStorage', e);
    }
    updateNavQuotesCount();
  }

  function updateNavQuotesCount() {
    const count = state.savedQuotes ? state.savedQuotes.length : 0;
    const navBadge = document.getElementById('nav-quotes-count');
    if (navBadge) {
      navBadge.textContent = String(count);
      if (count === 0) {
        navBadge.classList.add('empty');
      } else {
        navBadge.classList.remove('empty');
      }
    }
    const genCount = document.getElementById('gen-quotes-count');
    if (genCount) {
      genCount.textContent = String(count);
    }
  }

  function saveCurrentQuote(showFeedback = false) {
    const lang = state.profile.quote_language || 'English';
    const dict = getDictionary(lang);

    // Scrape whatever is current in the sheet DOM
    const number = document.getElementById('doc-quote-number')?.textContent.trim() || state.quote.number;
    const date = document.getElementById('doc-quote-date')?.textContent.trim() || state.quote.date;
    const valid_days = document.getElementById('doc-quote-valid')?.textContent.trim() || state.quote.valid_days;
    const quote_for = document.getElementById('doc-quote-for')?.textContent.trim() || state.quote.quote_for;
    const reference = document.getElementById('doc-reference')?.textContent.trim() || state.quote.reference;
    const project_title = document.getElementById('doc-project-title')?.textContent.trim() || state.quote.project_title;
    const cover_note = document.getElementById('doc-cover-note-text')?.textContent.trim().replace(/^"|"$/g, '') || state.quote.cover_note || '';
    const payment_terms = document.getElementById('doc-payment-terms-text')?.textContent.trim() || state.quote.payment_terms || '';

    // Materials
    const materials = [];
    document.querySelectorAll('#materials-tbody tr').forEach(tr => {
      const name = tr.querySelector('.item-main-text')?.textContent.trim() || '';
      const sub = tr.querySelector('.item-sub-text')?.textContent.trim() || '';
      const qty = tr.querySelector('.col-qty')?.textContent.trim() || '';
      const amount = parseAmount(tr.querySelector('.col-amount')?.textContent);
      if (name || amount > 0) {
        materials.push({ name, sub, qty, amount });
      }
    });

    // Labour
    const labour = [];
    document.querySelectorAll('#labour-tbody tr').forEach(tr => {
      const phase = tr.querySelector('.item-main-text')?.textContent.trim() || '';
      const duration = tr.querySelector('.col-duration')?.textContent.trim() || '';
      const amount = parseAmount(tr.querySelector('.col-amount')?.textContent);
      if (phase || amount > 0) {
        labour.push({ phase, duration, amount });
      }
    });

    // Inclusions & Exclusions
    const included = [];
    document.querySelectorAll('#scope-included-list li .bullet-text').forEach(el => {
      const t = el.textContent.trim();
      if (t) included.push(t);
    });

    const excluded = [];
    document.querySelectorAll('#scope-excluded-list li .bullet-text').forEach(el => {
      const t = el.textContent.trim();
      if (t) excluded.push(t);
    });

    // Totals
    const materialsSubtotal = parseAmount(document.getElementById('summary-materials-subtotal')?.textContent);
    const labourSubtotal = parseAmount(document.getElementById('summary-labour-subtotal')?.textContent);
    const subtotal = parseAmount(document.getElementById('summary-subtotal')?.textContent);
    const vatAmount = parseAmount(document.getElementById('summary-vat-amount')?.textContent);
    const grandTotal = parseAmount(document.getElementById('summary-grand-total')?.textContent);
    const formattedGrandTotal = document.getElementById('summary-grand-total')?.textContent.trim() || formatAmount(grandTotal);

    // Update state.quote memory
    state.quote.number = number;
    state.quote.date = date;
    state.quote.valid_days = valid_days;
    state.quote.quote_for = quote_for;
    state.quote.reference = reference;
    state.quote.project_title = project_title;
    state.quote.cover_note = cover_note;
    state.quote.payment_terms = payment_terms;
    state.quote.materials = materials;
    state.quote.labour = labour;
    state.quote.included = included;
    state.quote.excluded = excluded;

    let quoteEntry = null;
    let isUpdate = false;

    if (state.currentQuoteId) {
      const idx = state.savedQuotes.findIndex(q => q.id === state.currentQuoteId);
      if (idx !== -1) {
        isUpdate = true;
        quoteEntry = state.savedQuotes[idx];
      }
    }

    if (!quoteEntry) {
      const newId = 'q_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
      quoteEntry = {
        id: newId,
        status: 'Draft',
        createdAt: Date.now()
      };
      state.currentQuoteId = newId;
      state.savedQuotes.unshift(quoteEntry);
    }

    quoteEntry.number = number;
    quoteEntry.date = date;
    quoteEntry.valid_days = valid_days;
    quoteEntry.quote_for = quote_for;
    quoteEntry.reference = reference;
    quoteEntry.project_title = project_title;
    quoteEntry.cover_note = cover_note;
    quoteEntry.payment_terms = payment_terms;
    quoteEntry.materials = materials;
    quoteEntry.labour = labour;
    quoteEntry.included = included;
    quoteEntry.excluded = excluded;
    quoteEntry.job_preset = state.quote.job_preset || 'deck';
    quoteEntry.currency = state.profile.currency || 'EUR';
    quoteEntry.currency_symbol = state.profile.currency_symbol || '€';
    quoteEntry.vat_rate = state.profile.vat_rate || 21;
    quoteEntry.totals = {
      materialsSubtotal,
      labourSubtotal,
      subtotal,
      vatAmount,
      grandTotal,
      formattedGrandTotal
    };
    quoteEntry.updatedAt = Date.now();

    saveQuotesToStorage();

    if (showFeedback) {
      const btn = document.getElementById('btn-save-quote');
      if (btn) {
        btn.classList.add('saved-flash');
        setTimeout(() => btn.classList.remove('saved-flash'), 600);
      }
      showToast(isUpdate ? (dict.toast_quote_updated || '💾 Quote updated successfully!') : (dict.toast_quote_saved || '💾 Quote saved to your list!'));
    }

    return quoteEntry;
  }

  function loadQuoteById(id) {
    const quote = state.savedQuotes.find(q => q.id === id);
    if (!quote) return;

    state.currentQuoteId = quote.id;
    state.quote = JSON.parse(JSON.stringify(quote));
    if (!state.quote.job_preset) state.quote.job_preset = 'deck';

    hasGeneratedQuote = true;
    renderQuoteDocument();
    navTabs.quote.removeAttribute('disabled');
    switchView('quote');
    const lang = state.profile.quote_language || 'English';
    const dict = getDictionary(lang);
    showToast(`📑 ${dict.quote_badge || 'Quote'} #${quote.number}`);
  }

  function duplicateQuote(id) {
    const quote = state.savedQuotes.find(q => q.id === id);
    if (!quote) return;

    const currentYear = new Date().getFullYear();
    const randomNum = String(Math.floor(Math.random() * 900) + 100).padStart(4, '0');
    const newNumber = `${currentYear}-${randomNum}`;
    const newId = 'q_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);

    const lang = state.profile.quote_language || 'English';
    const langConfig = LANG_MAP[lang] || { code: 'en', locale: 'en-GB' };
    const dateOptions = { day: 'numeric', month: 'short', year: 'numeric' };
    const todayStr = new Date().toLocaleDateString(langConfig.locale, dateOptions);

    const copy = JSON.parse(JSON.stringify(quote));
    copy.id = newId;
    copy.number = newNumber;
    copy.date = todayStr;
    copy.project_title = `${copy.project_title} (Copy)`;
    copy.status = 'Draft';
    copy.createdAt = Date.now();
    copy.updatedAt = Date.now();

    state.savedQuotes.unshift(copy);
    saveQuotesToStorage();
    renderQuotesListView();

    const dict = getDictionary(lang);
    showToast(`📋 ${copy.number} created from #${quote.number}`);
  }

  let quoteIdToDelete = null;
  function openDeleteConfirm(id) {
    quoteIdToDelete = id;
    const deleteModal = document.getElementById('delete-modal');
    if (deleteModal) {
      deleteModal.classList.remove('hidden');
    }
  }

  function closeDeleteConfirm() {
    quoteIdToDelete = null;
    const deleteModal = document.getElementById('delete-modal');
    if (deleteModal) {
      deleteModal.classList.add('hidden');
    }
  }

  function confirmDeleteQuote() {
    if (!quoteIdToDelete) return;
    const idx = state.savedQuotes.findIndex(q => q.id === quoteIdToDelete);
    if (idx !== -1) {
      state.savedQuotes.splice(idx, 1);
      if (state.currentQuoteId === quoteIdToDelete) {
        state.currentQuoteId = null;
      }
      saveQuotesToStorage();
      renderQuotesListView();
      const lang = state.profile.quote_language || 'English';
      const dict = getDictionary(lang);
      showToast(dict.toast_quote_deleted || '🗑️ Quote deleted.');
    }
    closeDeleteConfirm();
  }

  function cycleQuoteStatus(id) {
    const quote = state.savedQuotes.find(q => q.id === id);
    if (!quote) return;
    const statuses = ['Draft', 'Sent', 'Accepted'];
    const currentIdx = statuses.indexOf(quote.status || 'Draft');
    const nextStatus = statuses[(currentIdx + 1) % statuses.length];
    quote.status = nextStatus;
    quote.updatedAt = Date.now();
    saveQuotesToStorage();
    renderQuotesListView();
  }

  function exportQuotesJson() {
    if (!state.savedQuotes || state.savedQuotes.length === 0) {
      showToast('No saved quotes to export.');
      return;
    }
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.savedQuotes, null, 2));
    const a = document.createElement('a');
    a.setAttribute("href", dataStr);
    a.setAttribute("download", `quotes_export_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(a);
    a.click();
    a.remove();
    showToast('⬇ Saved quotes exported as JSON!');
  }

  function renderQuotesListView() {
    const lang = state.profile.quote_language || 'English';
    const dict = getDictionary(lang);
    const sym = state.profile.currency_symbol || '€';

    const searchInput = document.getElementById('quotes-search-input');
    const searchClear = document.getElementById('quotes-search-clear');
    const query = (searchInput?.value || '').toLowerCase().trim();

    if (searchClear) {
      searchClear.classList.toggle('hidden', !query);
    }

    const statusFilter = document.getElementById('quotes-status-filter')?.value || 'all';
    const sortBy = document.getElementById('quotes-sort-select')?.value || 'newest';

    const totalCount = state.savedQuotes.length;
    let totalPipeline = 0;
    state.savedQuotes.forEach(q => {
      totalPipeline += (q.totals?.grandTotal || 0);
    });
    const avgPipeline = totalCount > 0 ? Math.round(totalPipeline / totalCount) : 0;

    // Update metrics bar
    setText('metric-total-count', String(totalCount));
    setText('metric-total-value', `${sym}${formatWithSpaces(totalPipeline)}`);
    setText('metric-avg-value', `${sym}${formatWithSpaces(avgPipeline)}`);

    // Filter
    let filtered = state.savedQuotes.filter(q => {
      if (statusFilter !== 'all' && q.status !== statusFilter) {
        return false;
      }
      if (query) {
        const text = `${q.number || ''} ${q.quote_for || ''} ${q.project_title || ''} ${q.reference || ''}`.toLowerCase();
        if (!text.includes(query)) return false;
      }
      return true;
    });

    // Sort
    if (sortBy === 'newest') {
      filtered.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    } else if (sortBy === 'oldest') {
      filtered.sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));
    } else if (sortBy === 'highest') {
      filtered.sort((a, b) => ((b.totals?.grandTotal) || 0) - ((a.totals?.grandTotal) || 0));
    } else if (sortBy === 'lowest') {
      filtered.sort((a, b) => ((a.totals?.grandTotal) || 0) - ((b.totals?.grandTotal) || 0));
    }

    const listContainer = document.getElementById('quotes-list-container');
    const emptyState = document.getElementById('quotes-empty-state');
    const emptyTitle = document.getElementById('empty-state-title');
    const emptyDesc = document.getElementById('empty-state-desc');

    if (!listContainer || !emptyState) return;

    if (filtered.length === 0) {
      listContainer.innerHTML = '';
      emptyState.classList.remove('hidden');
      if (query || statusFilter !== 'all') {
        emptyTitle.textContent = 'No matching quotes';
        emptyDesc.textContent = 'No quotes match your current filter or search criteria.';
      } else {
        emptyTitle.textContent = dict.empty_quotes_title || 'No saved quotes yet';
        emptyDesc.textContent = dict.empty_quotes_desc || 'Quotes you create or save will appear here so you can easily manage, re-open, or duplicate them anytime.';
      }
      return;
    }

    emptyState.classList.add('hidden');
    listContainer.innerHTML = '';

    filtered.forEach(q => {
      const card = document.createElement('div');
      card.className = 'quote-item-card';

      const statusLower = (q.status || 'Draft').toLowerCase();
      const statusLabel = q.status === 'Sent' ? (dict.status_sent || 'Sent') :
                          q.status === 'Accepted' ? (dict.status_accepted || 'Accepted') :
                          (dict.status_draft || 'Draft');

      const matCount = q.materials?.length || 0;
      const labCount = q.labour?.length || 0;
      const formattedTotal = q.totals?.formattedGrandTotal || `${sym}${formatWithSpaces(q.totals?.grandTotal || 0)}`;

      card.innerHTML = `
        <div class="quote-card-header">
          <div class="quote-header-left">
            <span class="quote-number-badge">#${escapeHtml(q.number)}</span>
            <span class="status-badge status-${statusLower}" data-id="${q.id}" title="Click to change status">
              ● ${escapeHtml(statusLabel)}
            </span>
          </div>
          <div class="quote-date-text">
            <span>📅</span> ${escapeHtml(q.date)}
          </div>
        </div>
        <div class="quote-card-body">
          <div class="quote-client-row">
            <span class="quote-client-name">👤 ${escapeHtml(q.quote_for && q.quote_for !== '—' ? q.quote_for : 'General Client')}</span>
            ${q.reference && q.reference !== '—' ? `<span class="quote-ref-tag">${escapeHtml(q.reference)}</span>` : ''}
          </div>
          <div class="quote-project-title">${escapeHtml(q.project_title)}</div>
          <div class="quote-breakdown-meta">
            ${matCount} items · ${labCount} labour phases
          </div>
        </div>
        <div class="quote-card-footer">
          <div class="quote-total-group">
            <span class="quote-total-label">${dict.summary_total || 'TOTAL'}</span>
            <span class="quote-total-amount">${escapeHtml(formattedTotal)}</span>
          </div>
          <div class="quote-card-actions">
            <button type="button" class="btn-card-action btn-action-open" data-action="open" data-id="${q.id}">
              👁️ ${dict.btn_card_open || 'Open'}
            </button>
            <button type="button" class="btn-card-action" data-action="duplicate" data-id="${q.id}">
              📋 ${dict.btn_card_duplicate || 'Duplicate'}
            </button>
            <button type="button" class="btn-card-action" data-action="print" data-id="${q.id}">
              🖨️
            </button>
            <button type="button" class="btn-card-action btn-action-delete" data-action="delete" data-id="${q.id}">
              🗑️
            </button>
          </div>
        </div>
      `;

      listContainer.appendChild(card);
    });
  }

  function loadProfileFromStorageOrUrl() {
    // 1. From LocalStorage
    try {
      const saved = localStorage.getItem('quote_writer_profile');
      if (saved) {
        state.profile = { ...state.profile, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn('Could not parse local storage profile', e);
    }

    // 2. Overrides from URL query params
    const params = new URLSearchParams(window.location.search);
    let hasUrlProfile = false;

    // A. Check for encoded profile parameter 'p'
    const pParam = params.get('p');
    if (pParam) {
      const decoded = decodeProfileFromBase64(pParam);
      if (decoded && typeof decoded === 'object') {
        state.profile = { ...state.profile, ...decoded };
        hasUrlProfile = true;
      }
    }

    // B. Individual parameters override or standalone parameters
    if (params.get('biz')) { state.profile.business_name = params.get('biz'); hasUrlProfile = true; }
    if (params.get('email')) { state.profile.user_email = params.get('email'); hasUrlProfile = true; }
    if (params.get('phone')) { state.profile.user_phone = params.get('phone'); hasUrlProfile = true; }
    if (params.get('trade')) { state.profile.industry_trade = params.get('trade'); hasUrlProfile = true; }
    if (params.get('region')) { state.profile.business_region = params.get('region'); hasUrlProfile = true; }
    if (params.get('currency')) { state.profile.currency = params.get('currency'); hasUrlProfile = true; }
    if (params.get('vat')) { state.profile.vat_rate = parseFloat(params.get('vat')) || 21; hasUrlProfile = true; }
    if (params.get('lang')) { state.profile.quote_language = params.get('lang'); hasUrlProfile = true; }
    if (params.get('color')) { state.profile.brand_color = '#' + params.get('color').replace('#', ''); hasUrlProfile = true; }
    if (params.get('logo') || params.get('logo_url')) { state.profile.logo_url = params.get('logo') || params.get('logo_url'); hasUrlProfile = true; }
    if (params.get('addr') || params.get('address')) { state.profile.business_address = params.get('addr') || params.get('address'); hasUrlProfile = true; }
    if (params.get('lic') || params.get('license')) { state.profile.license_number = params.get('lic') || params.get('license'); hasUrlProfile = true; }
    if (params.get('tax') || params.get('tax_id')) { state.profile.tax_id = params.get('tax') || params.get('tax_id'); hasUrlProfile = true; }
    if (params.get('ins') || params.get('insurance')) { state.profile.insurance_details = params.get('ins') || params.get('insurance'); hasUrlProfile = true; }
    if (params.get('memp') || params.get('memberships')) { state.profile.trade_memberships = params.get('memp') || params.get('memberships'); hasUrlProfile = true; }
    if (params.get('tagline')) { state.profile.business_tagline = params.get('tagline'); hasUrlProfile = true; }
    if (params.get('web') || params.get('website')) { state.profile.business_website = params.get('web') || params.get('website'); hasUrlProfile = true; }

    if (state.profile.currency) {
      state.profile.currency_symbol = CURRENCY_SYMBOLS[state.profile.currency] || '€';
    }

    // If loaded from URL, persist to storage so user has saved letterhead on this device forever
    if (hasUrlProfile && state.profile.business_name) {
      saveProfileToStorage();
      localStorage.setItem('quote_writer_has_setup', 'true');
    }
  }

  function syncSetupFormFromState() {
    const p = state.profile;
    const form = setupForm;
    if (!form) return;

    if (form.business_name) form.business_name.value = p.business_name || '';
    if (form.user_email) form.user_email.value = p.user_email || '';
    if (form.user_phone) form.user_phone.value = p.user_phone || '';
    if (form.industry_trade && p.industry_trade) form.industry_trade.value = p.industry_trade;
    if (form.business_region && p.business_region) form.business_region.value = p.business_region;
    if (form.currency && p.currency) form.currency.value = p.currency;
    if (form.vat_rate && p.vat_rate) form.vat_rate.value = p.vat_rate;
    if (form.avg_job_size && p.avg_job_size) form.avg_job_size.value = p.avg_job_size;
    if (form.quote_language && p.quote_language) form.quote_language.value = p.quote_language;

    if (form.logo_url) form.logo_url.value = p.logo_url || '';
    if (form.business_address) form.business_address.value = p.business_address || '';
    if (form.license_number) form.license_number.value = p.license_number || '';
    if (form.tax_id) form.tax_id.value = p.tax_id || '';
    if (form.insurance_details) form.insurance_details.value = p.insurance_details || '';
    if (form.trade_memberships) form.trade_memberships.value = p.trade_memberships || '';
    if (form.business_tagline) form.business_tagline.value = p.business_tagline || '';
    if (form.business_website) form.business_website.value = p.business_website || '';
    if (form.brand_color) {
      form.brand_color.value = p.brand_color || '#0b5e55';
      updateColorPreview(p.brand_color || '#0b5e55');
    }
  }

  function updateColorPreview(hex) {
    const preview = document.getElementById('color-preview');
    const label = document.getElementById('color-hex-label');
    if (preview) preview.style.backgroundColor = hex;
    if (label) label.textContent = hex;
  }

  function updateGeneratorViewGreeting() {
    const name = state.profile.business_name || 'Test';
    const firstWord = name.split(' ')[0] || name;
    const nameDisplay = document.getElementById('gen-name-display');
    if (nameDisplay) {
      nameDisplay.textContent = firstWord;
    }
  }

  // --- I18N / MULTI-LANGUAGE ENGINE ---
  function getDictionary(lang) {
    if (!window.QuoteI18n) return null;
    return window.QuoteI18n[lang] || window.QuoteI18n.English;
  }

  const LANG_MAP = {
    English: { code: 'en', locale: 'en-GB' },
    Latvian: { code: 'lv', locale: 'lv-LV' },
    German: { code: 'de', locale: 'de-DE' },
    Spanish: { code: 'es', locale: 'es-ES' },
    French: { code: 'fr', locale: 'fr-FR' },
    Russian: { code: 'ru', locale: 'ru-RU' },
    Lithuanian: { code: 'lt', locale: 'lt-LT' },
    Estonian: { code: 'et', locale: 'et-EE' },
    Polish: { code: 'pl', locale: 'pl-PL' }
  };

  function applyLanguage(lang) {
    const dict = getDictionary(lang);
    if (!dict) return;

    // Set HTML lang attribute
    const langConfig = LANG_MAP[lang] || { code: 'en', locale: 'en-GB' };
    document.documentElement.lang = langConfig.code;

    // 1. Text elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // 2. HTML elements with data-i18n-html
    const name = state.profile.business_name || 'Test';
    const firstWord = name.split(' ')[0] || name;

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        let html = dict[key];
        if (html.includes('{name}')) {
          html = html.replace('{name}', escapeHtml(firstWord));
        }
        el.innerHTML = html;
      }
    });

    // 3. Placeholders with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        el.placeholder = dict[key];
      }
    });

    // 4. Example chips with data-i18n-desc
    document.querySelectorAll('[data-i18n-desc]').forEach(el => {
      const key = el.getAttribute('data-i18n-desc');
      if (dict[key] !== undefined) {
        el.setAttribute('data-desc', dict[key]);
      }
    });

    // 4b. Optgroup labels with data-i18n-label
    document.querySelectorAll('[data-i18n-label]').forEach(el => {
      const key = el.getAttribute('data-i18n-label');
      if (dict[key] !== undefined) {
        el.label = dict[key];
      }
    });

    // 5. Terms & Conditions list (Clean single-numbered standard list)
    const tcContainer = document.getElementById('tc-list-container') || document.querySelector('.tc-list');
    if (tcContainer && Array.isArray(dict.tc_list)) {
      tcContainer.innerHTML = dict.tc_list
        .map(item => `<li><strong>${escapeHtml(item.title)}</strong> ${escapeHtml(item.desc)}</li>`)
        .join('');
    }

    // 6. Translate Select options if specified in dictionary
    if (dict.select_options) {
      Object.keys(dict.select_options).forEach(selId => {
        const sel = document.getElementById(selId);
        if (!sel) return;
        const currentVal = sel.value;
        dict.select_options[selId].forEach(item => {
          const opt = sel.querySelector(`option[value="${item.value}"]`);
          if (opt) opt.textContent = item.label;
        });
        if (currentVal) sel.value = currentVal;
      });
    }

    // Default disabled option placeholders
    const indTradeSel = document.getElementById('industry_trade');
    if (indTradeSel && indTradeSel.options[0]) {
      indTradeSel.options[0].textContent = dict.select_choose_one || 'Choose one...';
    }
    ['business_region', 'avg_job_size'].forEach(id => {
      const s = document.getElementById(id);
      if (s && s.options[0]) s.options[0].textContent = dict.select_choose || 'Choose...';
    });

    // 7. Sync dropdown value
    const langSelect = document.getElementById('quote_language');
    if (langSelect && langSelect.value !== lang) {
      langSelect.value = lang;
    }

    // 8. If quote is currently generated or stored, translate the quote document
    updateQuoteForLanguage(lang);

    // 9. Update quotes count badge & list if currently visible
    updateNavQuotesCount();
    if (getCurrentActiveView() === 'quotes') {
      renderQuotesListView();
    }

    // 10. Update catalog drawer items if loaded
    if (state.catalog && state.catalog.length > 0) {
      renderCatalogDrawer();
    }
  }

  function updateQuoteForLanguage(lang) {
    const dict = getDictionary(lang);
    if (!dict) return;

    // Localized Date & Valid
    const langConfig = LANG_MAP[lang] || { code: 'en', locale: 'en-GB' };
    const dateOptions = { day: 'numeric', month: 'short', year: 'numeric' };
    state.quote.date = new Date().toLocaleDateString(langConfig.locale, dateOptions);
    state.quote.valid_days = dict.valid_days_text || '14 days';

    // If we have a preset template and user hasn't overridden with custom text, update items
    const preset = state.quote.job_preset || 'deck';
    if (dict.templates && dict.templates[preset]) {
      const t = dict.templates[preset];
      state.quote.project_title = t.title;
      state.quote.materials = JSON.parse(JSON.stringify(t.materials));
      state.quote.labour = JSON.parse(JSON.stringify(t.labour));
      state.quote.included = [...t.included];
      state.quote.excluded = [...t.excluded];
    }

    // Default payment terms
    if (!state.quote.has_custom_terms && dict.default_payment_terms) {
      state.quote.payment_terms = dict.default_payment_terms;
    }

    renderQuoteDocument();
  }

  // --- EVENT BINDINGS ---
  function bindEvents() {
    // Navigation Tabs with dirty check
    navTabs.setup.addEventListener('click', () => trySwitchView('setup'));
    navTabs.generator.addEventListener('click', () => trySwitchView('generator'));
    navTabs.quote.addEventListener('click', () => trySwitchView('quote'));
    navTabs.quotes?.addEventListener('click', () => trySwitchView('quotes'));

    document.getElementById('nav-brand-btn')?.addEventListener('click', () => {
      trySwitchView(localStorage.getItem('quote_writer_has_setup') === 'true' ? 'generator' : 'setup');
    });

    // Modal action buttons
    modalBtnSave?.addEventListener('click', handleModalSaveAndRecreate);
    modalBtnDiscard?.addEventListener('click', handleModalDiscard);
    modalBtnCancel?.addEventListener('click', () => {
      hideUnsavedModal();
      pendingNav = null;
    });
    modalCloseIcon?.addEventListener('click', () => {
      hideUnsavedModal();
      pendingNav = null;
    });

    unsavedModal?.addEventListener('click', (e) => {
      if (e.target === unsavedModal) {
        hideUnsavedModal();
        pendingNav = null;
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (unsavedModal && !unsavedModal.classList.contains('hidden')) {
          hideUnsavedModal();
          pendingNav = null;
        }
        const deleteModal = document.getElementById('delete-modal');
        if (deleteModal && !deleteModal.classList.contains('hidden')) {
          closeDeleteConfirm();
        }
        const catalogDrawer = document.getElementById('catalog-drawer');
        if (catalogDrawer && !catalogDrawer.classList.contains('hidden')) {
          closeCatalogDrawer();
        }
      }
    });

    // Language change listener on setup form
    const langSelect = document.getElementById('quote_language');
    if (langSelect) {
      langSelect.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        state.profile.quote_language = selectedLang;
        applyLanguage(selectedLang);
        saveProfileToStorage();
        const dict = getDictionary(selectedLang);
        showToast(`🌐 ${dict.quote_language_label.replace(/<[^>]*>/g, '').trim()}: ${selectedLang}`);
      });
    }

    // Region Change logic
    const regionSelect = document.getElementById('business_region');
    if (regionSelect) {
      regionSelect.addEventListener('change', (e) => {
        const reg = REGION_DEFAULTS[e.target.value];
        if (reg) {
          const vatSel = document.getElementById('vat_rate');
          const curSel = document.getElementById('currency');
          const phoneIn = document.getElementById('user_phone');
          if (vatSel) vatSel.value = reg.vat;
          if (curSel) curSel.value = reg.currency;
          if (phoneIn && (!phoneIn.value || phoneIn.value.startsWith('+'))) {
            phoneIn.value = `${reg.phonePrefix} `;
          }
        }
      });
    }

    // Color input changes
    const colorInput = document.getElementById('brand_color');
    const colorPreview = document.getElementById('color-preview');
    if (colorInput) {
      colorInput.addEventListener('input', (e) => {
        updateColorPreview(e.target.value);
      });
      colorPreview?.addEventListener('click', () => colorInput.click());
    }

    // Setup Form Submit
    setupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(setupForm);

      state.profile.business_name = formData.get('business_name') || 'Test Edvin';
      state.profile.user_email = formData.get('user_email') || '';
      state.profile.user_phone = formData.get('user_phone') || '';
      state.profile.industry_trade = formData.get('industry_trade') || '';
      state.profile.business_region = formData.get('business_region') || 'Latvia';
      state.profile.currency = formData.get('currency') || 'EUR';
      state.profile.currency_symbol = CURRENCY_SYMBOLS[state.profile.currency] || '€';
      state.profile.vat_rate = parseFloat(formData.get('vat_rate')) || 21;
      state.profile.avg_job_size = formData.get('avg_job_size') || '';
      state.profile.quote_language = formData.get('quote_language') || 'English';

      state.profile.logo_url = formData.get('logo_url') || '';
      state.profile.business_address = formData.get('business_address') || '';
      state.profile.license_number = formData.get('license_number') || '';
      state.profile.tax_id = formData.get('tax_id') || '';
      state.profile.insurance_details = formData.get('insurance_details') || '';
      state.profile.trade_memberships = formData.get('trade_memberships') || '';
      state.profile.business_tagline = formData.get('business_tagline') || '';
      state.profile.business_website = formData.get('business_website') || '';
      state.profile.brand_color = formData.get('brand_color') || '#0b5e55';

      saveProfileToStorage();

      // Apply selected language across all pages
      applyLanguage(state.profile.quote_language);
      step1Snapshot = getSetupFormSnapshot();

      // Update URL bookmarkable state and inputs
      updateBrowserUrlWithPersonalLink(hasGeneratedQuote ? 'quote' : 'generator');
      updatePersonalUrlDisplays();

      const dict = getDictionary(state.profile.quote_language);
      if (hasGeneratedQuote) {
        renderQuoteDocument();
        showToast(dict.toast_quote_recreated || '✨ Quote recreated with your changes!');
        switchView('quote');
      } else {
        showToast(dict.toast_letterhead_saved || '🎉 Letterhead saved! Personal tool ready.');
        updateGeneratorViewGreeting();
        switchView('generator');
      }
    });

    // Accordions Toggle
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const item = header.closest('.accordion-item');
        const isOpen = item.classList.contains('open');
        item.classList.toggle('open', !isOpen);
        header.setAttribute('aria-expanded', !isOpen);
      });
    });

    // Non-negative validation for sizing inputs
    ['spec_pieces', 'spec_area', 'spec_length', 'spec_volume', 'spec_system_size'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', () => {
          if (el.value !== '' && parseFloat(el.value) < 0) {
            el.value = '0';
          }
        });
        el.addEventListener('keydown', (e) => {
          if (e.key === '-' || e.key === '+' || e.key === 'e' || e.key === 'E') {
            e.preventDefault();
          }
          if (id === 'spec_pieces' && e.key === '.') {
            e.preventDefault();
          }
        });
      }
    });

    // Quick Example Chips
    const chips = document.querySelectorAll('.example-chip');
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const desc = chip.getAttribute('data-desc');
        const area = chip.getAttribute('data-area');
        const length = chip.getAttribute('data-length');
        const pieces = chip.getAttribute('data-pieces');

        const jobDescInput = document.getElementById('job_description');
        if (jobDescInput) jobDescInput.value = desc;

        if (area) document.getElementById('spec_area').value = area;
        if (length) document.getElementById('spec_length').value = length;
        if (pieces) document.getElementById('spec_pieces').value = pieces;

        const dict = getDictionary(state.profile.quote_language);
        showToast(dict.toast_example_loaded || '✨ Loaded example spec into form');
      });
    });

    // Generator Form Submit
    generatorForm.addEventListener('submit', (e) => {
      e.preventDefault();
      runQuoteGenerationFlow();
    });

    // Quote Ready Action Buttons
    document.getElementById('btn-print-pdf')?.addEventListener('click', () => {
      const p = state.profile;
      const brandColor = p.brand_color || '#0b5e55';
      const printableQuote = document.getElementById('printable-quote');
      if (printableQuote) {
        printableQuote.style.setProperty('--primary-teal', brandColor);
        printableQuote.style.setProperty('--brand-color', brandColor);
      }
      const origTitle = document.title;
      const quoteNum = state.quote?.number || 'Quote';
      const bizName = (p.business_name || 'Quote').replace(/[^a-zA-Z0-9_-]/g, '_');
      document.title = `${quoteNum}_${bizName}`;
      window.print();
      setTimeout(() => {
        document.title = origTitle;
      }, 1000);
    });

    document.getElementById('btn-copy-email')?.addEventListener('click', () => {
      copyQuoteAsEmail();
    });

    document.getElementById('btn-share-tool-link')?.addEventListener('click', (e) => {
      copyPersonalLink(e.currentTarget);
    });

    document.getElementById('btn-copy-personal-url')?.addEventListener('click', (e) => {
      copyPersonalLink(e.currentTarget);
    });

    const personalUrlInput = document.getElementById('personal-tool-url');
    if (personalUrlInput) {
      personalUrlInput.addEventListener('click', function() {
        this.select();
      });
    }

    document.getElementById('btn-save-quote')?.addEventListener('click', () => {
      saveCurrentQuote(true);
    });

    document.getElementById('btn-view-saved-quotes')?.addEventListener('click', () => {
      saveCurrentQuote(false);
      trySwitchView('quotes');
    });

    document.getElementById('btn-gen-saved-quotes')?.addEventListener('click', () => {
      trySwitchView('quotes');
    });

    document.getElementById('btn-create-quote-top')?.addEventListener('click', () => {
      state.currentQuoteId = null;
      trySwitchView('generator');
    });

    document.getElementById('btn-empty-create-quote')?.addEventListener('click', () => {
      state.currentQuoteId = null;
      trySwitchView('generator');
    });

    document.getElementById('btn-export-quotes')?.addEventListener('click', () => {
      exportQuotesJson();
    });

    const quotesSearchInput = document.getElementById('quotes-search-input');
    quotesSearchInput?.addEventListener('input', () => {
      renderQuotesListView();
    });

    document.getElementById('quotes-search-clear')?.addEventListener('click', () => {
      if (quotesSearchInput) {
        quotesSearchInput.value = '';
      }
      renderQuotesListView();
    });

    document.getElementById('quotes-status-filter')?.addEventListener('change', () => {
      renderQuotesListView();
    });

    document.getElementById('quotes-sort-select')?.addEventListener('change', () => {
      renderQuotesListView();
    });

    const quotesListContainer = document.getElementById('quotes-list-container');
    quotesListContainer?.addEventListener('click', (e) => {
      const statusBadge = e.target.closest('.status-badge');
      if (statusBadge) {
        const id = statusBadge.getAttribute('data-id');
        if (id) cycleQuoteStatus(id);
        return;
      }

      const btn = e.target.closest('.btn-card-action');
      if (!btn) return;
      const action = btn.getAttribute('data-action');
      const id = btn.getAttribute('data-id');
      if (!id) return;

      if (action === 'open') {
        loadQuoteById(id);
      } else if (action === 'duplicate') {
        duplicateQuote(id);
      } else if (action === 'print') {
        loadQuoteById(id);
        setTimeout(() => {
          window.print();
        }, 350);
      } else if (action === 'delete') {
        openDeleteConfirm(id);
      }
    });

    const deleteModal = document.getElementById('delete-modal');
    document.getElementById('modal-btn-confirm-delete')?.addEventListener('click', () => {
      confirmDeleteQuote();
    });
    document.getElementById('modal-btn-cancel-delete')?.addEventListener('click', () => {
      closeDeleteConfirm();
    });
    document.getElementById('delete-modal-close')?.addEventListener('click', () => {
      closeDeleteConfirm();
    });
    deleteModal?.addEventListener('click', (e) => {
      if (e.target === deleteModal) {
        closeDeleteConfirm();
      }
    });

    document.getElementById('btn-new-quote')?.addEventListener('click', () => {
      state.currentQuoteId = null;
      trySwitchView('generator');
    });

    document.getElementById('btn-edit-letterhead')?.addEventListener('click', () => {
      syncSetupFormFromState();
      step1Snapshot = getSetupFormSnapshot();
      switchView('setup');
    });

    // Add Line Buttons
    document.getElementById('btn-add-material')?.addEventListener('click', () => {
      const lang = state.profile.quote_language || 'English';
      const itemTitle = lang === 'Latvian' ? 'Papildu materiāls / pozīcija' : (lang === 'German' ? 'Zusatzmaterial / Position' : 'Custom item / material');
      const itemSub = lang === 'Latvian' ? 'Piegāde un montāža' : (lang === 'German' ? 'Lieferung & Montage' : 'Standard supply & delivery');
      const itemQty = lang === 'Latvian' ? '1 vien.' : (lang === 'German' ? '1 Stk.' : '1 unit');
      addMaterialRow(itemTitle, itemSub, itemQty, 500);
      recalculateTotals();
    });

    document.getElementById('btn-add-labour')?.addEventListener('click', () => {
      const lang = state.profile.quote_language || 'English';
      const phaseTitle = lang === 'Latvian' ? 'Papildu meistara darba posms' : (lang === 'German' ? 'Zusätzliche Fachhandwerkerleistung' : 'Additional site labour / specialist installation');
      const durationText = lang === 'Latvian' ? '1 diena' : (lang === 'German' ? '1 Tag' : '1 day');
      addLabourRow(phaseTitle, durationText, 650);
      recalculateTotals();
    });

    document.getElementById('btn-add-inclusion')?.addEventListener('click', () => {
      const lang = state.profile.quote_language || 'English';
      const text = lang === 'Latvian' ? 'Jauna iekļautā darba pozīcija' : (lang === 'German' ? 'Neuer inbegriffener Leistungspunkt' : 'New included project deliverable');
      addBulletPoint('scope-included-list', text, true);
    });

    document.getElementById('btn-add-exclusion')?.addEventListener('click', () => {
      const lang = state.profile.quote_language || 'English';
      const text = lang === 'Latvian' ? 'Neiekļauts darbs vai klienta nodrošinājums' : (lang === 'German' ? 'Nicht enthaltene Leistung / Bauseitig' : 'Excluded work or permit required by client');
      addBulletPoint('scope-excluded-list', text, false);
    });

    // Real-time table input / edit listener
    document.getElementById('materials-tbody')?.addEventListener('input', () => recalculateTotals());
    document.getElementById('labour-tbody')?.addEventListener('input', () => recalculateTotals());

    // --- Catalog Drawer Events ---
    document.getElementById('btn-open-catalog')?.addEventListener('click', () => {
      openCatalogDrawer('all');
    });

    document.getElementById('btn-catalog-materials')?.addEventListener('click', () => {
      openCatalogDrawer('material');
    });

    document.getElementById('btn-catalog-labour')?.addEventListener('click', () => {
      openCatalogDrawer('labour');
    });

    document.getElementById('catalog-drawer-close')?.addEventListener('click', () => {
      closeCatalogDrawer();
    });

    const catalogDrawer = document.getElementById('catalog-drawer');
    catalogDrawer?.addEventListener('click', (e) => {
      if (e.target === catalogDrawer) {
        closeCatalogDrawer();
      }
    });

    // Category filter pills
    document.querySelectorAll('.catalog-filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const cat = pill.getAttribute('data-cat') || 'all';
        openCatalogDrawer(cat);
      });
    });

    // Search filter & clear
    const catalogSearchInput = document.getElementById('catalog-search-input');
    const catalogSearchClear = document.getElementById('catalog-search-clear');

    catalogSearchInput?.addEventListener('input', (e) => {
      state.catalogSearch = e.target.value;
      if (catalogSearchClear) {
        catalogSearchClear.classList.toggle('hidden', !state.catalogSearch);
      }
      renderCatalogDrawer();
    });

    catalogSearchClear?.addEventListener('click', () => {
      if (catalogSearchInput) {
        catalogSearchInput.value = '';
        state.catalogSearch = '';
        catalogSearchClear.classList.add('hidden');
        catalogSearchInput.focus();
        renderCatalogDrawer();
      }
    });

    // Toggle custom item form
    const btnToggleAdd = document.getElementById('btn-toggle-add-catalog');
    const catalogAddForm = document.getElementById('catalog-add-form');
    const catalogAddIcon = document.getElementById('catalog-add-btn-icon');
    const btnCancelAdd = document.getElementById('btn-cancel-add-catalog');

    btnToggleAdd?.addEventListener('click', () => {
      if (catalogAddForm) {
        const isHidden = catalogAddForm.classList.contains('hidden');
        catalogAddForm.classList.toggle('hidden');
        if (catalogAddIcon) catalogAddIcon.textContent = isHidden ? '−' : '+';
        if (isHidden) {
          document.getElementById('catalog-new-name')?.focus();
        }
      }
    });

    btnCancelAdd?.addEventListener('click', () => {
      if (catalogAddForm) {
        catalogAddForm.classList.add('hidden');
        catalogAddForm.reset();
        if (catalogAddIcon) catalogAddIcon.textContent = '+';
      }
    });

    catalogAddForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('catalog-new-name')?.value || '';
      const type = document.getElementById('catalog-new-type')?.value || 'material';
      const sub = document.getElementById('catalog-new-sub')?.value || '';
      const qty = document.getElementById('catalog-new-qty')?.value || '';
      const price = document.getElementById('catalog-new-price')?.value || 0;

      if (!name.trim()) return;

      addCustomCatalogItem(name, type, sub, qty, price);
      catalogAddForm.reset();
      catalogAddForm.classList.add('hidden');
      if (catalogAddIcon) catalogAddIcon.textContent = '+';
    });

    // Delegated clicks inside catalog items list (Add to quote & delete custom)
    const catalogItemsList = document.getElementById('catalog-items-list');
    catalogItemsList?.addEventListener('click', (e) => {
      const addBtn = e.target.closest('[data-action="add-to-quote"]');
      if (addBtn) {
        const itemId = addBtn.getAttribute('data-id');
        if (itemId) insertCatalogItemIntoQuote(itemId, addBtn);
        return;
      }

      const delBtn = e.target.closest('[data-action="delete-catalog"]');
      if (delBtn) {
        const itemId = delBtn.getAttribute('data-id');
        if (itemId) deleteCatalogItem(itemId);
        return;
      }
    });

    // Privacy modal / alert
    document.getElementById('privacy-link')?.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Privacy Promise:\nYour data is saved directly in your browser session. No third-party spam or selling of information.');
    });
  }

  // --- QUOTE GENERATION FLOW & LOADING ---
  function runQuoteGenerationFlow() {
    switchView('loading');

    const lang = state.profile.quote_language || 'English';
    const dict = getDictionary(lang);

    const ticker = document.getElementById('loading-status');
    const steps = [
      dict.loading_step_1 || 'Analysing the job...',
      dict.loading_step_2 || 'Calculating materials & labor hours...',
      dict.loading_step_3 || 'Applying regional pricing & milestones...',
      dict.loading_step_4 || 'Finalising branded PDF layout...'
    ];

    let stepIndex = 0;
    if (ticker) ticker.textContent = steps[0];

    const interval = setInterval(() => {
      stepIndex++;
      if (stepIndex < steps.length && ticker) {
        ticker.textContent = steps[stepIndex];
      }
    }, 450);

    setTimeout(() => {
      clearInterval(interval);
      buildQuoteFromForm();
      hasGeneratedQuote = true;
      step2Snapshot = getGeneratorFormSnapshot();
      saveCurrentQuote(false);
      switchView('quote');
      navTabs.quote.removeAttribute('disabled');
      showToast(dict.toast_quote_ready || '✅ Your quote is ready! Click any line to edit.');
    }, 1850);
  }

  // --- QUOTE BUILDER LOGIC ---
  function buildQuoteFromForm() {
    const lang = state.profile.quote_language || 'English';
    const dict = getDictionary(lang);

    const jobDesc = document.getElementById('job_description').value.trim();
    const area = parseFloat(document.getElementById('spec_area').value) || 0;
    const clientName = document.getElementById('client_name')?.value.trim() || '';
    const quoteRef = document.getElementById('quote_reference')?.value.trim() || '';
    const siteAddr = document.getElementById('site_address')?.value.trim() || '';
    const duration = document.getElementById('estimated_duration')?.value.trim() || '';
    const paymentSched = document.getElementById('custom_payment_schedule')?.value.trim() || '';
    const customWarranty = document.getElementById('custom_warranty')?.value.trim() || '';
    const customInclusions = document.getElementById('custom_inclusions')?.value.trim() || '';
    const customExclusions = document.getElementById('custom_exclusions')?.value.trim() || '';
    const coverNote = document.getElementById('cover_note')?.value.trim() || '';

    // Generate random quote number if not set
    const currentYear = new Date().getFullYear();
    const randomNum = String(Math.floor(Math.random() * 900) + 100).padStart(4, '0');
    state.quote.number = `${currentYear}-${randomNum}`;
    
    // Format current date in selected locale
    const langConfig = LANG_MAP[lang] || { code: 'en', locale: 'en-GB' };
    const dateOptions = { day: 'numeric', month: 'short', year: 'numeric' };
    state.quote.date = new Date().toLocaleDateString(langConfig.locale, dateOptions);
    state.quote.valid_days = dict.valid_days_text || '14 days';

    state.quote.quote_for = clientName ? (siteAddr ? `${clientName} · ${siteAddr}` : clientName) : '—';
    state.quote.reference = quoteRef || '—';
    state.quote.cover_note = coverNote;

    // Detect preset from job description
    const descLower = jobDesc.toLowerCase();
    let presetKey = 'deck';
    if (descLower.includes('website') || descLower.includes('software') || descLower.includes('mājaslap') || descLower.includes('programmatūr') || descLower.includes('it ') || descLower.includes('app') || descLower.includes('web') || descLower.includes('strona') || descLower.includes('veeb')) {
      presetKey = 'it';
    } else if (descLower.includes('deck') || descLower.includes('terase') || descLower.includes('terrasse')) {
      presetKey = 'deck';
    } else if (descLower.includes('kitchen') || descLower.includes('virtuv') || descLower.includes('küche')) {
      presetKey = 'kitchen';
    } else if (descLower.includes('bath') || descLower.includes('vanna') || descLower.includes('bad')) {
      presetKey = 'bath';
    } else if (descLower.includes('roof') || descLower.includes('jumt') || descLower.includes('dach')) {
      presetKey = 'roof';
    } else if (jobDesc) {
      presetKey = 'general';
    }
    state.quote.job_preset = presetKey;

    const t = dict.templates[presetKey] || dict.templates.deck;
    state.quote.project_title = jobDesc || t.title;

    // Payment terms & warranty text
    if (paymentSched || customWarranty) {
      state.quote.has_custom_terms = true;
      let termsText = '';
      if (paymentSched) {
        termsText += `${paymentSched}\n`;
      } else {
        termsText += `${dict.default_payment_terms.split('\n')[0]}\n`;
      }
      if (customWarranty) {
        termsText += `${customWarranty}`;
      } else {
        termsText += `${dict.default_payment_terms.split('\n')[1] || ''}`;
      }
      state.quote.payment_terms = termsText.trim();
    } else {
      state.quote.has_custom_terms = false;
      state.quote.payment_terms = dict.default_payment_terms;
    }

    // Load template materials and labour
    state.quote.materials = JSON.parse(JSON.stringify(t.materials));
    state.quote.labour = JSON.parse(JSON.stringify(t.labour));

    // Update area if user gave custom area
    if (area && state.quote.materials[0]) {
      state.quote.materials[0].qty = `${area} m²`;
    }
    if (duration && state.quote.labour[1]) {
      state.quote.labour[1].duration = duration;
    }

    // Inclusions & Exclusions
    if (customInclusions) {
      state.quote.included = customInclusions.split('\n').map(s => s.trim()).filter(Boolean);
    } else {
      state.quote.included = [...t.included];
    }

    if (customExclusions) {
      state.quote.excluded = customExclusions.split('\n').map(s => s.trim()).filter(Boolean);
    } else {
      state.quote.excluded = [...t.excluded];
    }

    renderQuoteDocument();
  }

  // Sample quote fallback helper
  function generateSampleQuote(isDeck = true) {
    const lang = state.profile.quote_language || 'English';
    const dict = getDictionary(lang);

    state.quote.number = '2026-0003';
    state.quote.job_preset = 'deck';
    const locale = lang === 'Latvian' ? 'lv-LV' : (lang === 'German' ? 'de-DE' : 'en-GB');
    state.quote.date = new Date().toLocaleDateString(locale, { day: 'numeric', month: 'short', year: 'numeric' });
    state.quote.valid_days = dict.valid_days_text || '14 days';

    const t = dict.templates.deck;
    state.quote.project_title = t.title;
    state.quote.materials = JSON.parse(JSON.stringify(t.materials));
    state.quote.labour = JSON.parse(JSON.stringify(t.labour));
    state.quote.included = [...t.included];
    state.quote.excluded = [...t.excluded];
    state.quote.payment_terms = dict.default_payment_terms;

    hasGeneratedQuote = true;
    renderQuoteDocument();
    step2Snapshot = getGeneratorFormSnapshot();
  }

  // --- RENDER QUOTE DOCUMENT VIEW ---
  function renderQuoteDocument() {
    const p = state.profile;
    const q = state.quote;
    const sym = p.currency_symbol || '€';

    const brandColor = p.brand_color || '#0b5e55';

    // Set brand color variable dynamically on quote sheet
    const printableQuote = document.getElementById('printable-quote');
    if (printableQuote) {
      printableQuote.style.setProperty('--primary-teal', brandColor);
      printableQuote.style.setProperty('--brand-color', brandColor);
    }

    // Letterhead details
    const monogramEl = document.getElementById('doc-monogram');
    const firstLetter = (p.business_name || 'Q').trim().charAt(0).toUpperCase();
    if (monogramEl) {
      if (p.logo_url) {
        monogramEl.style.backgroundImage = `url(${p.logo_url})`;
        monogramEl.textContent = '';
      } else {
        monogramEl.style.backgroundImage = 'none';
        monogramEl.textContent = firstLetter;
      }
      monogramEl.style.backgroundColor = brandColor;
      monogramEl.style.color = '#ffffff';
    }

    const docAccent = document.getElementById('doc-accent-teal');
    if (docAccent) docAccent.style.backgroundColor = brandColor;

    const companyName = document.getElementById('doc-company-name');
    if (companyName) companyName.style.color = brandColor;

    setText('doc-company-name', p.business_name || 'Smith Carpentry Ltd');
    setText('doc-company-sub', `${p.industry_trade || 'General Contracting'} · ${p.business_region || 'Latvia'}`);
    setText('doc-phone-display', `T ${p.user_phone || ''}`);
    setText('doc-email-display', `E ${p.user_email || ''}`);

    setText('doc-quote-number', q.number);
    setText('doc-quote-date', q.date);
    setText('doc-quote-valid', q.valid_days);

    setText('doc-quote-for', q.quote_for || '—');
    setText('doc-reference', q.reference || '—');
    setText('doc-project-title', q.project_title);

    // Cover Note
    const coverNoteBox = document.getElementById('doc-cover-note-container');
    const coverNoteText = document.getElementById('doc-cover-note-text');
    if (q.cover_note) {
      coverNoteBox.classList.remove('hidden');
      coverNoteText.textContent = `"${q.cover_note}"`;
    } else {
      coverNoteBox.classList.add('hidden');
    }

    // Populate Materials Table
    const matTbody = document.getElementById('materials-tbody');
    if (matTbody) {
      matTbody.innerHTML = '';
      q.materials.forEach((item) => {
        matTbody.appendChild(createMaterialRowEl(item.name, item.sub, item.qty, item.amount));
      });
    }

    // Populate Labour Table
    const labTbody = document.getElementById('labour-tbody');
    if (labTbody) {
      labTbody.innerHTML = '';
      q.labour.forEach((item) => {
        labTbody.appendChild(createLabourRowEl(item.phase, item.duration, item.amount));
      });
    }

    // Populate Scope of Work
    const incList = document.getElementById('scope-included-list');
    if (incList) {
      incList.innerHTML = '';
      q.included.forEach(text => {
        addBulletPoint('scope-included-list', text, true);
      });
    }

    const excList = document.getElementById('scope-excluded-list');
    if (excList) {
      excList.innerHTML = '';
      q.excluded.forEach(text => {
        addBulletPoint('scope-excluded-list', text, false);
      });
    }

    // Payment Terms
    setText('doc-payment-terms-text', q.payment_terms);

    // Signatures
    const sigName = state.profile.business_name || 'Test Edvin';
    setText('sig-contractor-name', sigName);

    // Document Footer Contact / Legal Summary
    const footerParts = [];
    if (p.business_name) footerParts.push(p.business_name);
    if (p.user_email) footerParts.push(p.user_email);
    if (p.user_phone) footerParts.push(p.user_phone);
    if (footerParts.length === 0) {
      footerParts.push(sigName, 'you@business.com', '+371 29 000 000');
    }
    setText('doc-footer-legal', footerParts.join(' · '));

    // Recalculate totals
    recalculateTotals();
  }

  function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  // --- AMOUNT INPUT RESTRICTIONS (Numbers and single dot only) ---
  function sanitizeAmountInput(str) {
    if (!str) return '';
    // Strip everything except digits and decimal dots
    let clean = str.replace(/[^0-9.]/g, '');
    // Ensure at most one dot
    const parts = clean.split('.');
    if (parts.length > 2) {
      clean = parts[0] + '.' + parts.slice(1).join('');
    }
    return clean;
  }

  function setupAmountCellEvents(td) {
    if (!td) return;

    // When focusing, show raw numbers & dot without currency symbol
    td.addEventListener('focus', () => {
      const numericVal = parseAmount(td.textContent);
      td.textContent = numericVal > 0 ? String(numericVal) : '';
    });

    // Keydown: restrict to digits 0-9 and single dot
    td.addEventListener('keydown', (e) => {
      const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Home', 'End', 'Enter'];
      if (allowedKeys.includes(e.key) || e.ctrlKey || e.metaKey) {
        if (e.key === 'Enter') {
          e.preventDefault();
          td.blur();
        }
        return;
      }

      // Allow digits 0-9
      if (e.key >= '0' && e.key <= '9') {
        return;
      }

      // Allow single dot
      if (e.key === '.') {
        if (td.textContent.includes('.')) {
          e.preventDefault();
        }
        return;
      }

      // Disallow all other letters and symbols
      e.preventDefault();
    });

    // Paste: strip all letters and disallowed characters
    td.addEventListener('paste', (e) => {
      e.preventDefault();
      const pasteText = (e.clipboardData || window.clipboardData).getData('text');
      const sanitized = sanitizeAmountInput(pasteText);
      if (sanitized) {
        document.execCommand('insertText', false, sanitized);
      }
    });

    // Input: sanitize and trigger live calculation
    td.addEventListener('input', () => {
      const raw = td.textContent;
      const sanitized = sanitizeAmountInput(raw);
      if (raw !== sanitized) {
        td.textContent = sanitized;
      }
      recalculateTotals();
    });

    // Blur: format nicely with currency symbol
    td.addEventListener('blur', () => {
      const val = parseAmount(td.textContent);
      td.textContent = formatAmount(val);
      recalculateTotals();
    });
  }

  // --- ROW BUILDERS ---
  function createMaterialRowEl(name, sub, qty, amount) {
    const tr = document.createElement('tr');
    tr.className = 'material-row';
    tr.innerHTML = `
      <td class="col-item">
        <div class="item-main-text" contenteditable="true">${escapeHtml(name)}</div>
        ${sub ? `<div class="item-sub-text" contenteditable="true">${escapeHtml(sub)}</div>` : ''}
      </td>
      <td class="col-qty" contenteditable="true">${escapeHtml(qty)}</td>
      <td class="col-amount" contenteditable="true" data-type="amount">${formatAmount(amount)}</td>
      <td class="col-action no-print">
        <button type="button" class="btn-delete-row" title="Delete row">×</button>
      </td>
    `;

    setupAmountCellEvents(tr.querySelector('td.col-amount'));

    tr.querySelector('.btn-delete-row').addEventListener('click', () => {
      tr.remove();
      recalculateTotals();
    });

    return tr;
  }

  function addMaterialRow(name, sub, qty, amount) {
    const tbody = document.getElementById('materials-tbody');
    tbody.appendChild(createMaterialRowEl(name, sub, qty, amount));
  }

  function createLabourRowEl(phase, duration, amount) {
    const tr = document.createElement('tr');
    tr.className = 'labour-row';
    tr.innerHTML = `
      <td class="col-item">
        <div class="item-main-text" contenteditable="true">${escapeHtml(phase)}</div>
      </td>
      <td class="col-duration" contenteditable="true">${escapeHtml(duration)}</td>
      <td class="col-amount" contenteditable="true" data-type="amount">${formatAmount(amount)}</td>
      <td class="col-action no-print">
        <button type="button" class="btn-delete-row" title="Delete row">×</button>
      </td>
    `;

    setupAmountCellEvents(tr.querySelector('td.col-amount'));

    tr.querySelector('.btn-delete-row').addEventListener('click', () => {
      tr.remove();
      recalculateTotals();
    });

    return tr;
  }

  function addLabourRow(phase, duration, amount) {
    const tbody = document.getElementById('labour-tbody');
    tbody.appendChild(createLabourRowEl(phase, duration, amount));
  }

  function addBulletPoint(listId, text, isIncluded) {
    const ul = document.getElementById(listId);
    if (!ul) return;
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="bullet-text" contenteditable="true">${escapeHtml(text)}</span>
      <button type="button" class="btn-delete-row no-print" title="Delete bullet" style="margin-left: 4px; font-size: 13px;">×</button>
    `;
    li.querySelector('.btn-delete-row').addEventListener('click', () => li.remove());
    ul.appendChild(li);
  }

  // --- LIVE RECALCULATION ENGINE ---
  function recalculateTotals() {
    const sym = state.profile.currency_symbol || '€';
    const vatPercent = state.profile.vat_rate || 21;
    const lang = state.profile.quote_language || 'English';
    const dict = getDictionary(lang);

    // Materials sum
    let materialsSubtotal = 0;
    const matAmountCells = document.querySelectorAll('#materials-tbody td.col-amount');
    matAmountCells.forEach(td => {
      materialsSubtotal += parseAmount(td.textContent);
    });

    // Labour sum
    let labourSubtotal = 0;
    const labAmountCells = document.querySelectorAll('#labour-tbody td.col-amount');
    labAmountCells.forEach(td => {
      labourSubtotal += parseAmount(td.textContent);
    });

    const subtotal = materialsSubtotal + labourSubtotal;
    const vatAmount = Math.round(subtotal * (vatPercent / 100));
    const grandTotal = subtotal + vatAmount;

    setText('summary-materials-subtotal', `${sym}${formatWithSpaces(materialsSubtotal)}`);
    setText('summary-labour-subtotal', `${sym}${formatWithSpaces(labourSubtotal)}`);
    setText('summary-subtotal', `${sym}${formatWithSpaces(subtotal)}`);
    setText('summary-vat-label', `${dict.summary_vat || 'VAT'} (${vatPercent}%)`);
    setText('summary-vat-amount', `${sym}${formatWithSpaces(vatAmount)}`);
    setText('summary-grand-total', `${sym}${formatWithSpaces(grandTotal)}`);
  }

  function parseAmount(text) {
    if (!text) return 0;
    const clean = text.replace(/[^0-9.,]/g, '').replace(',', '.');
    const val = parseFloat(clean);
    return isNaN(val) ? 0 : val;
  }

  function formatAmount(val) {
    const sym = state.profile.currency_symbol || '€';
    return `${sym}${formatWithSpaces(Math.round(val))}`;
  }

  function formatWithSpaces(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // --- EXPORT / COPY AS EMAIL ---
  function copyQuoteAsEmail() {
    const p = state.profile;
    const q = state.quote;
    const lang = p.quote_language || 'English';
    const dict = getDictionary(lang);

    const grandTotalText = document.getElementById('summary-grand-total')?.textContent || '';
    const subtotalText = document.getElementById('summary-subtotal')?.textContent || '';
    const vatText = document.getElementById('summary-vat-amount')?.textContent || '';

    const greeting = lang === 'Latvian' ? 'Labdien,' : (lang === 'German' ? 'Guten Tag,' : 'Hi,');
    const thanks = lang === 'Latvian' 
      ? `Paldies par iespēju sagatavot tāmi projektam: ${q.project_title}.\n\n`
      : (lang === 'German' 
        ? `vielen Dank für Ihr Interesse an unserem Angebot für: ${q.project_title}.\n\n`
        : `Thank you for giving us the opportunity to quote for: ${q.project_title}.\n\n`);

    let emailDraft = `${greeting}\n\n`;
    if (q.cover_note) {
      emailDraft += `${q.cover_note}\n\n`;
    } else {
      emailDraft += thanks;
    }

    emailDraft += `${dict.quote_badge} #${q.number}\n`;
    emailDraft += `${dict.date_label}: ${q.date} (${dict.valid_label}: ${q.valid_days})\n`;
    emailDraft += `${dict.project_label}: ${q.project_title}\n\n`;

    emailDraft += `--- ${dict.materials_heading} ---\n`;
    document.querySelectorAll('#materials-tbody tr').forEach(tr => {
      const item = tr.querySelector('.item-main-text')?.textContent.trim() || '';
      const qty = tr.querySelector('.col-qty')?.textContent.trim() || '';
      const amt = tr.querySelector('.col-amount')?.textContent.trim() || '';
      emailDraft += `• ${item} (${qty}): ${amt}\n`;
    });

    emailDraft += `\n--- ${dict.labour_heading} ---\n`;
    document.querySelectorAll('#labour-tbody tr').forEach(tr => {
      const phase = tr.querySelector('.item-main-text')?.textContent.trim() || '';
      const dur = tr.querySelector('.col-duration')?.textContent.trim() || '';
      const amt = tr.querySelector('.col-amount')?.textContent.trim() || '';
      emailDraft += `• ${phase} (${dur}): ${amt}\n`;
    });

    emailDraft += `\n${dict.summary_subtotal}: ${subtotalText}\n`;
    emailDraft += `${dict.summary_vat} (${p.vat_rate}%): ${vatText}\n`;
    emailDraft += `${dict.summary_total}: ${grandTotalText}\n\n`;

    emailDraft += `${dict.scope_heading}:\n`;
    emailDraft += `${dict.whats_included_html.replace(/<[^>]*>/g, '').trim()}:\n`;
    document.querySelectorAll('#scope-included-list li .bullet-text').forEach(li => {
      emailDraft += `  [✓] ${li.textContent.trim()}\n`;
    });

    emailDraft += `\n${dict.not_included_html.replace(/<[^>]*>/g, '').trim()}:\n`;
    document.querySelectorAll('#scope-excluded-list li .bullet-text').forEach(li => {
      emailDraft += `  [✗] ${li.textContent.trim()}\n`;
    });

    emailDraft += `\n${q.payment_terms}\n\n`;

    emailDraft += `${dict.tc_heading}:\n`;
    document.querySelectorAll('.tc-list li').forEach((li, idx) => {
      emailDraft += `${idx + 1}. ${li.textContent.trim()}\n`;
    });

    const closing = lang === 'Latvian' ? 'Ar cieņu,' : (lang === 'German' ? 'Mit freundlichen Grüßen,' : 'Best regards,');
    emailDraft += `\n${closing}\n${p.business_name || 'Smith Carpentry Ltd'}\n${p.user_phone} · ${p.user_email}\n`;

    navigator.clipboard.writeText(emailDraft).then(() => {
      showToast(dict.toast_copied_email || '📋 Formatted quote copied to clipboard as email!');
    }).catch(() => {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = emailDraft;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      showToast(dict.toast_copied_email || '📋 Formatted quote copied to clipboard as email!');
    });
  }

  // Run initial setup on load
  document.addEventListener('DOMContentLoaded', init);
})();
