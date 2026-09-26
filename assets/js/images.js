// apply-images.js
// Aplica os caminhos definidos em site-data.js a qualquer elemento
// marcado com data-img="chave". Precisa ser carregado DEPOIS de site-data.js.
(function () {
    document.addEventListener("DOMContentLoaded", function () {
      if (!window.siteImages) {
        console.warn("site-data.js não foi carregado antes de apply-images.js");
        return;
      }
      document.querySelectorAll("[data-img]").forEach(function (el) {
        var key = el.getAttribute("data-img");
        var path = window.siteImages[key];
        if (path) {
          el.setAttribute("src", path);
        } else {
          console.warn('Chave de imagem não encontrada em siteImages: "' + key + '"');
        }
      });
    });
  })();