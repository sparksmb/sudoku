/*global app, module, test, strictEqual, ok, deepEqual */
module('grid.js');

test('grid.create() - should return an object', function () {
	'use strict';
	var grid = app.entity.grid.create([[]]);
	strictEqual(typeof grid, 'object', 'grid.create() returned an object');
});

test('grid.create(gridArray) - should create a 4 by 4 sudoku grid [[0, 2, 4, 0], [1, 0, 0, 3], [4, 0, 0, 2], [0, 1, 3, 0]]', function () {
	'use strict';
	
	var gridData = [[0, 2, 4, 0], [1, 0, 0, 3], [4, 0, 0, 2], [0, 1, 3, 0]],
		grid = app.entity.grid.create(gridData);
	strictEqual(grid.getRows().length, gridData.length, 'grid has 4 rows');
	strictEqual(grid.getRow(1).length, gridData[0].length, 'grid has 4 columns');
});

test('grid.getCell(app.entity.position.create(1, 1)) - there should be a 9 at R1C1', function () {
	'use strict';
	
	var cell = app.entity.cell.create(9),
		gridData,
		grid,
		position = app.entity.position.create(1, 1);
	cell.position = position;
	gridData = [[cell]];
	grid = app.entity.grid.create(gridData);
	strictEqual(grid.getCell(position).getValue(), 9, 'R1C1 is 9');
});

test('grid.getRowValues() - should contain a sudoku grid of [[1, 2, 4, 0]]', function () {
	'use strict';
	
	var gridData = [[app.entity.cell.create(1),
					 app.entity.cell.create(2),
					 app.entity.cell.create(4),
					 app.entity.cell.create(0)]],
		gridValues = [[1, 2, 4, 0]],
		grid = app.entity.grid.create(gridData);
	deepEqual(grid.getRowValues(), gridValues, 'grid values match grid data used to create the grid');
});

test('grid.getColumnValues() - should contain two columns of [1, 2] and [3, 4]', function () {
	'use strict';
	
	var gridData = [[app.entity.cell.create(1), app.entity.cell.create(3)],
					[app.entity.cell.create(2), app.entity.cell.create(4)]],
		columnValues = [[1, 2], [3, 4]],
		grid = app.entity.grid.create(gridData);
	deepEqual(grid.getColumnValues(), columnValues, 'column values match');
					 
});