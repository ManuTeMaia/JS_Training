
/**
const expected =
			'   *   \n' +
			'  ***  \n' +
			' ***** \n' +
			'*******\n' +
			'   |   \n';
assert.strictEqual(tree(5), expected);
assert.strictEqual(tree('5'), expected);
*/
type Nullable<T> = T | null;

const TYPE_ERROR = "Something wrong with type of input param";

const tree = (lvl: number | string): Nullable<string> => {

    let lines = typeof lvl==='string' ? parseInt(lvl,10) : lvl;
    let line = lines;
	const space =" ";
	const star ="*";
	const result  = [];
	if(typeof lvl !== "number" && typeof lvl !== "string") throw new Error(TYPE_ERROR);
	if(line < 3) return null;

	while(line-- > 1) {
		result.push(
			Array(line).join(space) + Array(2*(lines-line)).join(star) + Array(line).join(space)
		);
	}
	result.push(Array(lines-1).join(space) + "|" + Array(lines-1).join(space) + "\n");
  //console.log(result);
  console.log(result.join("\n"));
	return result.join("\n");
};

tree(7)
