declare global {
    namespace NodeJS {
      interface ProcessEnv {
        API_ENDPOINT: string;
        BASE_URL: string;
        NODE_ENV: 'development' | 'production';
        PORT?: string;
        PWD: string;
      }
    }
  }
  export {}