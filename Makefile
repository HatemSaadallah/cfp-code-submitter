buildanddeploy:
	git pull
	git add .
	git commit -m "automated upload"
	git push
	yarn build
	firebase deploy
	chromium https://cfp-code-submitter.web.app/
build:
	yarn build
deploy:
	yarn deploy
