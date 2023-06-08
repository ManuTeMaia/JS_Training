type Indexed<T = any> = {
	[key in string]: T;
};

function merge(lhs: Indexed, rhs: Indexed): Indexed {
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

function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
	if (typeof object !== 'object' || object === null) {
		return object;
	}

	if (typeof path !== 'string') {
		throw new Error('path must be string');
	}

	const result = path.split('.').reduceRight<Indexed>((acc, key) => ({
		[key]: acc,
	}), value as any);
	return merge(object as Indexed, result);
}

console.log(set({foo: 6}, 'bar.baz', 10));
console.log(set(3, 'foo.bar', 'baz'));
//export default set;
console.log(set({foo: 5}, "bar.baz", 10));
/**
 * set({ foo: 5 }, 'bar.baz', 10); // { foo: 5, bar: { baz: 10 } }
 * set(3, 'foo.bar', 'baz'); // 3
 */