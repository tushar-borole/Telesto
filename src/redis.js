const cacheManager = require("cache-manager");
const redisStore = require("cache-manager-redis-store");

const redisCache = cacheManager.caching({
  store: redisStore,
  host: "redis://redis", // default value
  port: 6379, // default value
  db: 0,
  ttl: 600
});

// listen for redis connection error event
const redisClient = redisCache.store.getClient();

redisClient.on("error", error => {
  // handle error here
  console.log(error);
});

module.exports = redisCache;
