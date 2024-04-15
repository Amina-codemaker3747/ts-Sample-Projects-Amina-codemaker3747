import fs from 'fs';
import { homedir } from 'os';
import path from 'path';
import chalk from 'chalk';

const folderName = "Hacked Files";
const dirPath = path.join(homedir(), 'Desktop', folderName);

console.log(chalk.bold.magentaBright("\t\t Your System is Hacked Now...😈"));
setTimeout(() => {
    console.log(chalk.bold.greenBright("\t\t Enjoy Buddy...!"));
}, 3000);

for(let i = 1; i <= 150; i++) {
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(`${dirPath} ${i}`)
}
}

















// import * as fs from 'fs';

// let directoryPath = 'Computer';

// try {
//     fs.mkdirSync(directoryPath);
//     console.log('Directory created successfully!');
// } catch (err) {
//     console.error('Error creating directory:', err);

// }
