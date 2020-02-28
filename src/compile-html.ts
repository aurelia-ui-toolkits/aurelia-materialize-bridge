/* eslint-disable import/no-nodejs-modules */
/* eslint-disable no-undef */
/* eslint-disable no-console */
import { preprocess } from '@aurelia/plugin-conventions';
import { promises as fs } from 'fs';
import { dirname } from 'path';

async function compile(filePath: string) {
	const buffer = await fs.readFile(filePath);
	console.log(dirname(filePath));
	const result = preprocess({ path: filePath, contents: buffer.toString() }, {});
	console.log(result?.code);
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async function main() {
	await compile(process.argv[2]);
})();
