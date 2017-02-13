# __BASIC WEBAPP BOILERPLATE__

|[![bitHound Overall Score](https://www.bithound.io/github/ibbatta/grunt-frontend-boilerplate/badges/score.svg)](https://www.bithound.io/github/ibbatta/grunt-frontend-boilerplate)|[![Build Status](https://travis-ci.org/ibbatta/grunt-frontend-boilerplate.svg?branch=master)](https://travis-ci.org/ibbatta/grunt-frontend-boilerplate)|
|:---:|:---:|


>This repo contains a simplified boilerplate to start a project with __grunt__, __angular__ and __bootstrap__ in order to make easier and faster the template's developing.

Developed following the best practice for Angular.js ([John Papa angular-styleguide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md))

---

## __What this boilerplate contains__

<img src="./github_readme_assets/logo-angular.png" height="55">&nbsp;&nbsp;
<img src="./github_readme_assets/logo-uibootstrap.png" height="55">&nbsp;&nbsp;
<img src="./github_readme_assets/logo-bootstrap.png" height="55">&nbsp;&nbsp;
<img src="./github_readme_assets/logo-sass.png" height="55">&nbsp;&nbsp;
<img src="./github_readme_assets/logo-bower.png" height="55">&nbsp;&nbsp;
<img src="./github_readme_assets/logo-npm.png" height="55">&nbsp;&nbsp;
<img src="./github_readme_assets/logo-grunt.png" height="55">&nbsp;&nbsp;
<img src="./github_readme_assets/logo-jasmine.png" height="55">&nbsp;&nbsp;
<img src="./github_readme_assets/logo-karma.png" height="55">&nbsp;&nbsp;
<img src="./github_readme_assets/logo-yarn.png" height="55">&nbsp;&nbsp;
<img src="./github_readme_assets/logo-es6.png" height="55">&nbsp;&nbsp;

- [x] Grunt automations
- [x] Javascript linter
- [x] Bootstrap html linter
- [x] Sass / Scss compiler
- [x] Images optimization
- [x] Karma / Jasmine tests
- [x] Yarn and Bower as package managers
- [x] ES6 support


---

## __Set up__

Before cloning the repo **be sure** you have installed:

* [NodeJs & npm](http://nodejs.org/download/) (version >= 6.x and <= 6.9.x)
* [Yarn](https://yarnpkg.com/en/docs/install) (version >= 0.17.x)
* [Grunt](http://gruntjs.com/getting-started) (latest version)
* [Bower](http://bower.io/) (latest version)
* [Sass](http://sass-lang.com/install) (latest version)
* [Karma](https://karma-runner.github.io) (version >= 1.3.x)

Then:

- Choose a folder project in your system and switch in `cd [folder path]`
- Clone the repo in your folder `git clone https://github.com/ibbatta/grunt-frontend-boilerplate.git`

---

## __Installation__

From the directory of the project run `yarn && bower install`

---

## __Usage__

Once everything is installed, use Grunt or Yarn from the terminal to start the build tasks.<br>
The package.json exposes these tasks:

- `yarn start` (start the project locally)
- `yarn test` (start test and watch for changes)
- `yarn build` (prepare the build pack)
- `yarn gh-page` (prepare the build pack and push it to the __gh-pages__ branch to show a preview inside github - __change with your data__)

The Gruntfile.js exposes these tasks:

- `grunt clean` (clean / remove tmp, dist and bower's component folders)


---

## __Todo__

- [ ] Code optimization
- [ ] Try to create a simply blog (i.e. wordpress) with __node__, __express__, a __database__ (maybe firebase?) and __angular__


---

## __Contributing__

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

---


## __Credits__

- [Maurizio Battaghini](https://github.com/ibbatta) (template develop)
- [Aristeidis Bampakos](https://github.com/bampakoa) (tests integration and inspiration)

---


### __Troubleshootings__ ###

This is just a personal boilerplate create for demonstration purpose only, it may or may not be a good fit for your project(s).

---


> GitHub [@ibbatta](https://github.com/ibbatta) &nbsp;&middot;&nbsp;
> Twitter [@battago](https://twitter.com/battago)
