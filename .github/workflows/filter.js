const fs = require('fs');

const data = JSON.parse(fs.readFileSync('apps.json','utf8'));
const apps = data.applist.apps;

const games = [];

for(let i = 0; i < 200; i++){
  const app = apps[i];

  if(!app || !app.name) continue;

  games.push({
    name: app.name,
    appid: app.appid
  });
}

fs.writeFileSync('games.json', JSON.stringify(games, null, 2));
console.log('Updated games.json');
