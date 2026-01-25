import { translations, type Language } from '../i18n/translations';

class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  // On surveille l'attribut "lang"
  static get observedAttributes() { return ['lang']; }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    // On récupère la langue actuelle (fr par défaut)
    const lang = (this.getAttribute('lang') || 'fr') as Language;
    const t = translations[lang];

    this.shadowRoot!.innerHTML = `
      <style>
        nav { display: flex; gap: 20px; background: #333; padding: 1rem; }
        a { color: white; text-decoration: none; font-family: sans-serif; }
      </style>
      <nav>
        <a href="/${lang}/index.html">${t.home}</a>
        <a href="/${lang}/contact.html">${t.contact}</a>
      </nav>
    `;
  }
}

customElements.define('app-header', AppHeader);