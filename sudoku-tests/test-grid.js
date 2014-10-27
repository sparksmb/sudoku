/*global app, module, test, strictEqual, ok */
module('grid.js');

test('grid.create() - should return an object', function () {
	'use strict';
	var grid = app.entity.grid.create();
	strictEqual(typeof grid, 'object', 'grid.create() returned an object');
});

test('grid.create(gridArray) - should create a 4 by 4 sudoku grid [[0, 2, 4, 0], [1, 0, 0, 3], [4, 0, 0, 2], [0, 1, 3, 0]]', function () {
	'use strict';
	
	var gridData = [[0, 2, 4, 0], [1, 0, 0, 3], [4, 0, 0, 2], [0, 1, 3, 0]],
		grid = app.entity.grid.create(gridData);
	strictEqual(grid.getRows().length, gridData.length, 'grid has 4 rows');
	strictEqual(grid.getRow(1).length, gridData[0].length, 'grid has 4 columns');
});

test('grid.getCell(app.entity.position.create(3, 4)) - there should be a 2 at R3C4', function () {
	'use strict';
	
	var gridData = [[0, 2, 4, 0], [1, 0, 0, 3], [4, 0, 0, 2], [0, 1, 3, 0]],
		grid = app.entity.grid.create(gridData);
	strictEqual(grid.getCell(app.entity.position.create(3, 4)), 2, 'R3C4 is 2');
	strictEqual(grid.getCell(app.entity.position.create(1, 2)), 2, 'R1C2 is 2');
	strictEqual(grid.getCell(app.entity.position.create(2, 4)), 3, 'R2C4 is 3');
});



