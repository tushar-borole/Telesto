const CronJob = require("cron").CronJob;
const monitorChanges = require("./monitorChanges");
const { setting } = require("./setting");

module.exports = function() {
  // crete the cron job
  for (let val of setting) {
    new CronJob(
      val.cron,
      function() {
        console.log(`cron job at ${new Date()}`);
        monitorChanges(this.url);
      },
      null,
      true,
      null,
      val
    );
  }
};
