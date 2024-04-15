import inquirer from "inquirer";
import fs from 'fs';

let input = await inquirer.prompt([
    {
        name:"str",
        message:"Enter the folder name...",
        type:"input"
    },

{
    name:"num",
    message:"Mention the quantity...",
    type:"number"
}
]);

const folderName = input.str;

for(let i = 1; i <= input.num ; i++){
if (!fs.existsSync(`${folderName} ${i}`)) {
 fs.mkdirSync(`${folderName} ${i}`);
 console.log(`Folder "${folderName} ${i}" created successfully.`);
} else if(fs.existsSync(folderName)) {
 console.log(`Folder "${folderName} ${i}" already exists.`);
}}