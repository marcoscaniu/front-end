'use strict';

describe('Controller: ComentariosCtrl', function () {

  // load the controller's module
  beforeEach(module('sApp'));

  var ComentariosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ComentariosCtrl = $controller('ComentariosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ComentariosCtrl.awesomeThings.length).toBe(3);
  });
});
