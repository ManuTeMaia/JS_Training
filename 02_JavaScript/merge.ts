type Indexed<T = unknown> = {
	[key in string]: T;
};

function isObject(item: Indexed) {
	return (item && typeof item === "object" && !Array.isArray(item));
}

function merge(lhs: Indexed, rhs: Indexed): Indexed {
	const output = Object.assign({}, lhs);
	if (isObject(lhs) && isObject(rhs)) {
		Object.keys(rhs).forEach(key => {
			if (isObject((<Indexed>rhs[key]))) {
				if (!(key in lhs))
					Object.assign(output, { [key]: rhs[key] });
				else
					output[key] = merge((<Indexed>lhs[key]), (<Indexed>rhs[key]));
			} else {
				Object.assign(output, { [key]: rhs[key] });
			}
		});
	}
	return output;
}
// NOT MINE
function mergeYa(lhs: Indexed, rhs: Indexed): Indexed {
	for (let p in rhs) {
		if (!rhs.hasOwnProperty(p)) {
			continue;
		}

		try {
			if (rhs[p].constructor === Object) {
				rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
			} else {
				lhs[p] = rhs[p];
			}
		} catch(e) {
			lhs[p] = rhs[p];
		}
	}

	return lhs;
}
//
export default merge;

merge({a: {b: {a: 2}}, d: 5}, {a: {b: {c: 1}}});
