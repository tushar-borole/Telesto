const cacheManager = require('cache-manager');
const redisStore = require('cache-manager-redis-store');
const fetch = require('node-fetch')


module.exports = function (setting) {
    const redisCache = cacheManager.caching({
        store: redisStore,
        host: 'localhost', // default value
        port: 6379, // default value
        db: 0,
        ttl: 600
    });

// listen for redis connection error event
    const redisClient = redisCache.store.getClient();



    redisCache.set('foo', 'bar', (err) => {
        if (err) {
            throw err;
        }
    });

    redisClient.on('error', (error) => {
        // handle error here
        console.log(error);
    });
}

