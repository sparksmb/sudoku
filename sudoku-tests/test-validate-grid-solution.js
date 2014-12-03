/*global app, module, test, strictEqual, ok, deepEqual */
module('test-validate-grid-solution.js');

test('validateGridSolution.execute() - creating a solved grid and validate the solution', function () {
	'use strict';
	var entity = app.entity,
		usecase = app.usecase,
		gridData = [[0, 0, 8, 0, 3, 0, 5, 4, 0],
					[3, 0, 0, 4, 0, 7, 9, 0, 0],
					[4, 1, 0, 0, 0, 8, 0, 0, 2],
					[0, 4, 3, 5, 0, 2, 0, 6, 0],
					[5, 0, 0, 0, 0, 0, 0, 0, 8],
					[0, 6, 0, 3, 0, 9, 4, 1, 0],
					[1, 0, 0, 8, 0, 0, 0, 2, 7],
					[0, 0, 5, 6, 0, 3, 0, 0, 4],
					[0, 2, 9, 0, 7, 0, 8, 0, 0]],
		sudokuGrid = usecase.createSudokuGrid.create(gridData,
													 entity.grid,
													 entity.cell,
													 entity.position).execute(),
		validateGridValues,
		validateGridSolution,
		markSudokuCell;
	validateGridValues = usecase.validateGridValues.create(sudokuGrid);
	validateGridSolution = usecase.validateGridSolution.create(sudokuGrid, validateGridValues);
	markSudokuCell = usecase.markSudokuCell.create(sudokuGrid);
	
	function setCellAndValidate(row, col, value) {
		var position = app.entity.position.create(row, col);
		markSudokuCell.execute(position, value);
		strictEqual(sudokuGrid.getCell(position).getValue(), value, position.toString() + ' was set to ' + value.toString());
		strictEqual(validateGridValues.execute(), true, 'grid is valid');
	}
	
	
	//Solve all 1's
	setCellAndValidate(5, 3, 1);
	setCellAndValidate(4, 5, 1);
	setCellAndValidate(8, 7, 1);
	setCellAndValidate(1, 6, 1);
	setCellAndValidate(9, 4, 1);
	
	//Solve all 2's
	setCellAndValidate(8, 5, 2);
	setCellAndValidate(1, 4, 2);
	setCellAndValidate(2, 3, 2);
	setCellAndValidate(6, 1, 2);
	setCellAndValidate(5, 7, 2);
	
	//Solve all 3's
	setCellAndValidate(7, 2, 3);
	setCellAndValidate(5, 8, 3);
	setCellAndValidate(9, 9, 3);
	setCellAndValidate(3, 7, 3);
	
	//Solve all 4's
	setCellAndValidate(7, 3, 4);
	setCellAndValidate(9, 6, 4);
	setCellAndValidate(5, 5, 4);
	
	//Solve all 5's
	setCellAndValidate(2, 2, 5);
	setCellAndValidate(3, 5, 5);
	setCellAndValidate(6, 9, 5);
	setCellAndValidate(7, 6, 5);
	setCellAndValidate(9, 8, 5);
	
	//Solve all 6's
	setCellAndValidate(9, 1, 6);
	setCellAndValidate(7, 7, 6);
	setCellAndValidate(5, 6, 6);
	setCellAndValidate(2, 5, 6);
	setCellAndValidate(3, 3, 6);
	setCellAndValidate(1, 9, 6);
	
	//Solve all 7's
	setCellAndValidate(3, 8, 7);
	setCellAndValidate(4, 7, 7);
	setCellAndValidate(5, 4, 7);
	setCellAndValidate(6, 3, 7);
	setCellAndValidate(8, 1, 7);
	setCellAndValidate(1, 2, 7);
	
	//Solve all 8's
	setCellAndValidate(4, 1, 8);
	setCellAndValidate(6, 5, 8);
	setCellAndValidate(8, 2, 8);
	setCellAndValidate(2, 8, 8);
	
	//Solve all 9's
	setCellAndValidate(1, 1, 9);
	setCellAndValidate(3, 4, 9);
	setCellAndValidate(5, 2, 9);
	setCellAndValidate(4, 9, 9);
	setCellAndValidate(7, 5, 9);
	setCellAndValidate(8, 8, 9);
	
	strictEqual(validateGridSolution.execute(), true, 'sudokuGrid has a valid solution');
});