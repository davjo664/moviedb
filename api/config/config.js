const config = {
    api: {
      devEnabled: true,
  
      dev: {
        protocol: 'http',
        host: 'localhost',
        port: 3001,
        path: 'api',
      },
      live: {
        protocol: 'http',
        host: '192.168.99.100',
        port: 8084,
        path: 'api',
      },
  
      get url() {
        const target = this.devEnabled ? this.dev : this.live;
        return target.protocol + '://' + target.host + ':' + target.port + '/' + target.path;
      }
    },
    app: {
      devEnabled: true,

      dev: {
        protocol: 'http',
        host: 'localhost',
        port: 3000,
      },
      live: {
        protocol: 'http',
        host: '192.168.99.100',
        port: 8083,
      },
  
      get url() {
        const target = this.devEnabled ? this.dev : this.live;
        return target.protocol + '://' + target.host + ':' + target.port;
      }

    },
    db: {
      devEnabled: true,

      dev: {
        protocol: 'http',
        host: 'localhost',
        port: 27017,
      },
      live: {
        protocol: 'http',
        host: '192.168.99.100',
        port: 27017,
      },
      get url() {
        const target = this.devEnabled ? this.dev : this.live;
        return target.protocol + '://' + target.host + ':' + target.port;
      }

    }
  };
  
  export default config;