module.exports = {
  root: "build",
  webpack: {
    umd: {
      entry: "./js/plupload.dev.js",
      library: "Plupload",
      filename: 'plupload.js'
    }
  }
};
