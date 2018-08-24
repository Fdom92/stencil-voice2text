exports.config = {
  namespace: 'voice2text',
  bundles: [
    { components: ['wc-voice2text'] }
  ],
  outputTargets: [
    { type: 'www' },
    { type: 'dist' }
  ]
};