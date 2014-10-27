/*global app */
app.entity.grid = {
	create: function (gridData) {
		'use strict';
		var grid,
			gridArray = gridData || [[]];
		
		grid = {
			getRow: function (rowNum) {
				return gridArray[rowNum - 1];
			},
			getRows: function () {
				return gridArray;
			},
			forEachRow: function (callBack) {
				throw 'not implemented';
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
		
		return grid;
	}
};