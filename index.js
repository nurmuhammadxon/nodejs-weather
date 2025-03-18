import getArgs from "./helpers/args.js";
import { getWeather } from "./services/apiService.js";
import { printError, printSuccess, printHelp } from "./services/logService.js";
import { saveKeyValeu, TOKEN_DISTIONARY } from "./services/storageServices.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("Token doesn't exist");
    return;
  }
  try {
    await saveKeyValeu(TOKEN_DISTIONARY.token, token);
    printSuccess('Token was saved');
  }
  catch (error) {
    printError(error.message);
  }
};

async function startCLI() {
  const args = getArgs(process.argv);

  if (args.h) {
    printHelp();
    return;
  }
  if (args.t) {
    await saveToken(args.t);
    return;
  }

  try {
    const weather = await getWeather(args.s || 'Samarqand');
    console.log(weather); 
  } catch (error) {
    printError(error.message);
  }
}

startCLI();
