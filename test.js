/*global describe:true, it:true, before:true, after:true */

var
	demand   = require('must'),
	aligner = require('./lib/aligner')
	;


describe('valign', function()
{
	it('has tests');

});


var fixtures =
[
	{
		in: "    _ = require('lodash'),\n    assert = require('assert'),\n    levelgraph = require('levelgraph'),\n    P = require('p-promise'),\n    util = require('util')",
		out: "	_          = require('lodash'),\n	assert     = require('assert'),\n	levelgraph = require('levelgraph'),\n	P          = require('p-promise'),\n	util       = require('util')"
	}
];

var blockFixtures =
[
	{
		in: "var\n    _ = require('lodash'),\n    assert = require('assert'),\n    levelgraph = require('levelgraph'),\n    P = require('p-promise'),\n    util = require('util')\n    ;",
		out: "var\n	_          = require('lodash'),\n	assert     = require('assert'),\n	levelgraph = require('levelgraph'),\n	P          = require('p-promise'),\n	util       = require('util')\n	;"
	}
];


describe('aligner', function()
{

	it('aligns the fixtures properly', function()
	{
		fixtures.forEach(function(f)
		{
			aligner(f.in).must.equal(f.out);
		});
	});

});
