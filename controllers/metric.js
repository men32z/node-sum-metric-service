const helper = require('./metricHelper.js');

exports.store = (req,res) => {
  try {
    const obj = req.body;
    const key = req.params.key;
    const date = helper.getDate();

    if(!obj && !obj.value || isNaN(obj.value)) throw {message: 'Invalid format'};
    let content = helper.get();
    content.unshift({key, value: obj.value, time: date})
    helper.filterAndSave(content)
    res.json({});
  } catch (e) {
    res.status(400).send(e.message);
  }
}

exports.show = (req,res) => {
  try {
    const key = req.params.key;
    let content = helper.get();
    content = helper.filterAndSave(content);
    content = content.filter(x => x.key === key)
    let sum = content.reduce((s, x)=> s + parseInt(x.value), 0);
    res.json(Math.round(sum));
  } catch (e) {
    res.status(400).send(e.message);
  }
}