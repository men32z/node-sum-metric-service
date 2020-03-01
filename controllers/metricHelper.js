const fs = require('fs');
const ROUTE_FILE = './files/metrics.json';

function getDate(){
  const date = new Date();
  return parseInt(date.getTime() / 1000);
}

function save(content){
  fs.writeFileSync(ROUTE_FILE, JSON.stringify(content), 'utf8', (err) => {
      if (!err) console.log("JSON file has been saved.");
  });
}

module.exports = {
  get: () => {
    const content = JSON.parse(fs.readFileSync(ROUTE_FILE, 'utf8'));
    return content;
  },
  save: (content) => {
    save(content);
  },
  filterAndSave: (content) => {
    let oneHourAgo = getDate() - (60 * 60);
    content = content.filter(x => x.time >= oneHourAgo);
    save(content);
    return content;
  },
  getDate: () => {
    return getDate();
  },
};