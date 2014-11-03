/*global app */
app.usecase.validateGridValues = {
	create: function (sudokuGrid) {
		'use strict';
		var validateGridValues,
			candidateValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		
		function candidateCountIsValid(candidate, array) {
			var count = 0;
			array.map(function (value) {
				if (value === candidate) {
					count += 1;
				}
			});
			return count <= 1;
		}
		
		function arrayOfValuesAreValid(array) {
			var isValid = true;
			candidateValues.map(function (candidate) {
				isValid = isValid && candidateCountIsValid(candidate, array);
			});
			return isValid;
		}
		
		validateGridValues = {
			execute: function () {
				var rows = sudokuGrid.getRowValues(),
					cols = sudokuGrid.getColumnValues(),
					rowsAreValid = true,
					colsAreValid = true;
				
				rows.forEach(function (row) {
					rowsAreValid = rowsAreValid && arrayOfValuesAreValid(row);
				});
				
				cols.forEach(function (col) {
					colsAreValid = colsAreValid && arrayOfValuesAreValid(col);
				});
				
				return rowsAreValid && colsAreValid;
			},
			valuesAreValid: function (array) {
				return arrayOfValuesAreValid(array);
			}
		};
		
		return validateGridValues;
	}
};