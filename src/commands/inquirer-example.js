import chalk from "chalk";
import inquirer from "inquirer";

export const runInquirerExample = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What's your name?",
      },
    ])
    .then((answers) => {
      console.log(chalk.green(`Hey there, ${answers.name}!`));
    });
};
