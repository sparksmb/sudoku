/*global app, module, test, strictEqual, ok, deepEqual */
module('test-mark-sudoku-cell.js');

test('sudokuGrid.getCell(position).setValue(3) should mark cell 1, 1 with 3', function () {
	'use strict';
	var gridData = [[0, 2, 4, 0], [1, 0, 0, 3], [4, 0, 0, 2], [0, 1, 3, 0]],
		gridResult = [[3, 2, 4, 0], [1, 0, 0, 3], [4, 0, 0, 2], [0, 1, 3, 0]],
		sudokuGrid = app.usecase.createSudokuGrid.create(gridData,
														 app.entity.grid,
														 app.entity.cell,
														 app.entity.position).execute();
	sudokuGrid.getCell(app.entity.position.create(1, 1)).setValue(3);
	deepEqual(sudokuGrid.getRowValues(), gridResult, '1, 1 was set with 3');
});

test('markSudokuCell.markValue(value, position) should mark cell 1, 1 with 3', function () {
	'use strict';
	var gridData = [[0, 2, 4, 0], [1, 0, 0, 3], [4, 0, 0, 2], [0, 1, 3, 0]],
		gridResult = [[3, 2, 4, 0], [1, 0, 0, 3], [4, 0, 0, 2], [0, 1, 3, 0]],
		sudokuGrid = app.usecase.createSudokuGrid.create(gridData,
														 app.entity.grid,
														 app.entity.cell,
														 app.entity.position).execute();
	sudokuGrid.getCell(app.entity.position.create(1, 1)).setValue(3);
	deepEqual(sudokuGrid.getRowValues(), gridResult, '1, 1 was set with 3');
});

test('markSudokuCell.markValue(1, position) - marking cell 2, 2 with 3 should make the grid invalid', function () {
	'use strict';
	var gridData = [[0, 2, 4, 0], [1, 0, 0, 3], [4, 0, 0, 2], [0, 1, 3, 0]],
		sudokuGrid = app.usecase.createSudokuGrid.create(gridData,
														 app.entity.grid,
														 app.entity.cell,
														 app.entity.position).execute(),
		validateGridValues = app.usecase.validateGridValues.create(sudokuGrid);
	sudokuGrid.getCell(app.entity.position.create(2, 2)).setValue(3);
	strictEqual(validateGridValues.execute(), false, 'grid is invalid');
});
