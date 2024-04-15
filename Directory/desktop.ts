import inquirer from 'inquirer'
import fs from 'fs';
import path from 'path';
import { homedir } from 'os';

let input = await inquirer.prompt([
    {
        type: "input",
        name:"str",
        message:"Enter the folder name...",
       
    },

    { 
        type:"number",
        name:"num",
        message:"Mention the quantity...",
  
}
])
const folderName = input.str;
const desktopPath = path.join(homedir(), 'Desktop', folderName);


// Check if the folder already exists
if (!fs.existsSync(desktopPath)) {
 // If not, create the folder
 fs.mkdirSync(desktopPath);
 console.log(`Folder "${folderName}  " created successfully on the desktop.`);
} else {
 console.log(`Folder "${folderName} " already exists on the desktop.`);
}
