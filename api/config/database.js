import config from './config';

const dbConfig = {
    database: `mongodb://${config.db.url}/moviedb`,
    secret: 'topsecret'
}

export default dbConfig;