# Gulp Example

Keep a record of typical gulp file for reference.

## Installation

- `npm init` to init your repo
- `sudo npm install -g gulp`
- `npm install --save-dev gulp`

## Gulpfile

#### Tasks

- lint javascirpt
- compile sass
- concatenate javascript files
- minify and rename concatenated files

#### install required plugins

```
npm install jshint gulp-jshint jshint-stylish gulp-sass gulp-concat gulp-uglify gulp-rename --save-dev 
```

plugins

- gulp-util
- gulp-jshint
- gul-sass
- gulp-concat
- gulp-uglify
- gulp-rename
- gulp-sourcemaps
- ...

#### gulpfile

gulp only has 5 methods

- task
- run
- watch
- src: points to the files we want to use
- dest: points to the output folder

These are all you will need to write your tasks.

`task` arguments are `name`, `deps` and `fn`.

```
gulp.task('mytask', function() {
  //do stuff
});

gulp.task('dependenttask', ['mytask'], function() {
  //do stuff after 'mytask' is done.
});
```

## Run

`gulp` will run everything we have defined in `default` task.

`gulp <task>` will run specific task

## Recommendation from "gulp for beginners"

For development:

- Using `Autoprefixer` to write vendor-free CSS code
- Adding `Sourcemaps` for easier debugging
- Creating Sprites with `sprity`
- Compiling only files that have changed with `gulp-changed`
- Writing ES6 with `Babel` or Traceur
- Modularizing Javascript files with `Browserify`, `webpack`, or `jspm`
- Modularizing HTML with template engines like `Handlebars` or `Swig`
- Splitting the gulpfile into smaller files with `require-dir`
- Generating a Modernizr script automatically with `gulp-modernizr`

For optimization:

- Removing unused CSS with `unCSS`
- Further optimizing CSS with `CSSO`
- Generating inline CSS for performance with `Critical`

For Test

- `gulp-jasmine`

## References

- [automate your tasks with gulp](https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js)
- [gulp for beginners](https://css-tricks.com/gulp-for-beginners/)
- [gulp tutorial](https://github.com/kogakure/gulp-tutorial)
