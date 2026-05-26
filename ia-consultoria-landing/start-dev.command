#!/bin/zsh -l
# Duplo clique no Finder — -l carrega .zprofile / nvm / fnm como no Terminal normal.
cd "$(dirname "$0")" || exit 1

export PATH="/usr/local/bin:/opt/homebrew/bin:$PATH"

pause() {
  echo ""
  read -r "reply?Pressiona Enter para fechar esta janela..."
}

echo "Pasta: $(pwd)"
echo ""

if ! command -v npm >/dev/null 2>&1; then
  echo "ERRO: 'npm' não foi encontrado."
  echo "Instala Node em https://nodejs.org ou configura nvm/fnm no ~/.zprofile."
  pause
  exit 1
fi

echo "Node: $(command -v node)  ($(node -v))"
echo "npm:  $(command -v npm)  ($(npm -v))"
echo ""

if [[ ! -d node_modules ]]; then
  echo "A instalar dependências (npm install)..."
  npm install
  echo ""
fi

echo "A iniciar o servidor Vite..."
echo "Abre no browser: http://localhost:5173/"
echo "(Ctrl+C para parar o servidor)"
echo ""
npm run dev || { echo ""; echo "O servidor terminou com erro."; pause; exit 1 }
