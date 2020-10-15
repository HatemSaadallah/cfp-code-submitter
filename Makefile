buildanddeploy:
	yarn build
	firebase deploy
	chromium https://cfp-code-submitter.web.app/
build:
	yarn build
deploy:
	yarn deploy

upload:
	git add .
	git commit -m "automated commit"
	git push

