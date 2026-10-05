/**
 * LUMIFLOWER INTERACTIVE ENGINE
 * Quản lý tương tác UI: Mobile drawer, Search overlay, Lightbox, Story Reader,
 * Bộ lọc danh mục, Chi tiết loài hoa động, và Phản hồi biểu mẫu.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileDrawer();
  initSearchModal();
  initNewsletter();
  initContactForm();
  initFlowerDetail();
  initFlowerFilter();
  initGalleryFilter();
  initLightbox();
  initStoryReader();
  initInteractiveAnatomy();
});

/* --------------------------------------------------------------------------
   1. HEADER SCROLL EFFECT & ACTIVE STATE
   -------------------------------------------------------------------------- */
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Highlight current nav item based on pathname
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* --------------------------------------------------------------------------
   2. MOBILE DRAWER NAVIGATION
   -------------------------------------------------------------------------- */
function initMobileDrawer() {
  const hamburgerBtn = document.querySelector('.btn-hamburger');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const overlay = document.querySelector('.backdrop-overlay');
  const closeBtn = document.querySelector('.mobile-drawer-close');

  if (!drawer || !overlay) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);
}

/* --------------------------------------------------------------------------
   3. SEARCH MODAL WITH REAL-TIME SUGGESTIONS
   -------------------------------------------------------------------------- */
function initSearchModal() {
  const searchTriggers = document.querySelectorAll('.trigger-search');
  const searchModal = document.querySelector('.search-modal');
  const overlay = document.querySelector('.backdrop-overlay');
  const searchInput = document.querySelector('#searchInput');
  const resultsContainer = document.querySelector('#searchResults');

  if (!searchModal) return;

  const openSearch = () => {
    searchModal.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (searchInput) {
      searchInput.value = '';
      setTimeout(() => searchInput.focus(), 150);
      renderSearchResults('');
    }
  };

  const closeSearch = () => {
    searchModal.classList.remove('open');
    // Only remove backdrop if mobile drawer is not open
    const drawer = document.querySelector('.mobile-nav-drawer');
    if (!drawer || !drawer.classList.contains('open')) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  searchTriggers.forEach(btn => btn.addEventListener('click', openSearch));

  const closeBtn = document.querySelector('.search-modal-close');
  if (closeBtn) closeBtn.addEventListener('click', closeSearch);

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderSearchResults(e.target.value.trim().toLowerCase());
    });
  }

  // Keyboard shortcut Esc to close
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchModal.classList.contains('open')) {
      closeSearch();
    }
  });

  function renderSearchResults(keyword) {
    if (!resultsContainer) return;
    resultsContainer.innerHTML = '';

    if (!keyword) {
      resultsContainer.innerHTML = `
        <div style="text-align: center; padding: 24px; color: var(--text-light); font-size: 0.9rem;">
          Nhập tên loài hoa (cẩm tú cầu, hoa hồng, tulip...) hoặc chủ đề bạn muốn khám phá...
        </div>
      `;
      return;
    }

    // Search in LUMI_FLOWERS
    const matchedFlowers = typeof LUMI_FLOWERS !== 'undefined' 
      ? LUMI_FLOWERS.filter(f => f.name.toLowerCase().includes(keyword) || f.meaning.toLowerCase().includes(keyword) || f.scientificName.toLowerCase().includes(keyword))
      : [];

    // Search in LUMI_ARTICLES
    const matchedArticles = typeof LUMI_ARTICLES !== 'undefined'
      ? LUMI_ARTICLES.filter(a => a.title.toLowerCase().includes(keyword) || a.category.toLowerCase().includes(keyword))
      : [];

    if (matchedFlowers.length === 0 && matchedArticles.length === 0) {
      resultsContainer.innerHTML = `
        <div style="text-align: center; padding: 28px; color: var(--text-muted); font-size: 0.9rem;">
          Không tìm thấy kết quả phù hợp với “<strong>${keyword}</strong>”. Hãy thử tìm với tên hoa khác!
        </div>
      `;
      return;
    }

    matchedFlowers.forEach(flower => {
      const item = document.createElement('a');
      item.href = `chi-tiet-hoa.html?id=${flower.id}`;
      item.className = 'search-item';
      item.innerHTML = `
        <img src="${flower.thumbImage}" alt="${flower.name}" class="search-item-thumb">
        <div class="search-item-info">
          <h5>${flower.name} <em style="font-weight: 400; font-size: 0.8rem; color: var(--text-light);">(${flower.scientificName})</em></h5>
          <span>Ý nghĩa: ${flower.meaning}</span>
        </div>
      `;
      resultsContainer.appendChild(item);
    });

    matchedArticles.forEach(article => {
      const item = document.createElement('a');
      item.href = `cau-chuyen.html?read=${article.id}`;
      item.className = 'search-item';
      item.innerHTML = `
        <div style="width: 48px; height: 48px; border-radius: 8px; background: var(--sky-blue); display: flex; align-items: center; justify-content: center; color: var(--deep-blue); flex-shrink: 0;">
          📖
        </div>
        <div class="search-item-info">
          <h5>${article.title}</h5>
          <span>Bài viết • ${article.category} • ${article.readTime}</span>
        </div>
      `;
      resultsContainer.appendChild(item);
    });
  }
}

/* --------------------------------------------------------------------------
   4. FLOWER DETAIL DYNAMIC LOADER
   -------------------------------------------------------------------------- */
function initFlowerDetail() {
  const detailContainer = document.querySelector('#flowerDetailRoot');
  if (!detailContainer || typeof LUMI_FLOWERS === 'undefined') return;

  // Get flower ID from URL parameter (default to cam-tu-cau)
  const urlParams = new URLSearchParams(window.location.search);
  const flowerId = urlParams.get('id') || 'cam-tu-cau';

  const flower = LUMI_FLOWERS.find(f => f.id === flowerId) || LUMI_FLOWERS[0];

  // Update page title
  document.title = `${flower.name} (${flower.scientificName}) – LumiFlower`;

  // Render detail hero
  const heroNameEl = document.querySelector('#detailFlowerName');
  const heroSciEl = document.querySelector('#detailScientific');
  const heroImgEl = document.querySelector('#detailHeroImage');
  const heroQuoteEl = document.querySelector('#detailQuote');
  const heroColorsEl = document.querySelector('#detailColors');
  const heroSeasonEl = document.querySelector('#detailSeason');
  const heroMeaningEl = document.querySelector('#detailMeaning');
  const heroCharEl = document.querySelector('#detailCharacteristics');
  const overviewTextEl = document.querySelector('#detailOverviewText');
  const storyTextEl = document.querySelector('#detailStoryText');

  if (heroNameEl) heroNameEl.textContent = flower.name;
  if (heroSciEl) heroSciEl.textContent = flower.scientificName;
  if (heroImgEl) {
    heroImgEl.src = flower.heroImage;
    heroImgEl.alt = flower.name;
  }
  if (heroQuoteEl) heroQuoteEl.textContent = `“${flower.quote}”`;
  if (heroColorsEl) heroColorsEl.textContent = flower.colors;
  if (heroSeasonEl) heroSeasonEl.textContent = flower.season;
  if (heroMeaningEl) heroMeaningEl.textContent = flower.meaning;
  if (heroCharEl) heroCharEl.textContent = flower.characteristics;
  if (overviewTextEl) overviewTextEl.textContent = flower.detailOverview;
  if (storyTextEl) storyTextEl.textContent = flower.story;

  // Render Facts "Bạn có biết?"
  const factsListEl = document.querySelector('#detailFactsList');
  if (factsListEl && flower.facts) {
    factsListEl.innerHTML = flower.facts.map(fact => `
      <li class="fact-item">
        <svg class="fact-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>${fact}</span>
      </li>
    `).join('');
  }

  // Render Botanical Parts
  const partsListEl = document.querySelector('#anatomyPartsList');
  if (partsListEl && flower.botanicalParts) {
    partsListEl.innerHTML = flower.botanicalParts.map((part, idx) => `
      <div class="anatomy-part-item ${idx === 0 ? 'active' : ''}" data-part="${idx}">
        <h5 class="anatomy-part-name">${part.name}</h5>
        <p class="anatomy-part-desc">${part.desc}</p>
      </div>
    `).join('');
  }

  // Render Related Flowers
  const relatedGridEl = document.querySelector('#relatedFlowersGrid');
  if (relatedGridEl) {
    const related = LUMI_FLOWERS.filter(f => f.id !== flower.id).slice(0, 3);
    relatedGridEl.innerHTML = related.map(rel => `
      <div class="flower-card">
        <div class="flower-card-media">
          <img src="${rel.thumbImage}" alt="${rel.name}">
          <span class="flower-season-badge">${rel.season}</span>
        </div>
        <div class="flower-card-body">
          <h4 class="flower-card-title">${rel.name}</h4>
          <span class="flower-card-scientific">${rel.scientificName}</span>
          <p class="flower-card-meaning">${rel.shortDesc}</p>
          <a href="chi-tiet-hoa.html?id=${rel.id}" class="btn btn-outline" style="width: 100%;">
            Xem chi tiết →
          </a>
        </div>
      </div>
    `).join('');
  }
}

/* --------------------------------------------------------------------------
   5. INTERACTIVE BOTANICAL ANATOMY HOTSPOTS
   -------------------------------------------------------------------------- */
function initInteractiveAnatomy() {
  const partItems = document.querySelectorAll('.anatomy-part-item');
  const hotspots = document.querySelectorAll('.anatomy-hotspot');

  partItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      partItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  hotspots.forEach(spot => {
    spot.addEventListener('mouseenter', () => {
      const targetIdx = spot.getAttribute('data-target');
      partItems.forEach((item, idx) => {
        if (idx == targetIdx) {
          item.classList.add('active');
          item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
          item.classList.remove('active');
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   6. FLOWER LIBRARY FILTER (CAC-LOAI-HOA.HTML)
   -------------------------------------------------------------------------- */
function initFlowerFilter() {
  const filterTabs = document.querySelectorAll('.flower-filter-tab');
  const flowerGrid = document.querySelector('#flowerLibraryGrid');

  if (!flowerGrid || typeof LUMI_FLOWERS === 'undefined') return;

  function renderFlowers(categoryId = 'all') {
    flowerGrid.innerHTML = '';
    const filtered = categoryId === 'all'
      ? LUMI_FLOWERS
      : LUMI_FLOWERS.filter(f => f.category === categoryId);

    if (filtered.length === 0) {
      flowerGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
          Đang cập nhật thêm thông tin loài hoa thuộc danh mục này trong các chuyên đề kế tiếp.
        </div>
      `;
      return;
    }

    filtered.forEach(flower => {
      const card = document.createElement('div');
      card.className = 'flower-card';
      card.innerHTML = `
        <div class="flower-card-media">
          <img src="${flower.thumbImage}" alt="${flower.name}" loading="lazy">
          <span class="flower-season-badge">${flower.season}</span>
        </div>
        <div class="flower-card-body">
          <h4 class="flower-card-title">${flower.name}</h4>
          <span class="flower-card-scientific">${flower.scientificName}</span>
          <p class="flower-card-meaning"><strong>Ý nghĩa:</strong> ${flower.meaning}</p>
          <a href="chi-tiet-hoa.html?id=${flower.id}" class="btn btn-soft" style="width: 100%; margin-top: auto;">
            Khám phá loài hoa →
          </a>
        </div>
      `;
      flowerGrid.appendChild(card);
    });
  }

  // Initial render
  renderFlowers('all');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-category');
      renderFlowers(cat);
    });
  });
}

/* --------------------------------------------------------------------------
   7. GALLERY FILTER & MASONRY (TRUNG-BAY.HTML)
   -------------------------------------------------------------------------- */
function initGalleryFilter() {
  const filterTabs = document.querySelectorAll('.gallery-filter-tab');
  const galleryGrid = document.querySelector('#galleryMasonryGrid');

  if (!galleryGrid || typeof LUMI_GALLERY === 'undefined') return;

  function renderGallery(cat = 'all') {
    galleryGrid.innerHTML = '';
    const items = cat === 'all'
      ? LUMI_GALLERY
      : LUMI_GALLERY.filter(item => item.category === cat);

    items.forEach(item => {
      const el = document.createElement('div');
      el.className = 'gallery-item';
      el.setAttribute('data-image', item.image);
      el.setAttribute('data-title', item.title);
      el.setAttribute('data-desc', item.desc);
      el.innerHTML = `
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="gallery-overlay">
          <h4 class="gallery-overlay-title">${item.title}</h4>
          <p class="gallery-overlay-desc">${item.desc}</p>
        </div>
      `;
      galleryGrid.appendChild(el);
    });

    // Re-bind lightbox clicks on newly added gallery items
    bindLightboxTriggers();
  }

  // Initial render
  renderGallery('all');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-gallery-cat');
      renderGallery(cat);
    });
  });
}

/* --------------------------------------------------------------------------
   8. LIGHTBOX VIEWER
   -------------------------------------------------------------------------- */
function initLightbox() {
  const modal = document.querySelector('.lightbox-modal');
  if (!modal) return;

  const closeBtn = document.querySelector('.lightbox-close');
  const imgEl = document.querySelector('#lightboxImage');
  const titleEl = document.querySelector('#lightboxTitle');
  const descEl = document.querySelector('#lightboxDesc');

  const closeLightbox = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeLightbox();
    }
  });

  window.openLightbox = (imgSrc, title, desc) => {
    if (imgEl) imgEl.src = imgSrc;
    if (titleEl) titleEl.textContent = title || '';
    if (descEl) descEl.textContent = desc || '';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  bindLightboxTriggers();
}

function bindLightboxTriggers() {
  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-image');
      const title = item.getAttribute('data-title');
      const desc = item.getAttribute('data-desc');
      if (window.openLightbox) {
        window.openLightbox(src, title, desc);
      }
    });
  });
}

/* --------------------------------------------------------------------------
   9. STORY READER MODAL (CAU-CHUYEN.HTML)
   -------------------------------------------------------------------------- */
function initStoryReader() {
  const modal = document.querySelector('.story-reader-modal');
  const overlay = document.querySelector('.backdrop-overlay');
  const closeBtn = document.querySelector('.story-reader-close');

  if (!modal || !overlay) return;

  const closeReader = () => {
    modal.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeReader);
  overlay.addEventListener('click', closeReader);

  window.openStoryReader = (articleId) => {
    if (typeof LUMI_ARTICLES === 'undefined') return;
    const article = LUMI_ARTICLES.find(a => a.id === articleId);
    if (!article) return;

    const titleEl = document.querySelector('#storyReaderTitle');
    const metaEl = document.querySelector('#storyReaderMeta');
    const bodyEl = document.querySelector('#storyReaderBody');

    if (titleEl) titleEl.textContent = article.title;
    if (metaEl) metaEl.innerHTML = `Chuyên đề: <strong>${article.category}</strong> • ${article.date} • ${article.readTime}`;
    if (bodyEl) bodyEl.innerHTML = article.content;

    modal.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  // Check URL param if user navigated to direct article
  const urlParams = new URLSearchParams(window.location.search);
  const readId = urlParams.get('read');
  if (readId) {
    setTimeout(() => window.openStoryReader(readId), 200);
  }
}

/* --------------------------------------------------------------------------
   10. NEWSLETTER & CONTACT FORM HANDLERS
   -------------------------------------------------------------------------- */
function initNewsletter() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (!input || !input.value.trim()) return;

      showToast(
        "Đăng ký thành công!",
        `Cảm ơn bạn đã quan tâm. Bản tin chia sẻ kiến thức về hoa sẽ được gửi đến ${input.value.trim()}.`
      );
      input.value = '';
    });
  });
}

function initContactForm() {
  const form = document.querySelector('#contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('#contactName')?.value.trim();
    const email = form.querySelector('#contactEmail')?.value.trim();

    if (!name || !email) {
      alert("Vui lòng điền họ tên và email hợp lệ.");
      return;
    }

    showToast(
      "Đã gửi tin nhắn!",
      `Cảm ơn bạn ${name}. LumiFlower đã nhận được tin nhắn và sẽ phản hồi qua email ${email} sớm nhất.`
    );
    form.reset();
  });
}

/* --------------------------------------------------------------------------
   11. TOAST NOTIFICATION UTILITY
   -------------------------------------------------------------------------- */
function showToast(title, message) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    toast.innerHTML = `
      <svg class="toast-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <div class="toast-text">
        <h6 id="toastTitle">${title}</h6>
        <p id="toastMessage">${message}</p>
      </div>
    `;
    document.body.appendChild(toast);
  } else {
    document.querySelector('#toastTitle').textContent = title;
    document.querySelector('#toastMessage').textContent = message;
  }

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}
