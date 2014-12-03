/*global app */
app.usecase.createSolvedSudokuGrid = {
	create: function () {
		'use strict';
		
		var createSolvedSudokuGrid,
			entity = app.entity,
			usecase = app.usecase,
			sudokuGrid,
			markSudokuCell;
		
		function getGridData() {
			return [[9, 7, 8, 2, 3, 1, 5, 4, 6],
					[3, 0, 0, 4, 0, 7, 9, 0, 0],
					[4, 1, 0, 0, 0, 8, 0, 0, 2],
					[0, 4, 3, 5, 0, 2, 0, 6, 0],
					[5, 0, 0, 0, 0, 0, 0, 0, 8],
					[0, 6, 0, 3, 0, 9, 4, 1, 0],
					[1, 0, 0, 8, 0, 0, 0, 2, 7],
					[0, 0, 5, 6, 0, 3, 0, 0, 4],
					[0, 2, 9, 0, 7, 0, 8, 0, 0]];
		}
				
		function markCell(row, col, value) {
			markSudokuCell.execute(entity.position.create(row, col), value);
		}
		
		function solveSudokuGrid() {
			//Solve all 1's
			markCell(5, 3, 1);
			markCell(4, 5, 1);
			markCell(8, 7, 1);
			markCell(1, 6, 1);
			markCell(9, 4, 1);

			//Solve all 2's
			markCell(8, 5, 2);
			markCell(1, 4, 2);
			markCell(2, 3, 2);
			markCell(6, 1, 2);
			markCell(5, 7, 2);

			//Solve all 3's
			markCell(7, 2, 3);
			markCell(5, 8, 3);
			markCell(9, 9, 3);
			markCell(3, 7, 3);

			//Solve all 4's
			markCell(7, 3, 4);
			markCell(9, 6, 4);
			markCell(5, 5, 4);

			//Solve all 5's
			markCell(2, 2, 5);
			markCell(3, 5, 5);
			markCell(6, 9, 5);
			markCell(7, 6, 5);
			markCell(9, 8, 5);

			//Solve all 6's
			markCell(9, 1, 6);
			markCell(7, 7, 6);
			markCell(5, 6, 6);
			markCell(2, 5, 6);
			markCell(3, 3, 6);
			markCell(1, 9, 6);

			//Solve all 7's
			markCell(3, 8, 7);
			markCell(4, 7, 7);
			markCell(5, 4, 7);
			markCell(6, 3, 7);
			markCell(8, 1, 7);
			markCell(1, 2, 7);

			//Solve all 8's
			markCell(4, 1, 8);
			markCell(6, 5, 8);
			markCell(8, 2, 8);
			markCell(2, 8, 8);

			//Solve all 9's
			markCell(1, 1, 9);
			markCell(3, 4, 9);
			markCell(5, 2, 9);
			markCell(4, 9, 9);
			markCell(7, 5, 9);
			markCell(8, 8, 9);
		}
		
		createSolvedSudokuGrid = {
			execute: function () {
				var gridData = getGridData();
				sudokuGrid = usecase.createSudokuGrid.create(gridData,
															 entity.grid,
															 entity.cell,
															 entity.position).execute();
				markSudokuCell = usecase.markSudokuCell.create(sudokuGrid);
				solveSudokuGrid();
				
				return sudokuGrid;
			}
		};
		
		return createSolvedSudokuGrid;
	}
};