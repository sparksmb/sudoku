/*global app */
app.entity.cell = {
	create: function (given) {
		'use strict';
		var cell,
			isGiven = false,
			value,
			pencilMarks = ['', '', '', '', '', '', '', '', ''];
		
		function isValid(value) {
			return !isNaN(Number(value)) && value >= 1 && value <= 9;
		}
		
		function setGiven(given) {
			if (isValid(given)) {
				value = given;
				isGiven = true;
			} else {
				value = cell.EMPTY;
			}
		}
		
		function init() {
			setGiven(given);
			return cell;
		}
		
		cell = {
			EMPTY: 0,
			getPosition: function () {
				return cell.position;
			},
			setPosition: function (position) {
				cell.position = position;
			},
			getValue: function () {
				return value;
			},
			setValue: function (number) {
				if (isValid(number) && !isGiven) {
					value = Number(number);
				}
			},
			clearValue: function () {
				if (!isGiven) {
					value = cell.EMPTY;
				}
			},
			isEmpty: function () {
				return value === cell.EMPTY;
			},
			isGiven: function () {
				return isGiven;
			},
			setGiven: function (given) {
				setGiven(given);
			},
			getPencilMarks: function () {
				return pencilMarks;
			},
			setPencilMark: function (mark) {
				if (isValid(mark) && !isGiven) {
					pencilMarks[mark - 1] = mark;
				}
			},
			clearPencilMark: function (mark) {
				if (isValid(mark) && !isGiven) {
					pencilMarks[mark - 1] = cell.EMPTY;
				}
			}
		};
		
		return init();
	}
};