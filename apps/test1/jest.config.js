module.exports = {
  name: 'test1',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/test1',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
