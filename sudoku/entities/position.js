/*global app */
app.entity.position = {
	create: function (row, column) {
		'use strict';
		var position = {
			row: row >= 0 ? row : -1,
			column: column >= 0 ? column : -1,
			isValid: function () {
				return position.row >= 0 &&
					position.column >= 0;
			},
			toString: function () {
				return 'R' + position.row.toString() +
					'C' + position.column.toString();
			},
			set: function (row, column) {
				position.row = row;
				position.column = column;
			}
		};
		
		return position;
	}
};