module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2ec63a5b04a56cd62e2a91acb79b1ca9'),
  },
});
