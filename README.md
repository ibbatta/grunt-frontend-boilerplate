# __BASIC WEBAPP BOILERPLATE__

|[![bitHound Overall Score](https://www.bithound.io/github/ibbatta/grunt-frontend-boilerplate/badges/score.svg)](https://www.bithound.io/github/ibbatta/grunt-frontend-boilerplate)|[![Build Status](https://travis-ci.org/ibbatta/grunt-frontend-boilerplate.svg?branch=master)](https://travis-ci.org/ibbatta/grunt-frontend-boilerplate)|
|:-:|:-:|


>This repo contains a simplified boilerplate to start a project with __grunt__, __angular__ and __bootstrap__ in order to make easier and faster the template's developing

Developed following the best practice for Angular.js (https://github.com/johnpapa/angular-styleguide)

---

## __What this boilerplate contains__

<img src="./github_readme_assets/logo-angular.png" height="64">&nbsp;&nbsp;
<img src="./github_readme_assets/logo-uibootstrap.png" height="64">&nbsp;&nbsp;
<img src="./github_readme_assets/logo-bootstrap.png" height="64">&nbsp;&nbsp;
<img src="./github_readme_assets/logo-sass.png" height="64">&nbsp;&nbsp;
<img src="./github_readme_assets/logo-bower.png" height="64">&nbsp;&nbsp;
<img src="./github_readme_assets/logo-npm.png" height="64">&nbsp;&nbsp;
<img src="./github_readme_assets/logo-grunt.png" height="64">&nbsp;&nbsp;
<img src="./github_readme_assets/logo-jasmine.png" height="64">&nbsp;&nbsp;
<img src="./github_readme_assets/logo-karma.png" height="64">&nbsp;&nbsp;

---

## __Set up__

Before cloning the repo **be sure** you have installed:

* [NodeJs & npm](http://nodejs.org/download/) (version >= 6)
* [Grunt](http://gruntjs.com/getting-started) (latest version)
* [Bower](http://bower.io/) (latest version)
* [Sass](http://sass-lang.com/install) (latest version)

- Choose a folder project in your system and switch in `cd [folder path]`
- Clone the repo in your folder `git clone https://github.com/ibbatta/grunt-frontend-boilerplate.git`

---

## __Installation__

To install the npm repositories and bower packages run (from the directory of the project): `npm install && bower install`

---

## __Usage__

Once everything is installed, use grunt from the terminal to start the build tasks.
The Gruntfile expose these tasks:

- `npm start` (start the project locally)
- `npm run build` (minify js, html and css files)
- `grunt clean` (clean / remove tmp, dist and bower's component folders)

####__How to create spritesheets__

This boilerplate contains a grunt's task to create a sprit automamatically:
- insert selected .png inside the `app/assets/spritesheet` folder.
- when you run the task `grunt sprite` the boilerplate generates a css file and a png sprite inside the .tmp folder (or basically when you run `npm start` command).
- to use a specific image inside the sprite, just use the css class `.-sprite_icon` + image name.

---

## __Todo__

- [x] Add Karma / Jasmine tests
- [ ] Manage a spinner / loading for page routing


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

This is just my personal boilerplate, it may or may not be a good fit for your project(s).

---
