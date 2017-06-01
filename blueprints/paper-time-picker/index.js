/* eslint-env node */
module.exports = {
  afterInstall: function() {
    return this.addPackagesToProject([
      {name: 'ember-paper'},
      {name: 'ember-moment'},
      {name: 'ember-timepicker'}
    ]);
  }
};
