const fs = require("fs"),
  HtmlDiffer = require("html-differ").HtmlDiffer,
  logger = require("html-differ/lib/logger"),
  YAML = require("yamljs"),
  CronJob = require("cron").CronJob,
  setupCache = require("./src/cacheSetup");

const ymlToObject = YAML.load("setting.yml");

//setup intial cache
setupCache(ymlToObject.setting);
const redisCache = require("./src/redis");

const html1 = fs.readFileSync("1.html", "utf-8"),
  html2 = fs.readFileSync("2.html", "utf-8");

const options = {
  ignoreAttributes: [],
  compareAttributesAsJSON: [],
  ignoreWhitespaces: true,
  ignoreComments: true,
  ignoreEndTags: false,
  ignoreDuplicateAttributes: false
};

// crete the cron job
for (let val of ymlToObject.setting) {
  new CronJob(
    val.cron,
    function() {
      console.log(this);
      redisCache.get(this.url);
    },
    null,
    true,
    null,
    val
  );
}
//
// const htmlDiffer = new HtmlDiffer(options);
//
// const diff = htmlDiffer.diffHtml(html1, html2),
//     isEqual = htmlDiffer.isEqual(html1, html2),
//     res = logger.getDiffText(diff, { charsAroundDiff: Number.POSITIVE_INFINITY });
//
// let writeStream = fs.createWriteStream('diff.html');
//
// // write some data with a base64 encoding
// writeStream.write(res);
//
// // the finish event is emitted when all data has been flushed from the stream
// writeStream.on('finish', () => {
//     console.log('wrote all data to file');
// });
