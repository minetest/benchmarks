#!/bin/bash -eux

git ls-remote "https://github.com/${GITHUB_REPOSITORY_OWNER}/minetest" refs/heads/master | awk '{print $1}' > minetest.rev

git add minetest.rev

if [ -n "${GITHUB_ENV:-}" ]; then
  echo "MINETEST_REV=$(cat minetest.rev)" >> "$GITHUB_ENV"
fi
