module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4fc31d1f7dc9feaa5ba1e12d07852e24'),
  },
});
