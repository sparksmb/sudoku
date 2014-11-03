/*global app, module, test, strictEqual, ok, deepEqual */
module('test-create-sudoku-grid.js');

test('createSudokuGrid.create(gridData) - should return an object', function () {
	'use strict';
	var sudokuGrid = app.usecase.createSudokuGrid.create([[]], app.entity.grid, app.entity.cell, app.entity.position);
	strictEqual(typeof sudokuGrid, 'object', 'createSudokuGrid.create(gridData) returned an object');
});

test('sudokuGrid.getRowValues() - should return [[0, 2, 4, 0], [1, 0, 0, 3], [4, 0, 0, 2], [0, 1, 3, 0]]', function () {
	'use strict';
	var gridData = [[0, 2, 4, 0], [1, 0, 0, 3], [4, 0, 0, 2], [0, 1, 3, 0]],
		sudokuGrid = app.usecase.createSudokuGrid.create(gridData,
														 app.entity.grid,
														 app.entity.cell,
														 app.entity.position).execute();
	deepEqual(sudokuGrid.getRowValues(), gridData, 'values match grid data');
});

test('sudokuGrid.getColumnValues() - should return [[0, 1, 4, 0], [2, 0, 0, 1], [4, 0, 0, 3], [0, 3, 2, 0]]', function () {
	'use strict';
	var gridData = [[0, 2, 4, 0], [1, 0, 0, 3], [4, 0, 0, 2], [0, 1, 3, 0]],
		columnValues = [[0, 1, 4, 0], [2, 0, 0, 1], [4, 0, 0, 3], [0, 3, 2, 0]],
		sudokuGrid = app.usecase.createSudokuGrid.create(gridData,
														 app.entity.grid,
														 app.entity.cell,
														 app.entity.position).execute();
	deepEqual(sudokuGrid.getColumnValues(), columnValues, 'column values match');
});
