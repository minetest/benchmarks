#!/bin/bash -eux

git ls-remote "https://github.com/${GITHUB_REPOSITORY_OWNER}/luanti" refs/heads/master | awk '{print $1}' > luanti.rev

git add luanti.rev

if [ -n "${GITHUB_ENV:-}" ]; then
  echo "LUANTI_REV=$(cat luanti.rev)" >> "$GITHUB_ENV"
fi
