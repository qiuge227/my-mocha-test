import add from '../src/add.js';
import chai  from 'chai';

let expect = chai.expect;

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

如果单元测试添加了mocha.opts
可以自直接
mocha

但是对于mochawesome，这种方法无效


编译es6
../node_modules/mocha/bin/mocha --compilers js:babel-core/register
 */