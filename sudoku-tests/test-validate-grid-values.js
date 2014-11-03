/*global app, module, test, strictEqual, ok, deepEqual */
module('test-validate-grid-values.js');

test('validateGridValues.valuesAreValid([2, 2, 0, 1]) should not be valid', function () {
	'use strict';
	var validateGridValues = app.usecase.validateGridValues.create([[]]);
	strictEqual(validateGridValues.valuesAreValid([2, 2, 0, 1]), false, '[2, 2, 0, 1] is not valid - two 2s');
});

test('validateGridValues.execute() for grid [[0, 2, 4, 0], [1, 0, 0, 3], [4, 0, 0, 2], [0, 1, 3, 0]] should be true', function () {
	'use strict';
	var gridData = [[0, 2, 4, 0], [1, 0, 0, 3], [4, 0, 0, 2], [0, 1, 3, 0]],
		sudokuGrid = app.usecase.createSudokuGrid.create(gridData,
														 app.entity.grid,
														 app.entity.cell,
														 app.entity.position).execute(),
		validateGridValues = app.usecase.validateGridValues.create(sudokuGrid);
	
	deepEqual(validateGridValues.execute(sudokuGrid), true, 'grid is valid');
});

test('validateGridValues.execute(sudokuGrid) for grid [[2, 2, 4, 0], [1, 0, 0, 3], [4, 0, 0, 2], [0, 1, 3, 0]] should be false', function () {
	'use strict';
	var gridData = [[2, 2, 4, 0], [1, 0, 0, 3], [4, 0, 0, 2], [0, 1, 3, 0]],
		sudokuGrid = app.usecase.createSudokuGrid.create(gridData,
														 app.entity.grid,
														 app.entity.cell,
														 app.entity.position).execute(),
		validateGridValues = app.usecase.validateGridValues.create(sudokuGrid);
	
	deepEqual(validateGridValues.execute(sudokuGrid), false, 'grid is valid');
});
