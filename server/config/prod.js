module.exports = {
  DB_URI: 'mongodb://127.0.0.1:27017/bookingApp',
  SECRET: 'MyApplication',
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  STRIPE_SK: process.env.STRIPE_SK
};
