describe('myActiveTabs', function() {

  beforeEach(module('aseree'));

  var scope,compile;

  beforeEach(inject(function($rootScope,$compile) {
    scope = $rootScope.$new();
    compile = $compile;
  }));

  it('should have a class named active', function($rootScope, $compile) {

    /* 
    To test your directive, you need to create some html that would use your directive,
    send that through compile() then compare the results.

    var element = compile('<div mydirective name="name">hi</div>')(scope);
    expect(element.text()).toBe('hello, world');
    */

    var element = compile('<li my-active-tabs>hi</li>')(scope);
    element.click();
    expect(element.hasClass("active")).toBe(true);

  });
});