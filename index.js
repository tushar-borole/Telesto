const setupCache = require("./src/cacheSetup"),
  setupCron = require("./src/setupCron");

//setup intial cache
setupCache();
setupCron();

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
