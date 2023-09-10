const routes = Object.freeze({
  base: process.env.PROD_BASE_URL
    ? process.env.PROD_BASE_URL
    : 'http://localhost:3000',
  endpoints: {
    public: '/public',
    publicOnly: '/public-only',
    internalOnly: '/internal-only',
  },
});

export default routes;
