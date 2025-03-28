require('dotenv').config(); 

module.exports = {
  port: process.env.PORT || 5000,
  dbConfig: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  }
};
