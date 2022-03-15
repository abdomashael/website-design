# WEBSITE DESIGN
This website design for task 

# DEMO
[https://priceless-khorana-e67a21.netlify.app/](https://priceless-khorana-e67a21.netlify.app/)

## Features

* **Live reloading** <br> browser update after changes
* **Automatically optimizes** entry files <br> concatenate, minify and inject output files to HTML
* **[Sass](https://sass-lang.com/) for stylesheets** <br> with [the 7-1 Pattern](https://sass-guidelin.es/#the-7-1-pattern)
* **Modern JavaScript** <br> ES6 modules-based code linting by [ESLint](https://eslint.org/)
* Older **browsers support** 
  * add vendor prefixes in CSS with [Autoprefixer](https://autoprefixer.github.io/)
  * convert ES6+ code into a backwards compatible with [Babel](https://babeljs.io/)
* Includes:
  * [jQuery](http://jquery.com/) - JavaScript library
* sourceMaps
* and more...

## Theme development

[Node.js](http://nodejs.org/) is the only required dependency to work with *HTML Starter*.


#### Installation

1. Install [Node.js](http://nodejs.org/) (installation depends on your system). After finishing, you will be able to 
check the version number using `node -v` and `npm -v` commands 
([npm is distributed with Node.js](https://www.npmjs.com/get-npm)).
2. Clone the repo 
3. Open folder  and install a packages via `npm install` command. 

Now you have everything you need to run the build process.

#### Build commands

* `npm run start` ─ compile assets when file changes are made, start server session
* `npm run build` ─ compile and optimize (the files in your assets directory) for production

## Structure

Shorten directories and files structure which you'll see after build: 

```shell
html-starter-bs4-webpack/
├── assets/                 # template assets
│   ├── fonts/              # place template fonts files here
│   ├── html/               # template HTML files
│   │  ├── partials/        # common parts of HTML code
│   │  │  └── [...]
│   │  └── homepage1.html       # default HTML skeleton
│   ├── images/             # template images files
│   │  └── [...]
│   ├── scripts/            # template javascript files
│   │  ├── vendor/          # necessary parts of frameworks and libs
│   │  │  └── [...]         # jQuery
│   │  └── main.js          # main javascript file that references JS source files
│   ├── scss/               # template styles
│   │  ├── [...]            # 7-1 Sass architecture folders
│   │  └── main.scss        # main Sass file that references scss source files
│   ├── index.js            # entry point of template
│   └── [...]               # miscellaneous
├── dist/                   # output folder with production build (don't edit)
│   ├── css/                # output styles
│   ├── images/             # output images
│   ├── js/                 # output javascripts
│   ├── index.html          # homepage
│   └── [...]               # miscellaneous
├── node_modules/           # Node.js packages (don't edit)
│   └── [...]
├── .babelrc                # Babel configuration file
├── .eslintrc.js            # ESLint configuration file
├── package.json            # Node.js dependencies and scripts
├── webpack.config.js       # Webpack configuration file
├── package-lock.json       # Node.js dependencies lock file (don't edit)
└── [...]                   # other...
```

# NOTE
This Repo structure and webpack build basically on [HTML Starter Webpack]((https://github.com/cichy380/html-starter-bs4-webpack) with some custom changes
