#!/usr/bin/env node

import inquirer from "inquirer";
import { runBasicExample } from "../src/commands/basic-example.js";
import { runChalkExample } from "../src/commands/chalk-example.js";
import { runFigletExample } from "../src/commands/figlet-example.js";
import { runInquirerExample } from "../src/commands/inquirer-example.js";
import { runInquirerConfirmExample } from "../src/commands/inquirer-confirm-example.js";
import { runInquirerListExample } from "../src/commands/inquirer-list-example.js";
import { runOraExample } from "../src/commands/ora-example.js";

const examples = {
  "Basic Example": runBasicExample,
  "Chalk Example": runChalkExample,
  "Figlet Example": runFigletExample,
  "Inquirer Example": runInquirerExample,
  "Inquirer Confirm Example": runInquirerConfirmExample,
  "Inquirer List Example": runInquirerListExample,
  "Ora Example": runOraExample,
};

inquirer
  .prompt([
    {
      type: "list",
      name: "selectedExample",
      message: "Choose an example to run:",
      choices: Object.keys(examples),
    },
  ])
  .then((answers) => {
    const exampleFunction = examples[answers.selectedExample];
    if (exampleFunction) {
      exampleFunction();
    } else {
      console.error("Invalid selection");
    }
  });
