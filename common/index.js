const NodeCache = require( "node-cache" );
const myCache = new NodeCache();
const tokenCacheKey = 'userToken';
const isCache = () => {

    const value = myCache.get(tokenCacheKey);

    console.log(value);
    return !!value;
}

const setCache = (val) => {

    const success = myCache.set(tokenCacheKey, val);

    console.log(success);
}

module.exports = {
    isCache,
    setCache
}