import inquirer from "inquirer";
let todoList = [];
let condition = true;
while (condition) {
    let addingTask = await inquirer.prompt([
        {
            type: "input",
            name: "todo",
            message: "What do you want to add in your todo list? :",
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Do you want to add more?",
            default: "true",
        },
    ]);
    todoList.push(addingTask.todo);
    console.log(todoList);
    condition = addingTask.addMore;
}
