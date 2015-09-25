module.exports = function(arr, fn) {
	return arr.reduce(function (accum, y) {
		accum.push(fn(y));
		return accum;
	}, []);
}
