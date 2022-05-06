#!/bin/bash -eux

git ls-remote "https://github.com/${GITHUB_REPOSITORY_OWNER}/minetest" refs/heads/master | awk '{print $1}' > minetest.rev
git ls-remote "https://github.com/${GITHUB_REPOSITORY_OWNER}/irrlicht" refs/heads/master | awk '{print $1}' > irrlicht.rev

git add minetest.rev irrlicht.rev
