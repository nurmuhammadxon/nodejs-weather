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

const printWeather = (response, icon) => {
  console.log(dedent`
    ${chalk.yellow('WEATHER')} City weather ${response.name}
    ${icon} ${response.weather[0].description}
    Temprature: ${response.main.temp} (feels like ${response.main.feels_like})
    Humidity: ${response.main.humidity}%
    Wind speed: ${response.wind.speed}
    `);
}

export { printError, printSuccess, printHelp, printWeather }