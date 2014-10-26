/*global app, module, test, strictEqual, ok */
module('cell.js');

test('cell.create() - should return an object', function () {
	'use strict';
	var cell = app.entity.cell.create();
	strictEqual(typeof cell, 'object', 'cell.create() returned an object');
});

test('cell.create(1) - should return a cell object with the value of 1', function () {
	'use strict';
	var cell = app.entity.cell.create(1);
	strictEqual(cell.getValue(), 1, 'cell.value is 1');
});

test('cell.create(99) - should return an empty cell object', function () {
	'use strict';
	var cell = app.entity.cell.create(99);
	strictEqual(cell.getValue(), cell.EMPTY, 'cell.value is EMPTY');
});

test('cell.isGiven() - should return be true when a cell is created with a given of 1', function () {
	'use strict';
	var cell = app.entity.cell.create(1);
	strictEqual(cell.isGiven(), true, 'cell is given');
});

test('cell.setGiven(3) - so cell.isGiven() shoudl be true', function () {
	'use strict';
	var cell = app.entity.cell.create();
	cell.setGiven(3);
	strictEqual(cell.isGiven(), true, 'cell is given');
	strictEqual(cell.getValue(), 3, 'cell is 3');
	cell.setValue(5);
	strictEqual(cell.getValue(), 3, 'cell is still 3 after cell.setValue(5)');
});

test('cell.getValue() - should return 3 after cell.setValue(3)', function () {
	'use strict';
	var cell = app.entity.cell.create();
	cell.setValue(3);
	strictEqual(cell.getValue(), 3, 'cell.value is 3 after cell.setValue(3)');
	cell.setValue(4);
	strictEqual(cell.getValue(), 4, 'cell.value is 4 after cell.setValue(4)');
});

test('cell.setValue(3) - creating a cell with a given of 1 should remain 1 after trying to set a value', function () {
	'use strict';
	var cell = app.entity.cell.create(1);
	cell.setValue(3);
	strictEqual(cell.getValue(), 1, 'cell.value is 1 after cell.setValue(3)');
});

test('cell.setValue(99) - setting a cell to 1 and then 99 should remain 1', function () {
	'use strict';
	var cell = app.entity.cell.create();
	cell.setValue(1);
	cell.setValue(99);
	strictEqual(cell.getValue(), 1, 'cell.value is still 1');
});

test('cell.clearValue() - cell should be EMPTY after clearing a value', function () {
	'use strict';
	var cell = app.entity.cell.create();
	cell.setValue(1);
	cell.clearValue();
	strictEqual(cell.getValue(), cell.EMPTY, 'cell.value EMPTY');
});

test('cell.clearValue() - cell should be 1 after trying to clear a cell with a given value of 1', function () {
	'use strict';
	var cell = app.entity.cell.create(1);
	cell.clearValue();
	strictEqual(cell.getValue(), 1, 'cell.value is 1');
});

test('cell.setPencilMark(1) - cell should have a pencil mark of 1', function () {
	'use strict';
	var cell = app.entity.cell.create();
	cell.setPencilMark(1);
	strictEqual(cell.getPencilMarks()[0], 1, 'pecil mark is 1');
});

test('cell.setPencilMark(1) - cell should not allow pencli marks to be set when created with a given', function () {
	'use strict';
	var cell = app.entity.cell.create(7),
		actual,
		expected = '["","","","","","","","",""]';
	cell.setPencilMark(1);
	actual = JSON.stringify(cell.getPencilMarks());
	strictEqual(actual, expected, 'pencilMarks is an array ' + actual);
});


test('cell.clearPencilMark(1) - cell should have no 1 pencil mark', function () {
	'use strict';
	var cell = app.entity.cell.create();
	cell.setPencilMark(1);
	cell.clearPencilMark(1);
	strictEqual(cell.getPencilMarks()[0], cell.EMPTY, 'pecil mark was cleared');
});

test('cell.getPencilMarks() - returns an array after setting 1, 5, and 9', function () {
	'use strict';
	var cell = app.entity.cell.create(),
		actual,
		expected = '[1,"","","",5,"","","",9]';
	cell.setPencilMark(1);
	cell.setPencilMark(5);
	cell.setPencilMark(9);
	cell.setPencilMark(99);
	actual = JSON.stringify(cell.getPencilMarks());
	strictEqual(actual, expected, 'pencilMarks is an array ' + actual);
});

test('cell.getPosition() - cell should return position R2C3', function () {
	'use strict';
	var cell = app.entity.cell.create();
	cell.position = app.entity.position.create(2, 3);
	strictEqual(cell.getPosition().toString(), 'R2C3', 'position is R2C3');
});



