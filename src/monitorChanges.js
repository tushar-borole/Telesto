const redisCache = require("./redis");
const fetch = require("node-fetch");
const HtmlDiffer = require("html-differ").HtmlDiffer;

const options = {
  ignoreAttributes: [],
  compareAttributesAsJSON: [],
  ignoreWhitespaces: true,
  ignoreComments: true,
  ignoreEndTags: false,
  ignoreDuplicateAttributes: false
};

const htmlDiffer = new HtmlDiffer(options);

module.exports = function(url) {
  redisCache.get(url, async (err, result) => {
    let response = await fetch(url);
    const htmlResponse = await response.text();

    const isEqual = htmlDiffer.isEqual(result, htmlResponse);

    if (!isEqual) {
      redisCache.set(url, htmlResponse);
    }
    console.log(isEqual);
  });
};
