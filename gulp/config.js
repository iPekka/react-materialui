var src = './src',
  dest = './build';

module.exports = {
  browserSync: {
    server: {
      baseDir: [dest, src]
    },
    files: [
      dest + '/**'
    ]
  },
  markup: {
    src: src + "/www/**/*.*",
    dest: dest
  },
  browserify: {
    entries: src + "/app/app.js",
    dest: dest,
    outputName: 'app.js'
  }
}
