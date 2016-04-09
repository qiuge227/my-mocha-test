var add = require('./add.js');
var expect = require('chai').expect;

describe('加法函数测试', function(){
	it('1 加 1 应该等于2', function(){
		expect(add(1, 1)).to.be.equal(2);
	})
});


/*
// 相等或不相等
expect(4 + 5).to.be.equal(9);
expect(4 + 5).to.be.not .equal(10);
expect(foo).to.be.deep.equal({bar: 'baz'});

// 布尔值为true
expect('evething').to.be.ok;
expect(false).to.not.be.ok;

// typeof
expect('test').to.be.a('string');
expect({foo: 'bar'}).to.be.an('object');
expect(foo).to.be.an.instanceof(Foo);

// include
expect([1,2]).to.include(2);
expect('footer').to.contain('foo');
expect({foo: 'bar', hello: 'universe'}).to.include.keys('foo');

// empty
expect([]).to.be.empty;
expect('').to.be.empty;
expect({}).to.be.empty;

//match
expect('foobar').to.match(/^foo/);
 */
