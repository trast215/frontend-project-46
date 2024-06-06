import {
	Command
} from 'commander';
const genDiff = (filePath1, filePath2, format = 'stylish') => {
	const file1 = readFile(filePath1);
	const file2 = readFile(filePath2);
	const obj1 = parse(file1, getFormat(filePath1));
	const obj2 = parse(file2, getFormat(filePath2));
	const tree = buildTree(obj1, obj2);
	return formatter(tree, format);
};
const program = new Command();
program.name('gendiff').description('Compares two configuration files and shows a difference.').version('0.0.1').option('-f ,--format <type>', 'output format', 'stylish').argument('<filepath1>').argument('<filepath2>').action((filePath1, filePath2) => {
	const option = program.opts();
	console.log(genDiff(filePath1, filePath2, option.format));
});

program.parse();

