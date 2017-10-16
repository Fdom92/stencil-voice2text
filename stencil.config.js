exports.config = {
  namespace: 'voice2text',
  generateDistribution: true,
  bundles: [
    { components: ['st-voice2text'] }
  ],
  copy: [
    { src: 'assets', dest: 'assets' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
