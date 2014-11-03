/*global app, module, test, strictEqual, ok, deepEqual */
module('test-mark-sudoku-cell.js');

test('markSudokuCell.markValue(value, position) should mark cell 1, 1 with 3', function () {
	'use strict';
	var gridData = [[0, 2, 4, 0], [1, 0, 0, 3], [4, 0, 0, 2], [0, 1, 3, 0]],
		gridResult = [[3, 2, 4, 0], [1, 0, 0, 3], [4, 0, 0, 2], [0, 1, 3, 0]],
		sudokuGrid = app.usecase.createSudokuGrid.create(gridData,
														 app.entity.grid,
														 app.entity.cell,
														 app.entity.position).execute();
	deepEqual(sudokuGrid.setValue(3, app.entity.position.create(1, 1)), gridResult, '1, 1 was set with 3');
});
