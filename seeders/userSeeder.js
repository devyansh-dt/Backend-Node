require("dotenv").config();
const { faker } = require("@faker-js/faker");
const mysql = require("mysql");
const config = require("../config")
const pool = mysql.createPool(config.dbConfig);

const seedUsers = () => {
  const users = [];
  for (let i = 0; i < 10; i++) {
    users.push([
      faker.name.fullName(),
      faker.internet.userName(),
      faker.phone.number(),
      faker.internet.email(),
      faker.internet.url(),
      faker.company.name(),
    ]);
  }

  pool.query(
    "INSERT INTO user (name, username, phone, email, website, companyname) VALUES ?",
    [users],
    (err) => {
      if (err) throw err;
      console.log("Users seeded successfully!");
      process.exit();
    }
  );
};

seedUsers();
