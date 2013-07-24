var expect   = require('expect.js'),
		Dota2Api = require('../lib/dota2api.js'),
		dota     = new Dota2Api('830F9D2CE8476B24E02F386E2694972C');


describe('test internals methods', function() {
	it('should be ok', function() {
		expect(dota).to.be.ok();
	});

	it('should return string', function() {
		expect(dota.param(['foo', 'bar'], ['1', '2'])).to.be.a('string');
	});

	it('should return specified value', function() {
		expect(dota.param(['foo', 'bar'], ['1', '2'])).to.eql('?foo=1&bar=2');
	});
});