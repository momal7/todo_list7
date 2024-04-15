#! /usr/bin/env node
// creating a cli from "inquirer"
import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition) {
    let input = await inquirer.prompt([
        {
            name: "task",
            message: "TO DO LIST",
            type: "input",
        },
        {
            name: "task",
            message: "DO YOU WANT YO ADD MORE",
            type: "list",
            choices: ["yes", "NO"]
        }
    ]);
    todo.push(input.task);
    condition = input.task;
}
console.log(todo);
