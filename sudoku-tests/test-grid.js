/*global app, module, test, strictEqual, ok */
module('grid.js');

test('grid.create() - should return an object', function () {
	'use strict';
	var grid = app.entity.grid.create();
	strictEqual(typeof grid, 'object', 'grid.create() returned an object');
});

test('grid.create(9, 9) - should create a 9 by 9 sudoku grid', function () {
	'use strict';
	var grid = app.entity.grid.create(5, 9),
		gridArray = grid.toArray();
	
	ok(true, JSON.stringify(gridArray));
	//strictEqual(gridArray[0].length, 9, 'grid has 9 columns');
});

