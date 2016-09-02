'use strict';

module.exports = function(app) {
  app.directive('shNoteForm', function() {
    return {
      restrict: 'EAC',
      template: require('./note-form-template.html'),
      controller: 'NoteFormController',
      controllerAs: 'nc',
      bindToController: true,
      scope: {
        thing: '@'
      }
    };
  });
};
