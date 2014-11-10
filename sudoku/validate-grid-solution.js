/*global app */
app.usecase.validateGridSolution = {
	create: function (grid, validateGridValues) {
		'use strict';
		var validateGridSolution;
		
		function isGridComplete() {
			return false;
		}
		
		validateGridSolution = {
			execute = function () {
				var isValid = validateGridValues.execute(),
					isComplete = isGridComplete();
					
				return isValid && isComplete;
			}
		};
		
		return validateGridSolution;
	}
};