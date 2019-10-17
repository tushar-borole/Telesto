const fetch = require("node-fetch");
const redisCache = require("./redis");
const setting = require("./setting");

module.exports = async function() {
  const url = setting.setting.map(value => value.url);

  for (const val of url) {
    let response = await fetch(val);
    const htmlResponse = await response.text();
    redisCache.set(val, htmlResponse);
  }
};
