const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const rs = require('readline-sync');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const GoStumble = (auth) => new Promise((resolve, reject) => {

  fetch('http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/3', {
    method: 'GET',
    headers: {
      'authorization': auth
    }
  })
    .then(res => res.text())
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err);
    });

});

(async () => {
                 _                                                           
   ___   _ __   | |_    ___   _ __    __ _    __ _   _ __ ___     ___   _ __ 
  / _ \ | '_ \  | __|  / _ \ | '__|  / _` |  / _` | | '_ ` _ \   / _ \ | '__|
 |  __/ | | | | | |_  |  __/ | |    | (_| | | (_| | | | | | | | |  __/ | |   
  \___| |_| |_|  \__|  \___| |_|     \__, |  \__,_| |_| |_| |_|  \___| |_|   
                                     |___/                                   

  console.log(`Trophy And Crown Hack Safe! 
By : ${kapur.bold('Mueq5854')} - Credit : @dkmpostor, @Eskey & @EnterpriseGamer(I Just Recode!));

  const auth = rs.question('Masukin Kode Authentication Lu! : ');
  console.log('');

  while (true) {


    const result = await GoStumble(auth);
    if (!result) {

    } else if (result.includes('User')) {

      const data = JSON.parse(result);
      const username = data.User.Username;
      const country = data.User.Country;
      const trophy = data.User.SkillRating;
      const crown = data.User.Crowns;

console.log(kapur.bgBlack(`\r[ ${moment().format('HH:mm:ss')} ] ${kapur.white(`Nama : ${username}`)} | ${kapur.blue(`Piala : ${trophy}`)} | ${kapur.red(`Mahkota : ${crown}`)}`));
      await sleep(1700);

    } else if (result == 'BANNED') {
      console.log(kapur.bgRed(`Akun Lu Ke Banned`));
     break;
    }
  }


})();
