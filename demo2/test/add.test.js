var add = require('../src/add.js');
var expect = require('chai').expect;

describe('加法函数测试', function(){
	it('1加1等于2', function(){
		expect(add(1,1)).to.be.equal(2);
	});

	it('任何数加0等于自身', function(){
		expect(add(1,0)).to.be.equal(1);
	});
});

// mocha
// mocha --recursive
/*
$ mocha spec/{my,awesome}.js
$ mocha test/unit/*.js

../node_modules/.bin/mocha --reporter mochawesome
使用内部安装的版本
 */