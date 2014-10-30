/*global app */
app.entity.grid = {
	create: function (gridData, cellCreator, positionCreator) {
		'use strict';
		var grid,
			gridArray = [];
		
		function createNewCell(value, row, col) {
			var cell = cellCreator.create(value);
			cell.position = positionCreator.create(row, col);
			return cell;
		}
		
		function createGridOfCells() {
			var rowIndex, colIndex, row;
			for (rowIndex = 0; rowIndex < gridData.length; rowIndex += 1) {
				row = [];
				for (colIndex = 0; colIndex < gridData[rowIndex].length; colIndex += 1) {
					row.push(createNewCell(gridData[rowIndex][colIndex], rowIndex + 1, colIndex + 1));
				}
				gridArray.push(row);
			}
		}
		
		function initGrid() {
			createGridOfCells();
			return grid;
		}
		
		grid = {
			getRow: function (rowNum) {
				return gridArray[rowNum - 1];
			},
			getRows: function () {
				return gridArray;
			},
			getValues: function () {
				var gridValues = [];
				grid.getRows().map(function (row) {
					var rowValues = [];
					row.map(function (cell) {
						rowValues.push(cell.getValue());
					});
					gridValues.push(rowValues);
				});
				return gridValues;
			},
			forEachRowOfValues: function (callBack) {
				grid.getRowsOfValues().map(callBack);
			},
			getColumn: function (columnNum) {
				throw 'not implemented';
			},
			getColumns: function () {
				throw 'not implemented';
			},
			forEachColumns: function () {
				throw 'not implemented';
			},
			getCell: function (position) {
				return gridArray[position.row - 1][position.column - 1];
			},
			setCell: function (position, cell) {
				throw 'not implemented';
			}
		};
		
		return initGrid();
	}
};