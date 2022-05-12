#!/bin/bash -eux

git ls-remote "https://github.com/${GITHUB_REPOSITORY_OWNER}/minetest" refs/heads/master | awk '{print $1}' > minetest.rev
git ls-remote "https://github.com/${GITHUB_REPOSITORY_OWNER}/irrlicht" refs/heads/master | awk '{print $1}' > irrlicht.rev

git add minetest.rev irrlicht.rev

if [ -n "${GITHUB_ENV:-}" ]; then
  echo "MINETEST_REV=$(cat minetest.rev)" >> "$GITHUB_ENV"
  echo "IRRLICHT_REV=$(cat irrlicht.rev)" >> "$GITHUB_ENV"
fi
