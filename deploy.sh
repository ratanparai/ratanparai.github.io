#! /bin/bash

set -e

DEPLOY_REPO="git@github.com:ratanparai/ratanparai.github.io.git"

function main {
	clean
	get_current_site
	build_site
    deploy
}

function clean { 
	echo "cleaning _site folder"
	if [ -d "_site" ]; then rm -Rf _site; fi 
}

function get_current_site { 
	echo "getting latest site"
	git clone --depth 1 $DEPLOY_REPO _site 
}

function build_site { 
	echo "building site"
	bundle exec jekyll build 
}

function deploy {
	echo "deploying changes"

	cd _site
	git add -A
	git status
	git commit -m "Update website"
	git push $DEPLOY_REPO master:master
}

main