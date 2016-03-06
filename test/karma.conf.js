module.exports = function(config) {
  config.set({
    basePath: '..',
    autoWatch: true,
    frameworks: ['mocha', 'chai', 'detectBrowsers'],
    files: [
      'js/todoModel.js',
      'js/utils.js',
      'test/unit-tests.js'
    ],
    plugins: [
        'karma-mocha',
        'karma-chai',
        'karma-chrome-launcher',
        'karma-firefox-launcher',
        'karma-ie-launcher',
        'karma-safari-launcher',
        'karma-detect-browsers'
    ],

    detectBrowsers: {
        enabled: true,
        usePhantomJS: false
    },

    singleRun: true,
    reporters: ['dots']
  });
};
