// inquirer-confirm-example.js
import chalk from "chalk";
import inquirer from "inquirer";

export const runInquirerConfirmExample = () => {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "confirm",
        message: "Do you want to proceed?",
      },
    ])
    .then((answers) => {
      if (answers.confirm) {
        console.log(chalk.green("Let's move forward!"));
      } else {
        console.log(chalk.red("Operation cancelled."));
      }
    });
};
