const fetch = require("node-fetch");
const redisCache = require("./redis");

module.exports = async function(setting) {
  const url = setting.map(value => value.url);

  for (const val of url) {
    let response = await fetch(val);
    const htmlResponse = await response.text();
    redisCache.set(val, htmlResponse);
  }
};
