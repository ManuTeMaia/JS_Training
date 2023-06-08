type StringIndexed = Record<string, any>;
function queryStringify(data:StringIndexed, prefix?:any): string | never {
	if (typeof data !== "object") {
		throw new Error("Not an object");
	}
	const query = Object.keys(data).map((key) => {
		const value  = data[key];

		if (data.constructor === Array)
			key = (prefix ? `${prefix}[${key}]` : key);
		else if (data.constructor === Object)
			key = (prefix ? `${prefix}[${key}]` : key);

		if (typeof value === 'object')
			return queryStringify(value, key);
		else
			return `${key}=${value}`;
	});

	return ([] as StringIndexed).concat.apply([], query).join('&');
}



//YaPracticum  version

function queryStringifyYa(data: StringIndexed): string | never {
	if (typeof data !== "object") {
		throw new Error("Data must be object");
	}

	const keys = Object.keys(data);
	return keys.reduce((result, key, index) => {
		const value = data[key];
		const endLine = index < keys.length - 1 ? "&" : "";

		if (Array.isArray(value)) {
			const arrayValue = value.reduce<StringIndexed>(
				(result, arrData, index) => ({
					...result,
					[`${key}[${index}]`]: arrData
				}),
				{}
			);

			return `${result}${queryStringify(arrayValue)}${endLine}`;
		}

		if (typeof value === "object") {
			const objValue = Object.keys(value || {}).reduce<StringIndexed>(
				(result, objKey) => ({
					...result,
					[`${key}[${objKey}]`]: value[objKey]
				}),
				{}
			);

			return `${result}${queryStringify(objValue)}${endLine}`;
		}

		return `${result}${key}=${value}${endLine}`;
	}, "");
}

export default queryStringify;
