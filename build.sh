#!/usr/bin/env bash
# Cloudflare build step: download a fixed Hugo version, then build the site
# into public/. Cloudflare runs this on every push (build command: ./build.sh).
#
# Settings it reads (Worker → Settings → Build → Variables and secrets):
#   BASE_URL      Optional. Overrides baseURL from hugo.toml.
#   HUGO_VERSION  Optional. The Hugo version to download (default below).
set -euo pipefail

HUGO_VERSION="${HUGO_VERSION:-0.169.0}"

cd "$(dirname "$0")"

tmp="$(mktemp -d)"
echo "Downloading Hugo ${HUGO_VERSION}..."
curl -fsSL "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_linux-amd64.tar.gz" \
  | tar -xz -C "$tmp" hugo
"$tmp/hugo" version

"$tmp/hugo" --minify --cleanDestinationDir ${BASE_URL:+--baseURL "$BASE_URL"}
