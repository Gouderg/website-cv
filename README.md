# CV website

Idée pour optimiser les perfs :

```bash
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install Minifier
        run: npm install -g clean-css-cli

      - name: Build CSS
        # On crée un dossier 'public' pour préparer ce qui sera envoyé sur gh-pages
        run: |
          mkdir public
          cp index.html public/
          # On fusionne les 6 CSS en un seul dans le dossier public
          cleancss -o public/style.min.css css/*.css 

      - name: Update HTML links
        # Cette ligne magique supprime les anciens <link> et injecte le nouveau
        run: |
          # 1. On supprime toutes les lignes contenant .css dans l'index.html du dossier public
          sed -i '/<link.*\.css/d' public/index.html
          # 2. On injecte le nouveau lien avant la balise </head>
          sed -i 's|<\/head>|<link rel="stylesheet" href="style.min.css">\n<\/head>|' public/index.html

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: public # On déploie uniquement le contenu du dossier public
          branch: gh-pages # Vers la branche gh-pages
```