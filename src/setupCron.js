const CronJob = require("cron").CronJob;
const monitorChanges = require("./monitorChanges");
const { setting } = require("./setting");

module.exports = function() {
  // crete the cron job
  for (let val of setting) {
    new CronJob(
      val.cron,
      function() {
        monitorChanges(this.url);
      },
      null,
      true,
      null,
      val
    );
  }
};
