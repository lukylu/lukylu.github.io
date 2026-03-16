#!/bin/bash
# build-deploy.sh

# Ir a la carpeta del proyecto Angular
cd user-app || exit

# Build producción apuntando a ../docs
ng build --configuration production --output-path ../docs --base-href ./

# Mover contenido de docs/browser a docs/
if [ -d ../docs/browser ]; then
  mv ../docs/browser/* ../docs/
  rm -rf ../docs/browser
fi

# Crear archivo .nojekyll
touch ../docs/.nojekyll

echo "Build completado y listo en /docs"