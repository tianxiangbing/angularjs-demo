'use strict';
(function() {
	var jasmineEnv = jasmine.getEnv();
	var htmlReporter = new jasmine.HtmlReporter();
	jasmineEnv.addReporter(htmlReporter);
	jasmineEnv.specFilter = function(spec) {
		return htmlReporter.specFilter(spec);
	};
	window.onload = function() {
		jasmineEnv.execute();
	};
})();
describe("This is an exmaple suite", function() {
	it("contains spec with an expectation", function() {
		expect(true).toBe(true);
		expect(false).toBe(false);
		expect(false).not.toBe(true);
	});
});