function curry(func) {
	var funcArgs = [];
	var len = func.length;
	return function fn() {
		funcArgs = funcArgs.concat([].slice.call(arguments))
		return funcArgs.length >= len && func.apply(null, funcArgs) || fn
	}
}

function mutiMap() {
	var result = [];

	var args = [].slice.apply(arguments);
	var fn = args.pop()

	if (typeof fn != 'function') {
		return '最后一个参数必须为回调！';
	}

	var len = args.length;

	if (len <= 0) {
		return '缺少数组参数！';
	}

	var newArr = [];

	var makeLength;
	while (len--) {
		var arg = args.shift()
		if (!Array.isArray(arg)) {
			return '参数必须为数组！';
		}
		if (!makeLength) {
			makeLength = arg.length;
		}

		if (makeLength <= 0) {
			return '数组参数长度不能为0！';
		}

		if (makeLength != arg.length) {
			return '数组参数长度不一样！';
		}

		arg.forEach(function(a, i) {
			if (!newArr[i]) {
				newArr[i] = [];
			}
			newArr[i].push(a)
		})
	}

	// newArr.forEach(function(arr) {
	// 	var r = fn.apply(null, arr);

	// 	if (Array.isArray(r) && r.length > 0) {
	// 		result = result.concat(r)
	// 	} else {
	// 		result.push(r)
	// 	}
	// })

	newArr.reduce(function(val, arr){
		var r = fn.apply(null, arr);
		console.log(val)
		return Array.isArray(r) && val.concat(r) || val.push(r) || val
	}, [])

	// if (args.length > 0) {
	// 	var newArr = [];
	// 	for (var i = 0, len = args.length; i < len; i++) {
	// 		var arg = args[i];
	// 		if (Array.isArray(arg) && arg.length > 0) {
	// 			for (var j = 0, jlen = arg.length; j < jlen; j++) {
	// 				if (!newArr[j]) {
	// 					newArr[j] = [];
	// 				}
	// 				newArr[j].push(arg[j])
	// 			}
	// 		}
	// 	}

	// 	for (var i = 0, len = newArr.length; i < len; i++) {
	// 		var r = fn.apply(null, newArr[i])
	// 		if (Array.isArray(r) && r.length > 0) {
	// 			result = result.concat(r)
	// 		} else {
	// 			result.push(r)
	// 		}
	// 	}
	// }
	return result
}

// console.log(mutiMap(['a', 'v'], [1,3], ['{', '}'],function(a, b) {
// 	return a + b;
// }))
// 


console.log('aa*aa'.match(/[^a-zA-Z0-9_]/g))
