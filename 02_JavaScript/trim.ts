function trim (str: string, excl?: any):string {
	const regexStart = new RegExp('^['+excl+']+');
	const regexEnd = new RegExp('[ '+excl+']+$');
	str = str
		.replace(regexStart,'')
		.replace(regexEnd,'')
		.replace(/^\s+/,'');

	return str;
}

trim("  abc  "); // => 'abc'
trim("-_-abc-_-", "_-"); // => 'abc'
trim("\xA0foo"); // "foo"
trim("\xA0foo", " "); // " foo"
trim("-_-ab c -_-", "_-"); // ab c

["  foo  ", "  bar  "].map(value => trim(value)); // => ['foo', 'bar']

export default trim;