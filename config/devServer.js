export default {
  host: 'localhost',
  port: 9008,
  proxy: {
    '/api': {
      development: 'https://dev.com/',
      test: 'https://test.com/',
      pre: 'https://pre.com/',
      production: 'https://prod.com/',
      // rewrite: path => path.replace(/^\/api/, ''),
    },
  },
};
