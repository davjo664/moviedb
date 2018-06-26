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
        host: 'api',
        port: 8084,
        path: 'api',
      },
  
      get url() {
        const target = this.devEnabled ? this.dev : this.live;
        return target.protocol + '://' + target.host + ':' + target.port + '/' + target.path;
      }
    },
  };
  
  export default config;