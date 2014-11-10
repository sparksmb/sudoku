/*global app, module, test, strictEqual, ok, deepEqual */
module('test-validate-grid-solution.js');

test('markeSudokuCell.create() - creating a grid solving the puzzle and validating along the way', function () {
	'use strict';
	var gridData = [[9, 7, 8, 2, 3, 1, 5, 4, 6],
					[3, 0, 0, 4, 0, 7, 9, 0, 0],
					[4, 1, 0, 0, 0, 8, 0, 0, 2],
					[0, 4, 3, 5, 0, 2, 0, 6, 0],
					[5, 0, 0, 0, 0, 0, 0, 0, 8],
					[0, 6, 0, 3, 0, 9, 4, 1, 0],
					[1, 0, 0, 8, 0, 0, 0, 2, 7],
					[0, 0, 5, 6, 0, 3, 0, 0, 4],
					[0, 2, 9, 0, 7, 0, 8, 0, 0]],
		position,
		sudokuGrid = app.usecase.createSudokuGrid.create(gridData,
														 app.entity.grid,
														 app.entity.cell,
														 app.entity.position).execute(),
		validateGridSolution = app.usecase.validateGridSolution(sudokuGrid, validateGridValues);
	
	strictEqual(validateGridSolution.execute(), true, 'sudokuGrid has a valid solution');
	
	//Solve all 1's
	setCellValue(5, 3, 1);
	setCellValue(4, 5, 1);
	setCellValue(8, 7, 1);
	setCellValue(1, 6, 1);
	setCellValue(9, 4, 1);
	
	//Solve all 2's
	setCellValue(8, 5, 2);
	setCellValue(1, 4, 2);
	setCellValue(2, 3, 2);
	setCellValue(6, 1, 2);
	setCellValue(5, 7, 2);
	
	//Solve all 3's
	setCellValue(7, 2, 3);
	setCellValue(5, 8, 3);
	setCellValue(9, 9, 3);
	setCellValue(3, 7, 3);
	
	//Solve all 4's
	setCellValue(7, 3, 4);
	setCellValue(9, 6, 4);
	setCellValue(5, 5, 4);
	
	//Solve all 5's
	setCellValue(2, 2, 5);
	setCellValue(3, 5, 5);
	setCellValue(6, 9, 5);
	setCellValue(7, 6, 5);
	setCellValue(9, 8, 5);
	
	//Solve all 6's
	setCellValue(9, 1, 6);
	setCellValue(7, 7, 6);
	setCellValue(5, 6, 6);
	setCellValue(2, 5, 6);
	setCellValue(3, 3, 6);
	setCellValue(1, 9, 6);
	
	//Solve all 7's
	setCellValue(3, 8, 7);
	setCellValue(4, 7, 7);
	setCellValue(5, 4, 7);
	setCellValue(6, 3, 7);
	setCellValue(8, 1, 7);
	setCellValue(1, 2, 7);
	
	//Solve all 8's
	setCellValue(4, 1, 8);
	setCellValue(6, 5, 8);
	setCellValue(8, 2, 8);
	setCellValue(2, 8, 8);
	
	//Solve all 9's
	setCellValue(1, 1, 9);
	setCellValue(3, 4, 9);
	setCellValue(5, 2, 9);
	setCellValue(4, 9, 9);
	setCellValue(7, 5, 9);
	setCellValue(8, 8, 9);
});