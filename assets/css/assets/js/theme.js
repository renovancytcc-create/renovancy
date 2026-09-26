// theme.js
// Mesmo script que já existia dentro de <script> em cada HTML,
// agora em arquivo único referenciado pelos dois idiomas.
(function () {
    const THEME_LINK_ID = 'theme-style';
    const TOGGLE_ID = 'theme-toggle';
    const LIGHT = 'assets/css/main.css';
    const DARK = 'assets/css/main_2.css';
    const STORAGE_KEY = 'renovancy-theme';
  
    const linkEl = document.getElementById(THEME_LINK_ID);
    const toggleBtn = document.getElementById(TOGGLE_ID);
  
    if (!linkEl) {
      console.warn('theme-style link não encontrado. Criando fallback temporário.');
      const head = document.head || document.getElementsByTagName('head')[0];
      const newLink = document.createElement('link');
      newLink.id = THEME_LINK_ID;
      newLink.rel = 'stylesheet';
      newLink.href = LIGHT;
      head.appendChild(newLink);
    }
  
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const effectiveLink = document.getElementById(THEME_LINK_ID);
      effectiveLink.href = saved === 'dark' ? DARK : LIGHT;
    } catch (e) {
      console.warn('Erro ao acessar localStorage para tema:', e);
    }
  
    function updateToggleUI() {
      const effectiveLink = document.getElementById(THEME_LINK_ID);
      if (!toggleBtn || !effectiveLink) return;
      toggleBtn.textContent = effectiveLink.href.includes('main_2.css') ? '☀️' : '🌙';
    }
    updateToggleUI();
  
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function () {
        const effectiveLink = document.getElementById(THEME_LINK_ID);
        if (!effectiveLink) return;
        const isDark = effectiveLink.href.includes('main_2.css');
        if (isDark) {
          effectiveLink.href = LIGHT;
          try { localStorage.setItem(STORAGE_KEY, 'light'); } catch (e) {}
          toggleBtn.textContent = '🌙';
        } else {
          effectiveLink.href = DARK;
          try { localStorage.setItem(STORAGE_KEY, 'dark'); } catch (e) {}
          toggleBtn.textContent = '☀️';
        }
        setTimeout(function () { window.dispatchEvent(new Event('resize')); }, 250);
      });
    }
  
    window.addEventListener('load', function () {
      try {
        const p = document.getElementById('preloader');
        if (p && p.parentNode) p.parentNode.removeChild(p);
      } catch (e) {
        console.warn('Erro ao remover preloader:', e);
      }
    });
  
    if (document.readyState === 'complete') {
      try {
        const p = document.getElementById('preloader');
        if (p && p.parentNode) p.parentNode.removeChild(p);
      } catch (e) {}
    }
  })();