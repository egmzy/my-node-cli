import chalk from "chalk";
import figlet from "figlet";
import inquirer from "inquirer";
import ora from "ora";

export const runFigletExample = () => {
  console.log(
    chalk.yellow(figlet.textSync("My Node CLI", { horizontalLayout: "full" }))
  );

  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Choose an option:",
        choices: ["Option 1", "Option 2", "Option 3"],
      },
    ])
    .then((result) => {
      const spinner = ora(`Doing ${result.choice}...`).start(); // Start the spinner

      setTimeout(() => {
        spinner.succeed(chalk.green("Done!"));
      }, 3000);
    });
};
