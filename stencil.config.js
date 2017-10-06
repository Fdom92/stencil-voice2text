exports.config = {
  namespace: 'voice2text',
  generateDistribution: true,
  bundles: [
    { components: ['st-voice2text'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
