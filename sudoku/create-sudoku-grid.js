/*global app */
app.usecase.createSudokuGrid = {
	create: function (gridData, gridCreator, cellCreator, positionCreator) {
		'use strict';
		var createSudokuGrid;
		
		function createNewCell(value, row, col) {
			var cell = cellCreator.create(value);
			cell.position = positionCreator.create(row, col);
			return cell;
		}
		
		function createGridOfCells(gridData) {
			var rowIndex, colIndex, row, gridOfCells = [];
			for (rowIndex = 0; rowIndex < gridData.length; rowIndex += 1) {
				row = [];
				for (colIndex = 0; colIndex < gridData[rowIndex].length; colIndex += 1) {
					row.push(createNewCell(gridData[rowIndex][colIndex], rowIndex + 1, colIndex + 1));
				}
				gridOfCells.push(row);
			}
			return gridOfCells;
		}
		
		createSudokuGrid = {
			execute: function () {
				return gridCreator.create(
					createGridOfCells(gridData)
				);
			}
		};
		
		return createSudokuGrid;
	}
};