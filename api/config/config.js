const config = {
    api: {
      devEnabled: false,
  
      dev: {
        protocol: 'http',
        host: 'localhost',
        port: 3001,
        path: 'api',
      },
      live: {
        protocol: 'http',
        host: 'api',
        port: 8084,
        path: 'api',
      },
  
      get url() {
        const target = this.devEnabled ? this.dev : this.live;
        return target.protocol + '://' + target.host + ':' + target.port + '/' + target.path;
      }
    },
    app: {
      devEnabled: false,

      dev: {
        protocol: 'http',
        host: 'localhost',
        port: 3000,
      },
      live: {
        protocol: 'http',
        host: 'app',
        port: 8083,
      },
  
      get url() {
        const target = this.devEnabled ? this.dev : this.live;
        return target.protocol + '://' + target.host + ':' + target.port;
      }

    },
    db: {
      devEnabled: false,

      dev: {
        protocol: 'mongodb',
        host: 'localhost',
        port: 27017,
        name: 'moviedb'
      },
      live: {
        protocol: 'mongodb',
        host: 'mongodb',
        port: 27017,
        name: 'moviedb'
      },
      get url() {
        const target = this.devEnabled ? this.dev : this.live;
        return target.protocol + '://' + target.host + ':' + target.port + '/' + target.name;
      }

    }
  };
  
  export default config;