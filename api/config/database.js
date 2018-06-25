import config from './config';

const dbConfig = {
    database: config.db.url,
    secret: 'topsecret'
}

export default dbConfig;