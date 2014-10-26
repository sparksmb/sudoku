/*global app */
app.entity.grid = {
	create: function () {
		'use strict';
		var grid,
			gridArray = [];
		
		function init() {
			var i, j, row = [];
			for (i = 0; i < 9; i += 1) {
				for (j = 0; j < 9; j += 1) {
					row.push()
				}
				gridArray.push(row);
			}
		}
		
		grid = {
			getRow: function (rowNum) {
				throw 'not implemented';
			},
			getRows: function () {
				throw 'not implemented';
			},
			forEachRow: function (callBack) {
				throw 'not implemented';
			},
			getCell: function (position) {
				throw 'not implemented';
			},
			setCell: function (position, cell) {
				throw 'not implemented';
			}
		};
		
		return grid;
	}
};