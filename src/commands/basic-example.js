import { program } from "commander";

export const runBasicExample = (options) => {
  program
    .version("1.0.0")
    .description("Basic Example")
    .option("-n, --name <type>", "Add your name")
    .action((options) => {
      console.log(`Hey!`);
    });

  program.parse(process.argv);
};
