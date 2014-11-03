/*global app */
app.entity.grid = {
	create: function (gridOfCells) {
		'use strict';
		var grid,
			gridArray;
		
		function init() {
			gridArray = gridOfCells || [[]];
			return grid;
		}
				
		grid = {
			getRow: function (rowNum) {
				return gridArray[rowNum - 1];
			},
			getRows: function () {
				return gridArray;
			},
			getRowValues: function () {
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
			getColumnValues: function () {
				var gridValues = grid.getRowValues(),
					rowIndex,
					colIndex,
					columnValues = [],
					column,
					numberOfColumns = gridValues[0].length,
					numberOfRows = gridValues.length;
				
				for (colIndex = 0; colIndex < numberOfColumns; colIndex += 1) {
					column = [];
					for (rowIndex = 0; rowIndex < numberOfRows; rowIndex += 1) {
						column.push(gridValues[rowIndex][colIndex]);
					}
					columnValues.push(column);
				}
				return columnValues;
			},
			getCell: function (position) {
				return gridArray[position.row - 1][position.column - 1];
			},
			getColumn: function (columnNum) {
				throw 'not implemented';
			},
			getColumns: function () {
				throw 'not implemented';
			},
			setCell: function (position, cell) {
				throw 'not implemented';
			}
		};
		
		return init();
	}
};