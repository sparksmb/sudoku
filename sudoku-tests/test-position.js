/*global app, module, test, strictEqual, ok */
module('position.js');

test('position.create() - should return an object', function () {
	'use strict';
	var position = app.entity.position.create();
	strictEqual(typeof position, 'object', 'position.create() returned an object');
});

test('position.create() - should return a position object that is not a valid position', function () {
	'use strict';
	var position = app.entity.position.create();
	strictEqual(position.isValid(), false, 'position is not valid');
});

test('position.create(0, -1) - should return a position object that is not a valid position', function () {
	'use strict';
	var position = app.entity.position.create(0, -1);
	strictEqual(position.isValid(), false, 'position is not valid');
});

test('position.create(-1, 1) - should return a position object that is not a valid position', function () {
	'use strict';
	var position = app.entity.position.create(-1, 1);
	strictEqual(position.isValid(), false, 'position is not valid');
});

test('position.create(0, 0) - should return a position object that is a valid position', function () {
	'use strict';
	var position = app.entity.position.create(0, 0);
	strictEqual(position.isValid(), true, 'position is valid');
});

test('position.create(2, 3) - should return a position at row 2, column 3', function () {
	'use strict';
	var position = app.entity.position.create(2, 3);
	strictEqual(position.row, 2, 'row is 2');
	strictEqual(position.column, 3, 'column is 3');
});

test('position.create(7, 5).toString() - should return R7C5', function () {
	'use strict';
	var position = app.entity.position.create(7, 5);
	strictEqual(position.toString(), 'R7C5', 'toString returns R7C5');
});

test('position.row and position.column - setting row and column should yeild a valid position', function () {
	'use strict';
	var position = app.entity.position.create();
	position.row = 0;
	position.column = 0;
	strictEqual(position.isValid(), true, 'after setting the row and column position is valid');
});

test('position.create().set(2, 3) - return a position at row 2, column 3', function () {
	'use strict';
	var position = app.entity.position.create();
	position.set(2, 3);
	strictEqual(position.row, 2, 'row is 2');
	strictEqual(position.column, 3, 'column is 3');
});

