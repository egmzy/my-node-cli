import chalk from "chalk";
import inquirer from "inquirer";

export const runInquirerListExample = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Choose an option:",
        choices: ["Option 1", "Option 2", "Option 3"],
      },
    ])
    .then((answers) => {
      console.log(chalk.green(`You chose: ${answers.choice}`));
    });
};
