#!/usr/bin/env bash
# Build the site and upload it to the server.
# Usage:  ./deploy.sh
# Override defaults with env vars, e.g.  DEPLOY_HOST=deploy@203.0.113.5 ./deploy.sh
set -euo pipefail

DEPLOY_HOST="${DEPLOY_HOST:-deploy@your-server}"
DEPLOY_DIR="${DEPLOY_DIR:-/var/www/site}"

cd "$(dirname "$0")"

echo "Building site..."
hugo --minify --cleanDestinationDir

echo "Uploading to ${DEPLOY_HOST}:${DEPLOY_DIR} ..."
rsync -avz --delete public/ "${DEPLOY_HOST}:${DEPLOY_DIR}/"

echo "Done."
