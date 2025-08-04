# Makefile for Jekyll site deployment

.PHONY: clean get_current_site build_site deploy all

clean:
	@echo "cleaning _site folder"
	@if [ -d "_site" ]; then rm -Rf _site; fi

get_current_site: clean
	@echo "getting latest site"
	@git clone --depth 1 git@github.com:ratanparai/ratanparai.github.io.git _site

build_site:
	@echo "building site"
	@bundle exec jekyll build

deploy: build_site
	@echo "deploying changes"
	@cd _site && \
		git add -A && \
		git status && \
		git commit -m "Update website" && \
		git push git@github.com:ratanparai/ratanparai.github.io.git master:master

all: clean get_current_site build_site deploy clean
