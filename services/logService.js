import chalk from "chalk";
import dedent from 'dedent-js';

const printError = err => {
  console.log(chalk.red('Error') + ' ' + err);
}

const printSuccess = message => {
  console.log(chalk.green('Success') + ' ' + message);
}

const printHelp = () => {
  console.log(dedent`
    ${chalk.cyan('HELP')}
    -s [City] for install city
    -h for help
    -t [API_KEY] for saving token
    `);

}

export { printError, printSuccess, printHelp }