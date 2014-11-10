/*global app */
app.usecase.markSudokuCell = {
	create: function (sudokuGrid) {
		'use strict';
		var markSudokuCell;
		
		markSudokuCell = {
			execute: function (position, value) {
				sudokuGrid.getCell(position).setValue(value);
			}
		};
		
		return markSudokuCell;
	}
};